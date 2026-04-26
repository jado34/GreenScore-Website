'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[20000] bg-neutral-10 flex flex-col items-center justify-center"
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 rotate: [0, 10, -10, 0] 
               }}
               transition={{ duration: 3, repeat: Infinity }}
               className="text-6xl"
             >
               🌱
             </motion.div>
             
             {/* Progress Ring */}
             <svg className="absolute inset-0 w-full h-full -rotate-90">
               <motion.circle
                 cx="80"
                 cy="80"
                 r="70"
                 stroke="currentColor"
                 strokeWidth="2"
                 fill="transparent"
                 className="text-primary-100/10"
               />
               <motion.circle
                 cx="80"
                 cy="80"
                 r="70"
                 stroke="currentColor"
                 strokeWidth="2"
                 fill="transparent"
                 strokeDasharray="440"
                 animate={{ strokeDashoffset: 440 - (440 * count) / 100 }}
                 className="text-primary-100"
               />
             </svg>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 overflow-hidden"
          >
            <motion.span 
              className="block text-display-sm font-black text-primary-100 italic"
            >
              {count}%
            </motion.span>
          </motion.div>

          <div className="absolute bottom-12 text-center">
            <span className="text-text-xs font-bold uppercase tracking-[0.3em] text-neutral-60">
              Initializing Ecosystem
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
