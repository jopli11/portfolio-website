"use client";

import { motion } from "framer-motion";

// Icon components
const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    url: "https://github.com/jopli11",
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn", 
    icon: <LinkedInIcon />,
    url: "https://linkedin.com/in/joel-parfitt",
    color: "hover:text-blue-400"
  },
  {
    name: "Email",
    icon: <EmailIcon />,
    url: "mailto:joelparfitt@qzee.app",
    color: "hover:text-green-400"
  }
];

const quickLinks = [
  { name: "QZee Platform", url: "https://www.qzee.app/" },
  { name: "OSRS Calculators", url: "https://www.osrscalculators.com/" },
  { name: "GitHub Profile", url: "https://github.com/jopli11" },
  { name: "Portfolio Source", url: "https://github.com/jopli11/portfolio" }
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background/95 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold gradient-text">joel.dev</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                Full-stack developer passionate about creating exceptional digital experiences 
                with modern technologies and thoughtful design.
              </p>
            </div>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-card/50 border border-border/30 text-muted-foreground transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-4 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                💼 Available for freelance projects and full-time opportunities
              </p>
              <p className="text-sm text-primary font-medium mt-1">
                Let&apos;s build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Featured Work</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/30 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>&copy; {currentYear} Joel Parfitt. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <HeartIcon />
              <span>using Next.js, TypeScript & Tailwind CSS</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              This portfolio is open source and available on{" "}
              <a 
                href="https://github.com/jopli11/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 