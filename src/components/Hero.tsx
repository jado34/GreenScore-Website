'use client';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 max-w-5xl"
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
        
        <h1 className="text-display-sm sm:text-display-lg md:text-display-2xl font-black mb-8 leading-display-2xl tracking-tight">
          <span className="block text-primary-100">Log Your Life.</span>
          <span className="block bg-gradient-to-r from-primary-60 to-accent-60 bg-clip-text text-transparent italic">
            Save Your World.
          </span>
        </h1>
        
        <p className="text-text-md sm:text-text-lg md:text-text-xl text-neutral-60 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
          The award-winning tracker that turns environmental impact into a high-fidelity game. Build habits, grow forests, and change the planet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto group relative px-8 py-4 bg-primary-50 text-neutral-10 font-bold rounded-2xl flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-primary-60"
          >
            <Download className="w-5 h-5" />
            Download for iOS
            <div className="absolute inset-0 bg-primary-100/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </motion.button>
          
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center justify-center gap-2 text-primary-100 font-semibold group py-2"
          >
            Explore the Forest
            <ArrowRight className="w-5 h-5 text-primary-50 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Elements (Awwwards Style) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-32 h-32 opacity-20 border border-primary-50/20 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[15%] w-48 h-48 opacity-10 bg-gradient-to-br from-primary-50 to-transparent rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
