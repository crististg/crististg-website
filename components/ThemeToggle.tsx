"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Initialize to a deterministic value on the server/client to avoid hydration mismatches.
  // We'll read the user's stored preference on mount and update the theme then.
  const [theme, setTheme] = useState<'light'|'dark'>('light');

  // On mount, read stored preference or system preference and update theme.
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        setTheme(stored as 'dark'|'light');
        return;
      }
    } catch (e) {}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // ensure document element has the data-theme attribute
    const el = document.documentElement;
    el.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => t === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="micro-btn micro-focus"
      style={{ padding: '8px', borderRadius: 9999 }}
    >
      {theme === 'dark' ? (
        // sun icon for light -> shows current dark with option to switch
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        // moon icon for light
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
