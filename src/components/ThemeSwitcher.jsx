import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Sun,
  Moon,
  Zap,
  Waves,
  Sunset,
  Trees,
  Palette,
  Check,
  X,
} from "lucide-react";

const themeIcons = {
  light: Sun,
  dark: Moon,
  cyberpunk: Zap,
  oceanic: Waves,
  sunset: Sunset,
  forest: Trees,
};

const themeNames = {
  light: "Light",
  dark: "Dark",
  cyberpunk: "Cyberpunk",
  oceanic: "Oceanic",
  sunset: "Sunset",
  forest: "Forest",
};

const themeColors = {
  light: "from-slate-400 to-slate-600",
  dark: "from-slate-700 to-slate-900",
  cyberpunk: "from-purple-500 to-cyan-500",
  oceanic: "from-blue-500 to-teal-500",
  sunset: "from-orange-500 to-yellow-500",
  forest: "from-green-500 to-emerald-500",
};

const ThemeSwitcher = ({ className = "", onClose }) => {
  const { theme, setTheme, themes, isAnimating } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const CurrentIcon = themeIcons[theme] || Moon;

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (onClose) {
      // Close modal after a short delay to show the selection
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* If onClose is provided, render as simple grid for modal */}
      {onClose ? (
        <div className="grid grid-cols-2 gap-3">
          {themes.map((themeName) => {
            const IconComponent = themeIcons[themeName];
            const isSelected = theme === themeName;

            return (
              <motion.button
                key={themeName}
                onClick={() => handleThemeChange(themeName)}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border/30 hover:border-primary/50 bg-card/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isAnimating}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${themeColors[themeName]} flex items-center justify-center`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {themeNames[themeName]}
                  </span>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <Check className="w-3 h-3 text-primary" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      ) : (
        // Original floating button design
        <>
          <motion.button
            className="p-2 md:p-3 glass-card rounded-full hover:shadow-glow transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAnimating}
          >
            <motion.div
              animate={{ rotate: isAnimating ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <CurrentIcon className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Modal container */}
                  <motion.div
                    className="glass-card rounded-2xl border border-border/50 shadow-2xl p-6 max-w-sm w-full mx-auto"
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        Choose Theme
                      </h3>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-muted rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {themes.map((themeName) => {
                        const IconComponent = themeIcons[themeName];
                        const isSelected = theme === themeName;

                        return (
                          <motion.button
                            key={themeName}
                            onClick={() => {
                              setTheme(themeName);
                              setIsOpen(false);
                            }}
                            className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                              isSelected
                                ? "border-primary bg-primary/10 shadow-glow"
                                : "border-border/30 hover:border-primary/50 bg-card/50"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isAnimating}
                          >
                            <div className="flex flex-col items-center space-y-2">
                              <div
                                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${themeColors[themeName]} flex items-center justify-center`}
                              >
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-foreground">
                                {themeNames[themeName]}
                              </span>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute top-2 right-2"
                                >
                                  <Check className="w-3 h-3 text-primary" />
                                </motion.div>
                              )}
                            </div>

                            {/* Selection indicator */}
                            {isSelected && (
                              <motion.div
                                layoutId="theme-selector"
                                className="absolute inset-0 border-2 border-primary rounded-xl"
                                transition={{
                                  type: "spring",
                                  damping: 15,
                                  stiffness: 300,
                                }}
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/50">
                      <p className="text-xs text-muted-foreground text-center">
                        Theme changes apply instantly
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
