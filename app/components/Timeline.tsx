"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "Alpha Solutions Norge",
    role: "Project Manager",
    description: "Leading digital commerce projects at one of Scandinavia's top e-commerce consultancies. Delivering end-to-end solutions on Adobe Commerce and headless architectures.",
    highlight: true,
  },
  {
    year: "2016",
    title: "Workfor Safeguard",
    role: "Project Lead",
    description: "Led an international team of 10+ specialists. Coordinated 1,800+ individuals with 95% accuracy rate.",
    metrics: ["10+ specialists", "1,800+ coordinated", "95% accuracy"],
  },
  {
    year: "2019",
    title: "Eleutheria",
    role: "IT Consultant",
    description: "Delivered Shopify and WordPress solutions for Norwegian clients with custom implementations.",
  },
  {
    year: "2014",
    title: "Digital Nomad Era",
    role: "Remote Work",
    description: "Worked remotely from 20+ countries including South Africa, Thailand, Mexico, Colombia, and Hungary.",
    subtle: true,
  },
  {
    year: "2013",
    title: "Telenor",
    role: "Monitoring Consultant",
    description: "Served Telenor's top 100 enterprise clients. Managed Cisco routers, fiber monitoring, and global routing.",
  },
  {
    year: "2012",
    title: "University of North Dakota",
    role: "BBA Entrepreneurship",
    description: "Graduated Magna Cum Laude with Minor in Information Systems. Larson Scholarship recipient.",
    highlight: true,
  },
  {
    year: "2006",
    title: "Tech Career Begins",
    role: "IT Staff",
    description: "Started at A NOVO Norge, then Aker Hospital civil service. Built foundation in servers, databases, and networking.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-darker">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            15+ years of building, leading, and delivering across startups, enterprises, and continents.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          {timelineData.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    item.highlight
                      ? "bg-accent border-accent"
                      : item.subtle
                      ? "bg-dark border-gray"
                      : "bg-primary border-primary"
                  }`}
                />
              </div>

              {/* Content card */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <motion.div
                  className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    item.highlight
                      ? "bg-dark/80 border-accent/30 hover:border-accent/60"
                      : item.subtle
                      ? "bg-dark/40 border-gray/20 hover:border-gray/40"
                      : "bg-dark/60 border-gray/30 hover:border-primary/50"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <span
                    className={`text-sm font-mono ${
                      item.highlight ? "text-accent" : "text-primary"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-light mt-1">{item.title}</h3>
                  <p className="text-gray-light text-sm mb-2">{item.role}</p>
                  <p className={`text-sm ${item.subtle ? "text-gray" : "text-gray-light"}`}>
                    {item.description}
                  </p>

                  {item.metrics && (
                    <div className={`flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
