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
          <h2 className="text-display-md md:text-display-lg font-black mb-6 text-primary-100">Engineered for Excellence.</h2>
          <p className="text-text-lg md:text-text-xl text-neutral-60 font-light">Built by a team of obsessed engineers and designers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-primary-100/5 bg-neutral-10/40 backdrop-blur-md hover:border-primary-50/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-50/10 flex items-center justify-center mb-6 group-hover:bg-primary-50/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary-50" />
              </div>
              <h3 className="text-text-xl font-bold mb-4 text-primary-100">{f.title}</h3>
              <p className="text-neutral-60 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
