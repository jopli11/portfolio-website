"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsTransitioning(true)
    setTheme(theme === "light" ? "dark" : "light")
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[9999] pointer-events-none bg-primary/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative h-9 w-9 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-accent hover:border-primary/40 transition-all duration-300 z-[10000]"
      >
        <motion.div
          initial={false}
          animate={{ 
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="h-4 w-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ 
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="h-4 w-4 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </motion.div>
        
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
