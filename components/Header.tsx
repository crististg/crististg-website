"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
  <header className="border-b border-black/6 bg-transparent py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold">
          Cristi
        </Link>

        {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm sm:flex">
          <Link href="/projects" className="micro-link">Projects</Link>
          <Link href="/skills" className="micro-link">Skills</Link>
          <Link href="/about" className="micro-link">About</Link>
          <Link href="/awards" className="micro-link">Awards</Link>
         <a href="mailto:cristi.stiegelbauer@gmail.com" className="btn text-sm micro-focus">Contact</a>
         <ThemeToggle />
        </nav>

        {/* Mobile actions */}
        <div className="sm:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center micro-btn micro-icon micro-focus p-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
  <div className="sm:hidden border-t border-black/4 bg-(--color-background)">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/projects" onClick={() => setOpen(false)} className="block micro-link">Projects</Link>
              <Link href="/skills" onClick={() => setOpen(false)} className="block micro-link">Skills</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="block micro-link">About</Link>
              <Link href="/awards" onClick={() => setOpen(false)} className="block micro-link">Awards</Link>
                <div className="flex items-center gap-3">
                  <a href="mailto:cristi.stiegelbauer@gmail.com" className="btn text-sm w-max micro-focus">Contact</a>
                  <ThemeToggle />
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
