import { motion } from 'framer-motion';
import type { Mood } from '../App';

// Persistent control to flip between the two flows (or go back to the gateway).
export default function ToneSwitch({
  mood,
  onSwitch,
  onHome,
}: {
  mood: Mood;
  onSwitch: () => void;
  onHome: () => void;
}) {
  const isSerious = mood === 'serious';
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed right-4 top-4 z-50 flex items-center gap-2"
    >
      <button
        onClick={onHome}
        title="Back to start"
        className={`rounded-full border px-3 py-2 text-sm backdrop-blur-md transition ${
          isSerious
            ? 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
            : 'border-black/10 bg-white/70 text-slate-700 hover:bg-white'
        }`}
      >
        ⌂
      </button>
      <button
        onClick={onSwitch}
        className={`rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition ${
          isSerious
            ? 'border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/20'
            : 'border-sky-500/40 bg-sky-500/10 text-sky-700 hover:bg-sky-500/20'
        }`}
      >
        {isSerious ? '🎨 Switch to fun' : '🎯 Switch to pro'}
      </button>
    </motion.div>
  );
}
