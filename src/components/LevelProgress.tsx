'use client';
import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

const LEVELS = [
  {
    title: "Seedling",
    desc: "Your journey begins. Every small action counts.",
    lottieUrl: "https://lottie.host/6c1f1f1d-2b4a-4b9a-8c5e-88c9a3f9d5d9/7vY6vX6vX6.json", // Replace with real growth Lottie
    requirement: "0 - 100 Points"
  },
  {
    title: "Sapling",
    desc: "You're growing! Your habits are becoming second nature.",
    lottieUrl: "https://lottie.host/6c1f1f1d-2b4a-4b9a-8c5e-88c9a3f9d5d9/7vY6vX6vX6.json",
    requirement: "101 - 500 Points"
  },
  {
    title: "Ancient Oak",
    desc: "A pillar of the community. Your impact is visible to all.",
    lottieUrl: "https://lottie.host/6c1f1f1d-2b4a-4b9a-8c5e-88c9a3f9d5d9/7vY6vX6vX6.json",
    requirement: "501 - 2000 Points"
  },
  {
    title: "Eternal Forest",
    desc: "Master of Sustainability. You've inspired a movement.",
    lottieUrl: "https://lottie.host/6c1f1f1d-2b4a-4b9a-8c5e-88c9a3f9d5d9/7vY6vX6vX6.json",
    requirement: "2000+ Points"
  }
];

export function LevelProgress() {
  return (
    <section id="levels" className="w-full py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-display-md md:text-display-lg font-black text-primary-100 mb-6 uppercase tracking-tighter">
            Your Growth, <br /> Visualized.
          </h2>
          <p className="text-text-lg text-neutral-60 font-light max-w-2xl mx-auto">
            As you log habits, your personal ecosystem evolves. From a tiny seedling to an eternal forest, track your progress through cinematic animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {LEVELS.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="aspect-square w-full rounded-[3rem] bg-neutral-20 border border-primary-100/10 flex items-center justify-center overflow-hidden mb-8 shadow-elevation-2 group-hover:shadow-elevation-4 transition-all duration-500">
                {/* Lottie Container */}
                <div className="w-48 h-48">
                  {/* Since I don't have the exact JSONs, I'll use a placeholder circle animation or similar if URLs are broken */}
                   <Lottie 
                    animationData={null} // We would fetch or bundle JSON here
                    path={level.lottieUrl}
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-primary-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="text-center">
                <span className="text-[10px] font-bold text-primary-50 uppercase tracking-[0.3em] mb-3 block">
                  Level 0{i + 1}
                </span>
                <h3 className="text-display-xs font-black text-primary-100 mb-4">{level.title}</h3>
                <p className="text-text-sm text-neutral-60 font-light mb-6 px-4">
                  {level.desc}
                </p>
                <div className="inline-block px-4 py-1 rounded-full bg-primary-100/10 border border-primary-100/20 text-primary-100 text-[10px] font-bold uppercase">
                  {level.requirement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
