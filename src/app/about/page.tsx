'use client';
import React from 'react';
import { Nav, CTA } from '@/components/Nav';
import { SmoothScroll } from '@/components/SmoothScroll';
import { PageTransition } from '@/components/PageTransition';
import { Footer } from '@/components/Footer';
import { AboutHero } from '@/components/AboutHero';
import { AboutMission } from '@/components/AboutMission';
import { AboutScience } from '@/components/AboutScience';
import { AboutVision } from '@/components/AboutVision';
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
      <PageTransition>
        <main className="relative min-h-screen bg-background selection:bg-primary-50/30">
          <Nav />
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <AboutHero />
            
            <Reveal>
              <AboutMission />
            </Reveal>

            <AboutScience />

            <Reveal>
              <AboutVision />
            </Reveal>

            <Reveal>
              <CTA />
            </Reveal>
          </div>

          <Footer />
        </main>
      </PageTransition>
    </SmoothScroll>
  );
}
