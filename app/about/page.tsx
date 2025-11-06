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
            I’m Cristi, a 16-year-old high school student from Timișoara studying at Theoretical High School "Grigore Moisil".
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-3 text-zinc-600">
            My main interests are Web Development, Low-Level Programming, Operating Systems, and business & community involvement. I enjoy building useful tools and teaching others to code.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <h2 className="mt-6 text-lg font-medium">Roles & Activities</h2>
        </ScrollReveal>

        <ul className="mt-2 list-disc list-inside text-zinc-600">
          <ScrollReveal delay={320}><li>Leader of the Finance and Marketing Department — WizzTech (FTC robotics team)</li></ScrollReveal>
          <ScrollReveal delay={400}><li>Founder / Organizer / Mentor — CoderDojo @Moisil (coding club for primary & secondary students)</li></ScrollReveal>
          <ScrollReveal delay={480}><li>Vice President — Student Council at my high school</li></ScrollReveal>
        </ul>

        <ScrollReveal delay={560}>
          <h2 className="mt-6 text-lg font-medium">Competitions & Projects</h2>
        </ScrollReveal>

        <ScrollReveal delay={640}>
          <p className="mt-2 text-zinc-600">I participated in the National Olympiad in Informatics (57th place) and I was awarded 5th Place and a Silver Medal in the Digital Innovation & Creativity National Olympiad for my project <a href="https://taskhive.tech" className="text-blue-600 hover:underline">TaskHive</a>.</p>
        </ScrollReveal>

        <ScrollReveal delay={720}>
          <p className="mt-3 text-zinc-600">TaskHive is a solution for teams and organizations to manage tasks and hierarchy, enhanced with AI. We used Retrieval-Augmented Generation (RAG) so the AI agent has full information about teams and can act as a helpful assistant to manage tasks.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
