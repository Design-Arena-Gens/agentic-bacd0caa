"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce site with cart, checkout, and payment integration",
    tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Task Management Dashboard",
    description: "Enterprise dashboard for project and task tracking with real-time updates",
    tech: ["Angular", "TypeScript", "RxJS", "Material UI"],
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    tech: ["React", "OpenWeather API", "CSS Modules"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for portfolios with drag-and-drop builder",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics and engagement",
    tech: ["Angular", "Chart.js", "SCSS", "Firebase"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Recipe Finder",
    description: "Search and save your favorite recipes with nutritional information",
    tech: ["React", "Spoonacular API", "LocalStorage"],
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className={`h-32 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
