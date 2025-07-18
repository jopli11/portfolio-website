"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "animate-[scroll_20s_linear_infinite]";
      case "normal":
        return "animate-[scroll_40s_linear_infinite]";
      case "slow":
        return "animate-[scroll_80s_linear_infinite]";
      default:
        return "animate-[scroll_40s_linear_infinite]";
    }
  };

  const getDirection = () => {
    return direction === "right" ? "[animation-direction:reverse]" : "";
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-4 py-4",
          getSpeed(),
          getDirection(),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* First set of items */}
        {items.map((item, idx) => (
          <div
            className="w-[350px] max-w-full relative rounded-2xl border border-border/50 flex-shrink-0 px-8 py-6 md:w-[450px] bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            key={`first-${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-foreground font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-primary font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <div
            className="w-[350px] max-w-full relative rounded-2xl border border-border/50 flex-shrink-0 px-8 py-6 md:w-[450px] bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            key={`second-${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-foreground font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-primary font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}; 