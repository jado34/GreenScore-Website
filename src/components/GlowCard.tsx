'use client';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  /** Color of the glow effect */
  glowColor?: string;
  /** Size of the glow radius in pixels */
  glowSize?: number;
}

export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(76, 175, 80, 0.12)',
  glowSize = 300,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${glowSize}px circle at var(--glow-x) var(--glow-y), ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${glowSize * 0.8}px circle at var(--glow-x) var(--glow-y), rgba(76, 175, 80, 0.15), transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Content */}
      {children}

      {/* Script-like effect: update CSS vars */}
      <GlowUpdater cardRef={cardRef} x={springX} y={springY} />
    </motion.div>
  );
}

function GlowUpdater({
  cardRef,
  x,
  y,
}: {
  cardRef: React.RefObject<HTMLDivElement | null>;
  x: any;
  y: any;
}) {
  x.on('change', (latest: number) => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--glow-x', `${latest}px`);
    }
  });

  y.on('change', (latest: number) => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--glow-y', `${latest}px`);
    }
  });

  return null;
}
