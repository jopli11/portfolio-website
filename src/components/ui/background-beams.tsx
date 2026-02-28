"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const beamOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.05, 0.15, 0.08, 0.15, 0.05]);
  const beamScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
  ];

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <motion.div 
        style={{ scale: beamScale, rotate: beamRotate }}
        className="absolute inset-0 h-full w-full"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
        >
          <g clipPath="url(#clip0_1065_8)">
            {paths.map((path, index) => (
              <motion.path
                key={index}
                d={path}
                stroke={`url(#paint${index}_linear_1065_8)`}
                style={{ strokeOpacity: beamOpacity }}
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: index * 0.1 }}
              />
            ))}
          </g>
          <defs>
            <clipPath id="clip0_1065_8">
              <rect width="696" height="316" fill="white" />
            </clipPath>
            {paths.map((_, index) => (
              <linearGradient
                key={index}
                id={`paint${index}_linear_1065_8`}
                x1="43.376"
                y1="16.8"
                x2="377.5"
                y2="344"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="0.325" stopColor="hsl(var(--primary))" />
                <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </motion.div>

      {/* Dynamic Color Pops - These will follow the scroll fixed to the viewport */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ColorPop scrollYProgress={scrollYProgress} delay={0} color="var(--primary)" top="20%" left="10%" />
        <ColorPop scrollYProgress={scrollYProgress} delay={0.2} color="var(--accent)" top="40%" left="80%" />
        <ColorPop scrollYProgress={scrollYProgress} delay={0.4} color="var(--secondary)" top="60%" left="15%" />
        <ColorPop scrollYProgress={scrollYProgress} delay={0.6} color="var(--primary)" top="80%" left="70%" />
      </div>
    </div>
  );
};

const ColorPop = ({ 
  scrollYProgress, 
  delay, 
  color, 
  top, 
  left 
}: { 
  scrollYProgress: MotionValue<number>;
  delay: number;
  color: string;
  top: string;
  left: string;
}) => {
  const scale = useTransform(
    scrollYProgress,
    [delay, delay + 0.2, delay + 0.4],
    [0, 1.5, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [delay, delay + 0.2, delay + 0.4],
    [0, 0.15, 0]
  );
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      style={{
        scale: smoothScale,
        opacity,
        backgroundColor: `hsl(${color})`,
        top,
        left,
      }}
      className="absolute w-96 h-96 rounded-full blur-[120px] pointer-events-none"
    />
  );
};
