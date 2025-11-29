import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal delay={0}>
          <h1 className="text-3xl font-bold">About — Cristi Stiegelbauer</h1>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="mt-4 text-zinc-600">
            I’m Cristi Stiegelbauer — a 16‑year‑old high school student from Timișoara studying at Theoretical High School "Grigore Moisil". I build web applications and systems, and I enjoy mentoring others and creating tools that help teams work better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2 className="mt-6 text-lg font-medium">Highlights</h2>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <ul className="mt-2 list-disc list-inside text-zinc-600">
            <li>Founder & developer of TaskHive — an AI-ready task management platform (Digital Innovation & Creativity National Olympiad — 5th Place, Silver Medal).</li>
            <li>Participant in the National Olympiad in Informatics (placed 57th).</li>
            <li>Active in robotics (FTC) and community mentoring through CoderDojo.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <h2 className="mt-6 text-lg font-medium">Roles & Activities</h2>
        </ScrollReveal>

        <ul className="mt-2 list-disc list-inside text-zinc-600">
          <ScrollReveal delay={400}><li>Leader of the Finance & Marketing Department — WizzTech (FTC team)</li></ScrollReveal>
          <ScrollReveal delay={480}><li>Founder / Organizer / Mentor — CoderDojo @Moisil (coding club for younger students)</li></ScrollReveal>
          <ScrollReveal delay={560}><li>Vice President — Student Council</li></ScrollReveal>
        </ul>

        <ScrollReveal delay={640}>
          <h2 className="mt-6 text-lg font-medium">Education</h2>
        </ScrollReveal>

        <ScrollReveal delay={720}>
          <p className="mt-2 text-zinc-600">Theoretical High School "Grigore Moisil", Timișoara — current student. My coursework and personal projects focus on software engineering, algorithms, and systems programming.</p>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <h2 className="mt-6 text-lg font-medium">Technical Interests & Skills</h2>
        </ScrollReveal>

        <ScrollReveal delay={880}>
          <p className="mt-2 text-zinc-600">Web Development (Next.js, React, TypeScript), Low-Level Programming (C++), Operating Systems, Docker & Linux, and building developer tools and community projects.</p>
        </ScrollReveal>

        {/* Timeline moved to the Awards page per user's request. */}
      </div>
    </section>
  );
}
