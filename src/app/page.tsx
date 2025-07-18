"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { AnimatedText } from "@/components/ui/animated-text";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { SkillsShowcase } from "@/components/skills-showcase";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { GitHubStatsSection } from "@/components/github-stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";

// Simple icon components for the dock
const HomeIcon = () => (
  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const SkillsIcon = () => (
  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
  </svg>
);

// Development technology icon components for hero section with brand colors
const ReactIcon = () => (
  <svg className="h-8 w-8" fill="#61DAFB" viewBox="0 0 24 24">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

const GraphQLIcon = () => (
  <svg className="h-8 w-8" fill="#E10098" viewBox="0 0 24 24">
    <path d="M5.636 11.364l1.414-1.414L12 14.9l4.95-4.95 1.414 1.414L12 17.728l-6.364-6.364zM12 2L21.5 7v10L12 22 2.5 17V7L12 2zm0 2.364L4.364 8.5v7L12 19.636l7.636-4.136v-7L12 4.364z"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const MongooseIcon = () => (
  <svg className="h-8 w-8" fill="#47A248" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    <circle cx="12" cy="8" r="1"/>
    <circle cx="12" cy="16" r="1"/>
  </svg>
);

const DockerIcon = () => (
  <svg className="h-8 w-8" fill="#2496ED" viewBox="0 0 24 24">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.97-.084 2.931-.252 1.267-.22 2.48-.632 3.582-1.218 1.012-.539 1.901-1.252 2.637-2.11 1.267-1.482 2.031-3.257 2.266-5.274a6.82 6.82 0 001.526-.276c.686-.314 1.084-.76 1.152-.955l.118-.365-.333-.235.004-.005zm-13.016-.788h2.119a.186.186 0 00.185-.186V7.028a.185.185 0 00-.185-.185h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg className="h-8 w-8" fill="#47A248" viewBox="0 0 24 24">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 5.17-3.97 4.291-11.375zm-5.336 7.96c-.4-1.018-.882-2.21-.882-4.566 0-2.27.896-3.546 1.417-4.16.521.614 1.417 1.89 1.417 4.16 0 2.356-.481 3.548-.882 4.566a1.21 1.21 0 01-.035.09c-.013-.03-.022-.06-.035-.09z"/>
  </svg>
);

const NodeJSIcon = () => (
  <svg className="h-8 w-8" fill="#339933" viewBox="0 0 24 24">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.277-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
  </svg>
);

const navItems = [
  { title: "Home", icon: <HomeIcon />, href: "#" },
  { title: "About", icon: <UserIcon />, href: "#about" },
  { title: "Projects", icon: <ProjectsIcon />, href: "#projects" },
  { title: "Skills", icon: <SkillsIcon />, href: "#skills" },
  { title: "GitHub", icon: <GitHubIcon />, href: "#github" },
  { title: "Contact", icon: <ContactIcon />, href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen animated-bg overflow-hidden">
        {/* Background Effects */}
        <BackgroundGrid />
        <BackgroundBeams />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <Meteors number={13} />
        
        {/* Top Navigation with Theme Toggle */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-50 flex items-center justify-between p-6 md:p-8"
        >
          <motion.div 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            joel.dev
          </motion.div>
          <ThemeToggle />
        </motion.div>

        {/* Floating Dock Navigation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <FloatingDock items={navItems} />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-40 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            
            {/* Main Heading with Original AnimatedText */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-4"
            >
              <AnimatedText
                text="Building the Future"
                className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text"
                delay={0.2}
              />
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground"
              >
                One Line of Code at a Time
              </motion.h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              I&apos;m a full-stack developer who creates{" "}
              <span className="text-primary font-semibold">extraordinary digital experiences</span>
              {" "}with cutting-edge technologies and stunning visual design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px hsl(var(--primary) / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 glow-purple bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🚀 View My Projects
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/60"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  💬 Let&apos;s Talk
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="flex justify-center items-center gap-8 pt-16"
            >
              {[
                <ReactIcon key="react" />,
                <MongoDBIcon key="mongodb" />,
                <GraphQLIcon key="graphql" />,
                <NodeJSIcon key="nodejs" />,
                <DockerIcon key="docker" />,
                <MongooseIcon key="mongoose" />
              ].map((icon, index) => (
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
          </div>
        </div>

        {/* Scroll Indicator - moved higher to avoid dock interference */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-40"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
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
        </motion.div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Showcase Section */}
      <div id="projects">
        <ProjectsShowcase />
      </div>

      {/* Skills Showcase Section */}
      <div id="skills">
        <SkillsShowcase />
      </div>

      {/* GitHub Stats Section */}
      <div id="github">
        <GitHubStatsSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
