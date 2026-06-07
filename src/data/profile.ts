// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for both the "serious" and "fun" experiences.
// Edit values here and both flows stay in sync.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jitendra Singh Bisht',
  firstName: 'Jitendra',
  role: 'Software Engineer · SDE I',
  company: 'White Martech Solutions',
  location: 'Bangalore, India',
  email: 'work.jitendra08@gmail.com',
  phone: '+91 95689 48420',
  resumeUrl: '/resume.pdf',

  // ── Update LINKEDIN with your real profile URL ──
  links: {
    github: 'https://github.com/jitendraSinghBisht',
    linkedin: 'https://www.linkedin.com/in/jitendra-singh-bisht', // TODO: replace with your exact LinkedIn URL
    email: 'mailto:work.jitendra08@gmail.com',
  },

  // Two flavours of the same elevator pitch.
  pitch: {
    serious:
      'High-impact Software Engineer with 2 years building scalable, distributed backend systems in Go on AWS. I architect cloud-native, event-driven services, optimise infrastructure, and ship high-performance APIs.',
    fun: "Hey! I'm Jitendra — a backend nerd who makes servers do cool things in Go, breaks production at 2am (then fixes it), and once cut a cloud bill by 60% just to flex. Let's build something fun. 🚀",
  },
} as const;

// ── Headline metrics (animated count-up) ────────────────────────────────────
export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 60, suffix: '%', label: 'Cloud cost reduction' },
  { value: 90, suffix: '%', label: 'Of company transactions handled' },
  { value: 10, suffix: '+', label: 'Partners & gaming APIs integrated' },
  { value: 2, suffix: ' yrs', label: 'Building production backends' },
];

// ── Experience timeline ──────────────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'SDE I',
    company: 'White Martech Solutions (WMS)',
    location: 'Bangalore, India',
    period: 'Jun 2025 – Present',
    highlights: [
      'Architected a multi-tenant, Go-based voucher issuance platform on an event-sourced transaction ledger with optimistic locking and idempotency to eliminate concurrent double-spending.',
      'Built a payment gateway orchestrator integrated with Razorpay — designed for provider extensibility — that now handles 90% of company transactions.',
      'Engineered ledger tracking, refunds management, and reliable webhook delivery with automated retry mechanisms.',
      'Built a pluggable background-worker framework over AWS SQS / GCP Pub-Sub to streamline bulk operations and order-lifecycle automation.',
      'Migrated API Gateway-facing Lambdas to an Application Load Balancer (ALB) architecture, achieving a 60% reduction in operational costs.',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'White Martech Solutions (WMS)',
    location: 'Bangalore, India',
    period: 'Jul 2024 – May 2025',
    highlights: [
      'Implemented reliable webhook delivery, bulk operations, and scoped multi-actor authentication for secure platform access.',
      'Built a proprietary Tiny-URL service with deferred deep linking to replace Firebase Dynamic Links.',
      'Integrated 10+ external gaming APIs for automated campaign verification and real-time milestone monitoring.',
      'Engineered custom decision pages for intelligent user routing, improving campaign conversion.',
      'Developed retention mechanisms — reward multipliers, bonus incentives, and geofenced quest parameters.',
    ],
  },
];

// ── Skills ─────────────────────────────────────────────────────────────────
export const skills = {
  Languages: ['Go', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'HTML/CSS'],
  Backend: ['Go', 'Chi', 'Mux', 'Node.js', 'Express.js'],
  Database: ['DynamoDB', 'Redis', 'MongoDB', 'MySQL'],
  'Cloud & DevOps': ['AWS (EC2, Lambda, ALB)', 'CodeBuild', 'CloudWatch', 'Docker', 'Git', 'GitHub'],
};

// ── Projects, tagged by tone ─────────────────────────────────────────────────
export type Project = {
  title: string;
  blurb: string;          // serious framing
  funBlurb: string;       // playful framing
  tech: string[];
  url: string;
  emoji: string;
  flagship?: boolean;
};

export const seriousProjects: Project[] = [
  {
    title: 'Coding Playground',
    blurb:
      'A full-stack, browser-based IDE. Isolated code execution in Docker containers, an in-browser terminal (Xterm.js), a persistent virtual file system, and real-time front/back sync over WebSockets.',
    funBlurb: 'A whole IDE in your browser. Run code in throwaway Docker containers without nuking your laptop. 🐳',
    tech: ['React', 'TypeScript', 'Node.js', 'Docker', 'WebSockets', 'Monaco', 'Xterm.js', 'AWS EC2'],
    url: 'https://github.com/jitendraSinghBisht/playground',
    emoji: '🧪',
    flagship: true,
  },
  {
    title: 'Video Streaming Backend',
    blurb:
      'A scalable video-platform API in Node/Express: channel management, secure media handling, JWT-driven auth, and NoSQL aggregation pipelines tuned for low query latency.',
    funBlurb: 'The plumbing behind a YouTube-ish app. Lots of aggregation pipelines, zero buffering excuses. 📺',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    url: 'https://github.com/jitendraSinghBisht/backend_js',
    emoji: '🎬',
  },
  {
    title: "Let's Blog",
    blurb: 'A Go-powered blogging backend — clean handlers, fast routing, and a focus on idiomatic Go service design.',
    funBlurb: 'A blog engine written in Go because why not make it fast AND boring-reliable. ✍️',
    tech: ['Go', 'REST'],
    url: 'https://github.com/jitendraSinghBisht/lets-blog',
    emoji: '📝',
  },
  {
    title: 'IPO Assistant',
    blurb: 'A Go service for tracking and assisting IPO decisions — data aggregation and a clean service layer.',
    funBlurb: 'Helps you not lose money on IPOs. Written in Go, naturally. 📈',
    tech: ['Go'],
    url: 'https://github.com/jitendraSinghBisht/ipo-assistant',
    emoji: '💹',
  },
  {
    title: 'Expense Sharing',
    blurb: 'A Splitwise-style expense-splitting backend — balances, settlements, and group accounting logic.',
    funBlurb: 'Settle who-owes-who after the trip without the friendship-ending math. 🧾',
    tech: ['JavaScript', 'Node.js'],
    url: 'https://github.com/jitendraSinghBisht/Expense-Sharing',
    emoji: '💸',
  },
];

export const funProjects: Project[] = [
  {
    title: 'Vivid Shades',
    blurb: 'A TypeScript color-palette explorer for picking and previewing shades.',
    funBlurb: 'A playground of colors. Click around, find your vibe, steal the hex codes. 🌈',
    tech: ['TypeScript', 'React'],
    url: 'https://github.com/jitendraSinghBisht/vivid-shades',
    emoji: '🎨',
    flagship: true,
  },
  {
    title: 'JS Mini-Experiments',
    blurb: 'A collection of vanilla-JavaScript experiments and UI exercises.',
    funBlurb: 'A junk drawer of tiny JS toys I built to learn the hard way. 🧰',
    tech: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://github.com/jitendraSinghBisht/js_projects',
    emoji: '✨',
  },
  {
    title: 'First E-Commerce Site',
    blurb: 'A handcrafted storefront built early on with plain HTML & CSS.',
    funBlurb: 'My first ever storefront. Hand-coded HTML/CSS, ambition > skill. We all start somewhere. 🛒',
    tech: ['HTML', 'CSS'],
    url: 'https://github.com/jitendraSinghBisht/ecommerce-site-01',
    emoji: '🛍️',
  },
  {
    title: 'The 12th-Grade Project',
    blurb: 'The Python project from high school where it all began.',
    funBlurb: 'Where the whole journey started — a Python project from class 12. Be kind to it. 🐍',
    tech: ['Python'],
    url: 'https://github.com/jitendraSinghBisht/12th_project',
    emoji: '🎓',
  },
  {
    title: 'Learning React',
    blurb: 'The repo where I learned to think in components.',
    funBlurb: 'Where I learned that everything is a component, even my problems. ⚛️',
    tech: ['React', 'JavaScript'],
    url: 'https://github.com/jitendraSinghBisht/react_js',
    emoji: '⚛️',
  },
];

// ── Achievements & education ─────────────────────────────────────────────────
export const achievements = [
  { title: 'GATE (CS) 2024 Qualified', detail: 'Score of 436', emoji: '🏆' },
];

export const education = [
  { degree: 'B.Tech', school: 'Dr. APJ Abdul Kalam Technical University, Lucknow', period: '2021 – 2025' },
  { degree: 'Intermediate', school: 'Saraswati Academy, Haldwani, Uttarakhand', period: '2020 – 2021' },
  { degree: 'High School', school: 'Saraswati Academy, Haldwani, Uttarakhand', period: '2018 – 2019' },
];
