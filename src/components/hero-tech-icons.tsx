"use client";

import { motion } from "framer-motion";
import { heroTechIcons } from "@/components/hero-data";
import { MagneticButton } from "./ui/magnetic-button";

export function HeroTechIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="flex justify-center items-center gap-8 pt-16"
    >
      {heroTechIcons.map((icon, index) => (
        <MagneticButton key={index} distance={0.6}>
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            whileDrag={{ scale: 1.2, zIndex: 50 }}
            className="text-primary cursor-grab active:cursor-grabbing"
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 15,
              transition: { duration: 0.3 }
            }}
          >
            {icon}
          </motion.div>
        </MagneticButton>
      ))}
    </motion.div>
  );
}
