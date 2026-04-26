'use client';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-24 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary-50/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent-50/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-10/20 border border-primary-50/20 text-primary-60 text-text-sm font-medium mb-8"
        >
          Our Story
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-md sm:text-display-xl md:text-display-2xl font-black mb-8 leading-[1.1] tracking-tight text-balance text-foreground"
        >
          Redefining the relationship between <span className="text-primary-50 italic">humanity</span> and <span className="text-accent-50 italic">nature.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-lg sm:text-text-xl text-foreground/60 max-w-2xl font-light leading-relaxed text-pretty"
        >
          We are Team 10. A collective of creators, engineers, and visionaries building the infrastructure for global sustainability.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
