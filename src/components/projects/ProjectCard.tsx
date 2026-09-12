"use client";

import React, { useState } from "react";
import { PrimaryProject } from "@/content/projects";
import { ProjectPlate } from "@/components/projects/ProjectPlate";
import { ExternalLink, Play, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: PrimaryProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="interactive"
      className="w-full sm:w-[500px] lg:w-[540px] glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between shrink-0 relative overflow-hidden group focus-within:border-cyan-400 transition-all duration-300"
    >
      {/* Top Card Header */}
      <div className="p-6 pb-3">
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
          <span className="flex items-center gap-2 text-cyan-300 font-semibold">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {project.code}
          </span>
          <span className="text-white font-mono font-bold bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
            0{index + 1} / 04
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-300 mb-4">
          {project.subtitle}
        </p>

        {/* Visual Screenshot / Telemetry Plate */}
        <ProjectPlate project={project} />
      </div>

      {/* Engineering Note & Stack */}
      <div className="p-6 pt-3 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block mb-1.5 font-semibold">
            Engineering Note & Architectural Decisions
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.note}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5 pt-1">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl.startsWith("TODO") ? "#" : project.playStoreUrl}
                onClick={(e) => {
                  if (project.playStoreUrl?.startsWith("TODO")) {
                    e.preventDefault();
                  }
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  project.playStoreUrl.startsWith("TODO")
                    ? "bg-white/[0.04] text-slate-400 border border-white/10 hover:text-white"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-500"
                }`}
                title={project.playStoreUrl.startsWith("TODO") ? "Store link pending URL" : "Open Google Play"}
              >
                <Play className="h-3.5 w-3.5" />
                <span>Google Play</span>
                {project.playStoreUrl.startsWith("TODO") && (
                  <span className="text-[10px] text-slate-400">[Slot]</span>
                )}
              </a>
            )}

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl.startsWith("TODO") ? "#" : project.appStoreUrl}
                onClick={(e) => {
                  if (project.appStoreUrl?.startsWith("TODO")) {
                    e.preventDefault();
                  }
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  project.appStoreUrl.startsWith("TODO")
                    ? "bg-white/[0.04] text-slate-400 border border-white/10 hover:text-white"
                    : "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500"
                }`}
                title={project.appStoreUrl.startsWith("TODO") ? "App Store link pending URL" : "Open App Store"}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>App Store</span>
                {project.appStoreUrl.startsWith("TODO") && (
                  <span className="text-[10px] text-slate-400">[Slot]</span>
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
