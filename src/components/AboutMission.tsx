'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const phrase = "We believe that the most powerful force for environmental change isn't a single monumental event, but the collective impact of millions of everyday actions. GreenScore is built to align individual habits with global sustainability goals.";

export function AboutMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = phrase.split(" ");

  return (
    <section ref={containerRef} className="relative py-40 w-full px-6 lg:px-24 flex items-center justify-center bg-background z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-display-md md:text-display-xl lg:text-display-2xl font-black text-foreground mb-8 leading-tight tracking-tight text-balance flex flex-wrap gap-x-3 gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
            
            return (
              <motion.span key={i} style={{ opacity }} className="inline-block">
                {word}
              </motion.span>
            );
          })}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              title: "Transparent",
              desc: "Every metric is backed by science and verified by open data."
            },
            {
              title: "Impact-Driven",
              desc: "We focus on actions that move the needle for carbon reduction."
            },
            {
              title: "Community-First",
              desc: "Gamified for teams, friends, and communities to grow together."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-8 rounded-[2rem] bg-foreground/[0.02] border border-foreground/[0.05] shadow-elevation-1"
            >
              <h3 className="text-display-xs font-black text-foreground mb-4">{item.title}</h3>
              <p className="text-text-sm text-foreground/60 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
