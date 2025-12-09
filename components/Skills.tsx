"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "Angular", level: 85, color: "bg-red-500" },
  { name: "TypeScript", level: 88, color: "bg-blue-600" },
  { name: "JavaScript", level: 92, color: "bg-yellow-500" },
  { name: "Next.js", level: 85, color: "bg-black" },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
  { name: "Git", level: 87, color: "bg-orange-600" },
  { name: "REST APIs", level: 88, color: "bg-green-500" },
  { name: "RxJS", level: 80, color: "bg-purple-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`${skill.color} h-3 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
