'use client';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  { title: "Log with Ease", desc: "Our intuitive interface lets you record transport, food, and energy habits in under 5 seconds. Frictionless logging for maximum consistency.", emoji: "⚡", hotspot: { x: "20%", y: "40%", label: "Quick Log" } },
  { title: "Earn Rewards", desc: "Gamify your growth. Earn GreenPoints for every action and unlock exclusive cinematic badges as you reach new impact milestones.", emoji: "🏆", hotspot: { x: "75%", y: "25%", label: "Achievements" } },
  { title: "See the Difference", desc: "Experience your progress through our 2D Forest map. Watch your ecosystem thrive as you save CO2 and water in real-time.", emoji: "🌳", hotspot: { x: "50%", y: "75%", label: "Live Impact" } },
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
                className="w-2 h-2 rounded-full bg-primary-50" 
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
                <span className="text-display-md md:text-display-lg mb-4 md:mb-6">{step.emoji}</span>
                <h2 className="text-display-md md:text-display-xl lg:text-display-2xl font-black mb-4 md:mb-6 leading-tight text-foreground uppercase tracking-tighter">
                  {step.title}
                </h2>
                <p className="text-text-lg md:text-text-xl text-muted-foreground leading-relaxed font-light max-w-md">
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
            className="relative w-[280px] h-[580px] rounded-[3.5rem] border-[12px] border-muted bg-card shadow-2xl overflow-hidden"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-muted rounded-b-3xl z-50 flex items-center justify-center">
               <div className="w-10 h-1 bg-background/20 rounded-full" />
            </div>
            
            {/* Mock Screen Content */}
            <div className="relative w-full h-full">
              {screenImages.map((src, i) => {
                const imgOpacity = useTransform(scrollYProgress, 
                  [i * 0.33, (i + 0.1) * 0.33, (i + 0.9) * 0.33, (i + 1) * 0.33], 
                  [0, 1, 1, 0]
                );
                return (
                  <div key={i}>
                    <motion.img
                      src={src}
                      style={{ opacity: imgOpacity }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Hotspot */}
                    <motion.div
                      style={{ 
                        opacity: imgOpacity,
                        left: STEPS[i].hotspot.x,
                        top: STEPS[i].hotspot.y,
                      }}
                      className="absolute z-40"
                    >
                      <span className="flex h-4 w-4 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-50 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-50"></span>
                      </span>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-md rounded-full border border-foreground/10 text-[8px] font-bold uppercase tracking-wider whitespace-nowrap text-foreground shadow-lg">
                        {STEPS[i].hotspot.label}
                      </div>
                    </motion.div>
                  </div>
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
