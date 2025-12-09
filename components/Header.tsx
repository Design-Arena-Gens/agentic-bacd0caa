"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary cursor-pointer"
        >
          &lt;Dev/&gt;
        </motion.div>
        <ul className="flex space-x-8">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
