import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Home', link: 'home' },
    { name: 'Skills & Experience', link: 'skills-experience' },
    { name: 'Education', link: 'education' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } })
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  const MenuItem = ({ item, index, isMobile = false }) => (
    <motion.div
      key={item.name}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a 
        href={`#${item.link}`}
        className={`text-sm font-medium hover:text-primary transition-colors ${activeSection === item.link ? 'text-primary' : 'text-foreground'}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(item.link);
          if (isMobile) setIsMenuOpen(false);
        }}
      >
        {item.name}
      </a>
    </motion.div>
  );

  const ThemeToggle = () => (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );

  return (
    <motion.header 
      className="fixed w-full z-40 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300"
      variants={headerVariants}
      animate={visible ? 'visible' : 'hidden'}
      initial="visible"
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Pratik
          </motion.h1>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background"
          >
            <nav className="px-6 py-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <MenuItem item={item} index={index} isMobile={true} />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;