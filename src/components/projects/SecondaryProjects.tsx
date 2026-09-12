"use client";

import React from "react";
import { SECONDARY_PROJECTS } from "@/content/projects";
import { Terminal, Code, Cpu } from "lucide-react";

export function SecondaryProjects() {
  return (
    <div className="space-y-6 pt-12 border-t border-white/10">
      <div className="flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="text-white font-semibold flex items-center gap-2">
          <Terminal className="h-4 w-4 text-cyan-400" />
          <span>Secondary Systems & Experimental Modules</span>
        </span>
        <span className="bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
          03 Entries
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SECONDARY_PROJECTS.map((item) => (
          <div
            key={item.id}
            className="glass-panel glass-panel-hover p-5 rounded-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-2">
                <span>{item.code}</span>
                <span className="text-cyan-400">{item.dates}</span>
              </div>

              <h4 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
