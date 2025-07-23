import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

const EnhancedCard = ({
  children,
  className = "",
  glowEffect = false,
  magneticEffect = false,
  tiltEffect = false,
  floatEffect = false,
  variant = "default",
  ...props
}) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e) => {
    if (!tiltEffect && !magneticEffect) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    default: "glass-card",
    glass: "glass border-glass-border",
    gradient:
      "bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20",
    neon: "glass-card neon-glow",
    holographic: "glass-card holographic",
  };

  const motionProps = {
    ref: cardRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn(
      "relative rounded-xl p-6 transition-all duration-300",
      cardVariants[variant],
      {
        "hover:shadow-glow-lg": glowEffect,
        magnetic: magneticEffect,
        float: floatEffect,
        "hover-3d": !tiltEffect, // Default 3D hover if tilt is not enabled
      },
      className
    ),
    whileHover: {
      y: floatEffect ? -10 : 0,
      scale: magneticEffect ? 1.02 : 1,
    },
    whileTap: { scale: 0.98 },
    ...props,
  };

  if (tiltEffect) {
    motionProps.style = {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d",
    };
  }

  return (
    <motion.div {...motionProps}>
      {/* Background elements */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-[shine_3s_ease-in-out_infinite]" />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10"
        style={{ transform: tiltEffect ? "translateZ(50px)" : "none" }}
      >
        {children}
      </div>

      {/* Floating particles for neon variant */}
      {variant === "neon" && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Shine animation keyframes (add to CSS)
const shineKeyframes = `
  @keyframes shine {
    0% { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(200%) skewX(-12deg); }
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = shineKeyframes;
  document.head.appendChild(style);
}

export default EnhancedCard;
