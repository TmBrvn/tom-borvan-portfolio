"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "International Data Curation",
    company: "Workfor Safeguard",
    description:
      "Led a large-scale data curation project coordinating an international team of 10+ specialists across multiple time zones, managing over 1,800 individuals in the main project.",
    metrics: [
      { label: "Team Size", value: "10+" },
      { label: "Accuracy", value: "95%" },
      { label: "Deadlines", value: "100%" },
    ],
    tags: ["Project Leadership", "Remote Teams", "Data Quality"],
    featured: true,
  },
  {
    title: "Staff Booking Platform",
    company: "Beyond Communication (via Eleutheria)",
    description:
      "Developed a custom web application for event staff booking, training tracking, and reporting. Delivered a complete solution that transformed how the agency managed their workforce.",
    metrics: [
      { label: "Efficiency", value: "+70%" },
      { label: "Retention", value: "90%" },
    ],
    tags: ["Web Development", "Custom Software", "Process Automation"],
    featured: true,
  },
  {
    title: "Møbelringen E-commerce Platform",
    company: "Alpha Solutions Norge",
    description:
      "Delivered a complete omnichannel e-commerce platform for Norway's leading furniture chain with 70 stores. Built on headless architecture with Adobe Commerce, enabling seamless integration between digital and physical retail.",
    metrics: [
      { label: "Stores", value: "70" },
      { label: "Launch", value: "2024" },
    ],
    tags: ["Adobe Commerce", "Next.js", "Vercel", "Headless", "Omnichannel"],
    featured: true,
    link: "https://www.mobelringen.no",
  },
  {
    title: "madeinnorway.no",
    company: "Personal Venture",
    description:
      "Running a webstore showcasing Norwegian products together with my wife. From concept to launch to ongoing operations.",
    tags: ["E-Commerce", "Entrepreneurship"],
    link: "https://madeinnorway.no",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-darker">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Selected projects showcasing leadership, technical delivery, and business impact.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                project.featured
                  ? "bg-gradient-to-br from-dark to-darker border border-primary/30 hover:border-primary/60"
                  : "bg-dark border border-gray/20 hover:border-gray/40"
              }`}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              {/* Glow effect for featured */}
              {project.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative p-8">
                {/* Company badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray font-mono">{project.company}</span>
                  {project.featured && (
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-colors"
                    >
                      Visit Site →
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-light mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-light mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex gap-6 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-2xl font-bold text-accent">{metric.value}</p>
                        <p className="text-xs text-gray">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-darker border border-gray/30 rounded-full text-gray-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
