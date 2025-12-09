"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              I'm a passionate frontend developer with 3 years of hands-on experience building
              responsive, scalable, and user-friendly web applications. My expertise lies in
              crafting seamless user experiences using modern frameworks like React and Angular.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects ranging from e-commerce platforms
              to enterprise dashboards, always focusing on clean code, performance optimization, and
              best practices. I thrive in collaborative environments and enjoy solving complex problems
              with elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new web technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
