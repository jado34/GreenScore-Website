'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Database, Globe, FlaskConical } from 'lucide-react';

const standards = [
  {
    icon: Shield,
    label: "EPA Standards",
    value: "100%",
    desc: "All emission calculations follow EPA-verified methodologies"
  },
  {
    icon: Database,
    label: "Data Sources",
    value: "12+",
    desc: "Cross-referenced environmental databases for accuracy"
  },
  {
    icon: Globe,
    label: "UNEP Aligned",
    value: "SDG 13",
    desc: "Directly supports UN Sustainable Development Goals"
  },
  {
    icon: FlaskConical,
    label: "Research-Backed",
    value: "40+",
    desc: "Peer-reviewed studies inform our impact calculations"
  }
];

export function AboutScience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="w-full bg-black text-white py-32 md:py-48 px-6 relative overflow-hidden">
      {/* Animated Background Texture */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-4">Science & Trust</p>
          <h2 className="text-[2.5rem] md:text-[4rem] font-medium tracking-tight leading-[1.05] max-w-2xl">
            Not just an app.{' '}
            <span className="text-white/40">A scientific instrument.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-xl leading-relaxed">
            Every gram of CO₂ we calculate is backed by verified environmental data. We don&apos;t estimate — we measure.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {standards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:bg-white/[0.06]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-50/10 group-hover:border-primary-50/30 transition-all duration-500">
                <item.icon className="w-5 h-5 text-white/40 group-hover:text-primary-50 transition-colors duration-500" />
              </div>
              <div className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">
                {item.value}
              </div>
              <div className="text-sm font-bold text-white/70 mb-2">{item.label}</div>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-16 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-white/20 text-xs uppercase tracking-widest font-bold mb-2">Data Verified By</p>
            <p className="text-white/60 text-lg font-medium">U.S. Environmental Protection Agency</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-white/20 text-xs uppercase tracking-widest font-bold mb-2">Aligned With</p>
            <p className="text-white/60 text-lg font-medium">United Nations Environment Programme</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
