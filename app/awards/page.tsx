import ScrollReveal from "@/components/ScrollReveal";

export default function AwardsPage() {
  const awards = [
    { title: "Digital Innovation & Creativity — TaskHive (Silver Medal, 5th place)", year: 2025, org: "National Olympiad" },
    { title: "National Olympiad in Informatics — 57th place", year: 2025, org: "National Olympiad" },
  ];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal delay={0}><h1 className="text-3xl font-bold">Awards</h1></ScrollReveal>
        <ul className="mt-6 space-y-4">
          {awards.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 80}>
              <li className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{a.title}</div>
                    <div className="text-sm text-zinc-500">{a.org}</div>
                  </div>
                  <div className="text-sm text-zinc-500">{a.year}</div>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
