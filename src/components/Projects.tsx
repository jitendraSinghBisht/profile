import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaLaptop } from 'react-icons/fa';

export default function Projects() {
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

  const projects = [
    {
      id: 1,
      title: "Web Coding Playground",
      description: "Interactive web-based coding playground built with TypeScript, providing a real-time development environment for testing and learning code. Features syntax highlighting, live preview, and multiple language support.",
      technologies: ["TypeScript", "Web Development", "Interactive"],
      icon: FaLaptop,
      iconColor: "text-blue-400",
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
      iconColor: "text-green-400",
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
      iconColor: "text-cyan-400",
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
      iconColor: "text-orange-400",
      githubUrl: "https://github.com/jitendraSinghBisht/js_projects",
      liveUrl: null,
      featured: false
    }
  ];

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
          My Projects
        </h1>
        <p className="text-xl text-gray-300">
          A collection of my work and contributions
        </p>
      </motion.div>
      {/* Scrollable Content */}
      <div className="pt-36 pb-8 px-0 overflow-y-auto h-full hide-scrollbar">
        {/* Featured Projects */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-2xl font-bold mb-8 text-white"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.filter(p => p.featured).map((project) => {
              const Icon = project.icon;
              return (
                <motion.div 
                  key={project.id}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${project.iconColor} bg-gray-800 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-gray-400 text-sm">Featured Project</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span className="text-sm">View Code</span>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* All Projects */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-2xl font-bold mb-8 text-white"
            variants={fadeInUp}
          >
            All Projects
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div 
                  key={project.id}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${project.iconColor} bg-gray-800 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-blue-600 rounded text-xs hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-2xl font-bold mb-4 text-white">Want to See More?</h2>
            <p className="text-blue-100 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a 
              href="https://github.com/jitendraSinghBisht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 