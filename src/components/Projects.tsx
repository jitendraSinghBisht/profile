import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Awesome REST API',
    desc: 'Built scalable REST APIs with Node.js, Express, and MongoDB.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    name: 'Cloud Automation',
    desc: 'Automated infrastructure deployment using Terraform and AWS.',
    tech: ['Terraform', 'AWS', 'CI/CD'],
  },
  {
    name: 'Realtime Chat App',
    desc: 'Implemented a websocket-based chat app using Socket.io.',
    tech: ['Node.js', 'Socket.io', 'Redis'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-white mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition overflow-hidden"
          >
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{p.name}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
