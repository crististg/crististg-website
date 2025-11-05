export default function AwardsPage() {
  const awards = [
    { title: "Digital Innovation & Creativity — TaskHive (Silver Medal)", year: 2024, org: "National Olympiad" },
    { title: "National Olympiad in Informatics — 57th place", year: 2024, org: "National Olympiad" },
  ];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold">Awards</h1>
        <ul className="mt-6 space-y-4">
          {awards.map((a) => (
            <li key={a.title} className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-sm text-zinc-500">{a.org}</div>
                </div>
                <div className="text-sm text-zinc-500">{a.year}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
