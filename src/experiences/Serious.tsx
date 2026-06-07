import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import {
  profile,
  stats,
  experience,
  skills,
  seriousProjects,
  achievements,
  education,
} from '../data/profile';
import { CountUp, Reveal, TiltCard } from '../components/shared';

export default function Serious() {
  return (
    <div className="scroll-slim h-full overflow-y-auto bg-[#05060f] text-slate-200">
      {/* Hero */}
      <header className="relative overflow-hidden px-6 pt-28 pb-20 sm:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -right-20 -top-10 h-80 w-80 rounded-full bg-sky-600/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1 font-mono text-xs text-sky-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            Open to impactful backend roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 max-w-3xl font-[var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 text-lg text-sky-300"
          >
            {profile.role} · {profile.company}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400"
          >
            {profile.pitch.serious}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-[#05060f] transition hover:bg-sky-400"
            >
              View résumé <FaArrowRight />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <FaMapMarkerAlt /> {profile.location}
            </span>
          </motion.div>
        </div>
      </header>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-12 sm:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center sm:text-left">
              <CountUp
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-[var(--font-display)] text-4xl font-bold text-white sm:text-5xl"
              />
              <p className="mt-2 text-xs leading-snug text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience timeline */}
      <Section title="Experience" id="experience">
        <div className="relative space-y-10 border-l border-white/10 pl-6">
          {experience.map((job, i) => (
            <Reveal key={job.period} delay={i * 0.1}>
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-[#05060f]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {job.role} · <span className="text-sky-300">{job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">{job.period}</span>
              </div>
              <p className="text-xs text-slate-500">{job.location}</p>
              <ul className="mt-3 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Selected work" id="projects">
        <div className="grid gap-5 sm:grid-cols-2">
          {seriousProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} className={p.flagship ? 'sm:col-span-2' : ''}>
              <TiltCard className="h-full">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-sky-400/40 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{p.emoji}</span>
                    {p.flagship && (
                      <span className="rounded-full bg-sky-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-sky-300">
                        Flagship
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-sky-300">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-sky-300">
                    <FaGithub /> View repo
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Tech stack" id="skills">
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.06}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-sky-300">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Achievements + education */}
      <Section title="Credentials" id="credentials">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-sky-300">Achievements</h3>
            {achievements.map((a) => (
              <div key={a.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-semibold text-white">
                  {a.emoji} {a.title}
                </p>
                <p className="mt-1 text-sm text-slate-400">{a.detail}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-sky-300">Education</h3>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.degree} className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-200">{e.degree}</p>
                    <p className="text-xs text-slate-500">{e.school}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-slate-500">{e.period}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contact */}
      <footer className="border-t border-white/5 px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
              Let's build reliable systems together.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Reach out for backend, distributed-systems, and cloud-infrastructure roles.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-[#05060f] transition hover:bg-sky-400"
              >
                <FaEnvelope /> {profile.email}
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <FaGithub className="text-xl" />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <p className="mt-10 font-mono text-xs text-slate-600">
              © {profile.name} · {profile.phone}
            </p>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-8 flex items-center gap-3 font-[var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
            <span className="font-mono text-sm text-sky-400">//</span>
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
