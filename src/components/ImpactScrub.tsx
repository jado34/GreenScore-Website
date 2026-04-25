'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  { title: "Log with Ease", desc: "Select from 20+ curated green actions across transport, food, and energy. One tap to record your progress.", emoji: "⚡" },
  { title: "Earn Rewards", desc: "Gain GreenScore points and unlock exclusive cinematic badges as your impact grows.", emoji: "🏆" },
  { title: "See the Difference", desc: "Visualize your saved CO2 and water in your personal, growing 2D Forest map.", emoji: "🌳" },
];

export function ImpactScrub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Stays centered
  const screenImages = [
    '/screenshots/home.jpg',
    '/screenshots/log.jpg',
    '/screenshots/achievements.jpg'
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] px-6">
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 overflow-hidden">
        
        {/* Text Section */}
        <div className="flex-1 max-w-xl z-20 w-full text-center lg:text-left">
          {STEPS.map((step, i) => {
            const opacity = useScrollOpacity(scrollYProgress, i);
            const y = useScrollY(scrollYProgress, i);
            
            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className="absolute inset-0 flex flex-col justify-center h-full pointer-events-none px-4"
              >
                <span className="text-display-md md:text-display-lg mb-4 md:mb-6">{step.emoji}</span>
                <h2 className="text-display-md md:text-display-xl lg:text-display-2xl font-black mb-4 md:mb-6 leading-tight text-primary-100">{step.title}</h2>
                <p className="text-text-lg md:text-text-xl text-neutral-60 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Phone Section (Optimized for Mobile Viewport) */}
        <div className="flex-1 flex items-center justify-center relative scale-[0.7] sm:scale-[0.85] md:scale-100 transition-transform">
          <motion.div
            style={{ y: phoneY }}
            className="relative w-[280px] h-[580px] rounded-2xl border-[8px] border-neutral-30 bg-neutral-20 shadow-elevation-3 overflow-hidden"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-30 rounded-b-2xl z-50" />
            
            {/* Mock Screen Content */}
            <div className="relative w-full h-full">
              {screenImages.map((src, i) => {
                const imgOpacity = useTransform(scrollYProgress, 
                  [i * 0.33, (i + 0.1) * 0.33, (i + 0.9) * 0.33, (i + 1) * 0.33], 
                  [0, 1, 1, 0]
                );
                return (
                  <motion.img
                    key={i}
                    src={src}
                    style={{ opacity: imgOpacity }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                );
              })}
            </div>
          </motion.div>
          
          {/* Decorative Glow */}
          <div className="absolute w-[400px] h-[400px] bg-primary-50/20 rounded-full blur-[80px] -z-10" />
        </div>
      </div>
    </section>
  );
}

// Helper hooks for cleaner JSX
function useScrollOpacity(progress: any, index: number) {
  return useTransform(progress, [index * 0.33, index * 0.33 + 0.15, (index + 1) * 0.33], [0, 1, 0]);
}

function useScrollY(progress: any, index: number) {
  return useTransform(progress, [index * 0.33, index * 0.33 + 0.15, (index + 1) * 0.33], [50, 0, -50]);
}
