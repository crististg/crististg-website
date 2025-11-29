import React from "react";
import ScrollReveal from "./ScrollReveal";

type Item = {
  year?: string;
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
};

type Props = {
  items: Item[];
  heading?: string;
  dark?: boolean;
};

export default function Timeline({ items, heading = "Timeline" }: Props) {
  // group items by year
  const groups: Record<string, Item[]> = {};
  items.forEach((it) => {
    const y = it.year && it.year.trim() ? it.year.trim() : "Undated";
    if (!groups[y]) groups[y] = [];
    groups[y].push(it);
  });

  // sort years ascending (oldest -> newest). Treat non-numeric years as strings and place them first.
  const years = Object.keys(groups).sort((a, b) => {
    const na = Number(a);
    const nb = Number(b);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
    if (!Number.isNaN(na)) return -1; // numeric a comes before non-numeric b
    if (!Number.isNaN(nb)) return 1;
    return a.localeCompare(b);
  });

  // colors should follow the app theme via CSS variables; avoid hard-coded dark/light overrides
  const lineColor = "bg-zinc-200/40 dark:bg-zinc-700/40";
  const bubbleBg = "bg-[var(--color-background)] border";
  const bubbleText = "text-[var(--color-foreground)]";
  const cardBg = "bg-[var(--color-background)]";
  const descText = "text-[rgba(var(--color-foreground-rgb, 23,23,23),0.65)] dark:text-[rgba(255,255,255,0.72)]";
  const linkClass = "text-blue-600 hover:underline dark:text-blue-400";

  return (
    <section aria-labelledby="timeline-heading" className={`mt-6`}>

      <div className="mt-6 relative">
  {/* continuous vertical line (uses neutral tint so it follows site theme) */}
  <span className={`hidden sm:block absolute left-8 top-0 bottom-0 w-px ${lineColor} z-0`} aria-hidden />

        <div className="space-y-8">
          {years.map((year, yi) => (
            <ScrollReveal key={year} delay={yi * 80}>
              <div className="relative pl-14 sm:pl-20">
                {/* Year bubble centered relative to the group's middle */}
                <div className="absolute left-8 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${bubbleBg} flex items-center justify-center shadow-sm z-10 border`}>
                    <span className={`text-xs sm:text-sm ${bubbleText} font-medium`}>{year}</span>
                  </div>
                </div>

                <div>
                  {/* Events under the year - each event on its own block */}
                  <div className="grid gap-3">
                    {groups[year].map((it, i) => (
                      <div key={i} className={`card p-4 micro-card text-[var(--color-foreground)]`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-semibold leading-tight">{it.title}</h3>
                              {it.subtitle && <div className="text-xs text-zinc-500">· {it.subtitle}</div>}
                            </div>
                            {it.description && <p className={`mt-1 text-sm ${descText} text-[var(--color-foreground)]`}>{it.description}</p>}
                          </div>

                          {it.link && (
                            <div className="shrink-0 ml-4">
                              <a href={it.link} target="_blank" rel="noreferrer" className={`text-xs ${linkClass}`}>Learn more →</a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
