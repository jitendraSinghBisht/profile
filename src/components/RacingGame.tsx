import { useEffect, useRef, useState } from 'react';

// ── Lane-dodging racer. Player car dodges cars / buses / trucks / autos. ──
const W = 300;
const H = 460;
const LANES = 3;
const LANE_W = W / LANES;
const MAX_SPEED = 8.5;
const HS_KEY = 'jsb-racer-highscore';

type Status = 'idle' | 'playing' | 'over';
type VType = 'car' | 'bus' | 'truck' | 'auto';
type Obstacle = { lane: number; y: number; color: string; type: VType; h: number; w: number };

// vehicle footprints (top-down: h is length down the road)
const VEHICLE: Record<VType, { w: number; h: number }> = {
  car: { w: LANE_W * 0.5, h: LANE_W * 0.5 * 1.55 },
  auto: { w: LANE_W * 0.42, h: LANE_W * 0.42 * 1.35 },
  truck: { w: LANE_W * 0.56, h: LANE_W * 0.56 * 2.3 },
  bus: { w: LANE_W * 0.56, h: LANE_W * 0.56 * 2.6 },
};
const PLAYER = { w: LANE_W * 0.5, h: LANE_W * 0.5 * 1.6 };
const CAR_COLORS = ['#f43f5e', '#a855f7', '#22c55e', '#ec4899', '#0ea5e9'];

function laneCenter(lane: number) {
  return lane * LANE_W + LANE_W / 2;
}

function pickType(): VType {
  const r = Math.random();
  if (r < 0.52) return 'car';
  if (r < 0.72) return 'auto';
  if (r < 0.88) return 'truck';
  return 'bus';
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

// lighten/darken a #rrggbb hex by amt (−255..255)
function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, ((n >> 16) & 255) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
  const b = Math.max(0, Math.min(255, (n & 255) + amt));
  return `rgb(${r},${g},${b})`;
}

// glossy left→center→right gradient for a paint job
function gloss(ctx: CanvasRenderingContext2D, x: number, w: number, color: string) {
  const grad = ctx.createLinearGradient(x, 0, x + w, 0);
  grad.addColorStop(0, shade(color, -42));
  grad.addColorStop(0.45, shade(color, 26));
  grad.addColorStop(1, shade(color, -42));
  return grad;
}

function corner(ctx: CanvasRenderingContext2D, wx: number, wy: number, ww: number, wh: number) {
  roundRect(ctx, wx, wy, ww, wh, 2);
  ctx.fill();
}

function sideWheels(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, pairs: number) {
  ctx.fillStyle = '#0b1020';
  const ww = 5;
  const wh = h * 0.15;
  for (let i = 0; i < pairs; i++) {
    const wy = y + h * (0.14 + (0.72 * i) / Math.max(1, pairs - 1)) - wh / 2;
    corner(ctx, x - 3, wy, ww, wh);
    corner(ctx, x + w - 2, wy, ww, wh);
  }
}

// Lamborghini-style wedge for the player (and as a fast obstacle).
function drawSports(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, color: string, player = false) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  // spoiler
  ctx.fillStyle = shade(color, -75);
  roundRect(ctx, cx - w * 0.54, y + h * 0.9, w * 1.08, h * 0.06, 3);
  ctx.fill();
  // wheels
  ctx.fillStyle = '#0b1020';
  corner(ctx, x - 2, y + h * 0.16, 6, h * 0.14);
  corner(ctx, x + w - 4, y + h * 0.16, 6, h * 0.14);
  corner(ctx, x - 2, y + h * 0.72, 6, h * 0.14);
  corner(ctx, x + w - 4, y + h * 0.72, 6, h * 0.14);
  // wedge body
  ctx.fillStyle = gloss(ctx, x, w, color);
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.27, y + h * 0.1);
  ctx.quadraticCurveTo(cx, y - h * 0.02, cx + w * 0.27, y + h * 0.1);
  ctx.quadraticCurveTo(cx + w * 0.5, y + h * 0.28, cx + w * 0.46, y + h * 0.62);
  ctx.quadraticCurveTo(cx + w * 0.44, y + h * 0.97, cx + w * 0.25, y + h * 0.98);
  ctx.lineTo(cx - w * 0.25, y + h * 0.98);
  ctx.quadraticCurveTo(cx - w * 0.44, y + h * 0.97, cx - w * 0.46, y + h * 0.62);
  ctx.quadraticCurveTo(cx - w * 0.5, y + h * 0.28, cx - w * 0.27, y + h * 0.1);
  ctx.closePath();
  ctx.fill();
  // side mirrors
  ctx.fillStyle = shade(color, -30);
  corner(ctx, cx - w * 0.58, y + h * 0.3, w * 0.12, h * 0.05);
  corner(ctx, cx + w * 0.46, y + h * 0.3, w * 0.12, h * 0.05);
  // black canopy (windshield → roof)
  ctx.fillStyle = '#0b1020';
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.18, y + h * 0.27);
  ctx.quadraticCurveTo(cx, y + h * 0.2, cx + w * 0.18, y + h * 0.27);
  ctx.lineTo(cx + w * 0.14, y + h * 0.54);
  ctx.lineTo(cx - w * 0.14, y + h * 0.54);
  ctx.closePath();
  ctx.fill();
  // rear engine vents
  ctx.strokeStyle = 'rgba(11,16,32,0.85)';
  ctx.lineWidth = 1.8;
  for (let i = 0; i < 3; i++) {
    const vy = y + h * (0.64 + i * 0.07);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.16, vy);
    ctx.lineTo(cx + w * 0.16, vy);
    ctx.stroke();
  }
  // headlights
  ctx.fillStyle = player ? '#fde68a' : 'rgba(255,255,255,0.78)';
  corner(ctx, cx - w * 0.22, y + h * 0.07, w * 0.12, 4);
  corner(ctx, cx + w * 0.1, y + h * 0.07, w * 0.12, 4);
}

function drawSedan(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, color: string) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  // wheels
  ctx.fillStyle = '#0b1020';
  corner(ctx, x - 2, y + h * 0.16, 6, h * 0.16);
  corner(ctx, x + w - 4, y + h * 0.16, 6, h * 0.16);
  corner(ctx, x - 2, y + h * 0.66, 6, h * 0.16);
  corner(ctx, x + w - 4, y + h * 0.66, 6, h * 0.16);
  // body + roof
  ctx.fillStyle = gloss(ctx, x, w, color);
  roundRect(ctx, x, y, w, h, 9);
  ctx.fill();
  ctx.fillStyle = shade(color, -24);
  roundRect(ctx, x + w * 0.13, y + h * 0.3, w * 0.74, h * 0.4, 6);
  ctx.fill();
  // windows
  ctx.fillStyle = 'rgba(11,16,32,0.82)';
  roundRect(ctx, x + w * 0.17, y + h * 0.16, w * 0.66, h * 0.15, 3);
  ctx.fill();
  roundRect(ctx, x + w * 0.17, y + h * 0.69, w * 0.66, h * 0.13, 3);
  ctx.fill();
  // mirrors
  ctx.fillStyle = shade(color, -30);
  corner(ctx, x - w * 0.05, y + h * 0.3, w * 0.1, h * 0.05);
  corner(ctx, x + w - w * 0.05, y + h * 0.3, w * 0.1, h * 0.05);
  // lights
  ctx.fillStyle = '#fde68a';
  corner(ctx, x + w * 0.16, y + 3, w * 0.18, 4);
  corner(ctx, x + w * 0.66, y + 3, w * 0.18, 4);
  ctx.fillStyle = '#ef4444';
  corner(ctx, x + w * 0.16, y + h - 7, w * 0.18, 4);
  corner(ctx, x + w * 0.66, y + h - 7, w * 0.18, 4);
}

function drawAuto(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  // 3 wheels (1 front, 2 rear)
  ctx.fillStyle = '#0b1020';
  corner(ctx, x - 2, y + h * 0.58, 5, h * 0.2);
  corner(ctx, x + w - 3, y + h * 0.58, 5, h * 0.2);
  corner(ctx, cx - 2.5, y + 2, 5, h * 0.15);
  // yellow body, rounded nose
  ctx.fillStyle = gloss(ctx, x, w, '#facc15');
  ctx.beginPath();
  ctx.moveTo(cx, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + h * 0.42);
  ctx.lineTo(x + w, y + h * 0.95);
  ctx.quadraticCurveTo(x + w, y + h, x + w - 4, y + h);
  ctx.lineTo(x + 4, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h * 0.95);
  ctx.lineTo(x, y + h * 0.42);
  ctx.quadraticCurveTo(x, y, cx, y);
  ctx.closePath();
  ctx.fill();
  // dark canopy (distinct from the road colour)
  ctx.fillStyle = '#0b1020';
  roundRect(ctx, x + w * 0.16, y + h * 0.4, w * 0.68, h * 0.5, 5);
  ctx.fill();
  // driver bar + headlight
  ctx.fillStyle = shade('#facc15', -40);
  roundRect(ctx, x + w * 0.24, y + h * 0.5, w * 0.52, h * 0.07, 2);
  ctx.fill();
  ctx.fillStyle = '#fde68a';
  corner(ctx, cx - w * 0.08, y + h * 0.05, w * 0.16, 4);
}

function drawBus(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, color: string) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  sideWheels(ctx, x, y, w, h, 2);
  ctx.fillStyle = gloss(ctx, x, w, color);
  roundRect(ctx, x, y, w, h, 8);
  ctx.fill();
  // front windshield
  ctx.fillStyle = 'rgba(11,16,32,0.82)';
  roundRect(ctx, x + w * 0.13, y + h * 0.04, w * 0.74, h * 0.07, 3);
  ctx.fill();
  // roof strip
  ctx.fillStyle = shade(color, -18);
  roundRect(ctx, x + w * 0.34, y + h * 0.16, w * 0.32, h * 0.7, 4);
  ctx.fill();
  // side windows
  ctx.fillStyle = 'rgba(11,16,32,0.75)';
  for (let i = 0; i < 5; i++) {
    const wy = y + h * (0.18 + i * 0.145);
    roundRect(ctx, x + w * 0.08, wy, w * 0.18, h * 0.09, 2);
    ctx.fill();
    roundRect(ctx, x + w * 0.74, wy, w * 0.18, h * 0.09, 2);
    ctx.fill();
  }
  // headlights
  ctx.fillStyle = '#fde68a';
  corner(ctx, x + w * 0.12, y + 2, w * 0.14, 4);
  corner(ctx, x + w * 0.74, y + 2, w * 0.14, 4);
}

// Pickup with an open, ribbed cargo bed (inspired by the red reference).
function drawTruck(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, color: string) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  sideWheels(ctx, x, y, w, h, 3);
  // full body (bed walls are body-colored)
  ctx.fillStyle = gloss(ctx, x, w, color);
  roundRect(ctx, x, y, w, h, 7);
  ctx.fill();
  // cab roof + windows (front ~38%)
  ctx.fillStyle = shade(color, -18);
  roundRect(ctx, x + w * 0.08, y + h * 0.04, w * 0.84, h * 0.3, 5);
  ctx.fill();
  ctx.fillStyle = 'rgba(11,16,32,0.82)';
  roundRect(ctx, x + w * 0.16, y + h * 0.07, w * 0.68, h * 0.12, 3);
  ctx.fill();
  roundRect(ctx, x + w * 0.16, y + h * 0.22, w * 0.68, h * 0.08, 3);
  ctx.fill();
  // open ribbed cargo bed (rear)
  const bx = x + w * 0.1;
  const by = y + h * 0.4;
  const bw = w * 0.8;
  const bh = h * 0.54;
  ctx.fillStyle = '#5b3b1f';
  roundRect(ctx, bx, by, bw, bh, 4);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  ctx.lineWidth = 1.5;
  for (let i = 1; i < 6; i++) {
    const ry = by + (bh * i) / 6;
    ctx.beginPath();
    ctx.moveTo(bx + 2, ry);
    ctx.lineTo(bx + bw - 2, ry);
    ctx.stroke();
  }
  // mirrors + headlights
  ctx.fillStyle = shade(color, -30);
  corner(ctx, x - w * 0.05, y + h * 0.12, w * 0.1, h * 0.05);
  corner(ctx, x + w - w * 0.05, y + h * 0.12, w * 0.1, h * 0.05);
  ctx.fillStyle = '#fde68a';
  corner(ctx, x + w * 0.12, y + 2, w * 0.16, 4);
  corner(ctx, x + w * 0.72, y + 2, w * 0.16, 4);
}

function drawVehicle(ctx: CanvasRenderingContext2D, type: VType, cx: number, cy: number, w: number, h: number, color: string) {
  if (type === 'bus') drawBus(ctx, cx, cy, w, h, color);
  else if (type === 'truck') drawTruck(ctx, cx, cy, w, h, color);
  else if (type === 'auto') drawAuto(ctx, cx, cy, w, h);
  else drawSedan(ctx, cx, cy, w, h, color);
}

export default function RacingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const game = useRef({
    lane: 1,
    x: laneCenter(1),
    obstacles: [] as Obstacle[],
    speed: 3,
    dist: 0,
    lineOffset: 0,
    sinceSpawn: 999,
    lastLane: 1,
    lastHeight: PLAYER.h,
    status: 'idle' as Status,
    raf: 0,
  });

  useEffect(() => {
    setHighScore(Number(localStorage.getItem(HS_KEY) || 0));
  }, []);

  const move = (dir: -1 | 1) => {
    const g = game.current;
    if (g.status !== 'playing') return;
    g.lane = Math.max(0, Math.min(LANES - 1, g.lane + dir));
  };

  const start = () => {
    const g = game.current;
    g.lane = 1;
    g.x = laneCenter(1);
    g.obstacles = [];
    g.speed = 3;
    g.dist = 0;
    g.sinceSpawn = 999;
    g.lastLane = 1;
    g.lastHeight = PLAYER.h;
    g.status = 'playing';
    setScore(0);
    setStatus('playing');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const g = game.current;

    const onKey = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd', 'A', 'D', ' '].includes(e.key)) e.preventDefault();
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') move(-1);
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') move(1);
      if (e.key === ' ' && g.status !== 'playing') start();
    };
    window.addEventListener('keydown', onKey);

    const playerY = H - PLAYER.h / 2 - 16;

    const loop = () => {
      // road
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, W, H);

      // scrolling lane dividers
      if (g.status === 'playing') g.lineOffset = (g.lineOffset + g.speed) % 40;
      ctx.strokeStyle = 'rgba(248,250,252,0.55)';
      ctx.lineWidth = 4;
      ctx.setLineDash([20, 20]);
      for (let i = 1; i < LANES; i++) {
        ctx.beginPath();
        ctx.lineDashOffset = -g.lineOffset;
        ctx.moveTo(i * LANE_W, 0);
        ctx.lineTo(i * LANE_W, H);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      if (g.status === 'playing') {
        g.x += (laneCenter(g.lane) - g.x) * 0.25;
        g.dist += g.speed * 0.03;
        g.speed = Math.min(MAX_SPEED, 2.8 + g.dist * 0.016);

        // distance-based spawning; gap scales with the PREVIOUS vehicle's length so
        // even buses/trucks leave a reachable, dodgeable lane.
        g.sinceSpawn += g.speed;
        const gap = g.lastHeight + PLAYER.h * 1.45 + g.speed * 10;
        if (g.sinceSpawn >= gap) {
          g.sinceSpawn = 0;
          let lane = Math.floor(Math.random() * LANES);
          if (lane === g.lastLane) lane = (lane + 1 + Math.floor(Math.random() * (LANES - 1))) % LANES;
          g.lastLane = lane;
          const type = pickType();
          const { w, h } = VEHICLE[type];
          g.lastHeight = h;
          g.obstacles.push({
            lane,
            y: -h / 2,
            color: CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)],
            type,
            w,
            h,
          });
        }

        for (const o of g.obstacles) {
          o.y += g.speed;
          const sameLane = o.lane === g.lane;
          const dy = Math.abs(o.y - playerY);
          if (sameLane && dy < (o.h + PLAYER.h) / 2 - 6) {
            g.status = 'over';
            const finalScore = Math.floor(g.dist);
            setScore(finalScore);
            setStatus('over');
            setHighScore((hs) => {
              const next = Math.max(hs, finalScore);
              localStorage.setItem(HS_KEY, String(next));
              return next;
            });
          }
        }
        g.obstacles = g.obstacles.filter((o) => o.y < H + o.h);
        setScore(Math.floor(g.dist));
      }

      for (const o of g.obstacles) drawVehicle(ctx, o.type, laneCenter(o.lane), o.y, o.w, o.h, o.color);
      drawSports(ctx, g.x, playerY, PLAYER.w, PLAYER.h, '#22d3ee', true);

      g.raf = requestAnimationFrame(loop);
    };
    g.raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', onKey);
      cancelAnimationFrame(g.raf);
    };
  }, []);

  const onTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    if (game.current.status !== 'playing') {
      start();
      return;
    }
    move(x < rect.width / 2 ? -1 : 1);
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center">
      <div className="mb-3 flex w-full items-center justify-between font-[var(--font-display)] text-slate-900">
        <span className="rounded-full border-2 border-slate-900 bg-amber-200 px-3 py-1 text-sm font-bold">
          Score: {score}
        </span>
        <span className="rounded-full border-2 border-slate-900 bg-pink-200 px-3 py-1 text-sm font-bold">
          🏆 Best: {highScore}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0_0_#0f172a]">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onTouchStart={onTouch}
          className="block touch-none"
          style={{ width: W, maxWidth: '100%', height: 'auto' }}
        />

        {status !== 'playing' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 text-center text-white backdrop-blur-sm">
            <div className="text-5xl">{status === 'over' ? '💥' : '🏎️'}</div>
            <h3 className="mt-3 font-[var(--font-display)] text-2xl font-extrabold">
              {status === 'over' ? 'Crashed!' : 'Mini Racer'}
            </h3>
            {status === 'over' && <p className="mt-1 text-sm text-slate-300">You scored {score}</p>}
            <button
              onClick={start}
              className="mt-4 rounded-full bg-amber-300 px-6 py-2.5 text-sm font-bold text-slate-900 transition hover:scale-105"
            >
              {status === 'over' ? 'Race again' : 'Start racing'}
            </button>
            <p className="mt-3 px-6 text-xs text-slate-400">
              ← → or A/D to steer · tap sides on mobile · Space to start
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => move(-1)}
          aria-label="Steer left"
          className="hover-wiggle rounded-2xl border-2 border-slate-900 bg-white px-6 py-3 text-xl font-bold shadow-[3px_3px_0_0_#0f172a] active:translate-y-0.5"
        >
          ◀
        </button>
        <button
          onClick={() => move(1)}
          aria-label="Steer right"
          className="hover-wiggle rounded-2xl border-2 border-slate-900 bg-white px-6 py-3 text-xl font-bold shadow-[3px_3px_0_0_#0f172a] active:translate-y-0.5"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
