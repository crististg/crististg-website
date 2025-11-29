type Props = {
  name: string;
  level?: string; // textual level like 'Intermediate'
  percent?: number; // 0-100
  className?: string;
};

function Icon({ name }: { name: string }) {
  const slugMap: Record<string, string> = {
    "c / c++": "cplusplus",
    "c/c++": "cplusplus",
    "c++": "cplusplus",
    "c": "c",
    python: "python",
    react: "react",
    "tailwind css": "tailwindcss",
    tailwind: "tailwindcss",
    typescript: "typescript",
    javascript: "javascript",
    js: "javascript",
    docker: "docker",
    linux: "linux",
  };

  const slug = slugMap[name.toLowerCase()];
  if (slug) {
    const src = `https://cdn.simpleicons.org/${encodeURIComponent(slug)}`;
    return (
      <img src={src} alt={`${name} icon`} width={28} height={28} className="block" />
    );
  }

  // fallback simple square icon
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#666" />
    </svg>
  );
}

export default function SkillBadge({ name, className = "" }: Props) {
  const percent = ("percent" in (arguments[0] || {}) && (arguments[0] as any).percent) || undefined;
  const level = ("level" in (arguments[0] || {}) && (arguments[0] as any).level) || undefined;

  return (
    <div className={`${className}`}>
      {/* Mobile: minimal row showing only icon + name */}
  <div className="flex items-center gap-3 card p-2 sm:hidden micro-badge">
        <div className="shrink-0 w-7 h-7" aria-hidden>
          <Icon name={name} />
        </div>
        <div className="text-sm font-medium truncate">{name}</div>
      </div>

      {/* Desktop/tablet: original stacked layout with percent, level and progress bar */}
  <div className="hidden sm:flex flex-col gap-2 card p-2 micro-badge">
        <div className="flex items-center gap-3">
          <div className="shrink-0" aria-hidden>
            <Icon name={name} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">{name}</div>
            {level && <div className="text-xs text-zinc-500">{level}</div>}
          </div>
          {typeof percent === "number" && (
            <div className="text-sm text-zinc-500">{percent}%</div>
          )}
        </div>

        {typeof percent === "number" && (
          <div className="h-2 w-full rounded-full bg-zinc-800/10 dark:bg-zinc-200/8">
            <div
              className="h-2 rounded-full bg-zinc-800 dark:bg-zinc-200"
              style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
