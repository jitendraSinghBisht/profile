import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHeart, FaCode } from 'react-icons/fa';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          About Me
        </h1>
        <p className="text-xl text-gray-300">
          Get to know me better
        </p>
      </motion.div>
      {/* Scrollable Content */}
      <div className="pt-36 pb-8 px-0 overflow-y-auto h-full hide-scrollbar">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Story */}
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">My Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate backend developer with a love for building scalable systems 
                  and solving complex problems. My journey in software development started with 
                  curiosity and has evolved into a career focused on creating robust, efficient solutions.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  the latest technologies and best practices. When I'm not coding, you'll find 
                  me exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge with the developer community.
                </p>
                <p>
                  My approach combines technical expertise with a strong focus on user experience 
                  and business value. I enjoy working in collaborative environments where I can 
                  learn from others and contribute to meaningful projects.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">What I Believe In</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCode className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Clean Code</h3>
                    <p className="text-gray-300 text-sm">Writing readable, maintainable code that others can understand and build upon.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHeart className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">User-First Approach</h3>
                    <p className="text-gray-300 text-sm">Building solutions that genuinely solve user problems and improve their experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Continuous Learning</h3>
                    <p className="text-gray-300 text-sm">Staying curious and always learning new technologies and methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-white">Backend Development</h3>
                  <p className="text-blue-400 text-sm">2022 - Present</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Building scalable APIs and microservices using Node.js, Express, and modern JavaScript frameworks.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-white">Full-Stack Development</h3>
                  <p className="text-purple-400 text-sm">2021 - Present</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Creating complete web applications with React.js and modern frontend technologies.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-white">Web Development</h3>
                  <p className="text-green-400 text-sm">2020 - Present</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Developing responsive websites and web applications using HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Interests</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <FaCode className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm">Open Source</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <FaGraduationCap className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm">Learning</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <FaBriefcase className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm">Problem Solving</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <FaHeart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm">Community</h3>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Fun Facts</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  I love exploring new programming languages and frameworks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  I enjoy contributing to open-source projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  I'm always learning and improving my skills
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  I believe in the power of collaboration and knowledge sharing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 