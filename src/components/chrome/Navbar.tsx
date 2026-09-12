"use client";

import React, { useEffect, useState } from "react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { PROFILE_DATA } from "@/content/profile";
import { FileDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#decisions", label: "Decisions" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTo, lenis } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    if (lenis) {
      lenis.on("scroll", handleScroll);
      return () => lenis.off("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lenis]);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollTo(href, { offset: -80 });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-8 transition-all duration-300">
      <div
        className={cn(
          "max-w-[1100px] mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-[#090D1A]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-950/40"
            : "bg-white/[0.04] backdrop-blur-md border border-white/[0.08]"
        )}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 whitespace-nowrap min-w-0"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
          </span>
          <span className="tracking-tight font-outfit text-sm sm:text-base truncate font-bold bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
            {PROFILE_DATA.name}
          </span>
          <span className="hidden lg:inline-block font-mono text-[10px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 shrink-0">
            FLUTTER // PROD
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "px-3 py-1 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-cyan-400 whitespace-nowrap",
                  isActive
                    ? "text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 shadow-sm shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                )}
              >
                {link.label}
              </a>
            );
          })}

          {/* Resume button */}
          <a
            href={PROFILE_DATA.TODO_RESUME_PDF}
            download="Mohamed-Hameesh-C-Resume.pdf"
            className="inline-flex items-center gap-1.5 ml-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-full shadow-md shadow-cyan-500/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-cyan-400 whitespace-nowrap"
            aria-label="Download resume (PDF)"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5 text-cyan-400" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Glass Overlay Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-[1100px] mx-auto mt-2 px-1 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="bg-[#090D1A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-cyan-950/50 space-y-2">
            <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 text-center",
                      isActive
                        ? "text-cyan-300 bg-cyan-500/20 border border-cyan-400/30 shadow-sm shadow-cyan-500/20"
                        : "text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05]"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <a
              href={PROFILE_DATA.TODO_RESUME_PDF}
              download="Mohamed-Hameesh-C-Resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-3 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200"
              aria-label="Download resume (PDF)"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
