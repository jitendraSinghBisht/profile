import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHeart, FaCode, FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <main className="flex-1 h-full bg-white text-gray-900 relative">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know me better and understand my journey in software development
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Story */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
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

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Believe In</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCode className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
                      <p className="text-gray-600 leading-relaxed">Writing readable, maintainable code that others can understand and build upon.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaHeart className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">User-First Approach</h3>
                      <p className="text-gray-600 leading-relaxed">Building solutions that genuinely solve user problems and improve their experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                      <p className="text-gray-600 leading-relaxed">Staying curious and always learning new technologies and methodologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
                    <p className="text-gray-500 text-sm mb-3">2022 - Present</p>
                    <p className="text-gray-600 leading-relaxed">
                      Building scalable APIs and microservices using Node.js, Express, and modern JavaScript frameworks.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                    <p className="text-gray-500 text-sm mb-3">2021 - Present</p>
                    <p className="text-gray-600 leading-relaxed">
                      Creating complete web applications with React.js and modern frontend technologies.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                    <p className="text-gray-500 text-sm mb-3">2020 - Present</p>
                    <p className="text-gray-600 leading-relaxed">
                      Developing responsive websites and web applications using HTML, CSS, and JavaScript.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Interests</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200">
                    <FaCode className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Open Source</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200">
                    <FaGraduationCap className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Learning</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200">
                    <FaBriefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200">
                    <FaHeart className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Community</h3>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fun Facts</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    I love exploring new programming languages and frameworks
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    I enjoy contributing to open-source projects
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    I'm always learning and improving my skills
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    I believe in the power of collaboration and knowledge sharing
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Want to Know More?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's connect and discuss how we can work together on your next project.
            </p>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group mx-auto">
              Get In Touch
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 