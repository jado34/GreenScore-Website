'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface TextRevealProps {
  children: string;
  /** 'word' for word-by-word stagger, 'char' for character-by-character */
  mode?: 'word' | 'char';
  /** Base delay before the animation starts (seconds) */
  delay?: number;
  /** Stagger delay between each unit (seconds) */
  stagger?: number;
  /** Additional className for the wrapper */
  className?: string;
  /** HTML tag to render as */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  /** Whether to animate on scroll into view (true) or on mount (false) */
  onScroll?: boolean;
}

export function TextReveal({
  children,
  mode = 'word',
  delay = 0,
  stagger = 0.04,
  className = '',
  as: Tag = 'div',
  onScroll = true,
}: TextRevealProps) {
  const units = mode === 'word' ? children.split(' ') : children.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const unitVariants = mode === 'char'
    ? {
        hidden: { 
          opacity: 0, 
          y: 40,
          rotateX: 90,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            damping: 20,
            stiffness: 100,
          },
        },
      }
    : {
        hidden: { 
          opacity: 0, 
          y: 20,
          filter: 'blur(4px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

  const motionProps = onScroll
    ? {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, margin: '-80px' },
      }
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
      };

  return (
    <motion.div
      variants={containerVariants}
      {...motionProps}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap' as const, perspective: mode === 'char' ? '1000px' : undefined }}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          variants={unitVariants}
          className="inline-block"
          style={{ 
            transformOrigin: 'bottom center',
            marginRight: mode === 'word' ? '0.3em' : undefined,
          }}
        >
          {unit === ' ' ? '\u00A0' : unit}
        </motion.span>
      ))}
    </motion.div>
  );
}
