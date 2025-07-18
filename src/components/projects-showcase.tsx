"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ui/project-card";
import { AnimatedText } from "./ui/animated-text";

const sampleProjects = [
  {
    title: "QZee - Booking & Growth Software",
    description: "A comprehensive booking system for service businesses featuring appointment scheduling, payment processing, staff management, client communications, and business growth tools.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Docker", "GraphQL", "AWS", "Auth0"],
    liveUrl: "https://www.qzee.app/",
    codeDisabled: true,
    gradient: "bg-gradient-to-br from-purple-600 to-blue-600"
  },
  {
    title: "OSRS Calculators - Old School RuneScape Tools",
    description: "A fast, mobile-first OSRS skill calculator with 100% mathematical parity featuring live Grand Exchange prices, efficient training path optimization, player lookup, and comprehensive calculators for all skills including XP calculation.",
    tags: ["Next.js", "TypeScript", "React", "Chakra UI", "React Query", "Zustand", "Contentful", "Framer Motion"],
    liveUrl: "https://www.osrscalculators.com/",
    codeDisabled: true,
    gradient: "bg-gradient-to-br from-emerald-600 to-green-600"
  },
  {
    title: "Probemas | Raffles - Gaming Raffle Platform",
    description: "A comprehensive, mobile-first gaming raffle platform featuring provably fair draws, credit-based ticketing, and complete administrative control with cryptographic transparency for all prize drawings.",
    tags: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS", "Emotion/Styled", "Radix UI",],
    githubUrl: "https://github.com/jopli11/runeraffle",
    liveDisabled: true,
    gradient: "bg-gradient-to-br from-amber-600 to-orange-600"
  },
  {
    title: "Setli - Local Service Discovery Platform",
    description: "A modern, user-friendly web platform designed to help users quickly discover and compare the best local services in their area. Features real-time location-based search, Google Places API integration, powerful filtering by distance and rating, and a responsive mobile-first UI with custom theming.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Google Places API", "Axios"],
    githubUrl: "https://github.com/jopli11/setli",
    liveDisabled: true,
    gradient: "bg-gradient-to-br from-slate-600 to-teal-600"
  },
  {
    title: "Aidacura - Mental Health Toolkit",
    description: "Comprehensive online mental health platform featuring state-of-the-art AI-powered chatbots, tailored resources, mood tracking, and community support within a secure and confidential environment. Empowering individuals to take charge of their mental well-being.",
    tags: ["Artificial Intelligence", "React", "Node.js", "AI Chatbots", "Mental Health", "Full-Stack Development", "Community Platform"],
    liveDisabled: true,
    codeDisabled: true,
    gradient: "bg-gradient-to-br from-gray-500 to-gray-600",
    isUnavailable: true
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
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl glow-purple">
              💬 Start a Conversation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 