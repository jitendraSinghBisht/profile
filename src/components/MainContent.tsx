type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export default function MainContent({ theme, toggleTheme }: Props) {
  return (
    <main className="flex-1 p-10 overflow-y-auto">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 text-sm px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>

      <section id="intro" className="mb-16">
        <h2 className="text-3xl font-bold mb-2">Hey 👋</h2>
        <p className="text-gray-600 dark:text-gray-300">I'm a backend-focused developer interested in scalable systems, clean architecture, and cloud automation.</p>
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>REST API for E-Commerce</strong>  
            <p className="text-sm text-gray-500">Node.js, Express, PostgreSQL — Auth, Cart, Orders</p>
          </li>
          <li>
            <strong>CI/CD Infrastructure</strong>  
            <p className="text-sm text-gray-500">Terraform + GitHub Actions for AWS microservices</p>
          </li>
          <li>
            <strong>Socket.io Chat App</strong>  
            <p className="text-sm text-gray-500">Realtime chat with Redis PubSub & JWT auth</p>
          </li>
        </ul>
      </section>

      <section id="skills" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold">Languages</h3>
            <ul className="text-gray-500 dark:text-gray-400">TypeScript, JavaScript, Python, SQL</ul>
          </div>
          <div>
            <h3 className="font-semibold">Tools</h3>
            <ul className="text-gray-500 dark:text-gray-400">Docker, Postman, Git, GitHub Actions</ul>
          </div>
          <div>
            <h3 className="font-semibold">Frameworks</h3>
            <ul className="text-gray-500 dark:text-gray-400">Express.js, FastAPI</ul>
          </div>
          <div>
            <h3 className="font-semibold">Cloud</h3>
            <ul className="text-gray-500 dark:text-gray-400">AWS (EC2, S3, RDS), Terraform</ul>
          </div>
        </div>
      </section>

      <section id="experience" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <strong>SDE Intern @ SomeCompany</strong>
            <p className="text-gray-500 dark:text-gray-400">Built internal tools to automate infrastructure provisioning. Dockerized services and wrote deployment pipelines.</p>
            <p className="text-xs text-gray-400">Jan 2024 - July 2024</p>
          </li>
        </ul>
      </section>

      <section id="blog">
        <h2 className="text-xl font-semibold mb-2">Blog</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">No posts yet — coming soon!</p>
      </section>
    </main>
  );
}
