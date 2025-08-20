import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaArrowRight } from 'react-icons/fa';
import { Coffee, Database, Server, Code2, Globe, Award, Monitor } from 'lucide-react';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiAmazon, SiDocker, SiGit, SiHtml5, SiCss3, SiTailwindcss, SiGithub, SiPython, SiGo, SiC } from 'react-icons/si';
import { StructuredData } from './StructuredData';

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "GoLang", icon: SiGo },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: Coffee },
        { name: "C", icon: SiC },
        { name: "HTML/CSS", icon: SiHtml5 }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: FaServer,
      skills: [
        { name: "Go", icon: SiGo },
        { name: "Chi", icon: Server },
        { name: "Mux", icon: Server },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress }
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: [
        { name: "AWS (EC2, Lambda, ALB, CodeBuild, CloudWatch)", icon: SiAmazon },
        { name: "Docker", icon: SiDocker },
        { name: "Linux", icon: Monitor },
        { name: "Nginx", icon: Server },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub }
      ]
    },
    {
      id: 4,
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "DynamoDB", icon: Database },
        { name: "Redis", icon: Database },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiPostgresql }
      ]
    },
    {
      id: 5,
      title: "Frontend Development",
      icon: FaCode,
      skills: [
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiCss3 }
      ]
    },
    {
      id: 6,
      title: "Data Structures & Algorithms",
      icon: FaTools,
      skills: [
        { name: "150+ Problems Solved", icon: Award },
        { name: "LeetCode", icon: Code2 },
        { name: "GeeksforGeeks", icon: Globe }
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
              <a href="/contact" className="px-8 py-4 bg-gray-900 w-fit text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group mx-auto">
                Get In Touch
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 