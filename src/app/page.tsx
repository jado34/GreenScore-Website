import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ImpactScrub } from '@/components/ImpactScrub';
import { CTA, Nav } from '@/components/Nav';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ImageGallery } from '@/components/ImageGallery';

export default function LandingPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-neutral-10 selection:bg-primary-50/30">
        {/* Cinematic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-50/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-50/10 blur-[120px] rounded-full" />
        </div>

        <Nav />
        
        <div className="relative z-10 flex flex-col items-center">
          <Hero />
          <ImpactScrub />
          <Features />
          <ImageGallery />
          <CTA />
        </div>

        <footer className="w-full py-12 px-8 flex flex-col md:flex-row items-center justify-between border-t border-white/5 opacity-50">
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