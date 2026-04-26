'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const IMAGES = [
  { id: "NUMlWAQdHj8", title: "Ancient Forests", desc: "Protecting the lungs of our planet." },
  { id: "YtELR3Q5Y4E", title: "Renewable Future", desc: "Harnessing wind and solar energy." },
  { id: "yFVDKJ4R0fk", title: "Urban Oases", desc: "Green cities for a better tomorrow." },
  { id: "mS_F9pM8J8A", title: "Ocean Health", desc: "Restoring marine biodiversity." },
  { id: "ICl7A_9vV04", title: "Sustainable Farming", desc: "Feeding the world responsibly." },
];

export function ImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="gallery" ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Header Text */}
        <div className="px-6 md:px-24 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-display-md md:text-display-lg font-black text-primary-100 mb-6 text-balance">
              A World Worth Saving.
            </h2>
            <p className="text-text-lg text-neutral-60 font-light text-pretty">
              Every action you log on GreenScore helps protect these vital ecosystems. Scroll to explore the impact.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24">
          {IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              className="relative flex-shrink-0 w-[80vw] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-elevation-3"
            >
              <img 
                src={`https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&q=80&w=1200`} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-10/90 via-neutral-10/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="text-primary-50 font-bold text-text-xs uppercase tracking-[0.2em] mb-4 block">
                  0{i + 1} — Ecosystem
                </span>
                <h3 className="text-display-sm font-black text-neutral-100 mb-2 leading-tight">
                  {img.title}
                </h3>
                <p className="text-text-sm text-neutral-60 font-light">
                  {img.desc}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-[1px] border-primary-100/0 group-hover:border-primary-100/30 transition-colors duration-500 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Line */}
        <div className="absolute bottom-12 left-6 md:left-24 right-6 md:right-24 h-[2px] bg-primary-100/10">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="absolute inset-0 bg-primary-100 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
