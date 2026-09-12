"use client";

import React, { useRef, useState } from "react";
import { PRIMARY_PROJECTS } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SecondaryProjects } from "@/components/projects/SecondaryProjects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Layers } from "lucide-react";

export function HorizontalProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced) return;

      const section = sectionRef.current;
      const track = trackRef.current;
      const progressBar = progressRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();

      // Only pin & horizontally translate on desktop (>=1024px)
      mm.add("(min-width: 1024px)", () => {
        const totalScroll = track.scrollWidth - window.innerWidth + 120;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.8,
            start: "top top+=80",
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                PRIMARY_PROJECTS.length - 1,
                Math.floor(self.progress * PRIMARY_PROJECTS.length)
              );
              setActiveCardIndex(idx);

              if (progressBar) {
                gsap.set(progressBar, { width: `${self.progress * 100}%` });
              }
            },
          },
        });

        tl.to(track, {
          x: () => -totalScroll,
          ease: "none",
        });

        return () => {
          if (tl.scrollTrigger) tl.scrollTrigger.kill();
          tl.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative overflow-hidden"
      aria-label="Featured Projects"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Desktop Horizontal Scroll Indicator */}
          <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-slate-400">
            <span>
              SYSTEM <span className="text-cyan-400 font-bold">0{activeCardIndex + 1}</span> / 0{PRIMARY_PROJECTS.length}
            </span>
            <div className="w-28 h-2 bg-white/[0.06] border border-white/10 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 w-0 transition-all duration-75 shadow-sm shadow-cyan-500/50"
              />
            </div>
            <span className="text-[10px] text-slate-400 font-medium">[ Horizontal Track ]</span>
          </div>
        </div>
      </div>

      {/* Primary Projects Track */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:max-w-none lg:px-0">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:pl-16 lg:pr-16 w-full lg:w-max overflow-visible"
        >
          {PRIMARY_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      {/* Secondary Projects Set */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mt-12">
        <SecondaryProjects />
      </div>
    </section>
  );
}
