import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./HomeNew";
import SkillsAndExperience from "./SkillsAndExperience";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills-experience",
        "education",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Switcher - Fixed Position */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <Home scrollToSection={scrollToSection} />
        <SkillsAndExperience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Portfolio;
