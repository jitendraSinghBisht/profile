const skills = ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'AWS', 'MongoDB', 'CI/CD'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-gray-700 px-4 py-2 rounded">{skill}</span>
        ))}
      </div>
    </section>
  );
}
