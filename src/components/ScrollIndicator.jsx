import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to percentage
  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // Use the new .on method instead of deprecated .onChange
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
      setIsVisible(latest > 0.1); // Show indicator after 10% scroll
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Section navigation points
  const sections = [
    { name: "Home", id: "home", threshold: 0 },
    { name: "Skills", id: "skills-experience", threshold: 0.2 },
    { name: "Education", id: "education", threshold: 0.4 },
    { name: "Projects", id: "projects", threshold: 0.6 },
    { name: "Contact", id: "contact", threshold: 0.8 },
  ];

  const scrollToSection = (sectionId, threshold) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback to percentage-based scrolling
      window.scrollTo({
        top:
          threshold *
          (document.documentElement.scrollHeight - window.innerHeight),
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[9999] transform-gpu"
        style={{ scaleX, transformOrigin: "0%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      {/* Side navigation dots - Desktop */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="desktop-nav"
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section, index) => {
              const isActive =
                scrollProgress >= section.threshold &&
                (index === sections.length - 1 ||
                  scrollProgress < sections[index + 1]?.threshold);

              return (
                <motion.div
                  key={`desktop-${section.id}`}
                  className="group relative cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection(section.id, section.threshold)}
                >
                  <motion.div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 border-blue-500 shadow-lg scale-125"
                        : "bg-transparent border-gray-400 hover:border-blue-400"
                    }`}
                    style={{
                      backgroundColor: isActive ? "#3b82f6" : "transparent",
                      borderColor: isActive ? "#3b82f6" : "#9ca3af",
                    }}
                  />

                  {/* Tooltip */}
                  <motion.div
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 glass-card rounded-md text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                    initial={{ x: 10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    {section.name}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile navigation dots - Bottom */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="mobile-nav"
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden flex space-x-3 glass-card px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section, index) => {
              const isActive =
                scrollProgress >= section.threshold &&
                (index === sections.length - 1 ||
                  scrollProgress < sections[index + 1]?.threshold);

              return (
                <motion.div
                  key={`mobile-${section.id}`}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300`}
                  style={{
                    backgroundColor: isActive ? "#3b82f6" : "#6b7280",
                    transform: isActive ? "scale(1.25)" : "scale(1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection(section.id, section.threshold)}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll percentage display - Desktop */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="percentage-display"
            className="fixed bottom-6 right-6 z-50 glass-card rounded-full px-4 py-2 text-sm font-mono font-medium hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span className="text-blue-500 font-bold">
              {Math.round(scrollProgress * 100)}%
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollProgress > 0.3 && (
          <motion.button
            key="scroll-to-top"
            className="fixed bottom-6 left-6 z-50 glass-card rounded-full p-3 hover:shadow-lg transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
          >
            <ChevronUp className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-200" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollIndicator;
