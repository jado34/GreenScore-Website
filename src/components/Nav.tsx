'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Magnetic } from './Magnetic';

export function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 50], [0, -4]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/#features' },
    { name: 'Impact', href: '/#methodology' },
  ];

  return (
    <>
      <motion.nav
        style={{ y }}
        className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100] backdrop-blur-md bg-background/80 border border-foreground/10 rounded-3xl px-8 h-[72px] md:h-[80px] flex items-center justify-between transition-colors duration-500 shadow-elevation-2"
      >
        <div className="flex items-center min-w-[140px]">
          <Link href="/">
            <img
              src="/logo.png"
              alt="GreenScore Logo"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] h-auto object-contain transition-transform hover:scale-105 mt-4 md:mt-6"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.2}>
              <Link
                href={link.href}
                data-cursor="View"
                className="text-text-sm font-medium text-foreground/60 hover:text-foreground transition-colors px-2 py-1"
              >
                {link.name}
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Magnetic>
            <button className="hidden sm:block px-5 py-2 bg-foreground text-background text-text-sm font-bold rounded-md transition-transform hover:scale-105 active:scale-95">
              Download APK
            </button>
          </Magnetic>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
          >
            {mounted && (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-background/95 backdrop-blur-xl p-10 z-[101] border-l border-foreground/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-display-sm font-black text-foreground border-b border-foreground/10 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full py-6 bg-foreground text-background text-display-xs font-bold rounded-2xl mt-4">
                Download APK
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-accent-50/10 backdrop-blur-3xl z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30" />

        <div className="relative z-20 px-12 py-24 text-center">
          <h2 className="text-display-md md:text-display-xl font-black mb-8 leading-tight text-foreground">Start Your Journey Today.</h2>
          <p className="text-text-lg md:text-text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light">
            Impact shouldn’t be complicated. Join the global movement and start earning rewards for saving your planet.
          </p>

          <button className="px-10 py-5 bg-foreground text-background font-black rounded-lg flex items-center gap-3 mx-auto shadow-elevation-3 transition-all hover:scale-105">
            <Download className="w-6 h-6" />
            Download APK
          </button>
        </div>
      </div>
    </section>
  );
}
