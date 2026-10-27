
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function FloatingControls() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 180);
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const visible = mounted && scrolled;

  const visibilityClasses = visible
    ? "visible translate-y-0 opacity-100"
    : "invisible pointer-events-none translate-y-4 opacity-0";

  const backToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      {/* Floating Theme Toggle — Left Bottom */}
      <div
        aria-hidden={!visible}
        inert={!visible}
        className={`fixed bottom-5 left-5 z-[80]
          transition-[opacity,transform,visibility]
          duration-300 ease-out
          motion-reduce:transition-none
          ${visibilityClasses}`}
      >
        <div
          className="rounded-full border border-[#dfba90]
          bg-white/90 p-1
          shadow-[0_12px_35px_rgba(111,62,23,0.2)]
          backdrop-blur-xl
          dark:border-[#694421]
          dark:bg-[#241a14]/95"
        >
          <ThemeToggle />
        </div>
      </div>

      {/* Back to Top — Right Bottom */}
      <button
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        title="Back to top"
        tabIndex={visible ? 0 : -1}
        className={`brand-button fixed bottom-5 right-5
          z-[80] flex h-12 w-12 items-center
          justify-center rounded-full
          transition-[opacity,transform,visibility]
          duration-300 ease-out
          motion-reduce:transition-none
          ${visibilityClasses}`}
      >
        <ArrowUp size={21} strokeWidth={2} />
      </button>
    </>
  );
}
