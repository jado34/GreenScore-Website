'use client';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import { Magnetic } from './Magnetic';

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-primary-50/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-foreground/[0.03] border border-foreground/[0.08] text-foreground/80 text-text-xs uppercase tracking-widest font-bold mb-12"
        >
          <Leaf className="w-4 h-4 text-primary-50" />
          The Ultimate Sustainability Tracker
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.05] tracking-tight font-black text-foreground mb-8 text-balance"
        >
          Turn Daily Habits Into <br className="hidden md:block" />
          <span className="italic font-light text-primary-50">Global Impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-foreground/60 max-w-2xl font-light leading-relaxed mb-14"
        >
          GreenScore gamifies sustainability. Log your transport, food, and energy habits to earn points, build your virtual forest, and seamlessly track your real-world footprint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Magnetic>
            <button className="group relative px-8 py-5 bg-foreground text-background font-bold rounded-2xl flex items-center justify-center gap-3 overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-elevation-3">
              <Download className="w-5 h-5" />
              <span className="relative z-10">Download APK</span>
            </button>
          </Magnetic>

          <Magnetic>
            <Link href="/about" className="group flex items-center justify-center gap-2 text-foreground font-semibold py-4 px-6 rounded-2xl hover:bg-foreground/5 transition-colors">
              Discover Our Story
              <ArrowRight className="w-5 h-5 text-primary-50 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
