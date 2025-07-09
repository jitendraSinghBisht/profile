import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { HiCode, HiServer, HiCloud, HiDatabase } from 'react-icons/hi';
import { StructuredData } from './StructuredData';

export default function MainContent() {

  return (
    <>
      <StructuredData type="person" />
      <main className="flex-1 h-full bg-white text-gray-900 relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                id="hero-heading"
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Jitendra Singh Bisht
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl text-gray-600 mb-8 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Backend Engineer & Cloud Architect
              </motion.p>
              <motion.p 
                className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I craft robust backend architectures and scalable cloud solutions. 
                Passionate about building systems that perform at scale.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group">
                View My Work
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200">
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="https://github.com/jitendraSinghBisht" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="GitHub Profile">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="LinkedIn Profile">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="Twitter Profile">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="Email Contact">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-8 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.4, 0, 0.2, 1] // cubic-bezier for smoothness
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <motion.h2
                id="services-heading"
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                What I Do
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                I specialize in building scalable backend systems and cloud infrastructure that power modern applications.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.10, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              role="list"
            >
              <motion.article 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.4, 0, 0.2, 1] // cubic-bezier for smoothness
                }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                role="listitem"
              >
                <motion.div
                  className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                >
                  <HiServer className="w-8 h-8 text-gray-700" />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Backend Development
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Building scalable APIs and server-side applications with modern frameworks and best practices.
                </motion.p>
              </motion.article>

              <motion.article 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.4, 0, 0.2, 1] // cubic-bezier for smoothness
                }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                role="listitem"
              >
                <motion.div
                  className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                >
                  <HiCloud className="w-8 h-8 text-gray-700" />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Cloud Architecture
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Designing and deploying cloud infrastructure that scales with your business needs.
                </motion.p>
              </motion.article>

              <motion.article 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.4, 0, 0.2, 1] // cubic-bezier for smoothness
                }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                role="listitem"
              >
                <motion.div
                  className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                >
                  <HiCode className="w-8 h-8 text-gray-700" />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Full-Stack Development
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Creating complete web applications with modern frontend and backend technologies.
                </motion.p>
              </motion.article>

              <motion.article 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.4, 0, 0.2, 1] // cubic-bezier for smoothness
                }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                role="listitem"
              >
                <motion.div
                  className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                >
                  <HiDatabase className="w-8 h-8 text-gray-700" />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Database Design
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                >
                  Optimizing data storage and retrieval for performance and scalability.
                </motion.p>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Work Together?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your next project and see how I can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group">
                  View Projects
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200">
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
