"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ui/project-card";
import { AnimatedText } from "./ui/animated-text";

const sampleProjects = [
  {
    title: "QZee - Booking & Growth Software",
    description: "A comprehensive SaaS booking and operations platform for service-based businesses. Features real-time scheduling, live payments, and automated notifications.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Docker", "GraphQL"],
    liveUrl: "https://www.qzee.app/",
    codeDisabled: true,
    gradient: "bg-gradient-to-br from-emerald-600 to-cyan-600"
  },
  {
    title: "Probemas Services - OSRS Boosting",
    description: "A high-conversion service platform for OSRS players. Features real-time Discord integration, loyalty points, and secure payment processing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Discord API", "Fintech"],
    liveUrl: "https://probemas-boosting.vercel.app/",
    githubUrl: "https://github.com/jopli11/probemas-boosting",
    gradient: "bg-gradient-to-br from-cyan-600 to-blue-600"
  },
  {
    title: "OSRS Calculators",
    description: "A fast, mobile-first OSRS skill calculator with 100% mathematical parity. Features live Grand Exchange prices and training path optimization.",
    tags: ["Next.js", "TypeScript", "React Query", "Zustand", "Contentful"],
    liveUrl: "https://www.osrscalculators.com/",
    githubUrl: "https://github.com/jopli11/osrs-skills",
    gradient: "bg-gradient-to-br from-amber-600 to-yellow-600"
  },
  {
    title: "Dragon Competitions - Raffle Platform",
    description: "High-performance raffle web application built for Probemas. Handles secure payments at scale and real-time competition logic.",
    tags: ["Next.js", "Firebase", "Stripe", "Contentful", "Cloud Functions"],
    liveUrl: "https://probemas.com/raffles",
    githubUrl: "https://github.com/jopli11/dragon-competitions",
    gradient: "bg-gradient-to-br from-red-600 to-orange-600"
  },
  {
    title: "Runite - Running Platform",
    description: "A specialized platform for runners, focusing on performance tracking and community engagement. Built for speed and scalability.",
    tags: ["Next.js", "TypeScript", "Performance Tracking", "Community", "SaaS"],
    liveUrl: "https://runite.club/",
    liveDisabled: false,
    gradient: "bg-gradient-to-br from-emerald-600 to-teal-600"
  },
  {
    title: "PreStocks Tracker",
    description: "Real-time live ticker tracker for media stream overlays, providing tokenised access to top pre-IPO companies.",
    tags: ["Web3", "Real-time Data", "Broadcast Tech", "Fintech"],
    liveUrl: "https://pre-stocks-tracker.vercel.app/",
    githubUrl: "https://github.com/jopli11/PreStocks-Tracker",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    title: "Personal Todo App",
    description: "A specialized todo application featuring nested tasks, daily progress tracking, and carry-over logic for incomplete work.",
    tags: ["Next.js", "LocalStorage", "Sync", "Productivity"],
    liveUrl: "https://personal-todo-app-dun.vercel.app/",
    githubUrl: "https://github.com/jopli11/personal-todo-app",
    gradient: "bg-gradient-to-br from-cyan-500 to-emerald-500"
  },
  {
    title: "Portfolio Website",
    description: "The very site you're viewing! Built with Next.js 15, React Server Components, and optimized for performance and modern UX.",
    tags: ["Next.js 15", "RSC", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://portfolio-website-sable-iota-93.vercel.app/",
    githubUrl: "https://github.com/jopli11/portfolio-website",
    gradient: "bg-gradient-to-br from-slate-700 to-slate-900"
  },
  {
    title: "Aidacura - Mental Health Toolkit",
    description: "AI-powered mental health platform featuring state-of-the-art chatbots, tailored resources, and mood tracking. Built with a focus on security and user empowerment.",
    tags: ["AI Chatbots", "React", "Node.js", "Security", "Mental Health Tech"],
    liveDisabled: true,
    codeDisabled: true,
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
  },
];

export function ProjectsShowcase() {
  return (
    <section className="relative py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Featured Projects"
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Showcasing innovative solutions that push the boundaries of technology and design.
            Each project represents a unique challenge conquered with creativity and precision.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sampleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            Interested in working together? Let&apos;s create something amazing!
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl glow-emerald"
            >
              💬 Start a Conversation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 