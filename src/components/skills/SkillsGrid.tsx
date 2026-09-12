"use client";

import React, { useRef } from "react";
import { SKILL_GROUPS, SkillGroup } from "@/content/skills";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  Layers,
  Network,
  Database,
  ShieldCheck,
  MapPin,
  Wrench,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  languages: Code2,
  mobile: Smartphone,
  architecture: Layers,
  "backend-apis": Network,
  "data-storage": Database,
  security: ShieldCheck,
  "maps-native": MapPin,
  "tools-ops": Wrench,
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  languages: "from-cyan-400 to-sky-500",
  mobile: "from-sky-400 to-indigo-500",
  architecture: "from-indigo-400 to-purple-500",
  "backend-apis": "from-cyan-400 to-teal-500",
  "data-storage": "from-purple-400 to-pink-500",
  security: "from-emerald-400 to-teal-500",
  "maps-native": "from-amber-400 to-orange-500",
  "tools-ops": "from-slate-300 to-slate-400",
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const Icon = CATEGORY_ICONS[group.id] || Code2;
  const gradient = CATEGORY_GRADIENTS[group.id] || "from-cyan-400 to-indigo-500";

  useGSAP(
    () => {
      if (prefersReduced) return;

      const line = lineRef.current;
      const card = cardRef.current;
      if (!line || !card) return;

      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
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
      className={`glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group ${
        group.featured ? "sm:col-span-2 lg:col-span-1 border-cyan-500/30" : ""
      }`}
    >
      {/* Top Animated Gradient Hairline */}
      <div
        ref={lineRef}
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${gradient}`}
      />

      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-slate-400 block tracking-wider uppercase">
                {group.tag}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                {group.category}
              </h3>
            </div>
          </div>

          {group.featured && (
            <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              CORE
            </span>
          )}
        </div>

        {/* Skill tags */}
        <ul className="flex flex-wrap gap-1.5 my-3" aria-label={`${group.category} skills`}>
          {group.items.map((item) => {
            const isHighlight = item === "Flutter" || item === "Dart";
            return (
              <li
                key={item}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-all ${
                  isHighlight
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-200 border border-cyan-400/50 shadow-sm shadow-cyan-500/20 font-semibold"
                    : "bg-white/[0.04] text-slate-200 border border-white/10 hover:border-cyan-400/40 hover:text-white"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Status Chip */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Production Verified
        </span>
        <span className="text-slate-400">0{index + 1}</span>
      </div>
    </div>
  );
}

export function SkillsGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Specializations & Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack & Ecosystem
          </h2>
        </div>
        <span className="font-mono text-xs text-slate-400">
          PRODUCTION-TESTED MOBILE & CLIENT ENGINEERING
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_GROUPS.map((group, idx) => (
          <SkillCard key={group.id} group={group} index={idx} />
        ))}
      </div>
    </div>
  );
}
