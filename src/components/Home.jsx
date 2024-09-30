import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TypewriterEffect = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');

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

    return () => clearInterval(timer);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const Home = ({ scrollToSection }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </motion.div>

      <div className="text-center z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm
        </motion.h2>
        <motion.div
          className="text-6xl md:text-8xl font-extrabold mb-6 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <TypewriterEffect text="Pratik Harsora" delay={150} />
        </motion.div>
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Full Stack Developer
        </motion.h3>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Passionate about creating seamless web experiences and driving innovation through technology.
          With expertise in both front-end and back-end development, I bring ideas to life with clean,
          efficient, and scalable code.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollToSection('contact')}>
            Contact Me
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <LucideIcons.Github size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <LucideIcons.Linkedin size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="mailto:your.email@example.com" className="text-foreground hover:text-primary transition-colors">
                  <LucideIcons.Mail size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Home;