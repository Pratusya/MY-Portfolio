import React from "react";
import { motion } from "framer-motion";

// 2D Floating Elements
const FloatingElements2D = () => {
  const elements = [
    { id: 1, x: "10%", y: "20%", delay: 0, duration: 6 },
    { id: 2, x: "80%", y: "10%", delay: 1, duration: 8 },
    { id: 3, x: "20%", y: "70%", delay: 2, duration: 7 },
    { id: 4, x: "90%", y: "60%", delay: 0.5, duration: 9 },
    { id: 5, x: "5%", y: "80%", delay: 1.5, duration: 5 },
    { id: 6, x: "70%", y: "30%", delay: 2.5, duration: 6.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-30"
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating orbs */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"
          style={{
            left: `${20 + index * 30}%`,
            top: `${10 + index * 25}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric shapes */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`shape-${index}`}
          className={`absolute w-4 h-4 ${
            index % 2 === 0 ? "rounded-full" : "rotate-45"
          } bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30`}
          style={{
            left: `${15 + index * 20}%`,
            top: `${30 + index * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + index,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Main Component
const FloatingElements = ({ show3D = false }) => {
  return <FloatingElements2D />;
};

export default FloatingElements;
