import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300">
          Let's discuss your next project
        </p>
      </motion.div>
      {/* Scrollable Content */}
      <div className="pt-36 pb-8 px-0 overflow-y-auto h-full hide-scrollbar">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
              <div className="space-y-4">
                <a 
                  href="https://github.com/jitendraSinghBisht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="w-6 h-6 text-gray-300" />
                  <div>
                    <h3 className="font-semibold text-white">GitHub</h3>
                    <p className="text-gray-300 text-sm">@jitendraSinghBisht</p>
                  </div>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-300 text-sm">Connect professionally</p>
                  </div>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaTwitter className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Twitter</h3>
                    <p className="text-gray-300 text-sm">Follow for updates</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about possibilities, 
                  I'd love to hear from you.
                </p>
                <p>
                  I specialize in backend development, cloud architecture, and full-stack solutions. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.section 
          className="mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Start?</h2>
            <p className="text-blue-100 mb-6">
              Let's discuss your project and see how we can work together to achieve your goals.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Call
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Resume
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 