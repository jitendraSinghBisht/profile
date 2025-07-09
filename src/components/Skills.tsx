import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaArrowRight } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiAmazon, SiDocker, SiGit, SiHtml5, SiCss3, SiTailwindcss, SiFigma } from 'react-icons/si';
import { StructuredData } from './StructuredData';

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "HTML", icon: SiHtml5, level: 95 },
        { name: "CSS", icon: SiCss3, level: 90 }
      ]
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: FaCode,
      skills: [
        { name: "React.js", icon: SiReact, level: 88 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
        { name: "Figma", icon: SiFigma, level: 75 }
      ]
    },
    {
      id: 3,
      title: "Backend Development",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 90 },
        { name: "Express.js", icon: SiExpress, level: 88 }
      ]
    },
    {
      id: 4,
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 }
      ]
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: [
        { name: "AWS", icon: SiAmazon, level: 75 },
        { name: "Docker", icon: SiDocker, level: 70 }
      ]
    },
    {
      id: 6,
      title: "Tools & Others",
      icon: FaTools,
      skills: [
        { name: "Git", icon: SiGit, level: 90 }
      ]
    }
  ];

  return (
    <>
      <StructuredData type="skills" />
      <main className="flex-1 h-full bg-white text-gray-900 relative">
        {/* Hero Section */}
        <section className="py-20 px-8" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 id="skills-heading" className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Skills & Expertise</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My technical skills and proficiency levels across various technologies and tools
              </p>
            </motion.div>

            {/* Skills Overview */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.article 
                      key={category.id}
                      className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                    >
                      <header className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200" aria-hidden="true">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
                      </header>
                      
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div key={skillIndex} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <SkillIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                                  <span className="text-gray-700 font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-gray-500">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                                <motion.div 
                                  className="bg-gray-900 h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>

            {/* Additional Skills */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Additional Skills</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <motion.article 
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                >
                  <FaCode className="w-8 h-8 text-gray-700 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900 mb-2">Problem Solving</h3>
                  <p className="text-gray-600 text-sm">Analytical thinking and efficient solutions</p>
                </motion.article>
                
                <motion.article 
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                >
                  <FaServer className="w-8 h-8 text-gray-700 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900 mb-2">API Design</h3>
                  <p className="text-gray-600 text-sm">RESTful APIs and microservices</p>
                </motion.article>
                
                <motion.article 
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                >
                  <FaDatabase className="w-8 h-8 text-gray-700 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900 mb-2">Database Design</h3>
                  <p className="text-gray-600 text-sm">Schema design and optimization</p>
                </motion.article>
                
                <motion.article 
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                >
                  <FaCloud className="w-8 h-8 text-gray-700 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Deployment</h3>
                  <p className="text-gray-600 text-sm">AWS, Docker, and CI/CD</p>
                </motion.article>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Work Together?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how my skills can help bring your project to life.
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group mx-auto">
                Get In Touch
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 