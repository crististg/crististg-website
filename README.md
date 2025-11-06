# crististg-website

Personal portfolio built with Next.js to showcase projects, skills and contact information.

This repo contains the source for crististg.com — a small, performant portfolio with attention to accessibility and microinteractions.

## What's included / recent changes

- Polished microinteractions (buttons, links, cards, badges) implemented in `app/globals.css` and applied across components for a tactile feel.
- GitHub Actions CI workflow (`.github/workflows/ci.yml`) that runs lint, build and a Lighthouse smoke check and uploads the report as an artifact.

## Local development

Install dependencies and run the dev server:

```bash
npm ci
npm run dev

# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Run the linter:

```bash
npm run lint
```

## How to test microinteractions

- Open the site locally and try hovering links, the Contact button in the header, project cards, skill badges and social icons in the footer.
- For keyboard accessibility check: Tab through interactive elements and verify visible focus outlines and meaningful aria-labels.

## Contributing / Next improvements

If you want to make changes or improve the site, here are suggested next steps (high impact):

- Add detailed project case studies in `app/projects/[slug]/page.tsx` (problem, role, architecture, screenshots, links).
- Replace external `<img>` usage with Next.js `Image` for better LCP and CWV.
- Add reduced-motion support and finish accessibility fixes.
- Add unit tests (Jest + RTL) and Playwright smoke tests; extend CI to run tests and Lighthouse thresholds.

## Notes

- External images (Simple Icons CDN) are currently used for some icons. If you change to `next/image`, update `next.config.ts` to allow the CDN domain.
- The Lighthouse step in CI is a smoke check and uploads `lighthouse.json` artifact for inspection. Adjust it to fail the job on low scores if you prefer.

---

If you'd like, I can implement any of the next improvements above — tell me which and I will start.
