import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaLaptop, FaArrowRight } from 'react-icons/fa';
import { StructuredData } from './StructuredData';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Web Coding Playground",
      description: "Interactive web-based coding playground built with TypeScript, providing a real-time development environment for testing and learning code. Features syntax highlighting, live preview, and multiple language support.",
      technologies: ["TypeScript", "Web Development", "Interactive"],
      icon: FaLaptop,
      githubUrl: "https://github.com/jitendraSinghBisht/playground",
      liveUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Backend JavaScript Applications",
      description: "Server-side JavaScript applications and APIs built with modern Node.js frameworks and best practices for scalable backend development. Includes authentication, database integration, and RESTful APIs.",
      technologies: ["Node.js", "JavaScript", "Express.js", "Backend"],
      icon: FaServer,
      githubUrl: "https://github.com/jitendraSinghBisht/backend_js",
      liveUrl: null,
      featured: true
    },
    {
      id: 3,
      title: "React.js Applications",
      description: "Modern React.js applications showcasing component-based architecture, state management, and responsive user interfaces. Built with modern React patterns and best practices.",
      technologies: ["React.js", "JavaScript", "Frontend", "UI/UX"],
      icon: FaCode,
      githubUrl: "https://github.com/jitendraSinghBisht/react_js",
      liveUrl: null,
      featured: true
    },
    {
      id: 4,
      title: "HTML/CSS Projects",
      description: "Static web projects demonstrating strong HTML/CSS skills, responsive design, and modern web development techniques. Focused on clean, semantic markup and beautiful styling.",
      technologies: ["HTML", "CSS", "Responsive Design", "Web Design"],
      icon: FaLaptop,
      githubUrl: "https://github.com/jitendraSinghBisht/js_projects",
      liveUrl: null,
      featured: false
    }
  ];

  return (
    <>
      <StructuredData type="projects" />
      <main className="flex-1 h-full bg-white text-gray-900 relative">
        {/* Hero Section */}
        <section className="py-20 px-8" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.4, 0, 0.2, 1] // cubic-bezier for smoothness
              }}
            >
              <h1 id="projects-heading" className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">My Projects</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A collection of my work and contributions showcasing my skills and expertise
              </p>
            </motion.div>

            {/* Featured Projects */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Featured Projects</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                {projects.filter(p => p.featured).map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <motion.article 
                      key={project.id}
                      className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.12, 
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                    >
                      <header className="flex items-center gap-4 mb-6">
                        <motion.div
                          className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300"
                          initial={{ scale: 0.95 }}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          aria-hidden="true"
                        >
                          <Icon className="w-6 h-6 text-gray-700" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                          <p className="text-gray-500 text-sm">Featured Project</p>
                        </div>
                      </header>
                      
                      <motion.p
                        className="text-gray-600 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 + techIndex * 0.05, ease: [0.4, 0, 0.2, 1] }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <footer className="flex gap-4">
                        <motion.a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          aria-label={`View ${project.title} code on GitHub`}
                        >
                          <FaGithub className="w-4 h-4" />
                          <span className="text-sm">View Code</span>
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            aria-label={`View ${project.title} live demo`}
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            <span className="text-sm">Live Demo</span>
                          </motion.a>
                        )}
                      </footer>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>

            {/* All Projects */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">All Projects</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <motion.article 
                      key={project.id}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 group"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.07, 
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
                    >
                      <header className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200" aria-hidden="true">
                          <Icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                          {project.featured && (
                            <span className="text-xs text-gray-500">Featured</span>
                          )}
                        </div>
                      </header>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-white text-gray-600 rounded text-xs border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white text-gray-500 rounded text-xs border border-gray-200">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <footer className="flex gap-2">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 text-white rounded text-xs hover:bg-gray-800 transition-colors duration-200"
                          aria-label={`View ${project.title} code`}
                        >
                          <FaGithub className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 border border-gray-900 text-gray-900 rounded text-xs hover:bg-gray-900 hover:text-white transition-colors duration-200"
                            aria-label={`View ${project.title} demo`}
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            <span>Demo</span>
                          </a>
                        )}
                      </footer>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Want to See More?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <motion.a 
                href="https://github.com/jitendraSinghBisht"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 group"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <FaGithub className="w-5 h-5" />
                View GitHub Profile
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 