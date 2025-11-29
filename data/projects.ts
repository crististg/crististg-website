import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "Personal Website — a portfolio and presentation of my real-world web development skills, awards, projects, and personality presented with a minimalist style. It serves as a meaningful presentation of my work and design approach. Created in November 2025.",
    date: "November 2025",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/crististg/crististg-website",
    image: "/images/personal-website.png",
    slug: "personal-website",
  },
  {
    title: "Wizztech Website",
    description:
      "WizzTech Website — the official site for FTC team 19094 WizzTech from Liceul Teoretic Grigore Moisil Timișoara. A full presentation of the team, its mission, projects, and competition history.",
    tech: ["Next.js", "React", "TypeScript"],
    link: "https://wizztech-ro.vercel.app/",
    github: "https://github.com/mihai888nextlab/wizztech.ro",
    date: "October 2025",
    image: "/images/wizztech-website.png",
    slug: "wizztech-website",
  },
  {
    title: "Andance Website",
    description:
      "Andance Website — the official site of my dancesport club, representing the club's elegance, vibe, family, and dedication to the sport.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://andance.vercel.app/",
    github: "https://github.com/crististg/andance-romanian-rhythm",
    date: "August 2025",
    image: "/images/andance-website.png",
    slug: "andance-website",
  },
  {
    title: "TaskHive",
    description:
      "TaskHive — a collaborative platform that simplifies team organization and task management with an intuitive UI and a dynamic, admin-defined org chart. Role-based task assignment ensures clear responsibility and efficient delegation. Built modularly with an Agile approach and ready for AI-assisted features.",
    tech: ["React", "Node.js", "AI (RAG)"],
    link: "https://taskhive.tech",
    github: "https://github.com/mihai888nextlab/taskhive",
    date: "May 2025",
    image: "/images/taskhive.png",
    slug: "taskhive",
  },
  {
    title: "comppg",
    description:
      "comppg — a competitive programming C++ library with implementations of common algorithms and data structures, plus clear explanations for each algorithm to help learning and contest preparation.",
    tech: ["C++"],
    github: "https://github.com/crististg/comppg",
    date: "October 2025",
    image: "/images/comppg.png",
    slug: "comppg",
  },
  {
    title: "EcoTag",
    description:
      "EcoTag — Scan. Compare. Decide. EcoTag helps shoppers make faster, more sustainable purchasing decisions by surfacing concise, trustworthy sustainability information right where choices are made (product pages and in-store barcode scanning). Created for the UniHack 2025 hackathon.",
    tech: ["TypeScript", "React", "WebExtension"],
    link: "",
    github: "https://github.com/mihai888nextlab/ecotag",
    date: "November 2025",
    image: "/images/ecotag.png",
    slug: "ecotag",
  },
  {
    title: "FRDS Calendar Lot",
    description:
      "FRDS Calendar Lot — a platform built for the National Dancesport Federation of Romania to let judges and dancers view and maintain a database of events they participated in, with event details and photos. Created to help officials and athletes easily find participation history and event media.",
    tech: ["React", "Next.js"],
    link: "",
    github: "https://github.com/crististg/FRDS-Calendar-Lot",
    date: "November 2025",
    image: "/images/frds-calendar.png",
    slug: "frds-calendar-lot",
  },
];

export default projects;
