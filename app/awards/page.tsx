import ScrollReveal from "@/components/ScrollReveal";
import Timeline from "@/components/Timeline";

export default function AwardsPage() {
  const items = [
    // 2025 events (CoderDojo was the first thing in 2025)
    { year: "2025", title: "CoderDojo @Moisil", subtitle: "Founder & Mentor", description: "Organise and mentor beginner coding workshops for school students." },
    { year: "2025", title: "National Olympiad in Informatics", subtitle: "Participant", description: "Placed 57th in the National Olympiad in Informatics." },
    { year: "2025", title: "Digital Innovation & Creativity — TaskHive", subtitle: "5th Place (Silver)", description: "Awarded 5th Place and a Silver Medal in the Digital Innovation & Creativity National Olympiad for TaskHive.", link: "https://taskhive.tech" },
    // 2024 event
    { year: "2024", title: "FTC — WizzTech", subtitle: "Leader (Finance & Marketing)", description: "Leading finance and marketing efforts for the school robotics team and contributing to design and outreach." },
  ];

  // sort oldest -> newest by numeric year (handles missing years)
  items.sort((a, b) => (Number(a.year || 0) - Number(b.year || 0)) || 0);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal delay={0}><h1 className="text-3xl font-bold">Awards & Activities</h1></ScrollReveal>

        <div className="mt-6">
          <div className="modal-panel p-8">
            <Timeline heading="Awards & Activities" items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
