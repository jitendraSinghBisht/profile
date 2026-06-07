import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  profile,
  stats,
  funProjects,
  skills,
  experience,
  achievements,
} from '../data/profile';
import { CountUp, Reveal } from '../components/shared';

const marqueeWords = [
  'Go',
  'WebSockets',
  'Docker',
  'AWS',
  'caffeine',
  'Redis',
  'late-night commits',
  'event sourcing',
  'good vibes',
  'MongoDB',
  '60% cheaper bills',
];

export default function Fun() {
  return (
    <div className="h-full overflow-y-auto bg-[#fff8f0] text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden px-6 pt-28 pb-16 sm:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute left-6 top-10 h-72 w-72 rounded-full bg-pink-300/50 blur-3xl" />
          <div className="animate-blob absolute right-10 top-24 h-72 w-72 rounded-full bg-amber-300/50 blur-3xl [animation-delay:-6s]" />
          <div className="animate-blob absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-violet-300/50 blur-3xl [animation-delay:-10s]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="mx-auto mb-6 inline-block text-6xl"
          >
            👋
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] text-5xl font-bold leading-tight sm:text-7xl"
          >
            I'm{' '}
            <span className="animate-gradient bg-gradient-to-r from-pink-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
              {profile.firstName}
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-700"
          >
            {profile.pitch.fun}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover-wiggle inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <FaGithub /> Peek at my code
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              📄 The boring résumé
            </a>
          </motion.div>
        </div>
      </header>

      {/* Marquee */}
      <div className="overflow-hidden border-y-4 border-slate-900 bg-amber-300 py-3">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap font-[var(--font-display)] text-lg font-bold text-slate-900">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-6">
              {w} <span className="text-pink-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Fun stats */}
      <section className="px-6 py-14 sm:px-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((s, i) => {
            const colors = ['bg-pink-200', 'bg-violet-200', 'bg-amber-200', 'bg-emerald-200'];
            const rot = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className={`rounded-3xl border-2 border-slate-900 ${colors[i]} ${rot[i]} p-5 text-center shadow-[4px_4px_0_0_#0f172a]`}
                >
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="font-[var(--font-display)] text-4xl font-extrabold text-slate-900"
                  />
                  <p className="mt-1 text-xs font-medium text-slate-700">{s.label}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Fun projects */}
      <section id="play" className="px-6 py-10 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-2 text-center font-[var(--font-display)] text-4xl font-extrabold">
              Stuff I built for fun 🛠️
            </h2>
            <p className="mb-10 text-center text-slate-600">
              Not always production-grade. Always built with curiosity.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {funProjects.map((p, i) => {
              const colors = [
                'bg-pink-100',
                'bg-violet-100',
                'bg-amber-100',
                'bg-emerald-100',
                'bg-sky-100',
              ];
              return (
                <Reveal key={p.title} delay={i * 0.06} className={p.flagship ? 'sm:col-span-2 lg:col-span-1' : ''}>
                  <motion.a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
                    className={`flex h-full flex-col rounded-3xl border-2 border-slate-900 ${colors[i % colors.length]} p-6 shadow-[5px_5px_0_0_#0f172a] transition-shadow hover:shadow-[8px_8px_0_0_#0f172a]`}
                  >
                    <div className="text-4xl">{p.emoji}</div>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-slate-700">{p.funBlurb}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-slate-900/20 bg-white/60 px-2 py-0.5 text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-slate-900">
                      Take a look <FaGithub />
                    </span>
                  </motion.a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Day job (playful framing of serious work) */}
      <section className="px-6 py-14 sm:px-12">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border-2 border-slate-900 bg-violet-100 p-8 shadow-[6px_6px_0_0_#0f172a]">
              <h2 className="font-[var(--font-display)] text-3xl font-extrabold">
                ...but I do have a serious day job 🤓
              </h2>
              <p className="mt-3 text-slate-700">
                {experience[0].role} at {experience[0].company}, where I make money move safely and
                servers behave. A few greatest hits:
              </p>
              <ul className="mt-4 space-y-2">
                {experience[0].highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-slate-700">
                    <span>⚡</span>
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-violet-700">
                Want the metrics-and-architecture version? Hit the 🎯 switch up top.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Toolbox + a brag */}
      <section className="px-6 pb-14 sm:px-12">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0_0_#0f172a]">
              <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold">My toolbox 🧰</h3>
              <div className="flex flex-wrap gap-2">
                {Object.values(skills)
                  .flat()
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .map((t) => (
                    <span
                      key={t}
                      className="rounded-full border-2 border-slate-900 bg-amber-100 px-3 py-1 text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center rounded-3xl border-2 border-slate-900 bg-pink-200 p-6 text-center shadow-[5px_5px_0_0_#0f172a]">
              <div className="text-4xl">{achievements[0].emoji}</div>
              <p className="mt-2 font-bold text-slate-900">{achievements[0].title}</p>
              <p className="text-sm text-slate-700">{achievements[0].detail}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <footer className="border-t-4 border-slate-900 bg-slate-900 px-6 py-16 text-center text-white sm:px-12">
        <Reveal>
          <h2 className="font-[var(--font-display)] text-4xl font-extrabold">Let's make something cool ✨</h2>
          <p className="mx-auto mt-3 max-w-md text-slate-300">
            Got an idea, a job, or just want to argue about Go vs Rust? Slide in.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.links.email}
              className="hover-wiggle inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-slate-900"
            >
              <FaEnvelope /> Say hi
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-amber-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-amber-300">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <p className="mt-10 font-mono text-xs text-slate-500">
            made with caffeine & framer-motion · {profile.firstName}
          </p>
        </Reveal>
      </footer>
    </div>
  );
}
