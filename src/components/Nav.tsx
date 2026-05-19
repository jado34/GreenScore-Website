'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Magnetic } from './Magnetic';
import { TextReveal } from './TextReveal';

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
        className="fixed top-6 left-0 right-0 w-full z-[100] px-4 md:px-8 flex items-center justify-between pointer-events-none"
      >
        {/* Left Side: Logo */}
        <div className="flex items-center pointer-events-auto shrink-0 w-[150px] md:w-[200px]">
          <Link href="/">
            <img
              src={mounted && theme === 'dark'
                ? '/Logo/GreenLume_Primary_Logo_White_on_Green-removebg-preview.png'
                : '/Logo/GreenLume_Primary_Logo_Green-removebg-preview.png'
              }
              alt="GreenLume Logo"
              className="w-full h-auto object-contain transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Center: Links Pill */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-background/80 backdrop-blur-2xl border border-border shadow-md">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.1}>
                <Link
                  href={link.href}
                  className="px-5 py-2 text-text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all"
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center justify-end gap-3 pointer-events-auto shrink-0 w-[150px] md:w-[200px]">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 text-foreground/70 hover:text-foreground bg-background/80 hover:bg-background backdrop-blur-2xl rounded-full transition-all border border-border shadow-sm"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>

          <Magnetic>
            <a 
              href="https://drive.google.com/file/d/1PbBNX5dYJXM_1qYEQA23ngJe71GMdlCL/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex px-6 py-2.5 bg-primary-50 text-white text-text-sm font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-elevation-2"
            >
              Download
            </a>
          </Magnetic>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-foreground/70 hover:text-foreground bg-background/80 backdrop-blur-2xl rounded-full transition-all border border-border shadow-sm"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-0 pt-24 px-6 bg-background/95 backdrop-blur-2xl z-[99]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-display-md font-bold text-foreground border-b border-foreground/10 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://drive.google.com/file/d/1PbBNX5dYJXM_1qYEQA23ngJe71GMdlCL/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 flex justify-center w-full py-4 bg-primary-50 text-white text-text-lg font-bold rounded-2xl"
              >
                Download APK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function CTA() {
  return (
    <section className="w-full py-32 px-6 relative overflow-hidden bg-foreground text-background">
      <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden relative">
        <div className="relative z-20 px-8 py-20 md:py-32 text-center">
          <TextReveal mode="word" className="text-[3.5rem] md:text-[5rem] font-medium tracking-tight mb-6 leading-[1.1] justify-center">Join the Waitlist.</TextReveal>
          <p className="text-text-lg md:text-text-xl text-background/60 max-w-2xl mx-auto mb-10 font-normal">
            Be the first to experience the future of sustainability tracking.
          </p>

          <a 
            href="https://drive.google.com/file/d/1PbBNX5dYJXM_1qYEQA23ngJe71GMdlCL/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-50 text-white font-semibold rounded-full flex items-center justify-center gap-2 mx-auto w-fit transition-transform hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5" />
            Download APK
          </a>
        </div>
      </div>
    </section>
  );
}
