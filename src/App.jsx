import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Portfolio from "./components/Portfolio";
import ScrollIndicator from "./components/ScrollIndicator";
import FloatingElements from "./components/FloatingElementsSimple";
import AnimatedBackground from "./components/AnimatedBackground";
import MagneticCursor from "./components/MagneticCursor";
import { motion, AnimatePresence } from "framer-motion";

// Loading Screen Component
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="w-24 h-24 mx-auto mb-8 border-4 border-primary/20 rounded-full relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio
        </motion.h1>

        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gradient-from to-gradient-to"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-muted-foreground mt-2 font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Check if device can handle 3D
    const checkDevice = () => {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const hasGoodPerformance = navigator.hardwareConcurrency > 4;
      setShow3D(!isMobile && hasGoodPerformance);
    };

    checkDevice();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="relative min-h-screen overflow-hidden custom-scrollbar">
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Background Elements */}
              <AnimatedBackground />
              <FloatingElements show3D={show3D} />

              {/* Interactive Elements */}
              <MagneticCursor />
              <ScrollIndicator />

              {/* Main Content */}
              <div className="relative z-20">
                <Portfolio />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
