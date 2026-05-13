'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setCount(Math.floor(eased * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const visionStats = [
  {
    value: 1000000,
    suffix: '+',
    label: 'Kg CO₂ Offset Goal',
    desc: 'Our collective mission target'
  },
  {
    value: 20,
    suffix: '+',
    label: 'Trackable Actions',
    desc: 'Across 5 core categories'
  },
  {
    value: 5,
    suffix: '',
    label: 'Impact Categories',
    desc: 'Energy, Waste, Transport, Food, Water'
  }
];

export function AboutVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.5, 0.7]);

  return (
    <section ref={containerRef} className="w-full relative overflow-hidden py-40 md:py-56 px-6">
      
      {/* Parallax Background Image */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
          alt="Lush forest backdrop"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Dark Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black z-[1]"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center text-white">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-6">Our Vision</p>
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-medium tracking-tight leading-[1.05] mb-8">
            A world where every action{' '}
            <span className="text-white/40">is accounted for.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-20">
            We&apos;re not building another sustainability app. We&apos;re building the infrastructure for a generation that measures its impact as naturally as it checks the weather.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {visionStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-[3rem] md:text-[4.5rem] font-medium tracking-tighter text-white leading-none mb-3">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-white/70 mb-1">{stat.label}</div>
              <p className="text-white/40 text-xs">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
