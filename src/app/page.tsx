"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { AnimatedText } from "@/components/ui/animated-text";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ClientNavigation } from "@/components/client-navigation";
import { HeroTechIcons } from "@/components/hero-tech-icons";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

// Dynamic imports for sections below the fold
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => mod.AboutSection), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const ExperienceSection = dynamic(() => import("@/components/experience-section").then(mod => mod.ExperienceSection), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const ProjectsShowcase = dynamic(() => import("@/components/projects-showcase").then(mod => mod.ProjectsShowcase), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const SkillsShowcase = dynamic(() => import("@/components/skills-showcase").then(mod => mod.SkillsShowcase), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const GitHubStatsSection = dynamic(() => import("@/components/github-stats-section").then(mod => mod.GitHubStatsSection), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => mod.TestimonialsSection), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => mod.ContactSection), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const FooterSection = dynamic(() => import("@/components/footer-section").then(mod => mod.FooterSection), {
  loading: () => <div className="h-20 animate-pulse bg-muted/20" />
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3]);
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="relative">
      {/* Hero Section - Keep as much as possible static or use framer-motion/client */}
      <div className="relative min-h-screen animated-bg overflow-hidden">
        {/* Background Effects with Scroll Reveal */}
        <motion.div 
          style={{ y: smoothBackgroundY, opacity: backgroundOpacity }}
          className="absolute inset-0 z-0"
        >
          <BackgroundGrid />
          <BackgroundBeams />
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
        </motion.div>
        
        <Meteors number={13} />
        
        {/* Top Navigation with Theme Toggle */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-50 flex items-center justify-between p-6 md:p-8"
        >
          <motion.div 
            className="text-2xl font-black tracking-tighter gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            JOEL.DEV
          </motion.div>
          <ThemeToggle />
        </motion.div>

        {/* Floating Dock Navigation - Client Component */}
        <ClientNavigation />

        {/* Hero Content */}
        <div className="relative z-40 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-0"
            >
              <div className="overflow-hidden">
                <AnimatedText
                  text="BUILDING THE"
                  className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[calc(-0.05em)] leading-[0.85] text-foreground inline-block"
                  delay={0.2}
                />
              </div>
              <div className="overflow-hidden">
                <AnimatedText
                  text="FUTURE"
                  className="text-6xl md:text-8xl lg:text-[12rem] font-black tracking-[calc(-0.07em)] leading-[0.8] gradient-text inline-block"
                  delay={0.5}
                />
              </div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                className="h-2 md:h-4 bg-primary mt-4 mb-8"
              />
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-muted-foreground pt-4"
              >
                ONE LINE OF CODE AT A TIME
              </motion.h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Full Stack Developer & Solutions Architect building{" "}
              <span className="text-primary font-semibold">scalable digital infrastructure</span>
              {" "}and innovative SaaS platforms that solve real business problems.
            </motion.p>

            {/* CTA Buttons - Using framer-motion/client for interactivity */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px hsl(var(--primary) / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 glow-emerald bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 border-0"
                  >
                    <a href="#projects">🚀 View My Projects</a>
                  </Button>
                </motion.div>
              </MagneticButton>
              
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/60"
                  >
                    <a href="#contact">💬 Let&apos;s Talk</a>
                  </Button>
                </motion.div>
              </MagneticButton>
            </motion.div>

            {/* Floating Tech Icons - Client Component */}
            <HeroTechIcons />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-40"
        >
          <a href="#projects">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer hover:border-primary/80 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Sections - Dynamically Loaded */}
      <AboutSection />
      <ExperienceSection />
      <div id="projects">
        <ProjectsShowcase />
      </div>
      <div id="skills">
        <SkillsShowcase />
      </div>
      <div id="github">
        <GitHubStatsSection />
      </div>
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
