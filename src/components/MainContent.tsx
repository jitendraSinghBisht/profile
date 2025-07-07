import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiCode, HiServer, HiCloud, HiDatabase } from 'react-icons/hi';

export default function MainContent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="flex-1 h-full bg-black text-white relative">
      {/* Fixed Header */}
      <motion.div 
        className="fixed top-0 left-0 w-full z-20 bg-black pt-8 pb-6 px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-300">
          Backend Engineer & Cloud Architect
        </p>
      </motion.div>
      {/* Scrollable Content */}
      <div className="pt-36 pb-8 px-0 overflow-y-auto h-full hide-scrollbar">
        {/* Hero Section */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Hey there!</h2>
                <p className="text-gray-300">I'm passionate about building scalable systems</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I specialize in crafting robust backend architectures, optimizing cloud infrastructure, 
              and building systems that scale. When I'm not coding, you'll find me exploring new 
              technologies or contributing to open-source projects.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="https://github.com/jitendraSinghBisht" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Overview */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-white"
            variants={fadeInUp}
          >
            What I Do
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <HiServer className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Backend Development</h3>
              <p className="text-gray-400">Building scalable APIs and server-side applications</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <HiCloud className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Architecture</h3>
              <p className="text-gray-400">Designing and deploying cloud infrastructure</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-green-500 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <HiCode className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
              <p className="text-gray-400">Creating complete web applications</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-500 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <HiDatabase className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Database Design</h3>
              <p className="text-gray-400">Optimizing data storage and retrieval</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Work Together?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Let's discuss your next project and see how I can help bring your ideas to life.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Projects
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
