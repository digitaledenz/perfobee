
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - doc.clientHeight;

        const progress =
          scrollable > 0
            ? Math.min(100, Math.max(0,
                (window.scrollY / scrollable) * 100
              ))
            : 0;

        if (progressRef.current) {
          progressRef.current.style.transform =
            `scaleX(${progress / 100})`;
        }
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[9999] h-[3px]"
    >
      <div
        ref={progressRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#9c500d] via-[#e39124] to-[#b45b0e]"
      />
    </div>
  );
}
