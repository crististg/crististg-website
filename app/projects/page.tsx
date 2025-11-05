import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Personal Website",
    description: "This portfolio built with Next.js. Minimal, fast, and easy to maintain.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/crististg/crististg-website",
    // image placed in public/images/
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/personal-website.png?raw=true",
  },
  {
    title: "Wizztech Website",
    description: "Wizztech — a marketing site built with modern Next.js tooling.",
    tech: ["Next.js", "React", "TypeScript"],
    link: "https://wizztech-ro.vercel.app/",
    github: "https://github.com/mihai888nextlab/wizztech.ro",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/wizztech-website.png?raw=true",
  },
  {
    title: "TaskHive",
    description: "TaskHive — a task & hierarchy management tool for teams (taskhive.tech).",
    tech: ["React", "Node.js", "AI (RAG)"],
    link: "https://taskhive.tech",
    github: "https://github.com/mihai888nextlab/taskhive",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/taskhive.png?raw=true",
  },
  {
    title: "comppg",
    description: "comppg — an open-source C++ library for competitive programming.",
    tech: ["C++"],
    // no external demo link for library, only the GitHub repo
    github: "https://github.com/crististg/comppg",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/comppg.png?raw=true",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-zinc-600">Selected work and experiments — short descriptions and links to demos or repos.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tech={p.tech}
              link={p.link}
              github={p.github}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
