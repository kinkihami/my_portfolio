import React from "react";
import { Navbar } from "@/components/chrome/Navbar";
import { Footer } from "@/components/chrome/Footer";
import { HeroIntro } from "@/components/hero/HeroIntro";
import { AboutBio } from "@/components/about/AboutBio";
import { MetricCounters } from "@/components/about/MetricCounters";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { HorizontalProjects } from "@/components/projects/HorizontalProjects";
import { DecisionNotes } from "@/components/decisions/DecisionNotes";
import { Timeline } from "@/components/experience/Timeline";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#04060C] text-[#E2E8F0] overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Background Radiant Mesh Orbs & Subtle Cyber Grid */}
      <div
        className="fixed inset-0 ambient-glow-mesh pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 cyber-grid opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Floating Glass Navigation Bar */}
      <Navbar />

      <main id="top" className="flex flex-col">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center relative"
          aria-label="Introduction"
        >
          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8">
            <HeroIntro />
          </div>
        </section>

        {/* ABOUT & TELEMETRY SECTION */}
        <section
          id="about"
          className="py-20 border-t border-white/10"
          aria-label="About and Production Telemetry"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 space-y-14">
            <AboutBio />
            <MetricCounters />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="py-20 border-t border-white/10"
          aria-label="Technical Skills and Specializations"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <SkillsGrid />
          </div>
        </section>

        {/* PROJECTS SECTION (PINNED HORIZONTAL ON DESKTOP) */}
        <div className="border-t border-white/10">
          <HorizontalProjects />
        </div>

        {/* ARCHITECTURAL DECISION NOTES */}
        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <DecisionNotes />
          </div>
        </div>

        {/* EXPERIENCE & EDUCATION */}
        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <Timeline />
          </div>
        </div>

        {/* CONTACT & TRANSMISSION */}
        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
