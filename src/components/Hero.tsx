'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Leaf } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        
        {/* Massive Typography */}
        <motion.h1
          style={{ y: textY }}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tighter font-medium text-foreground mb-6"
        >
          Track beyond.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-foreground/60 max-w-xl font-normal leading-relaxed mb-10 text-balance"
        >
          A sustainability tracker, engineered to inspire. So nothing stands between you and your impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Magnetic>
            <a 
              href="https://drive.google.com/file/d/1PbBNX5dYJXM_1qYEQA23ngJe71GMdlCL/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary-50 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary-50/20"
            >
              <Download className="w-4 h-4" />
              Join Waitlist
            </a>
          </Magnetic>
        </motion.div>

        {/* Hero Mockup Image Area */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-foreground/5 aspect-[4/3] md:aspect-video flex items-center justify-center border border-foreground/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          
          {/* Floating Text - Top Left */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-left z-20 pointer-events-none">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-foreground/40 text-xs md:text-sm uppercase tracking-widest font-bold mb-2"
            >
              The Interface
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-foreground/80 text-xl md:text-2xl font-medium max-w-[200px] leading-tight"
            >
              A digital ecosystem, engineered to grow.
            </motion.h3>
          </div>

          {/* Floating Badge - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex items-center gap-3 bg-background/80 backdrop-blur-xl border border-foreground/10 px-5 py-3 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-default"
          >
             <div className="w-3 h-3 rounded-full bg-primary-50 animate-pulse" />
             <div className="text-left">
               <p className="text-foreground font-bold text-sm">EPA Verified</p>
               <p className="text-foreground/50 text-xs">Live Data Tracking</p>
             </div>
          </motion.div>

          <img 
            src="/hero-app-mockup.png" 
            alt="GreenScore App Mockup" 
            className="w-full h-full object-contain object-center scale-100 group-hover:scale-[1.02] transition-transform duration-[2s]"
          />
        </motion.div>
      </div>
    </section>
  );
}
