export default function Footer() {
  return (
    <footer className="border-t border-black/6 py-8">
      <div className="mx-auto max-w-4xl px-6 text-sm text-zinc-600">
        <div className="flex items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Cristi — Built with Next.js</span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cristi_stg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/cristian-stiegelbauer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7.5 10.5V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
                <path d="M11 12.5v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M11 9.5c1.2 0 2.5.4 3.2 1.7V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>

            <a
              href="https://github.com/crististg/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C17.71 16.53 20 13.54 20 10c0-4.42-3.58-8-8-8z" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Curriculum Vitae (placeholder, add /public/cv.pdf later)"
              className="hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 13h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M8 17h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
