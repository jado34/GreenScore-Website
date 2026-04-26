'use client';
import React from 'react';
import { Nav, CTA } from '@/components/Nav';
import { SmoothScroll } from '@/components/SmoothScroll';
import { AboutHero } from '@/components/AboutHero';
import { AboutMission } from '@/components/AboutMission';
import { AboutTeam } from '@/components/AboutTeam';
import { motion } from 'framer-motion';

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-background selection:bg-primary-50/30">
        <Nav />
        
        <div className="relative z-10 flex flex-col items-center w-full">
          <AboutHero />
          
          <Reveal>
            <AboutMission />
          </Reveal>

          <Reveal>
            <AboutTeam />
          </Reveal>

          <Reveal>
            <CTA />
          </Reveal>
        </div>

        <footer className="w-full py-12 px-8 flex flex-col md:flex-row items-center justify-between border-t border-white/5 opacity-50 relative z-10 bg-background">
           <div className="text-sm font-medium">© 2026 GreenScore. Developed by Team 10.</div>
           <div className="flex gap-8 mt-6 md:mt-0">
             <a href="#" className="text-xs hover:text-white transition-colors">Privacy</a>
             <a href="#" className="text-xs hover:text-white transition-colors">Terms</a>
             <a href="#" className="text-xs hover:text-white transition-colors">Press</a>
           </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
