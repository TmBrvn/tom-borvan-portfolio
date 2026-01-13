"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Project Leadership",
    icon: "🎯",
    color: "primary",
    skills: [
      "International team management",
      "Stakeholder coordination",
      "Agile & Scrum methodology",
      "95%+ accuracy delivery",
      "100% deadline compliance",
    ],
  },
  {
    title: "E-Commerce & Web",
    icon: "🛒",
    color: "accent",
    skills: [
      "Adobe Commerce (Magento)",
      "Next.js / React",
      "Vercel deployment",
      "Headless architecture",
      "API integrations",
    ],
  },
  {
    title: "AI & Analytics",
    icon: "🤖",
    color: "primary",
    skills: [
      "Claude Code",
      "Microsoft Copilot Studio",
      "Power BI",
      "Data visualization",
      "Process automation",
    ],
  },
  {
    title: "Technical Foundation",
    icon: "⚙️",
    color: "accent",
    skills: [
      "CCNA Certified",
      "Network security",
      "PHP, Python, VBA",
      "Windows Server / AD",
      "Database management",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Platform-agnostic consulting with deep technical roots and business acumen.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`p-6 rounded-xl bg-darker border transition-all duration-300 hover:scale-[1.03] ${
                category.color === "primary"
                  ? "border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  : "border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              }`}
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  category.color === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-light text-sm flex items-center gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        category.color === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages bar */}
        <motion.div
          className="mt-16 p-6 rounded-xl bg-darker border border-gray/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { lang: "Norwegian", level: "Native", width: "100%" },
              { lang: "English", level: "Fluent", width: "95%" },
              { lang: "Swedish", level: "Basic", width: "40%" },
            ].map((item) => (
              <div key={item.lang} className="text-center">
                <p className="text-light font-medium">{item.lang}</p>
                <p className="text-gray text-sm">{item.level}</p>
                <div className="w-24 h-1 bg-dark rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
