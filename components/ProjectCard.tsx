"use client";

type Props = {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  image?: string; // optional image path (public/) or external URL
  github?: string; // optional GitHub repository URL
};

export default function ProjectCard({ title, description, tech = [], link, image, github }: Props) {
  const imgSrc = image || "/images/project-placeholder.svg";

  return (
    <article className="rounded-lg border p-0 shadow-sm micro-card overflow-hidden">
      <div className="h-36 sm:h-44 w-full overflow-hidden bg-black/5">
        <img
          src={imgSrc}
          alt={`${title} screenshot`}
          className="object-cover w-full h-full card-image"
          onError={(e) => {
            // fallback to placeholder if image fails to load in deployment
            const t = e.currentTarget as HTMLImageElement;
            if (!t.dataset.fallback) {
              t.dataset.fallback = "1";
              t.src = "/images/project-placeholder.svg";
            }
          }}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{description}</p>
        {tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="rounded-full bg-black/5 px-2 py-0.5 text-xs">{t}</span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-4">

          <div className="ml-auto flex items-center gap-3">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" title="View source (GitHub)" className="micro-icon text-zinc-600">
                {/* GitHub icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.16.59.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
                </svg>
              </a>
            )}

            {link && (
              <a href={link} target="_blank" rel="noreferrer" title="Open project" className="micro-icon text-zinc-600">
                {/* external link icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 21H3V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
