import SkillBadge from "@/components/SkillBadge";
import ScrollReveal from "@/components/ScrollReveal";

export default function SkillsPage() {
  const skills = [
    { name: "C++", level: "Intermediate", percent: 85 },
    { name: "Python", level: "Intermediate", percent: 65 },
    { name: "React", level: "Intermediate", percent: 70 },
    { name: "Tailwind", level: "Intermediate", percent: 70 },
    { name: "TypeScript", level: "Intermediate", percent: 70 },
    { name: "JavaScript", level: "Intermediate", percent: 70 },
    { name: "Docker", level: "Beginner-Intermediate", percent: 50 },
    { name: "Linux", level: "Intermediate", percent: 70 },
  ];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal delay={0}><h1 className="text-3xl font-bold">Skills & Passions</h1></ScrollReveal>
        <ScrollReveal delay={80}><p className="mt-2 text-zinc-600">A quick overview of technical skills and areas I enjoy working in.</p></ScrollReveal>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 80}>
              <div>
                <SkillBadge name={s.name} level={s.level} percent={s.percent} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8">
          <ScrollReveal delay={skills.length * 80}><h2 className="text-2xl font-semibold">Other passions</h2></ScrollReveal>
          <ScrollReveal delay={skills.length * 80 + 80}>
            <p className="mt-3 text-zinc-600">
              Beyond coding, I’m active in robotics (FTC), where I work on mechanical design, programming controllers, and integrating sensors as part of a school team. I also mentor younger learners through CoderDojo, helping newcomers build small projects and learn programming fundamentals.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={skills.length * 80 + 160}>
            <p className="mt-3 text-zinc-600">
              I regularly participate in developer networking events and tech meetups, and volunteer at local community events to promote STEM and open-source. These activities help me learn faster, meet collaborators, and give back to the local tech community.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
