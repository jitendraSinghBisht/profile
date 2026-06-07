import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import type { Mood } from '../App';

export default function Gateway({ onPick }: { onPick: (mood: Mood) => void }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#05060f] text-white">
      {/* animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="animate-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 py-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-center font-[var(--font-display)] text-4xl font-bold leading-tight sm:text-6xl"
        >
          How do you want to{' '}
          <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
            experience
          </span>{' '}
          this?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-md text-center text-sm text-slate-400 sm:text-base"
        >
          Same engineer, two vibes. Pick the journey that fits why you're here.
        </motion.p>

        <div className="mt-12 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
          <ChoiceCard
            onClick={() => onPick('serious')}
            delay={0.34}
            emoji="🎯"
            title="I'm here for business"
            subtitle="Professional"
            blurb="Recruiters, leads, the serious stuff. Metrics, architecture, impact."
            gradient="from-sky-500/20 to-indigo-500/10"
            ring="hover:border-sky-400/70 hover:shadow-sky-500/20"
            cta="text-sky-300"
          />
          <ChoiceCard
            onClick={() => onPick('fun')}
            delay={0.44}
            emoji="🎨"
            title="Show me the fun side"
            subtitle="Creative"
            blurb="Playful projects, the origin story, and the human behind the commits."
            gradient="from-fuchsia-500/20 to-amber-400/10"
            ring="hover:border-fuchsia-400/70 hover:shadow-fuchsia-500/20"
            cta="text-fuchsia-300"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-xs text-slate-500"
        >
          Don't worry — you can switch vibes anytime.
        </motion.p>
      </div>
    </div>
  );
}

function ChoiceCard({
  onClick,
  delay,
  emoji,
  title,
  subtitle,
  blurb,
  gradient,
  ring,
  cta,
}: {
  onClick: () => void;
  delay: number;
  emoji: string;
  title: string;
  subtitle: string;
  blurb: string;
  gradient: string;
  ring: string;
  cta: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} p-7 text-left backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl ${ring}`}
    >
      <div className="text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
        {emoji}
      </div>
      <p className={`mt-4 font-mono text-xs uppercase tracking-widest ${cta}`}>{subtitle}</p>
      <h2 className="mt-1 text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-slate-300/90">{blurb}</p>
      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${cta}`}>
        Enter
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </motion.button>
  );
}
