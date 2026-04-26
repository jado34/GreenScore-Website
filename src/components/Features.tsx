'use client';
import { motion } from 'framer-motion';
import { Car, Trash2, Leaf, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { icon: Car, title: "Transport", desc: "Track public transit, biking, and walking to reduce your carbon footprint." },
  { icon: Trash2, title: "Waste", desc: "Log recycling, composting, and plastic-free choices in real-time." },
  { icon: Leaf, title: "Food & Water", desc: "Monitor plant-based meals and water-saving habits daily." },
  { icon: Zap, title: "Energy", desc: "Analyze energy-saving actions at home with science-backed metrics." },
];

export function Features() {
  return (
    <section id="features" className="w-full py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md md:text-display-lg font-black mb-6 text-foreground text-balance"
          >
            Smarter Habits. <br className="hidden md:block" /> Verified Impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-lg md:text-text-xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            GreenScore uses scientific data mapping from <strong>EPA</strong> and <strong>UNEP</strong> datasets to turn your daily actions into tangible climate progress.
          </motion.p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="p-8 rounded-2xl border border-border bg-card shadow-elevation-1 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-text-xl font-bold mb-4 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span>Scientific Methodology</span>
            </div>
            <h3 className="text-display-sm font-black text-foreground mb-4">Our Data Source</h3>
            <p className="text-muted-foreground font-light max-w-xl">
              Every action in GreenScore is calculated using emission factors and impact metrics sourced from the <strong>U.S. Environmental Protection Agency (EPA)</strong> and the <strong>United Nations Environment Programme (UNEP)</strong>.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-full bg-muted border border-border text-foreground text-text-xs font-bold uppercase tracking-wider">UNEP Standard</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
