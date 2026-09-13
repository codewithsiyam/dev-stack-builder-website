interface ExampleProject {
  name: string;
  summary: string;
  stack: string[];
}

const EXAMPLE_PROJECTS: ExampleProject[] = [
  {
    name: "Storefront Dashboard",
    summary:
      "An admin panel for tracking orders and inventory in real time, built for a small e-commerce team.",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "Realtime Chat App",
    summary:
      "A lightweight messaging app where conversations sync instantly across devices using an in-memory store.",
    stack: ["Next.js", "Redis", "TypeScript"],
  },
  {
    name: "Dev Tools Landing Page",
    summary:
      "A fast, content-driven marketing site for a developer tool, optimized for search and page speed.",
    stack: ["Svelte", "Docker", "JavaScript"],
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Example <span className="text-brand-gradient">Projects</span>
        </h2>
        <p className="mt-2 max-w-2xl text-slate-500">
          A few sample builds that show how different technology stacks come
          together in practice. Mix and match the same way in your own stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {EXAMPLE_PROJECTS.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
            <p className="mt-2 flex-1 text-sm text-slate-500">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
