"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCTA, setIsCTA] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateDesktop = () => setIsDesktop(window.innerWidth > 1024);
    updateDesktop();
    window.addEventListener("resize", updateDesktop);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role='button']");
      const isCTAElement = target.closest(".glow-emerald, .bg-primary, .bg-gradient-to-r");
      
      setIsHovering(!!isClickable);
      setIsCTA(!!isCTAElement);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", updateDesktop);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? (isCTA ? 2.5 : 1.5) : 1,
          backgroundColor: isCTA ? "hsl(var(--primary) / 0.1)" : "transparent",
        }}
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};
