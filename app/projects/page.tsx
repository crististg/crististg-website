import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Personal Website",
    description:
      "Personal Website — a portfolio and presentation of my real-world web development skills, awards, projects, and personality presented with a minimalist style. It serves as a meaningful presentation of my work and design approach. Created in November 2025.",
    date: "November 2025",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/crististg/crististg-website",
    // image placed in public/images/
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/personal-website.png?raw=true",
  },
  {
    title: "Wizztech Website",
    description:
      "WizzTech Website — the official site for FTC team 19094 WizzTech from Liceul Teoretic Grigore Moisil Timișoara. A full presentation of the team, its mission, projects, and competition history.",
    tech: ["Next.js", "React", "TypeScript"],
    link: "https://wizztech-ro.vercel.app/",
    github: "https://github.com/mihai888nextlab/wizztech.ro",
    date: "October 2025",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/wizztech-website.png?raw=true",
  },
  {
    title: "Andance Website",
    description:
      "Andance Website — the official site of my dancesport club, representing the club's elegance, vibe, family, and dedication to the sport.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://andance.vercel.app/",
    github: "https://github.com/crististg/andance-romanian-rhythm",
    date: "August 2025",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/andance-website.png?raw=true",
  },
  {
    title: "TaskHive",
    description:
      "TaskHive — a collaborative platform that simplifies team organization and task management with an intuitive UI and a dynamic, admin-defined org chart. Role-based task assignment ensures clear responsibility and efficient delegation. Built modularly with an Agile approach and ready for AI-assisted features.",
    tech: ["React", "Node.js", "AI (RAG)"],
    link: "https://taskhive.tech",
    github: "https://github.com/mihai888nextlab/taskhive",
    date: "May 2025",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/taskhive.png?raw=true",
  },
  {
    title: "comppg",
    description:
      "comppg — a competitive programming C++ library with implementations of common algorithms and data structures, plus clear explanations for each algorithm to help learning and contest preparation.",
    tech: ["C++"],
    // no external demo link for library, only the GitHub repo
    github: "https://github.com/crististg/comppg",
    date: "October 2025",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/comppg.png?raw=true",
  },
  {
    title: "EcoTag",
    description:
      "EcoTag — Scan. Compare. Decide. EcoTag helps shoppers make faster, more sustainable purchasing decisions by surfacing concise, trustworthy sustainability information right where choices are made (product pages and in-store barcode scanning). Created for the UniHack 2025 hackathon.",
    tech: ["TypeScript", "React", "WebExtension"],
    link: "",
    github: "https://github.com/mihai888nextlab/ecotag",
    date: "November 2025",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/ecotag.png?raw=true",
  },
];

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
