"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tech?: string[];
  date?: string;
  images?: string[];
  link?: string;
  github?: string;
};

export default function ProjectModal({ open, onClose, title, description, tech = [], date, images = [], link, github }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const prevActiveRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (open) {
      prevActiveRef.current = document.activeElement as HTMLElement | null;
      // hide background from screen readers and try to inert it
      const header = document.querySelector("header");
      const main = document.getElementById("content");
      const footer = document.querySelector("footer");
      try {
        if (header) {
          header.setAttribute("aria-hidden", "true");
          // @ts-ignore
          header.inert = true;
        }
        if (main) {
          main.setAttribute("aria-hidden", "true");
          // @ts-ignore
          main.inert = true;
        }
        if (footer) {
          footer.setAttribute("aria-hidden", "true");
          // @ts-ignore
          footer.inert = true;
        }
      } catch (e) {
        // inert might not be supported; aria-hidden is still applied
      }

      document.body.style.overflow = "hidden";
      // focus first focusable element inside modal after a tick
      setTimeout(() => {
        const node = dialogRef.current;
        if (!node) return;
        const focusable = node.querySelector<HTMLElement>("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])");
        if (focusable) focusable.focus();
      }, 10);
    }

    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "ArrowRight") {
        setActive((i) => Math.min(images.length - 1, i + 1));
      }
      if (e.key === "ArrowLeft") {
        setActive((i) => Math.max(0, i - 1));
      }
      if (e.key === "Tab") {
        // simple focus trap
        const node = dialogRef.current;
        if (!node) return;
        const focusable = Array.from(node.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // restore background
      const header = document.querySelector("header");
      const main = document.getElementById("content");
      const footer = document.querySelector("footer");
      try {
        if (header) {
          header.removeAttribute("aria-hidden");
          // @ts-ignore
          header.inert = false;
        }
        if (main) {
          main.removeAttribute("aria-hidden");
          // @ts-ignore
          main.inert = false;
        }
        if (footer) {
          footer.removeAttribute("aria-hidden");
          // @ts-ignore
          footer.inert = false;
        }
      } catch (e) {}
      document.body.style.overflow = "";
      // restore previous focus
      setTimeout(() => prevActiveRef.current?.focus(), 10);
    };
  }, [open, images.length, onClose]);

  if (!open) return null;

  const mainImage = images[active] || "/images/project-placeholder.svg";

  const modal = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div ref={dialogRef} role="dialog" aria-modal="true" className="modal-inner relative z-10 w-full max-w-[1100px] max-h-[90vh] overflow-auto">
          <button aria-label="Close" className="modal-close micro-focus" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="p-4 modal-columns">
            <div className="modal-left modal-panel">
              <div className="relative modal-image-frame w-full h-72 sm:h-[440px] bg-black/5 rounded overflow-hidden">
                <Image src={mainImage} alt={`${title} screenshot`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 1200px" />
              </div>

              {images.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-auto">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Show image ${i + 1}`}
                      aria-pressed={i === active}
                      className={`shrink-0 w-20 h-12 rounded overflow-hidden border bg-transparent ${i === active ? "ring-2 ring-indigo-400" : "opacity-80"}`}
                    >
                      <Image src={src} alt={`${title} thumb ${i + 1}`} width={160} height={96} className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-divider" aria-hidden />

            <div className="modal-right modal-panel">
              <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>

                <div className="modal-body">
                  <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{description}</p>

                  {date && (
                    <div className="mt-4">
                      <div className="text-xs text-zinc-500 mb-2">Date</div>
                      <div className="text-sm text-zinc-700 dark:text-zinc-300">{date}</div>
                    </div>
                  )}

                  {tech.length > 0 && (
                    <div className="mt-4">
                      <div className="text-xs text-zinc-500 mb-2">Tech</div>
                      <div className="flex flex-wrap gap-2">
                        {tech.map((t) => (
                          <span key={t} className="rounded-full bg-black/5 px-2 py-1 text-xs">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="modal-actions-bottom">
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="micro-btn micro-focus modal-action-btn px-3 py-1">Live</a>
                  )}
                  {github && (
                    <a href={github} target="_blank" rel="noreferrer" className="micro-btn micro-focus modal-action-btn px-3 py-1">Code</a>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    return createPortal(modal, document.body);
  }

  return null;
}
