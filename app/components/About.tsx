"use client";

import { m } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <m.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar/Visual */}
          <m.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-pulse" />
              <div className="absolute inset-4 border-2 border-accent/20 rounded-full" />

              {/* Profile photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <Image
                  src="/tom-borvan.jpg"
                  alt="Tom Børvan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <m.div
                className="absolute -top-2 -right-2 bg-dark border border-primary/50 rounded-lg px-3 py-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm text-primary font-mono">15+ years</span>
              </m.div>

              <m.div
                className="absolute -bottom-2 -left-2 bg-dark border border-accent/50 rounded-lg px-3 py-1"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm text-accent font-mono">Magna Cum Laude</span>
              </m.div>
            </div>
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-gray-light text-lg leading-relaxed">
              <p>
                Project Manager at <span className="text-light font-medium">Alpha Solutions Norge</span>,
                one of Scandinavia&apos;s top digital commerce consultancies with 20+ years of experience.
                I bridge the gap between technical complexity and business objectives.
              </p>

              <p>
                Specializing in <span className="text-primary">Adobe Commerce</span>,{" "}
                <span className="text-primary">Next.js</span>, and modern headless architectures.
                Leveraging AI tools like <span className="text-primary">Claude Code</span> and{" "}
                <span className="text-primary">Microsoft Copilot Studio</span> to build smarter solutions.
              </p>

              <p>
                Norwegian by birth, global by experience. I spent 7 years as a digital nomad,
                leading remote teams across time zones while delivering results that speak for
                themselves: <span className="text-accent font-medium">95% accuracy</span>,{" "}
                <span className="text-accent font-medium">100% deadline compliance</span>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["E-Commerce", "Project Leadership", "Team Management", "Technical Consulting"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-darker border border-gray/30 rounded-full text-sm text-gray-light hover:border-primary/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
