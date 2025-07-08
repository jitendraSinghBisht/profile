import { motion } from 'framer-motion';
import { FaHome, FaUser, FaFolder, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

type Page = 'home' | 'about' | 'projects' | 'skills' | 'contact';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'projects', label: 'Projects', icon: FaFolder },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  const socialLinks = [
    { href: 'https://github.com/jitendraSinghBisht', icon: FaGithub, label: 'GitHub' },
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
    { href: '#', icon: FaTwitter, label: 'Twitter' },
  ];

  return (
    <motion.aside 
      className="fixed left-0 top-0 h-full w-20 md:w-24 lg:w-28 bg-white border-r border-gray-200 z-30 flex flex-col items-center py-6 shadow-sm"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Logo/Name */}
      <motion.div 
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-2 mx-auto">
          <span className="text-white font-bold text-sm">VJ</span>
        </div>
        <div className="hidden lg:block">
          <h2 className="text-xs font-semibold text-gray-900 leading-tight">Jitendra</h2>
          <h3 className="text-xs text-gray-600 leading-tight">Singh Bisht</h3>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center space-y-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setCurrentPage(item.id as Page)}
              className={`relative group p-2.5 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-gray-900 rounded-l-full"
                  initial={{ height: 0 }}
                  animate={{ height: 24 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Social Links */}
      <motion.div 
        className="flex flex-col items-center space-y-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 group relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-3.5 h-3.5" />
              
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {link.label}
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Current Page Indicator */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mx-auto mb-1">
          <span className="text-xs font-medium text-gray-600">
            {navItems.find(item => item.id === currentPage)?.label.charAt(0)}
          </span>
        </div>
        <div className="hidden lg:block">
          <p className="text-xs text-gray-500 font-medium">
            {navItems.find(item => item.id === currentPage)?.label}
          </p>
        </div>
      </motion.div>
    </motion.aside>
  );
}
