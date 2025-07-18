"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const experiences = [
  {
    title: "Solutions Architect",
    company: "Spindogs",
    period: "Oct 2023 - Present",
    location: "Cardiff, Wales, United Kingdom · Hybrid",
    description: "Leading systems architecture and business analysis initiatives for digital transformation projects. Collaborating with cross-functional teams to design scalable solutions and drive technical strategy.",
    achievements: [
      "Architected enterprise-level digital solutions for diverse client portfolios",
      "Led systems analysis and business consulting for transformation projects",
      "Designed scalable architectures supporting high-traffic applications",
      "Mentored development teams on best practices and technical standards",
      "Delivered comprehensive technical documentation and solution designs"
    ],
    technologies: ["Systems Architecture", "Business Analysis", "Solution Design", "Enterprise Consulting", "Technical Leadership", "Digital Transformation"],
    type: "work"
  },
  {
    title: "Co-Founder & Director",
    company: "QZee",
    period: "Sep 2021 - Present",
    location: "Cardiff, Wales, United Kingdom",
    description: "Co-founded and direct operations for QZee - Bookings Done Better. Leading technical strategy, business development, and product innovation for our comprehensive booking and growth platform serving service businesses.",
    achievements: [
      "Co-founded successful SaaS platform serving 1000+ service businesses",
      "Led full-stack development of booking system with real-time features",
      "Drove business strategy resulting in significant revenue growth",
      "Built scalable React/Node.js platform with payment integration",
      "Managed technical team and product roadmap development"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Business Strategy", "Product Management", "Team Leadership", "SaaS Development"],
    type: "work"
  },
  {
    title: "Application Consultant",
    company: "Capgemini",
    period: "Nov 2018 - Oct 2023",
    location: "Cardiff, Wales, United Kingdom",
    description: "Delivered enterprise application consulting services across multiple high-profile projects. Specialized in systems analysis, business consulting, and technical solution delivery for complex enterprise environments.",
    achievements: [
      "Received multiple awards including AMS CMI AWARD (2023, 2020)",
      "Earned ACCOUNT DEPENDENCY AWARD during COVID-19 (2021)",
      "Achieved OTACE 4.96 AWARD for exceptional performance (2020)",
      "Led systems analysis and business consulting for enterprise clients",
      "Delivered critical applications during high-pressure scenarios"
    ],
    technologies: ["Enterprise Applications", "Systems Analysis", "Business Consulting", "Project Management", "Client Relations", "Technical Consulting"],
    type: "work"
  },
  {
    title: "BSC (HONS) Digital & Technology Solutions",
    company: "University of South Wales",
    period: "2016 - 2019",
    location: "Wales, United Kingdom",
    description: "Bachelor's degree in Digital & Technology Solutions with focus on Computer and Information Sciences. Developed strong foundation in software engineering principles and modern development practices.",
    achievements: [
      "Graduated with honors in Digital & Technology Solutions",
      "Specialized in full-stack web development and systems design",
      "Completed advanced coursework in algorithms and data structures",
      "Led team projects in software engineering and system analysis",
      "Built strong foundation in enterprise technology solutions"
    ],
    technologies: ["Software Engineering", "Web Development", "Systems Design", "Database Management", "Programming Fundamentals"],
    type: "education"
  },
  {
    title: "Extended Diploma, Computer Science",
    company: "Coleg y Cymoedd",
    period: "2016 - 2018",
    location: "Wales, United Kingdom",
    description: "Extended Diploma in Computer Science providing comprehensive foundation in programming, systems analysis, and software development principles.",
    achievements: [
      "Completed Extended Diploma with distinction",
      "Developed strong programming fundamentals",
      "Gained experience in multiple programming languages",
      "Built foundational knowledge in computer systems",
      "Prepared for advanced study in digital technologies"
    ],
    technologies: ["Programming Fundamentals", "Computer Systems", "Software Development", "Problem Solving", "Technical Documentation"],
    type: "education"
  }
];

const milestones = [
  {
    year: "2023",
    title: "Solutions Architect at Spindogs",
    description: "Advanced to Solutions Architect role leading enterprise digital transformation"
  },
  {
    year: "2021",
    title: "Co-Founded QZee",
    description: "Launched comprehensive booking platform serving 1000+ businesses"
  },
  {
    year: "2021",
    title: "Aidacura Platform",
    description: "Built AI-powered mental health toolkit with state-of-the-art chatbots"
  },
  {
    year: "2018",
    title: "Joined Capgemini",
    description: "Started enterprise consulting career, earned multiple awards"
  }
];

export function ExperienceSection() {
  return (
    <section className="relative py-20 px-4 bg-background/30">
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
            words="My Journey" 
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional growth, key projects, and the technologies 
            that have shaped my development journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline - Left Column */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-8"
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      exp.type === 'work' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                        : 'bg-gradient-to-r from-green-600 to-teal-600'
                    }`}>
                      {exp.type === 'work' ? (
                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      )}
                    </div>

                    {/* Experience Content */}
                    <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{exp.period}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones - Right Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Milestones</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Years Experience</span>
                    <span className="font-semibold text-foreground">8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GitHub Contributions</span>
                    <span className="font-semibold text-foreground">765</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enterprise Projects</span>
                    <span className="font-semibold text-foreground">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Security Clearance</span>
                    <span className="font-semibold text-foreground">SC Level</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 