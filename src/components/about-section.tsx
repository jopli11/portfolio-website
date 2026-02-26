"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";

const techStack = [
  { name: "React", category: "Frontend", experience: "8+ years" },
  { name: "Node.js", category: "Backend", experience: "8+ years" },
  { name: "TypeScript", category: "Language", experience: "6+ years" },
  { name: "MongoDB", category: "Database", experience: "6+ years" },
  { name: "Systems Architecture", category: "Architecture", experience: "5+ years" },
  { name: "Business Analysis", category: "Consulting", experience: "5+ years" },
  { name: "AWS", category: "Cloud", experience: "4+ years" },
  { name: "GraphQL", category: "API", experience: "4+ years" },
  { name: "Docker", category: "DevOps", experience: "3+ years" },
  { name: "AI Integration", category: "AI/ML", experience: "2+ years" },
];

const achievements = [
  {
    title: "Co-Founded QZee Platform",
    description: "Built and scaled a comprehensive SaaS booking platform serving 1000+ service businesses with real-time features, payment integration, and business growth tools.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Business Strategy"]
  },
  {
    title: "Aidacura Mental Health Platform",
    description: "Developed comprehensive mental health toolkit featuring AI-powered chatbots, mood tracking, and community support with focus on security and confidentiality.",
    tech: ["AI Chatbots", "React", "Node.js", "Mental Health Tech", "Community Platforms"]
  },
  {
    title: "Enterprise Solutions at Capgemini",
    description: "Delivered critical enterprise applications and consulting services, earning multiple awards including AMS CMI AWARD and ACCOUNT DEPENDENCY AWARD.",
    tech: ["Enterprise Apps", "Systems Analysis", "Business Consulting", "Project Management"]
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 bg-background/50">
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
            words="About Me" 
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a passionate full-stack developer with a love for creating innovative digital solutions 
            that make a real impact in people&apos;s lives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Crafting Digital Experiences
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;ve been architecting and building digital solutions for over <span className="text-primary font-semibold">8 years</span>, working across agencies, product companies, and enterprise consulting. I&apos;m passionate about creating scalable web platforms that genuinely solve business problems, whether that&apos;s modernising legacy systems or bringing innovative ideas to life.
              </p>
              
              <p>
                My technical journey spans full-stack development with <span className="text-primary font-semibold">TypeScript/React/Node</span>, enterprise SAP consulting, and solution architecture. I love the challenge of translating complex business requirements into elegant technical solutions that perform well, look great, and deliver real value.
              </p>
              
              <p>
                I&apos;ve recently taken the leap into full-time entrepreneurship, focusing entirely on <span className="text-primary font-semibold">QZee LTD & QDev</span>, taking our SaaS platform from concept to funded product while helping other businesses architect their digital solutions. My background includes leading technical discovery at Spindogs and enterprise consulting with clients like Welsh Government and Welsh Water.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let&apos;s Work Together
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Tech Stack */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h4 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <span className="font-semibold text-foreground">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.experience}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-foreground">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <h5 className="font-semibold text-foreground mb-2">{achievement.title}</h5>
                  <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h4 className="text-2xl font-bold text-foreground mb-4">My Development Philosophy</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              &quot;Great software isn&apos;t just about writing code—it&apos;s about solving real problems, 
              creating delightful experiences, and building solutions that scale. I believe in 
              the power of collaboration, continuous improvement, and staying curious about 
              emerging technologies.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 