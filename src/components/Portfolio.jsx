import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './Header';
import Home from './Home';
import SkillsAndExperience from './SkillsAndExperience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills-experience', 'education', 'projects', 'contact'];
      const currentSection = sections.find(section => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />
        <Home scrollToSection={scrollToSection} />
        <SkillsAndExperience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;