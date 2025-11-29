import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal delay={0}><h1 className="text-3xl font-bold">Projects</h1></ScrollReveal>
        <ScrollReveal delay={80}><p className="mt-2 text-zinc-600">Selected work and experiments — short descriptions and links to demos or repos.</p></ScrollReveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <div>
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  tech={p.tech}
                  date={p.date}
                  link={p.link}
                  github={p.github}
                  image={p.image}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
