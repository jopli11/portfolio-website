"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  codeDisabled?: boolean;
  liveDisabled?: boolean;
  gradient: string;
  isUnavailable?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  codeDisabled = false,
  liveDisabled = false,
  gradient,
  isUnavailable = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative h-[520px] transition-all duration-500",
        isUnavailable && "opacity-60 grayscale"
      )}
    >
      <div className={cn(
        "relative flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:shadow-primary/20 group-hover:border-primary/30",
        isUnavailable && "bg-card/30 border-border/30"
      )}>
        {/* Project Visual / Hover Preview */}
        <div className="relative h-48 overflow-hidden bg-muted flex-shrink-0">
          {/* Default Gradient Background */}
          <div className={cn(
            "absolute inset-0 transition-transform duration-700 group-hover:scale-110",
            gradient
          )} />
          
          {/* Iframe Preview on Hover */}
          <AnimatePresence mode="wait">
            {isHovered && liveUrl && !isUnavailable && (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 z-10 bg-background"
              >
                <div className="absolute inset-0 pointer-events-none z-20 bg-transparent" />
                <iframe 
                  src={liveUrl} 
                  className="w-[150%] h-[150%] border-0 origin-top-left scale-[0.67] pointer-events-none"
                  title={`Preview of ${title}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-20" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Default Overlay for Visual */}
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-20" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-grow p-6 space-y-4 pointer-events-auto z-30">
          {/* Header */}
          <div className="space-y-2">
            <h3 className={cn(
              "text-xl font-bold gradient-text line-clamp-2 h-14 flex items-center leading-tight",
              isUnavailable && "text-muted-foreground"
            )}>
              {title}
            </h3>
            <p className={cn(
              "text-muted-foreground leading-relaxed line-clamp-3 h-18 text-sm",
              isUnavailable && "text-muted-foreground/60"
            )}>
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 content-start h-16 overflow-hidden">
            {tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-primary/5 text-primary rounded-full border border-primary/10",
                  isUnavailable && "bg-muted/20 text-muted-foreground border-muted/30"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4 mt-auto">
            <div className="flex gap-2">
              {(liveUrl || liveDisabled) && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all text-xs h-9"
                  disabled={liveDisabled || isUnavailable || !liveUrl}
                  asChild={!liveDisabled && !isUnavailable && !!liveUrl}
                >
                  {!liveDisabled && !isUnavailable && liveUrl ? (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      🚀 Visit Site
                    </a>
                  ) : (
                    <span>🚀 Live Demo</span>
                  )}
                </Button>
              )}
              
              {(githubUrl || codeDisabled) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-[10px] text-muted-foreground hover:text-primary transition-all h-9 border border-border/30 hover:border-primary/30"
                  disabled={codeDisabled || isUnavailable || !githubUrl}
                  asChild={!codeDisabled && !isUnavailable && !!githubUrl}
                >
                  {!codeDisabled && !isUnavailable && githubUrl ? (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      📱 View Code
                    </a>
                  ) : (
                    <span>🔒 Private</span>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          isUnavailable && "opacity-0 group-hover:opacity-30"
        )}>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-2xl" />
        </div>
      </div>
    </div>
  );
}
