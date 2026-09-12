"use client";

import React, { useRef } from "react";
import { EXPERIENCES, EDUCATION } from "@/content/experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, Sparkles, Building2 } from "lucide-react";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced) return;

      const line = lineRef.current;
      const container = containerRef.current;
      if (!line || !container) return;

      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReduced] }
  );

  return (
    <section id="experience" className="py-20" aria-label="Experience and Education Timeline">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work Experience & Education
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-400">
            CHRONOLOGICAL PRODUCTION LOG
          </span>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-6 sm:pl-10 space-y-10">
          {/* Vertical Dynamic Drawing Line */}
          <div
            ref={lineRef}
            className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-[3px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 shadow-sm shadow-cyan-500/50"
          />
          {/* Static Background Rail */}
          <div className="absolute left-2.5 sm:left-3.5 top-0 bottom-0 w-[3px] bg-white/10 -z-10" />

          {/* Work Experiences */}
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-6 sm:-left-10 top-2 h-7 w-7 rounded-full bg-[#04060C] border-2 border-cyan-400 flex items-center justify-center -translate-x-1/2 shadow-lg shadow-cyan-500/30">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    item.isCurrent ? "bg-cyan-400 animate-ping" : "bg-slate-400"
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                      <span className="text-cyan-400 font-semibold">{item.company}</span>
                      {item.location && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400">{item.location}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200" aria-label="Key contributions">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold mt-0.5">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-3 flex flex-wrap gap-1.5 border-t border-white/5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Node */}
          <div className="relative group pt-4">
            <div className="absolute -left-6 sm:-left-10 top-6 h-7 w-7 rounded-full bg-[#04060C] border-2 border-indigo-400 flex items-center justify-center -translate-x-1/2 shadow-lg shadow-indigo-500/30">
              <GraduationCap className="h-3.5 w-3.5 text-indigo-400" />
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Academic Foundation
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {EDUCATION.institution} • {EDUCATION.mode}
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                <span>{EDUCATION.period}</span>
                <span className="text-emerald-400 font-semibold">({EDUCATION.status})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
