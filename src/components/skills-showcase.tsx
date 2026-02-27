"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const skillsData = [
  {
    quote: "Architecting scalable digital solutions that align with business outcomes and technical excellence.",
    name: "Solution Architecture",
    title: "System Design • API Design • Cloud Strategy",
  },
  {
    quote: "Building modern web applications with React, Next.js, and TypeScript for exceptional performance.",
    name: "Frontend Engineering",
    title: "React • Next.js • TypeScript • Tailwind",
  },
  {
    quote: "Creating robust server-side solutions and SaaS platforms with Node.js and scalable databases.",
    name: "Backend & SaaS", 
    title: "Node.js • MongoDB • Stripe • Auth",
  },
  {
    quote: "Leading technical discovery and translating complex business needs into elegant technical solutions.",
    name: "Technical Leadership",
    title: "Discovery • Strategy • Mentorship • Delivery",
  },
  {
    quote: "Implementing secure infrastructure and automated workflows for high-performance applications.",
    name: "Cloud & Infrastructure",
    title: "AWS • Docker • CI/CD • Security",
  },
  {
    quote: "Bridging the gap between technical teams and stakeholders in enterprise and startup environments.",
    name: "Systems Analysis",
    title: "Business Analysis • Consulting • Requirements",
  },
];

export function SkillsShowcase() {
  return (
    <section className="relative pt-8 pb-20 px-4 bg-background/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Technologies & Expertise"
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive toolkit of cutting-edge technologies and methodologies 
            to bring your digital visions to life.
          </motion.p>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <InfiniteMovingCards
            items={skillsData}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            Ready to leverage these technologies for your next project?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl glow-emerald">
              🚀 Let&apos;s Build Something Amazing
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 