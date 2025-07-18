"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const skillsData = [
  {
    quote: "Building modern web applications with React, Next.js, and TypeScript for exceptional user experiences.",
    name: "Frontend Development",
    title: "React • Next.js • TypeScript • Tailwind",
  },
  {
    quote: "Creating robust server-side solutions with Node.js, Python, and cloud services for scalable applications.",
    name: "Backend Development", 
    title: "Node.js • Python • PostgreSQL • AWS",
  },
  {
    quote: "Designing intuitive and beautiful interfaces that users love, with focus on accessibility and performance.",
    name: "UI/UX Design",
    title: "Figma • Adobe XD • Prototyping • Animation",
  },
  {
    quote: "Implementing CI/CD pipelines, containerization, and cloud infrastructure for reliable deployments.",
    name: "DevOps & Cloud",
    title: "Docker • Kubernetes • AWS • Terraform",
  },
  {
    quote: "Building intelligent systems with machine learning algorithms and AI-powered features.",
    name: "AI & Machine Learning",
    title: "TensorFlow • PyTorch • OpenAI • Computer Vision",
  },
  {
    quote: "Developing secure blockchain solutions and smart contracts for decentralized applications.",
    name: "Blockchain",
    title: "Solidity • Web3.js • Ethereum • DeFi",
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
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl glow-blue">
              🚀 Let&apos;s Build Something Amazing
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 