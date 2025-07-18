"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundGrid({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </div>
  );
} 