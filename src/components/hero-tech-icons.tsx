"use client";

import { motion } from "framer-motion";
import { heroTechIcons } from "@/components/hero-data";

export function HeroTechIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="flex justify-center items-center gap-8 pt-16"
    >
      {heroTechIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="text-primary"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            transition: { duration: 0.3 }
          }}
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  );
}
