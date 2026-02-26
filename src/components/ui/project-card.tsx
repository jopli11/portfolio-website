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
  isUnavailable = false
}: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className={cn(
      "group relative h-[550px] transition-all duration-500",
      isUnavailable && "opacity-60 grayscale"
    )}>
      <div className={cn(
        "relative flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:shadow-primary/20 group-hover:border-primary/30",
        isUnavailable && "bg-card/30 border-border/30"
      )}>
        {/* Background Gradient */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
          gradient,
          isUnavailable && "opacity-0 group-hover:opacity-5"
        )} />
        
        {/* Preview Overlay */}
        <AnimatePresence>
          {showPreview && liveUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 z-30 bg-background"
            >
              <div className="absolute top-4 right-4 z-40">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  onClick={() => setShowPreview(false)}
                  className="rounded-full h-8 w-8 p-0 shadow-lg"
                >
                  ✕
                </Button>
              </div>
              <iframe 
                src={liveUrl} 
                className="w-full h-full border-0"
                title={`Preview of ${title}`}
                loading="lazy"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative flex flex-col h-full p-6 space-y-4 pointer-events-auto">
          {/* Header */}
          <div className="space-y-3">
            <h3 className={cn(
              "text-2xl font-bold gradient-text min-h-[4rem] flex items-center leading-tight",
              isUnavailable && "text-muted-foreground"
            )}>
              {title}
            </h3>
            <p className={cn(
              "text-muted-foreground leading-relaxed line-clamp-4 min-h-[6rem] text-sm md:text-base",
              isUnavailable && "text-muted-foreground/60"
            )}>
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 content-start min-h-[6rem]">
            {tags.slice(0, 8).map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-primary/5 text-primary rounded-full border border-primary/10",
                  isUnavailable && "bg-muted/20 text-muted-foreground border-muted/30"
                )}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4 mt-auto">
            <div className="flex gap-3">
              {(liveUrl || liveDisabled) && (
                <>
                  {!liveDisabled && liveUrl && !isUnavailable ? (
                    <>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        onClick={() => setShowPreview(true)}
                      >
                        👁️ Preview
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
                        asChild
                      >
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                          🚀 Visit
                        </a>
                      </Button>
                    </>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="flex-1 opacity-50 cursor-not-allowed bg-muted text-muted-foreground border-muted"
                    >
                      🚀 Live Demo
                    </Button>
                  )}
                </>
              )}
            </div>
            
            {(githubUrl || codeDisabled) && (
              <div className="w-full">
                {!codeDisabled && githubUrl && !isUnavailable ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs text-muted-foreground hover:text-primary transition-all"
                    asChild
                  >
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      📱 View Codebase
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled
                    className="w-full text-xs opacity-50 cursor-not-allowed text-muted-foreground"
                  >
                    🔒 Private Repository
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          isUnavailable && "opacity-0 group-hover:opacity-30"
        )}>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent blur-2xl" />
        </div>
      </div>
    </div>
  );
}
