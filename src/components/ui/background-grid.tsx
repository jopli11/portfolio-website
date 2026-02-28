"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function BackgroundGrid({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothGridY = useSpring(gridY, { stiffness: 100, damping: 30 });

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", containerClassName)}>
      <motion.div
        style={{ y: smoothGridY }}
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </motion.div>
    </div>
  );
} 