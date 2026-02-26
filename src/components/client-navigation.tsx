"use client";

import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/components/hero-data";

export function ClientNavigation() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <FloatingDock items={navItems} />
    </motion.div>
  );
}
