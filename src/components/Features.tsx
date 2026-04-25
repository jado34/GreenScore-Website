'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

const FEATURES = [
  { icon: ShieldCheck, title: "Verified Actions", desc: "Scientific data mapping from EPA & UNEP datasets." },
  { icon: Zap, title: "Real-time Feedback", desc: "Instant haptics and celebrations for every green step." },
  { icon: Globe, title: "Global Sync", desc: "Your data stays perfect across all your devices, forever." },
  { icon: Sparkles, title: "Aesthetic Design", desc: "An interface meticulously crafted for joy and clarity." },
];

export function Features() {
  return (
    <section className="w-full py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Engineered for Excellence.</h2>
          <p className="text-xl text-slate-400 font-light">Built by a team of obsessed engineers and designers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <f.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
