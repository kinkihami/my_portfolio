"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const updatePointerType = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePointerType);
    }

    if (!mediaQuery.matches || prefersReduced) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="tab"]') ||
        target.closest('[data-cursor="interactive"]') ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updatePointerType);
      }
    };
  }, [isVisible, prefersReduced]);

  if (!isFinePointer || prefersReduced || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cyan-400 mix-blend-screen"
      style={{
        width: isHovered ? 36 : 14,
        height: isHovered ? 36 : 14,
        backgroundColor: isHovered ? "rgba(6, 182, 212, 0.2)" : "rgba(6, 182, 212, 0.1)",
        boxShadow: isHovered ? "0 0 15px rgba(6, 182, 212, 0.5)" : "none",
      }}
      animate={{
        x: position.x - (isHovered ? 18 : 7),
        y: position.y - (isHovered ? 18 : 7),
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 350,
        mass: 0.2,
      }}
      aria-hidden="true"
    />
  );
}
