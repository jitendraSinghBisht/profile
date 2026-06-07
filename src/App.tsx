import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Gateway from './components/Gateway';
import Serious from './experiences/Serious';
import Fun from './experiences/Fun';
import ToneSwitch from './components/ToneSwitch';

export type Mood = 'serious' | 'fun';

const STORAGE_KEY = 'jsb-mood';

export default function App() {
  const [mood, setMood] = useState<Mood | null>(null);

  // Remember the visitor's last choice for return visits.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'serious' || saved === 'fun') setMood(saved);
  }, []);

  const pick = (m: Mood) => {
    localStorage.setItem(STORAGE_KEY, m);
    setMood(m);
  };

  const toggle = () => pick(mood === 'serious' ? 'fun' : 'serious');

  const goHome = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMood(null);
  };

  return (
    <div className="h-full w-full">
      <AnimatePresence mode="wait">
        {mood === null ? (
          <motion.div
            key="gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Gateway onPick={pick} />
          </motion.div>
        ) : (
          <motion.div
            key={mood}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <ToneSwitch mood={mood} onSwitch={toggle} onHome={goHome} />
            {mood === 'serious' ? <Serious /> : <Fun />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
