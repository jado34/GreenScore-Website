'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LEVELS = [
  {
    title: "Seedling",
    desc: "Your journey begins. The first step towards a greener future.",
    image: "/images/levels/seedling.jpg",
    requirement: "0 - 100 Points"
  },
  {
    title: "Sprout",
    desc: "A sign of life! Your green habits are taking root.",
    image: "/images/levels/sprout.jpg",
    requirement: "101 - 300 Points"
  },
  {
    title: "Sapling",
    desc: "You're growing! Your consistency is inspiring others.",
    image: "/images/levels/sapling.jpg",
    requirement: "301 - 800 Points"
  },
  {
    title: "Tree",
    desc: "A pillar of change. Your impact is clear and significant.",
    image: "/images/levels/tree.jpg",
    requirement: "801 - 2000 Points"
  },
  {
    title: "Forest",
    desc: "Master of Sustainability. You are a force of nature.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200",
    requirement: "2000+ Points"
  }
];

export function LevelProgress() {
  return (
    <section id="levels" className="w-full py-40 px-6 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-display-md md:text-display-lg font-black text-foreground mb-6 uppercase tracking-tighter">
            Your Growth, <br /> Visualized.
          </h2>
          <p className="text-text-lg text-foreground/60 font-light max-w-2xl mx-auto">
            As you log habits, your personal ecosystem evolves. From a tiny seedling to a vast forest, track your progress through cinematic growth stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {LEVELS.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="aspect-[4/5] w-full rounded-[2.5rem] bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden mb-8 shadow-elevation-1 group-hover:shadow-elevation-3 transition-all duration-500 relative">
                <Image 
                  src={level.image} 
                  alt={level.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="text-center">
                <span className="text-[10px] font-bold text-primary-50 uppercase tracking-[0.3em] mb-3 block">
                  Level 0{i + 1}
                </span>
                <h3 className="text-display-xs font-black text-foreground mb-4">{level.title}</h3>
                <p className="text-text-sm text-foreground/60 font-light mb-6 px-4">
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
