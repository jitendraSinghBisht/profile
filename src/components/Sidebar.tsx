import { FaTwitter, FaLinkedin, FaYoutube, FaUser, FaFolderOpen, FaFileAlt, FaEnvelope, FaBolt, FaArrowRight } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', icon: <FaBolt />, href: '#home', active: true },
  { name: 'About', icon: <FaUser />, href: '#about' },
  { name: 'Projects', icon: <FaFolderOpen />, href: '#projects' },
  { name: 'Articles', icon: <FaFileAlt />, href: '#articles' },
  { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

const socials = [
  { name: 'Twitter', icon: <FaTwitter />, href: '#' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: '#' },
  { name: 'YouTube', icon: <FaYoutube />, href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="h-full w-full flex flex-col justify-between bg-gray-50 shadow-lg rounded-3xl px-6 py-8">
      <div className="flex flex-col justify-between">

        {/* Profile */}
        <div className="flex items-center gap-2 mb-8">
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="John Doe"
            className="w-10 h-10 rounded-full mb-2 object-cover"
          />
          <div>
            <span className="font-bold text-gray-900 text-base leading-tight">John Doe</span>
            <br/>
            <span className="text-xs text-gray-400 font-normal">Developer</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 mt-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition text-sm mb-1 ${link.active ? 'bg-white shadow text-gray-800 font-semibold' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
              style={link.active ? { boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)' } : {}}
            >
              <span className={`text-base ${link.active ? 'text-cyan-500' : 'text-gray-400'}`}>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-8">
          <h3 className="text-xs font-bold text-gray-700 mb-2">Socials</h3>
          <div className="flex flex-col gap-2 ml-1">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center gap-2 text-gray-500 hover:underline hover:text-gray-900 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">{social.icon}</span>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mb-2 flex flex-col items-center">
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 px-7 py-2 bg-gray-900 text-white rounded-full shadow-xl font-semibold hover:bg-cyan-700 transition text-sm"
          style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.18)' }}
        >
          Read Resume <FaArrowRight className="ml-1" />
        </a>
      </div>
    </aside>
  );
}
