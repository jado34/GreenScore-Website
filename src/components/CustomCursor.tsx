'use client';
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [data-cursor]');
      
      if (isInteractive) {
        setIsHovered(true);
        const text = (isInteractive as HTMLElement).getAttribute('data-cursor');
        if (text) setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none hidden md:block">
      <motion.div
        className="flex items-center justify-center bg-primary-100 rounded-full mix-blend-difference"
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 60) : 12,
          height: isHovered ? (cursorText ? 80 : 60) : 12,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold text-neutral-10 uppercase tracking-widest text-center"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
