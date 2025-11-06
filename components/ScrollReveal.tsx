"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.08,
  rootMargin = "0px",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // apply configured delay via inline style so CSS transition-delay works
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            if (once) io.unobserve(target);
          } else if (!once) {
            target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold, rootMargin, once]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
