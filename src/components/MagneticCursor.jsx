import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let isHovering = false;
    let isClicking = false;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1.5)";
        cursorRef.current.style.borderColor = "hsl(var(--primary))";
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.opacity = "0";
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1)";
        cursorRef.current.style.borderColor = "rgba(255, 255, 255, 0.3)";
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.opacity = "1";
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform = isHovering
          ? "scale(1.2)"
          : "scale(0.8)";
      }
    };

    const handleMouseUp = () => {
      isClicking = false;
      if (cursorRef.current) {
        cursorRef.current.style.transform = isHovering
          ? "scale(1.5)"
          : "scale(1)";
      }
    };

    // Add event listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [data-magnetic], .magnetic, input, textarea, select"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initialize
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Set up observer for dynamically added elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    addHoverListeners();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();

      // Clean up hover listeners
      const interactiveElements = document.querySelectorAll(
        "a, button, [data-magnetic], .magnetic, input, textarea, select"
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden lg:block">
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-white/30 rounded-full pointer-events-none mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      />

      {/* Cursor dot */}
      <motion.div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing effect */}
      <motion.div
        className="fixed w-16 h-16 border border-primary/20 rounded-full pointer-events-none"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      />
    </div>
  );
};

export default MagneticCursor;
