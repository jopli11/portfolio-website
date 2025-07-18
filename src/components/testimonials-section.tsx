"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const testimonials = [
  {
    name: "Cameron Calder",
    role: "Experienced Product & UI/UX Designer",
    company: "Co-Founder @ QZee",
    image: "/api/placeholder/60/60",
    testimonial: "I had the distinct pleasure of managing Joel Parfit at QZee for a significant duration, and I can confidently attest to his multifaceted talents. Joel is a rare breed who seamlessly transitioned between development, sales, and marketing. Not only did he display an in-depth understanding of our technical requirements, but he also demonstrated an innate ability to connect with clients, understand their needs, and market our solutions effectively. Joel's proactive approach, combined with his adaptability, made him an invaluable asset to our team.",
    rating: 5,
    project: "QZee Platform"
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Clinical Director & Mental Health Specialist",
    company: "Aidacura Advisory Board",
    image: "/api/placeholder/60/60",
    testimonial: "Joel's work on the Aidacura platform was transformative for our mental health initiative. His deep understanding of both the technical requirements and the sensitive nature of mental health support enabled him to create a platform that truly makes a difference. The AI-powered chatbot integration he developed maintains the perfect balance between technological innovation and human empathy. Joel's ability to translate complex clinical requirements into intuitive user experiences while ensuring complete privacy and security compliance was exceptional.",
    rating: 5,
    project: "Aidacura Mental Health Platform"
  },
  {
    name: "Marcus Thompson",
    role: "Senior Solutions Architect",
    company: "Capgemini UK",
    image: "/api/placeholder/60/60",
    testimonial: "During Joel's tenure at Capgemini, I had the opportunity to work alongside him on several high-stakes enterprise projects. His systems thinking approach and ability to architect scalable solutions consistently impressed both clients and senior management. Joel has this rare combination of deep technical expertise and business acumen that allowed him to bridge the gap between complex enterprise requirements and practical implementation. His multiple awards, including the AMS CMI AWARD, were well-deserved recognition of his outstanding contributions to our most challenging projects.",
    rating: 5,
    project: "Enterprise Consulting"
  }
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
  </svg>
);

export function TestimonialsSection() {
  return (
    <section className="relative py-20 px-4 bg-background/60">
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
            words="Client Testimonials" 
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients and collaborators 
            have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <QuoteIcon />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
              </div>

              {/* Testimonial Text */}
                             <p className="text-muted-foreground leading-relaxed mb-6">
                 &quot;{testimonial.testimonial}&quot;
               </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to bring your next project to life with the same 
            level of excellence and attention to detail.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 