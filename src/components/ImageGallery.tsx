'use client';
import { motion } from 'framer-motion';

type GalleryImage = {
  title: string;
  desc: string;
  id?: string;
  src?: string;
};

const IMAGES: GalleryImage[] = [
  { id: "1542273917363-3b1817f69a2d", title: "Ancient Forests", desc: "Protecting the lungs of our planet." },
  { src: "/renewable-energy.jpg", title: "Renewable Future", desc: "Harnessing wind and solar energy." },
  { id: "1449824913935-59a10b8d2000", title: "Urban Oases", desc: "Green cities for a better tomorrow." },
  { id: "1439066615861-d1af74d74000", title: "Ocean Health", desc: "Restoring marine biodiversity." },
  { id: "1500382017468-9049fed747ef", title: "Sustainable Farming", desc: "Feeding the world responsibly." },
];

export function ImageGallery() {
  return (
    <section id="gallery" className="relative py-40 w-full overflow-hidden">
      <div className="w-full flex flex-col justify-center">
        
        {/* Header Text */}
        <div className="px-6 md:px-24 mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <h2 className="text-display-md md:text-display-lg font-black text-foreground mb-6 text-balance">
              A World Worth Saving.
            </h2>
            <p className="text-text-lg text-foreground/60 font-light text-pretty">
              Every action you log on GreenLume helps protect these vital ecosystems. Swipe to explore the impact.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="flex gap-8 px-6 md:px-24 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth">
          {IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex-shrink-0 w-[85vw] md:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-elevation-2 snap-center"
            >
              <img 
                src={img.src || `https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&q=80&w=1200`} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-primary-50 font-bold text-text-xs uppercase tracking-[0.3em] mb-4 block">
                  0{i + 1} — Ecosystem
                </span>
                <h3 className="text-display-sm font-black text-white mb-2 leading-tight">
                  {img.title}
                </h3>
                <p className="text-text-sm text-white/60 font-light">
                  {img.desc}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-[1px] border-primary-100/0 group-hover:border-primary-100/30 transition-colors duration-500 rounded-[2.5rem] pointer-events-none" />
            </motion.div>
          ))}
          
          {/* Spacer for end scroll */}
          <div className="flex-shrink-0 w-12 md:w-24" />
        </div>
      </div>
    </section>
  );
}
