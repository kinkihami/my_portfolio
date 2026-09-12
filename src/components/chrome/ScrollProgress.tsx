"use client";

import React, { useEffect, useState } from "react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (!lenis) {
      const handleScroll = () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const current = window.scrollY;
        setProgress(total > 0 ? (current / total) * 100 : 0);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const onScroll = (e: { progress: number }) => {
      setProgress(e.progress * 100);
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-md shadow-cyan-500/50 transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
