"use client";

import React, { useEffect, useRef, useState } from "react";
import { PROFILE_DATA, MetricItem } from "@/content/profile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Layers, ShieldCheck, Zap } from "lucide-react";

const ICONS = [Smartphone, Layers, ShieldCheck, Zap];
const GRADIENTS = [
  "from-cyan-400 to-sky-500",
  "from-sky-400 to-indigo-500",
  "from-indigo-400 to-purple-500",
  "from-emerald-400 to-teal-500",
];

function SingleCounter({
  item,
  index,
  prefersReduced,
}: {
  item: MetricItem;
  index: number;
  prefersReduced: boolean;
}) {
  const [count, setCount] = useState(prefersReduced ? item.numericValue : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReduced) {
      setCount(item.numericValue);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: item.numericValue,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          },
          onComplete: () => {
            setCount(item.numericValue);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [item.numericValue, prefersReduced]);

  const Icon = ICONS[index % ICONS.length];
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <div
      ref={containerRef}
      className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-slate-400 tracking-wider">
          {item.label}
        </span>
        <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="my-2">
        <div className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {count}
          </span>
          <span className="text-white">{item.suffix}</span>
        </div>
        <p className="text-sm font-semibold text-white mt-1">
          {item.label}
        </p>
      </div>

      <p className="text-xs text-slate-400 mt-2 pt-3 border-t border-white/5 leading-relaxed">
        {item.sublabel}
      </p>
    </div>
  );
}

export function MetricCounters() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {PROFILE_DATA.metrics.map((metric, idx) => (
        <SingleCounter
          key={metric.id}
          item={metric}
          index={idx}
          prefersReduced={prefersReduced}
        />
      ))}
    </div>
  );
}
