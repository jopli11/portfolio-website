"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 12,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<Array<{
    top: number;
    left: number;
    animationDelay: number;
    animationDuration: number;
  }>>([]);
  
  useEffect(() => {
    // Generate meteors only on client side to avoid hydration mismatch
    const meteorData = new Array(number).fill(true).map(() => ({
      top: Math.floor(Math.random() * 200) - 400, // Start well off-screen (-400px to -200px)
      left: Math.floor(Math.random() * 400) + 100, // Start from center-left to center-right (100px to 500px)
      animationDelay: Math.random() * 5, // 0 to 5 seconds delay (more spread out)
      animationDuration: Math.floor(Math.random() * 6) + 4, // 4 to 10 seconds (longer duration)
    }));
    setMeteors(meteorData);
  }, [number]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "absolute h-0.5 w-0.5 rotate-[400deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: meteor.top + "px",
            left: meteor.left + "px",
            animationDelay: meteor.animationDelay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}; 