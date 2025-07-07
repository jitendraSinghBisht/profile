import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaPalette } from 'react-icons/fa';

export default function Skills() {
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

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: FaCode,
      iconColor: 'text-blue-400',
      skills: [
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-500' },
        { name: 'HTML/CSS', level: 88, color: 'bg-orange-500' },
        { name: 'Python', level: 75, color: 'bg-green-500' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: FaServer,
      iconColor: 'text-green-400',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-cyan-500' },
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'Express.js', level: 80, color: 'bg-blue-500' },
        { name: 'Next.js', level: 70, color: 'bg-purple-500' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: FaDatabase,
      iconColor: 'text-red-400',
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-500' },
        { name: 'Redis', level: 75, color: 'bg-red-500' },
        { name: 'SQLite', level: 90, color: 'bg-gray-500' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: FaCloud,
      iconColor: 'text-purple-400',
      skills: [
        { name: 'AWS', level: 80, color: 'bg-orange-500' },
        { name: 'Docker', level: 85, color: 'bg-blue-500' },
        { name: 'Git', level: 90, color: 'bg-red-500' },
        { name: 'CI/CD', level: 75, color: 'bg-green-500' }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: FaTools,
      iconColor: 'text-yellow-400',
      skills: [
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' },
        { name: 'GitHub', level: 90, color: 'bg-gray-500' },
        { name: 'Terminal', level: 88, color: 'bg-green-500' }
      ]
    },
    {
      id: 'design',
      title: 'Design & UI/UX',
      icon: FaPalette,
      iconColor: 'text-pink-400',
      skills: [
        { name: 'Responsive Design', level: 85, color: 'bg-blue-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' },
        { name: 'UI/UX Principles', level: 80, color: 'bg-green-500' }
      ]
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
          Skills & Technologies
        </h1>
        <p className="text-xl text-gray-300">
          My technical expertise and proficiency levels
        </p>
      </motion.div>
      {/* Scrollable Content */}
      <div className="pt-36 pb-8 px-0 overflow-y-auto h-full hide-scrollbar">
        {/* Skills Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={category.id}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${category.iconColor} bg-gray-800 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.section 
          className="mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Skills</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-400">Soft Skills</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Communication</li>
                  <li>• Time Management</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-green-400">Methodologies</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Agile Development</li>
                  <li>• Scrum</li>
                  <li>• Test-Driven Development</li>
                  <li>• Code Review</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-400">Concepts</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• RESTful APIs</li>
                  <li>• Microservices</li>
                  <li>• Authentication</li>
                  <li>• Security Best Practices</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-orange-400">Learning</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Always Learning</li>
                  <li>• Open Source</li>
                  <li>• Documentation</li>
                  <li>• Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Collaborate?</h2>
            <p className="text-blue-100 mb-6">
              I'm always excited to work on new projects and learn new technologies.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Let's Work Together
            </button>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 