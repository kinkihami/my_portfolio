"use client";

import React, { useRef } from "react";
import { DECISION_NOTES, DecisionNote } from "@/content/decisions";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Cpu, Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

function SingleDecisionCard({ note, index }: { note: DecisionNote; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced) return;

      const line = lineRef.current;
      const card = cardRef.current;
      if (!line || !card) return;

      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: cardRef, dependencies: [prefersReduced] }
  );

  return (
    <div
      ref={cardRef}
      className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden space-y-6"
    >
      {/* Left Accent Gradient Hairline */}
      <div
        ref={lineRef}
        className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 shadow-sm shadow-cyan-500/50"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs text-cyan-400 block mb-1 font-semibold">
            {note.code} // {note.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {note.title}
          </h3>
        </div>
        <span className="font-mono text-xs text-slate-300 px-3 py-1 bg-white/[0.04] rounded-full border border-white/10 self-start sm:self-auto">
          {note.topic}
        </span>
      </div>

      {/* Body: 4-part breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {/* Left Column: Problem & Tradeoff */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
              1. Observed Problem & Vulnerability Context
            </span>
            <p className="text-slate-300 leading-relaxed">
              {note.context}
            </p>
          </div>

          <div className="space-y-1.5 bg-white/[0.03] p-4 rounded-xl border border-white/10">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block font-semibold">
              2. Evaluated Alternatives & Trade-Offs
            </span>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {note.tradeoff}
            </p>
          </div>
        </div>

        {/* Right Column: Decision & Outcome */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              3. Implemented Architectural Decision
            </span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {note.decision}
            </p>
          </div>

          <div className="space-y-1.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-4 rounded-xl border border-emerald-500/30">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              4. Verified Production Outcome
            </span>
            <p className="text-emerald-200 font-semibold leading-relaxed text-xs sm:text-sm">
              {note.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DecisionNotes() {
  return (
    <section id="decisions" className="py-20" aria-label="Architectural Decision Notes">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Engineering Log & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Architectural Decision Records
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-400">
            SECURITY ISOLATION & COST PRAGMATISM IN PRODUCTION
          </span>
        </div>

        <div className="space-y-6">
          {DECISION_NOTES.map((note, idx) => (
            <SingleDecisionCard key={note.id} note={note} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
