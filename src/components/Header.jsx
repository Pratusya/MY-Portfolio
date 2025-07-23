import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ExternalLink,
  Home,
  User,
  GraduationCap,
  FolderOpen,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", link: "home", icon: Home },
    { name: "About", link: "skills-experience", icon: User },
    { name: "Education", link: "education", icon: GraduationCap },
    { name: "Projects", link: "projects", icon: FolderOpen },
    { name: "Contact", link: "contact", icon: MessageCircle },
  ];

  const handleScroll = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Modern Clean Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/20 shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer group"
              onClick={() => handleScroll("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  P
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div className="ml-3 hidden sm:block">
                <h1 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Pratik Harsora
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.link}
                    onClick={() => handleScroll(item.link)}
                    className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.link
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {activeSection === item.link && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                        layoutId="activeNavIndicator"
                        style={{ x: "-50%" }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setShowThemeModal(true)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </motion.button>

              {/* Resume Download */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center space-x-2 border-border/50 hover:border-primary/50"
                  onClick={() => console.log("Download resume")}
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </Button>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block"
              >
                <Button
                  size="sm"
                  onClick={() => handleScroll("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  Let's Talk
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="w-6 h-0.5 bg-foreground rounded-full"
                    variants={{
                      closed: { rotate: 0, y: -4 },
                      open: { rotate: 45, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-foreground rounded-full"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-foreground rounded-full"
                    variants={{
                      closed: { rotate: 0, y: 4 },
                      open: { rotate: -45, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 right-4 bg-background border border-border/50 rounded-2xl shadow-2xl p-6 min-w-[280px]"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Mobile Navigation */}
              <nav className="space-y-2 mb-6">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.link}
                      onClick={() => handleScroll(item.link)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.link
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </motion.button>
                  );
                })}
              </nav>

              {/* Mobile Actions */}
              <div className="space-y-3 pt-4 border-t border-border/30">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    console.log("Download resume");
                    setIsMenuOpen(false);
                  }}
                >
                  <Download className="w-4 h-4 mr-3" />
                  Download Resume
                </Button>

                <Button
                  className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleScroll("contact")}
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean Theme Modal */}
      <AnimatePresence>
        {showThemeModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowThemeModal(false)}
          >
            <motion.div
              className="bg-background border border-border/50 rounded-2xl shadow-2xl p-6 max-w-sm w-full"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Choose Theme
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowThemeModal(false)}
                  className="h-8 w-8 rounded-full hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <ThemeSwitcher onClose={() => setShowThemeModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
