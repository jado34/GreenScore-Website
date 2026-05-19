'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-background">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-primary-50/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/60 text-sm font-medium mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-50"></span>
          </span>
          Our Story
        </motion.div>

        {/* Massive Typography */}
        <motion.h1
          style={{ y: textY }}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tighter font-medium text-foreground mb-8"
        >
          Sustainability wasn&apos;t working.{' '}
          <span className="text-foreground/40">So we redesigned it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-foreground/60 max-w-2xl font-normal leading-relaxed mb-16 text-balance"
        >
          We are GreenLume — a team of engineers and designers on a mission to make sustainability actionable, measurable, and rewarding for everyone.
        </motion.p>

        {/* Image */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[16/9] border border-foreground/10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <Image
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2000&auto=format&fit=crop"
            alt="Nature and Sustainability"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-full object-cover"
            priority
          />
          
          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-8 z-20 flex items-center gap-3 bg-background/80 backdrop-blur-2xl border border-foreground/10 px-5 py-3 rounded-2xl shadow-xl"
          >
            <div className="w-3 h-3 rounded-full bg-primary-50 animate-pulse" />
            <div className="text-left">
              <p className="text-foreground font-bold text-sm">GreenLume</p>
              <p className="text-foreground/50 text-xs">Green Energy Tech</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
