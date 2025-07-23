import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TypewriterEffect = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text, delay]);

  return (
    <span className="relative">
      {displayText}
      <span
        className={`ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        } text-primary`}
      >
        |
      </span>
    </span>
  );
};

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-xl ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Home = ({ scrollToSection }) => {
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/3 to-transparent" />

        {/* Floating Orbs */}
        <FloatingOrb
          className="w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent top-1/4 left-1/4"
          delay={0}
        />
        <FloatingOrb
          className="w-64 h-64 bg-gradient-to-r from-accent/20 to-transparent bottom-1/4 right-1/4"
          delay={2}
        />
        <FloatingOrb
          className="w-48 h-48 bg-gradient-to-r from-primary/10 to-accent/10 top-3/4 left-1/2"
          delay={4}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-primary font-mono text-lg mb-4">
                Hi there, I'm
              </p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="hero-name">
                  <TypewriterEffect text="Pratik Harsora" delay={100} />
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-muted-foreground mb-8">
                <TypewriterEffect text="Full Stack Developer" delay={150} />
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              Crafting digital experiences with modern technologies and creative
              solutions. Passionate about building scalable applications that
              make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                className="magnetic px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-floating"
                onClick={() => scrollToSection("projects")}
              >
                <span>View My Work</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="magnetic px-8 py-4 text-lg font-semibold glass-card border-primary/30 hover:border-primary transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <TooltipProvider>
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Download, href: "#", label: "Resume" },
                ].map(({ icon: Icon, href, label }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={href}
                        className="magnetic p-3 glass-card rounded-full hover:shadow-glow transition-all duration-300 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </motion.div>
          </div>

          {/* Profile/Avatar Area */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center glass-card rounded-3xl shadow-floating hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                {/* Profile Image/Avatar */}
                <motion.div
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl font-bold text-primary shadow-inner"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(var(--primary), 0.3)",
                      "0 0 40px rgba(var(--primary), 0.5)",
                      "0 0 20px rgba(var(--primary), 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  PH
                </motion.div>

                {/* Floating Tech Icons */}
                {[
                  { tech: "⚛️", label: "React", angle: 0 },
                  { tech: "🟢", label: "Node", angle: 60 },
                  { tech: "💛", label: "JS", angle: 120 },
                  { tech: "🔷", label: "TS", angle: 180 },
                  { tech: "🗃️", label: "DB", angle: 240 },
                  { tech: "🤖", label: "AI", angle: 300 },
                ].map(({ tech, label, angle }) => (
                  <motion.div
                    key={label}
                    className="absolute w-12 h-12 glass-card rounded-full flex items-center justify-center text-lg shadow-floating hover:shadow-glow cursor-pointer"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * 140,
                      y: Math.sin((angle * Math.PI) / 180) * 140,
                      rotate: [0, 360],
                    }}
                    transition={{
                      x: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: { duration: 20, repeat: Infinity, ease: "linear" },
                      rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    title={label}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            className="magnetic flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection("skills-experience")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
