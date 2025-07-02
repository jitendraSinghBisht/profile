import { Link } from 'react-scroll';

const SunIcon = () => (
  <svg
    className="w-6 h-6 text-yellow-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-6 h-6 text-gray-200"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 0112.21 3 7 7 0 1012 21a9 9 0 009-8.21z" />
  </svg>
);

export default function Header({
  theme,
  toggle,
}: {
  theme: 'light' | 'dark';
  toggle: () => void;
}) {
  const sections = ['hero', 'about', 'skills', 'projects'] as const;

  return (
    <header className="fixed w-full bg-opacity-70 backdrop-blur p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Vijay Dev</h1>
        <nav className="space-x-6 hidden md:flex">
          {sections.map((sec) => (
            <Link
              key={sec}
              to={sec}
              spy
              smooth
              offset={-70}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {sec.toUpperCase()}
            </Link>
          ))}
        </nav>
        <button onClick={toggle} aria-label="Toggle theme" className="focus:outline-none">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
