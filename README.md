# Jitendra Singh Bisht — Interactive Portfolio

A mood-gated personal portfolio. Visitors land on a **Gateway** that asks how they
want to experience the site, then enter one of two parallel journeys:

- 🎯 **Professional** (`src/experiences/Serious.tsx`) — dark, metric-driven, recruiter-focused.
  Highlights backend/systems work, the WMS experience timeline, and serious projects
  (Coding Playground, Video Streaming Backend, etc.).
- 🎨 **Creative** (`src/experiences/Fun.tsx`) — bright, playful, bouncy. Highlights
  for-fun projects (Vivid Shades, JS experiments, the origin-story repos) and the
  human behind the commits.

A persistent **tone switch** (top-right) lets visitors flip flows or return to the
Gateway at any time. The last choice is remembered via `localStorage`.

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/profile.ts` | **Single source of truth** — bio, stats, experience, skills, and projects (tagged serious/fun). Edit here; both flows update. |
| `src/components/Gateway.tsx` | Mood-selection start page. |
| `src/components/ToneSwitch.tsx` | Persistent flow switcher / home button. |
| `src/components/shared.tsx` | Reusable `CountUp`, `Reveal` (scroll-reveal), and `TiltCard`. |
| `src/experiences/Serious.tsx` | Professional flow. |
| `src/experiences/Fun.tsx` | Creative flow. |
| `public/resume.pdf` | The downloadable résumé (wired to the "View résumé" buttons). |

## Tech

React 19 · TypeScript · Vite 7 · Tailwind CSS v4 · framer-motion · react-icons.

## Running

> ⚠️ **Vite 7 requires Node ≥ 20.19** (or 22.12+). On older Node the dev server fails with
> `crypto.hash is not a function`. Production build + preview work on Node 18.

```bash
npm install
npm run dev        # needs Node 20.19+
npm run build      # type-check + production build (works on Node 18)
npm run preview    # serve the built site locally
npm run lint
```

## Things to personalise

- **LinkedIn URL** — update `profile.links.linkedin` in `src/data/profile.ts` with your exact profile link (the current value is a best guess).
- Project blurbs in `profile.ts` are written from the repo names + résumé; tweak the `blurb` / `funBlurb` fields to taste.
