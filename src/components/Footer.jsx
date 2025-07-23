import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Heart,
  ArrowUp,
  Sparkles,
  Code,
  Coffee,
  MapPin,
  Phone,
  Download,
  User,
  FolderOpen,
  GraduationCap,
  Code2,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLink = ({ href, icon: Icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative p-3 glass-card rounded-full hover:shadow-glow transition-all duration-300 ${color}`}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    title={label}
  >
    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    <motion.div
      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity border border-border/50"
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
    >
      {label}
    </motion.div>
  </motion.a>
);

const QuickLink = ({ children, onClick, icon: Icon }) => (
  <motion.button
    className="group flex items-center space-x-3 py-2 px-1 text-left w-full hover:text-primary transition-all duration-300"
    whileHover={{ x: 8 }}
    onClick={onClick}
  >
    <Icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
      {children}
    </span>
  </motion.button>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      href: "https://linkedin.com/in/pratik-harsora-40b108203",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      href: "https://github.com/pratik353",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      href: "mailto:pratikharsora41@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-red-500",
    },
    {
      href: "https://www.instagram.com/pratikharsora_48/",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
  ];

  const quickLinks = {
    about: [
      { label: "About", section: "home", icon: User },
      { label: "Contact", section: "contact", icon: MessageCircle },
    ],
    work: [
      { label: "Experience", section: "skills-experience", icon: Briefcase },
      { label: "Projects", section: "projects", icon: FolderOpen },
    ],
    skills: [
      { label: "Skills", section: "skills-experience", icon: Code2 },
      { label: "Education", section: "education", icon: GraduationCap },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="relative bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg">PH</span>
                </div>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold hero-name">Pratik Harsora</h3>
                <p className="text-primary text-sm font-mono">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Passionate developer crafting digital experiences with modern
              technologies. Specialized in building scalable applications that
              make a difference.
            </p>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-primary" />
                <span>Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center space-x-2 text-foreground">
              <Code className="w-5 h-5 text-primary" />
              <span>Quick Links</span>
            </h4>

            <div className="grid grid-cols-3 gap-4">
              {/* About Section */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-primary uppercase tracking-wide">
                  About
                </h5>
                <div className="space-y-1">
                  {quickLinks.about.map((link, index) => (
                    <QuickLink
                      key={index}
                      icon={link.icon}
                      onClick={() => scrollToSection(link.section)}
                    >
                      {link.label}
                    </QuickLink>
                  ))}
                </div>
              </div>

              {/* Work Section */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-primary uppercase tracking-wide">
                  Work
                </h5>
                <div className="space-y-1">
                  {quickLinks.work.map((link, index) => (
                    <QuickLink
                      key={index}
                      icon={link.icon}
                      onClick={() => scrollToSection(link.section)}
                    >
                      {link.label}
                    </QuickLink>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-primary uppercase tracking-wide">
                  Skills
                </h5>
                <div className="space-y-1">
                  {quickLinks.skills.map((link, index) => (
                    <QuickLink
                      key={index}
                      icon={link.icon}
                      onClick={() => scrollToSection(link.section)}
                    >
                      {link.label}
                    </QuickLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/30">
              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Let's Connect</span>
            </h4>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:pratikharsora41@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  pratikharsora41@gmail.com
                </a>
              </div>
            </div>

            <div className="flex space-x-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  color={social.color}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Pratik Harsora</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">© 2024 All rights reserved</span>
          </div>

          <motion.button
            className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors glass-card px-4 py-2 rounded-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-10 w-2 h-2 bg-primary/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-3 h-3 bg-accent/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
