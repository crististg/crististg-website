export default function AboutPage() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold">About — Cristian Stiegelbauer</h1>

        <p className="mt-4 text-zinc-600">
          I’m Cristian, a 16-year-old high school student from Timișoara studying at Theoretical High School "Grigore Moisil".
        </p>

        <p className="mt-3 text-zinc-600">
          My main interests are Web Development, Low-Level Programming, Operating Systems, and business & community involvement. I enjoy building useful tools and teaching others to code.
        </p>

        <h2 className="mt-6 text-lg font-medium">Roles & Activities</h2>
        <ul className="mt-2 list-disc list-inside text-zinc-600">
          <li>Leader of the Finance and Marketing Department — WizzTech (FTC robotics team)</li>
          <li>Founder / Organizer / Mentor — CoderDojo @Moisil (coding club for primary & secondary students)</li>
          <li>Vice President — Student Council at my high school</li>
        </ul>

        <h2 className="mt-6 text-lg font-medium">Competitions & Projects</h2>
        <p className="mt-2 text-zinc-600">I participated in the National Olympiad in Informatics (57th place) and I was awarded 5th Place and a Silver Medal in the Digital Innovation & Creativity National Olympiad for my project <a href="https://taskhive.tech" className="text-blue-600 hover:underline">TaskHive</a>.</p>

        <p className="mt-3 text-zinc-600">TaskHive is a solution for teams and organizations to manage tasks and hierarchy, enhanced with AI. We used Retrieval-Augmented Generation (RAG) so the AI agent has full information about teams and can act as a helpful assistant to manage tasks.</p>
      </div>
    </section>
  );
}
