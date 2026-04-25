'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 50], [0, -4]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <motion.nav
        style={{ y }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] px-6 md:px-8 py-4 flex items-center justify-between rounded-2xl border border-primary-100/5 bg-neutral-10/50 backdrop-blur-xl transition-all"
      >
        <div className="flex items-center gap-3">
           <img src="/logo.png" alt="GreenScore Logo" className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-text-sm font-medium text-neutral-60 hover:text-primary-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-5 py-2 bg-primary-100 text-neutral-10 text-text-sm font-bold rounded-md transition-transform hover:scale-105 active:scale-95">
            Get App
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-100 hover:bg-primary-100/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] md:hidden pt-32 px-6 bg-neutral-10/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-display-sm font-black text-primary-100 border-b border-primary-100/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-6 bg-primary-100 text-neutral-10 text-display-xs font-bold rounded-2xl mt-4">
                Download the App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function CTA() {
  return (
    <section className="w-full py-40 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-40/40 to-accent-40/20 backdrop-blur-3xl z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-niKKUdRhcsw?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="relative z-20 px-12 py-24 text-center">
          <h2 className="text-display-md md:text-display-xl font-black mb-8 leading-tight text-primary-100">Start Your Journey Today.</h2>
          <p className="text-text-lg md:text-text-xl text-primary-100/70 max-w-2xl mx-auto mb-12 font-light">
             Impact shouldn’t be complicated. Join the global movement and start earning rewards for saving your planet.
          </p>

          <button className="px-10 py-5 bg-primary-100 text-primary-20 font-black rounded-lg flex items-center gap-3 mx-auto shadow-elevation-3 transition-all hover:bg-neutral-98 hover:scale-105">
             <Download className="w-6 h-6" />
             Download the App
          </button>
        </div>
      </div>
    </section>
  );
}
