'use client';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const footerLinks = {
  product: [
    { name: 'Features', href: '/#features' },
    { name: 'Impact', href: '/#methodology' },
    { name: 'Download', href: 'https://drive.google.com/file/d/1PbBNX5dYJXM_1qYEQA23ngJe71GMdlCL/view?usp=drive_link' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logoSrc = mounted && theme === 'dark'
    ? '/Logo/GreenLume_Primary_Logo_White_on_Green-removebg-preview.png'
    : '/Logo/GreenLume_Primary_Logo_Green-removebg-preview.png';

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-background border-t border-foreground/5 z-10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-10 sm:pb-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          {/* Brand Column */}
          <div className="max-w-xs">
            <img
              src={logoSrc}
              alt="GreenLume Logo"
              className="w-[140px] h-auto object-contain mb-6"
            />
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Log Your Life. Save Your World. A sustainability tracker engineered to inspire real change.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/GreenScoreNG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/30 hover:-translate-y-1 transition-all duration-300"
                aria-label="Follow us on X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/30 hover:-translate-y-1 transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h4 className="text-foreground/40 text-xs uppercase tracking-widest font-bold mb-5">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground/40 text-xs uppercase tracking-widest font-bold mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground/40 text-xs uppercase tracking-widest font-bold mb-5">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-foreground/5 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-xs">
            © 2026 GreenLume. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-foreground/30 text-xs hover:text-foreground/60 transition-colors duration-300"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
