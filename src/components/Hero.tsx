'use client';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Leaf } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 pt-32 lg:pt-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center lg:text-left z-10 max-w-2xl lg:flex-1"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-10/20 border border-primary-50/20 text-primary-60 text-text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-50"></span>
          </span>
          Next-Gen Sustainability is Here
        </motion.div>
        
        <h1 className="text-display-sm sm:text-display-lg md:text-display-2xl font-black mb-8 leading-tight tracking-tight text-balance">
          <span className="block text-foreground">Log Your Life.</span>
          <span className="block bg-gradient-to-r from-primary-60 to-accent-60 bg-clip-text text-transparent italic">
            Save Your World.
          </span>
        </h1>
        
        <p className="text-text-md sm:text-text-lg text-foreground/60 mb-10 md:mb-12 font-light leading-relaxed text-pretty lg:max-w-xl">
          Master 20+ daily habits and watch your impact grow. From <strong>Seedling</strong> to <strong>Forest</strong>, track your journey with science-backed metrics and cinematic rewards.
        </p>

        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 sm:gap-6">
          <Magnetic>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              data-cursor="Download"
              className="w-full sm:w-auto group relative px-8 py-4 bg-primary-50 text-background font-bold rounded-2xl flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-primary-60"
            >
              <Download className="w-5 h-5" />
              Download for iOS
              <div className="absolute inset-0 bg-primary-100/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </motion.button>
          </Magnetic>
          
          <Magnetic>
            <motion.button
              whileHover={{ x: 5 }}
              data-cursor="Explore"
              className="flex items-center justify-center gap-2 text-primary-100 font-semibold group py-2 px-4"
            >
              Explore the Forest
              <ArrowRight className="w-5 h-5 text-primary-50 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Magnetic>
        </div>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-1 w-full lg:w-auto mt-20 lg:mt-0 flex justify-center lg:justify-end"
      >
        <div className="relative w-[85vw] max-w-[500px] aspect-square">
          <div className="absolute inset-0 bg-primary-100/5 rounded-[4rem] rotate-6 scale-105 blur-2xl" />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-[3.5rem] overflow-hidden border border-foreground/10 shadow-elevation-5"
          >
            <img 
              src="/images/environment-day.jpg" 
              alt="Community planting trees" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
          
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 p-6 bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-3xl shadow-elevation-4 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-50" />
              </div>
              <div>
                <div className="text-text-sm font-bold text-foreground">+4,200kg</div>
                <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">CO2 Saved Today</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements (Awwwards Style) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[5%] w-32 h-32 opacity-20 border border-primary-50/20 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-48 h-48 opacity-10 bg-gradient-to-br from-primary-50 to-transparent rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
