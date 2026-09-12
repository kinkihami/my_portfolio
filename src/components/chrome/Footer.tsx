"use client";

import React from "react";
import { PROFILE_DATA } from "@/content/profile";
import { FileDown, Mail, Phone, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="border-t border-white/10 bg-[#04060C] py-14 text-slate-400 text-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Identity & Role */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-bold text-base text-white tracking-tight font-outfit">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
              Flutter Developer & Product Engineer architecting multi-tenant, white-label mobile platforms with clean architecture.
            </p>
            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              <span>{PROFILE_DATA.location}</span>
            </div>
          </div>

          {/* Column 2: Direct Comms & Phone */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
              Direct Channels
            </span>
            <div className="space-y-2">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-2 text-xs text-slate-200 hover:text-cyan-300 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <span className="font-mono">{PROFILE_DATA.email}</span>
              </a>
              {PROFILE_DATA.phone && (
                <a
                  href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  <Phone className="h-3.5 w-3.5 text-indigo-400" />
                  <span className="font-mono">{PROFILE_DATA.phone}</span>
                </a>
              )}
            </div>

            {/* Social Links (Rendered only when filled) */}
            <div className="flex items-center gap-4 pt-1">
              {PROFILE_DATA.TODO_GITHUB_URL && (
                <a
                  href={PROFILE_DATA.TODO_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {PROFILE_DATA.TODO_LINKEDIN_URL && (
                <a
                  href={PROFILE_DATA.TODO_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>

          {/* Column 3: Resume & Action */}
          <div className="space-y-3 md:text-right">
            <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
              Curriculum Vitae
            </span>
            <div>
              <a
                href={PROFILE_DATA.TODO_RESUME_PDF}
                download="Mohamed-Hameesh-C-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-full shadow-lg shadow-cyan-500/20 transition-all focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label="Download resume (PDF)"
              >
                <FileDown className="h-4 w-4" />
                <span>Download resume (PDF)</span>
              </a>
            </div>
            <p className="font-mono text-[10px] text-slate-400">
              PDF format • Verified production experience
            </p>
          </div>
        </div>

        {/* Bottom Bar: Status and back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300">SYSTEM // ONLINE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">BUILD 2026 STABLE</span>
          </div>

          <button
            onClick={() => scrollTo("#top", { offset: 0 })}
            className="text-slate-400 hover:text-cyan-300 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 cursor-pointer"
          >
            [ Back to top ↑ ]
          </button>
        </div>
      </div>
    </footer>
  );
}
