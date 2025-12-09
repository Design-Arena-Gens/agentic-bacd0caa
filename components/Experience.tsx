"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: [
      "Developed and maintained multiple React applications serving 100K+ users",
      "Implemented responsive designs using Tailwind CSS and Material-UI",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Reduced page load times by 40% through code optimization",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Digital Innovations Co.",
    period: "2022 - 2023",
    description: [
      "Built interactive dashboards using Angular and TypeScript",
      "Participated in code reviews and implemented best practices",
      "Worked with RxJS for state management and async operations",
      "Contributed to component library development",
    ],
  },
  {
    title: "Frontend Intern",
    company: "StartUp Labs",
    period: "2021 - 2022",
    description: [
      "Assisted in building responsive web pages with HTML, CSS, and JavaScript",
      "Learned React and contributed to small features",
      "Fixed bugs and improved UI/UX based on user feedback",
      "Participated in daily standups and sprint planning",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
