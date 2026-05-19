'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, TreePine } from 'lucide-react';

const phrase = "We believe that the most powerful force for environmental change isn't a single monumental event, but the collective impact of millions of everyday actions. GreenLume is built to align individual habits with global sustainability goals.";

const philosophyCards = [
  {
    icon: Zap,
    title: "Frictionless Logging",
    desc: "One tap to log. Zero friction. We obsessed over every interaction to make sustainable living feel effortless.",
    gradient: "from-primary-50/10 to-transparent"
  },
  {
    icon: Brain,
    title: "The Psychology of Streaks",
    desc: "Streaks aren't arbitrary — they're backed by behavioral science. Missing a day means your virtual ecosystem suffers, keeping you accountable.",
    gradient: "from-accent-50/10 to-transparent"
  },
  {
    icon: TreePine,
    title: "The Virtual Ecosystem",
    desc: "Your actions grow a living digital forest. It's not a gimmick — it's a mirror of your real-world impact, rendered beautifully.",
    gradient: "from-primary-50/10 to-transparent"
  }
];

export function AboutMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = phrase.split(" ");

  return (
    <section className="relative w-full bg-background z-10">
      {/* Scroll-Reveal Text */}
      <div ref={containerRef} className="py-32 md:py-40 w-full px-6 lg:px-24 flex items-center justify-center">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/40 text-sm uppercase tracking-widest font-bold mb-10"
          >
            Our Mission
          </motion.p>
          
          <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-medium text-foreground leading-[1.3] tracking-tight text-balance flex flex-wrap gap-x-3 gap-y-1">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <motion.span key={i} style={{ opacity }} className="inline-block">
                  {word}
                </motion.span>
              );
            })}
          </h2>
        </div>
      </div>

      {/* Design Philosophy Bento Grid */}
      <div className="w-full px-6 lg:px-24 pb-32 md:pb-40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-foreground/40 text-sm uppercase tracking-widest font-bold mb-4">Design Philosophy</p>
            <h3 className="text-[2rem] md:text-[3rem] font-medium tracking-tight text-foreground leading-[1.1] max-w-xl">
              Crafted with intent.{' '}
              <span className="text-foreground/40">Nothing accidental.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {philosophyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group p-8 rounded-[2rem] bg-card border border-border relative overflow-hidden hover:border-foreground/20 transition-colors duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:bg-primary-50/10 group-hover:border-primary-50/20 transition-all duration-500">
                    <card.icon className="w-5 h-5 text-foreground/50 group-hover:text-primary-50 transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-medium tracking-tight text-foreground mb-3">{card.title}</h4>
                  <p className="text-foreground/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
