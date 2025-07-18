"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {/* Mobile dock disabled as requested */}
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative block md:hidden", className)}>
      <div
        className={cn(
          "mx-auto flex h-16 gap-4 items-end rounded-2xl bg-background/80 dark:bg-background/60 backdrop-blur-md border border-border/50 shadow-lg px-4 pb-3",
          className
        )}
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center text-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-4 w-4">{item.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-6 items-end rounded-2xl bg-background/80 dark:bg-background/60 backdrop-blur-md border border-border/50 shadow-xl px-6 pb-3",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-purple-500/10 before:via-blue-500/10 before:to-pink-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        "relative",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 400,
    damping: 20,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 400,
    damping: 20,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 400,
    damping: 20,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 400,
    damping: 20,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 flex items-center justify-center relative text-primary hover:text-primary transition-all duration-300"
        whileHover={{ 
          boxShadow: "0 10px 30px hsl(var(--primary) / 0.3)"
        }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-3 py-1.5 whitespace-pre rounded-lg bg-background/90 border border-border shadow-lg backdrop-blur-sm text-foreground absolute left-1/2 -translate-x-1/2 -top-12 w-fit text-sm font-medium"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-0"
          animate={{
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
} 