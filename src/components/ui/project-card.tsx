"use client";

import { motion } from "framer-motion";
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
  return (
    <div className={cn(
      "group relative hover:-translate-y-2 transition-transform duration-300",
      isUnavailable && "opacity-60 grayscale"
    )}>
      <div className={cn(
        "relative overflow-hidden rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-lg",
        isUnavailable && "bg-card/30 border-border/30"
      )}>
        {/* Background Gradient */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none",
          gradient,
          isUnavailable && "opacity-0 group-hover:opacity-10"
        )} />
        
        {/* Content */}
        <div className="relative p-6 space-y-4 pointer-events-auto">
          {/* Header */}
          <div className="space-y-2">
            <h3 className={cn(
              "text-2xl font-bold gradient-text",
              isUnavailable && "text-muted-foreground"
            )}>
              {title}
            </h3>
            <p className={cn(
              "text-muted-foreground leading-relaxed",
              isUnavailable && "text-muted-foreground/60"
            )}>
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20",
                  isUnavailable && "bg-muted/20 text-muted-foreground border-muted/30"
                )}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {(liveUrl || liveDisabled) && (
              <>
                {!liveDisabled && liveUrl && !isUnavailable ? (
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 transition-all hover:scale-105"
                    asChild
                  >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      🚀 Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="opacity-50 cursor-not-allowed bg-muted text-muted-foreground border-muted"
                  >
                    🚀 Live Demo
                  </Button>
                )}
              </>
            )}
            {(githubUrl || codeDisabled) && (
              <>
                {!codeDisabled && githubUrl && !isUnavailable ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all hover:scale-105"
                    asChild
                  >
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      📱 Code
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="opacity-50 cursor-not-allowed bg-muted text-muted-foreground border-muted"
                  >
                    📱 Code
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          isUnavailable && "opacity-0 group-hover:opacity-30"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 blur-xl" />
        </div>
      </div>
    </div>
  );
} 