'use client';
import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';

const TEAM = [
  {
    name: "Olawu",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
  },
  {
    name: "Team Member 2",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    name: "Team Member 3",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    name: "Team Member 4",
    role: "Sustainability Lead",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  }
];

export function AboutTeam() {
  return (
    <section className="relative py-32 w-full px-6 lg:px-24 bg-background z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-display-md md:text-display-xl font-black text-foreground mb-4">
            Meet the <span className="text-primary-50">Minds.</span>
          </h2>
          <p className="text-text-lg text-foreground/60 max-w-xl font-light">
            We are Team 10. A multidisciplinary group united by a single vision: to gamify and reward real-world environmental impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-[2rem] overflow-hidden group shadow-elevation-2 ${member.colSpan} ${member.rowSpan}`}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Magnetic strength={0.1}>
                <div 
                  data-cursor="Connect"
                  className="absolute inset-0 flex flex-col justify-end p-8"
                >
                  <h3 className="text-display-xs font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{member.name}</h3>
                  <p className="text-text-sm text-primary-50 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{member.role}</p>
                </div>
              </Magnetic>

              {/* Glassmorphic border hover effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
