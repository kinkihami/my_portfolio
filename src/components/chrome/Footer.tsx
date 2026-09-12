"use client";

import React from "react";
import { PROFILE_DATA } from "@/content/profile";
import { MapPin, ArrowUp } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

const QUICK_NAV = [
  { href: "#about", label: "01. About" },
  { href: "#skills", label: "02. Skills" },
  { href: "#projects", label: "03. Projects" },
  { href: "#decisions", label: "04. Decisions" },
  { href: "#experience", label: "05. Experience" },
  { href: "#contact", label: "06. Contact" },
];

export function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="border-t border-white/10 bg-[#04060C] py-10 text-slate-400 text-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 space-y-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-8 border-b border-white/10">
          {/* Left Column: Identity & Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-bold text-sm sm:text-base text-white tracking-tight font-outfit">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Flutter Developer & Product Engineer architecting multi-tenant, white-label mobile platforms with clean architecture.
            </p>
            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 pt-1">
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              <span>{PROFILE_DATA.location}</span>
            </div>
          </div>

          {/* Right Column: Quick Navigation */}
          <div className="space-y-3 md:text-right">
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider block font-semibold">
              Quick Navigation
            </span>
            <div className="flex flex-wrap md:justify-end gap-x-5 gap-y-2 font-mono text-xs">
              {QUICK_NAV.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href, { offset: -80 })}
                  className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: System Status & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">SYSTEM // ONLINE</span>
            <span className="text-slate-600">|</span>
            <span>BUILD 2026 STABLE</span>
          </div>

          <button
            onClick={() => scrollTo("#top", { offset: 0 })}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
