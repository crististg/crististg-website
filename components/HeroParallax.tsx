"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // px per scrollY (smaller = subtler)
};

export default function HeroParallax({ children, className = "", intensity = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    function handleScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // subtle movement proportional to window scroll (clamped)
        const y = window.scrollY || 0;
        const offset = Math.min(80, Math.round(y * intensity));
        const node = el;
        if (node) node.style.transform = `translateY(${offset}px)`;
      });
    }

    // init position
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={`hero-parallax ${className}`}>
      {children}
    </div>
  );
}
