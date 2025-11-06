import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import HeroParallax from "@/components/HeroParallax";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "TaskHive",
    description: "TaskHive — a task & hierarchy management tool for teams (taskhive.tech).",
    tech: ["React", "Node.js", "AI (RAG)"],
    link: "https://taskhive.tech",
    github: "https://github.com/mihai888nextlab/taskhive",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/taskhive.png?raw=true",
  },
  {
    title: "Wizztech Website",
    description: "Wizztech — a marketing site built with modern Next.js tooling.",
    tech: ["Next.js", "React", "TypeScript"],
    link: "https://wizztech-ro.vercel.app/",
    github: "https://github.com/mihai888nextlab/wizztech.ro",
    image: "https://github.com/crististg/crististg-website/blob/main/public/images/wizztech-website.png?raw=true",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-full">
      <section className="py-8">
        <HeroParallax>
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal delay={0}>
              <h1 className="text-5xl font-extrabold leading-tight">Hi, I’m Cristi Stiegelbauer.</h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
                I’m a 16-year-old high school student from Timișoara (Theoretical High School "Grigore Moisil"). I’m passionate about Web Development, Low-Level Programming, Operating Systems, and building community and business initiatives.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@cristi.example" className="rounded-full bg-black px-4 py-2 text-sm text-white transition-transform hover:scale-105">Work with me</a>
                <Link href="projects" className="rounded-full border px-4 py-2 text-sm transition-transform hover:scale-105">See projects</Link>
                <Link href="about" className="rounded-full border px-4 py-2 text-sm transition-transform hover:scale-105">About me</Link>
              </div>
            </ScrollReveal>
          </div>
        </HeroParallax>
      </section>

      <section id="skills" className="py-8">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold">Skills</h2>

          {/* preview: only show a few skills on the homepage */}
          {(() => {
            const all = [

              { name: "C++", percent: 85 },
              { name: "Python", percent: 65 },
              { name: "React", percent: 70 },
              { name: "Tailwind", percent: 70 },
              { name: "TypeScript", percent: 70 },
              { name: "JavaScript", percent: 70 },
              { name: "Docker", percent: 50 },
              { name: "Linux", percent: 70 },
            ];

            const preview = all.slice(0, 4); // show only first 4 as a preview

            return (
              <>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                  {preview.map((s, i) => (
                    <ScrollReveal key={s.name} delay={i * 80}>
                      <div>
                        <SkillBadge name={s.name} percent={s.percent} />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="mt-4">
                  <ScrollReveal delay={360}>
                    <Link href="skills" className="text-sm font-medium text-blue-600 hover:underline">See all skills →</Link>
                  </ScrollReveal>
                </div>
              </>
            );
          })()}

          <div className="mt-6">
            <ScrollReveal delay={0}><h3 className="text-lg font-medium">Passions</h3></ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="mt-2 text-zinc-600">
                Beyond coding, I’m active in robotics (FTC), where I work on mechanical design, programming controllers, and integrating sensors as part of a school team. I also mentor younger learners through CoderDojo, helping newcomers build small projects and learn programming fundamentals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-3 text-zinc-600">
                I regularly participate in developer networking events and tech meetups, and volunteer at local community events to promote STEM and open-source. These activities help me learn faster, meet collaborators, and give back to the local tech community.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="projects" className="py-8">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div>
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    tech={p.tech}
                    link={p.link}
                    github={p.github}
                    image={p.image}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6">
            <ScrollReveal delay={projects.length * 80}>
              <Link href="projects" className="text-sm font-medium text-blue-600 hover:underline">See all projects →</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About section removed per user request (kept site focused: Skills → Projects → Contact) */}

      <section id="contact" className="py-8">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4">Email: <a href="mailto:cristi.stiegelbauer@gmail.com" className="text-blue-600 hover:underline">cristi.stiegelbauer@gmail.com</a></p>
        </div>
      </section>
    </div>
  );
}
