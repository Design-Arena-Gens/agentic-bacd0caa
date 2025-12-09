"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Specializing in{" "}
            <span className="text-primary font-semibold">React</span> &{" "}
            <span className="text-secondary font-semibold">Angular</span>
          </motion.p>
          <motion.p
            className="text-lg text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            3 Years of Experience Building Modern Web Applications
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
