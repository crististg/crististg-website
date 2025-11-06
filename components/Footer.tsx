export default function Footer() {
  return (
    <footer className="border-t border-black/6 py-8">
      <div className="mx-auto max-w-4xl px-6 text-sm text-zinc-600">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} <a href="https://github.com/crististg/" className="micro-link">crististg</a></span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cristi_stg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="micro-icon"
            >
              {/* Instagram - Simple Icons (CDN) */}
              {/* monochrome brand icon via Simple Icons CDN (zinc-600) */}
              <img src="https://cdn.simpleicons.org/instagram/52525b" alt="Instagram" className="w-5 h-5 block" />
            </a>

            <a
              href="https://www.linkedin.com/in/cristian-stiegelbauer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="micro-icon"
            >
              {/* Bootstrap Icons 'linkedin' glyph (inline, monochrome via currentColor) */}
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146z" />
                <path d="M4.943 12.248V6.169H2.542v6.079h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.327.54-1.327 1.248 0 .694.521 1.248 1.327 1.248zM6.286 12.248h2.4V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.87 0 1.217.664 1.217 1.637v2.116h2.4V9.19c0-2.538-1.355-3.716-3.163-3.716-1.47 0-2.123.811-2.49 1.381h.035V6.169H6.286v6.079z" />
              </svg>
            </a>

            <a
              href="https://github.com/crististg/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="micro-icon"
            >
              {/* GitHub - Simple Icons (CDN) */}
              <img src="https://cdn.simpleicons.org/github/52525b" alt="GitHub" className="w-5 h-5 block" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Curriculum Vitae (placeholder, add /public/cv.pdf later)"
              className="micro-link"
            >
              {/* CV/document icon (cleaner) */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
