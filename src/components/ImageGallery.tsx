'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const IMAGES = [
  { 
    id: "NUMlWAQdHj8", 
    title: "Preserve the Core", 
    desc: "Ancient forests are our greatest carbon sinks." 
  },
  { 
    id: "YtELR3Q5Y4E", 
    title: "Clean Energy", 
    desc: "Harnessing the power of the wind and sun." 
  },
  { 
    id: "yFVDKJ4R0fk", 
    title: "Urban Habitats", 
    desc: "Rethinking cities as living ecosystems." 
  }
];

export function ImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="gallery" ref={containerRef} className="w-full py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md md:text-display-lg font-black text-primary-100 mb-6 text-balance"
          >
            A World Worth Saving.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-lg md:text-text-xl text-neutral-60 font-light max-w-2xl mx-auto"
          >
            Explore the beauty of the ecosystems we protect through every action you log on GreenScore.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMAGES.map((img, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -50 : 50]);
            
            return (
              <motion.div 
                key={i}
                style={{ y }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elevation-2"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&q=80&w=1200`} 
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-10/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-display-sm font-black text-primary-100 mb-2">{img.title}</h3>
                  <p className="text-text-sm text-neutral-90 font-light">{img.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
