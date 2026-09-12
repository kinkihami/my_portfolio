"use client";

import React from "react";
import { PROFILE_DATA } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowDown, Mail, Layers, Sparkles, Smartphone, Code2, ShieldCheck, Zap } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroIntro() {
  const { scrollTo } = useSmoothScroll();
  const prefersReduced = useReducedMotion();

  const nameWords = PROFILE_DATA.name.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: prefersReduced ? 0 : 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const KPI_ITEMS = [
    {
      value: "2+",
      label: "Years Experience",
      detail: "Cross-platform mobile apps in production",
      color: "from-cyan-400 to-sky-500",
      icon: Smartphone,
    },
    {
      value: "7+",
      label: "White-Label Apps",
      detail: "Multi-tenant platforms deployed",
      color: "from-sky-400 to-indigo-500",
      icon: Layers,
    },
    {
      value: "10+",
      label: "Role Dashboards",
      detail: "Isolated security & permission models",
      color: "from-indigo-400 to-purple-500",
      icon: ShieldCheck,
    },
    {
      value: "4",
      label: "Live Store Apps",
      detail: "Google Play & Apple App Store",
      color: "from-emerald-400 to-teal-500",
      icon: Zap,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8"
    >
      {/* Live Pulsing Badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span>Available for Flutter & Product Engineering Roles</span>
        </span>
      </motion.div>

      {/* Main Large Shimmer Headline */}
      <div className="space-y-3">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
          {nameWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block mr-3 sm:mr-5 last:mr-0 ${
                index === 1 ? "text-gradient-cyan-indigo drop-shadow-sm" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-200"
        >
          Flutter Developer <span className="text-cyan-400">&</span> Product Engineer
        </motion.p>
      </div>

      {/* Tagline */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
      >
        {PROFILE_DATA.tagline}
      </motion.p>

      {/* Core Technology Pills */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-2 pt-1"
      >
        {["Flutter", "Dart", "Clean Architecture", "BLoC / Riverpod", "WebSockets & REST", "Client Security"].map(
          (skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 hover:text-white transition-colors"
            >
              {skill}
            </span>
          )
        )}
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-4 pt-3"
      >
        <Button
          variant="primary"
          size="lg"
          asChild
          className="gap-2.5 text-sm font-semibold px-7 py-3 rounded-full"
        >
          <a
            href={PROFILE_DATA.TODO_RESUME_PDF}
            download="Mohamed-Hameesh-C-Resume.pdf"
            aria-label="Download resume (PDF)"
          >
            <FileDown className="h-4 w-4" />
            Download resume (PDF)
          </a>
        </Button>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => scrollTo("#projects", { offset: -70 })}
          className="gap-2.5 text-sm font-semibold px-7 py-3 rounded-full text-white"
        >
          <Layers className="h-4 w-4 text-cyan-400" />
          Featured Projects
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollTo("#contact", { offset: -70 })}
          className="gap-2.5 text-sm font-semibold px-7 py-3 rounded-full text-slate-300 hover:text-white"
        >
          <Mail className="h-4 w-4 text-indigo-400" />
          Get in Touch
        </Button>
      </motion.div>

      {/* 4-Metric Bento Stat Pods */}
      <motion.div
        variants={itemVariants}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
      >
        {KPI_ITEMS.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 rounded-2xl text-left flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">{kpi.label}</span>
                <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>
              </div>

              <div>
                <span className={`text-3xl sm:text-4xl font-extrabold font-mono bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>
                  {kpi.value}
                </span>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {kpi.detail}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Subtle Scroll Down */}
      <motion.div
        variants={itemVariants}
        className="pt-4 flex items-center justify-center text-xs font-mono text-slate-400"
      >
        <button
          onClick={() => scrollTo("#about", { offset: -70 })}
          className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 cursor-pointer"
        >
          <ArrowDown className="h-3.5 w-3.5 text-cyan-400 animate-bounce" />
          <span>Scroll to inspect profile</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
