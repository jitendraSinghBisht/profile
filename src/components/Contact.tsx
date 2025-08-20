import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { StructuredData } from './StructuredData';

export default function Contact() {
  return (
    <>
      <StructuredData type="contact" />
      <main className="flex-1 h-full bg-white text-gray-900 relative">
        {/* Hero Section */}
        <section className="py-20 px-8" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 id="contact-heading" className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Get In Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let's discuss your next project or just say hello. I'm always open to new opportunities and collaborations.
              </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <article className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
                </article>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <article className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <FaEnvelope className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:me@jitendrasinghbisht.in" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                          me@jitendrasinghbisht.in
                        </a>
                        <p className="text-gray-500 text-sm">I'll get back to you within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <FaPhone className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                          +1 (555) 123-4567
                        </a>
                        <p className="text-gray-500 text-sm">Available for calls during business hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <FaMapMarkerAlt className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">Remote / Worldwide</p>
                        <p className="text-gray-500 text-sm">Available for remote work and collaborations</p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect With Me</h2>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://github.com/jitendraSinghBisht"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 group"
                      aria-label="Visit GitHub profile"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200" aria-hidden="true">
                        <FaGithub className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">GitHub</h3>
                        <p className="text-gray-600 text-sm">Check out my projects and contributions</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/jitendra-singh-bisht-b27255218/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 group"
                      aria-label="Visit LinkedIn profile"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200" aria-hidden="true">
                        <FaLinkedin className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                        <p className="text-gray-600 text-sm">Connect with me professionally</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://x.com/VijayBisht_08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 group"
                      aria-label="Visit Twitter profile"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200" aria-hidden="true">
                        <FaTwitter className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Twitter</h3>
                        <p className="text-gray-600 text-sm">Follow me for tech updates and insights</p>
                      </div>
                    </a>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8 bg-gray-50" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Start a Project?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your ideas to life. I'm excited to hear about your next project.
              </p>
              <a href="mailto:me@jitendrasinghbisht.in" className="px-8 py-4 bg-gray-900 w-fit text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group mx-auto">
                Let's Talk
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 