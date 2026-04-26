'use client';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
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

  // Velocity Tilt Logic
  const scrollVelocity = useVelocity(scrollYProgress);
  const tiltX = useSpring(useTransform(scrollVelocity, [-1, 1], [15, -15]), { stiffness: 100, damping: 30 });
  const tiltY = useSpring(useTransform(scrollVelocity, [-1, 1], [-5, 5]), { stiffness: 100, damping: 30 });

  const screenImages = [
    '/screenshots/home.jpg',
    '/screenshots/log.jpg',
    '/screenshots/achievements.jpg'
  ];

  return (
    <section id="methodology" ref={containerRef} className="relative w-full h-[300vh] px-6">
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 overflow-hidden">
        
        {/* Progress Indicator (Left Side) */}
        <div className="hidden lg:flex flex-col gap-4 absolute left-12 top-1/2 -translate-y-1/2 z-50">
          {STEPS.map((_, i) => {
            const active = useTransform(scrollYProgress, 
              [i * 0.33, (i + 0.5) * 0.33, (i + 1) * 0.33], 
              [0.3, 1, 0.3]
            );
            return (
              <motion.div 
                key={i} 
                style={{ opacity: active, scale: active }}
                className="w-2 h-2 rounded-full bg-primary-100" 
              />
            );
          })}
        </div>

        {/* Text Section */}
        <div className="flex-1 max-w-xl z-20 w-full h-1/2 lg:h-full relative flex items-center justify-center">
          {STEPS.map((step, i) => {
            const opacity = useScrollOpacity(scrollYProgress, i);
            const y = useScrollY(scrollYProgress, i);
            
            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pointer-events-none px-4"
              >
                <span className="text-display-md md:text-display-lg mb-4 md:mb-6 drop-shadow-xl">{step.emoji}</span>
                <h2 className="text-display-md md:text-display-xl lg:text-display-2xl font-black mb-4 md:mb-6 leading-tight text-primary-100 uppercase tracking-tighter">
                  {step.title}
                </h2>
                <p className="text-text-lg md:text-text-xl text-neutral-60 leading-relaxed font-light max-w-md">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Phone Section (Optimized for Mobile Viewport) */}
        <div className="flex-1 w-full h-1/2 lg:h-full flex items-center justify-center relative scale-[0.6] sm:scale-[0.8] md:scale-90 lg:scale-100 transition-transform perspective-1000">
          <motion.div
            style={{ 
              rotateX: tiltY,
              rotateY: tiltX,
            }}
            className="relative w-[280px] h-[580px] rounded-[3rem] border-[12px] border-neutral-30 bg-neutral-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-neutral-30 rounded-b-3xl z-50 flex items-center justify-center">
               <div className="w-12 h-1 bg-neutral-20 rounded-full" />
            </div>
            
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
          <div className="absolute w-[500px] h-[500px] bg-primary-50/10 rounded-full blur-[120px] -z-10" />
        </div>
      </div>
    </section>
  );
}

// Helper hooks for cleaner JSX
function useScrollOpacity(progress: any, index: number) {
  return useTransform(progress, [index * 0.33, index * 0.33 + 0.1, (index + 0.9) * 0.33, (index + 1) * 0.33], [0, 1, 1, 0]);
}

function useScrollY(progress: any, index: number) {
  return useTransform(progress, [index * 0.33, index * 0.33 + 0.1, (index + 0.9) * 0.33, (index + 1) * 0.33], [40, 0, 0, -40]);
}
