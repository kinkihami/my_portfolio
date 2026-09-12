"use client";

import React from "react";
import Image from "next/image";
import { PROFILE_DATA } from "@/content/profile";
import { User, ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";

export function AboutBio() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Left: Avatar Card with Luminous Frame */}
      <div className="lg:col-span-4 flex justify-center">
        <div className="relative group w-full max-w-xs">
          {/* Subtle Ambient Glow Behind Card */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

          {/* Main Card */}
          <div className="relative glass-panel rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center space-y-4">
            {/* Image / Fallback Container */}
            <div className="w-full h-64 bg-[#090D1A] rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
              {PROFILE_DATA.TODO_PHOTO ? (
                <Image
                  src={PROFILE_DATA.TODO_PHOTO}
                  alt={PROFILE_DATA.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 320px"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 space-y-3">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 flex items-center justify-center shadow-inner">
                    <User className="h-10 w-10 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-base text-white">
                      {PROFILE_DATA.name}
                    </p>
                    <p className="font-mono text-xs text-cyan-300 mt-0.5">
                      {PROFILE_DATA.location}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Status Footer Tag */}
            <div className="w-full pt-1 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Engineer
              </span>
              <span className="text-slate-400 font-mono text-[11px]">Kerala, IN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Bio and Core Engineering Pillars */}
      <div className="lg:col-span-8 space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Profile & Engineering Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering robust mobile platforms under real constraints.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {PROFILE_DATA.bio}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            My engineering decisions prioritize deterministic mobile state management, network-level tenant isolation, and hardware-conscious battery efficiency. Whether architecting cross-platform fleet telemetry or isolating multi-institution authentication tokens, I build mobile software that functions predictably under production load.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="glass-panel glass-panel-hover p-4 rounded-xl space-y-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-semibold text-white">Multi-Tenant Isolation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enforcing cryptographic header isolation to prevent cross-institution token bleed.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-4 rounded-xl space-y-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Cpu className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-semibold text-white">Cost Pragmatism</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Replacing expensive continuous cloud AI-OCR with zero-inference audit workflows.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-4 rounded-xl space-y-2">
            <div className="h-8 w-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Code2 className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-semibold text-white">Clean Architecture</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict layer separation with testable state machines via BLoC & Riverpod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
