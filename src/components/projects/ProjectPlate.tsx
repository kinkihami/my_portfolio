"use client";

import React from "react";
import Image from "next/image";
import { PrimaryProject } from "@/content/projects";
import { Smartphone, Sparkles, Zap, Layers } from "lucide-react";

interface ProjectPlateProps {
  project: PrimaryProject;
}

export function ProjectPlate({ project }: ProjectPlateProps) {
  return (
    <div className="w-full h-52 bg-gradient-to-br from-[#0B1020] to-[#04060C] rounded-xl border border-white/10 relative overflow-hidden group/plate flex flex-col justify-between p-4 select-none">
      {/* Background Subtle Cyber Grid & Ambient Glow */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none" />

      {/* Top Header Plate */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-400 z-10">
        <span className="flex items-center gap-2 text-white font-medium">
          <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
          <span>{project.code}</span>
        </span>
        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] text-cyan-300 font-semibold">
          LIVE SYSTEM
        </span>
      </div>

      {/* Center Abstract Visual Card */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 my-2">
        <div className="w-full max-w-[280px] p-3.5 rounded-xl bg-[#0F162A]/90 border border-white/10 group-hover/plate:border-cyan-400/40 shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1.5">
            <span>PLATFORM</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
          <p className="font-outfit font-bold text-sm text-white truncate">
            {project.title}
          </p>
          <p className="font-mono text-[10px] text-cyan-300 truncate mt-0.5">
            {project.category}
          </p>
        </div>
      </div>

      {/* Bottom Slot Notice */}
      <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 z-10 border-t border-white/5 pt-2">
        <span>SLOT: {project.screenshotSlot?.split("/").pop()}</span>
        <span className="text-cyan-400/80">[ Drop-in Slot ]</span>
      </div>
    </div>
  );
}
