import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Heart, Globe, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenJoinModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenJoinModal }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Committee', href: '#committee' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Emblem */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center space-x-3 group text-decoration-none"
          >
            {/* Custom high-fidelity Vector Inner Wheel Brand Symbol */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 dark:bg-slate-800 p-1 group-hover:scale-105 transition-transform duration-200">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400 dark:border-sky-500 animate-[spin_50s_linear_infinite]" />
              <div className="relative w-7 h-7 rounded-full border-4 border-indigo-600 dark:border-indigo-400 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-widest text-indigo-950 dark:text-white uppercase leading-none">
                Inner Wheel
              </span>
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400 font-serif italic tracking-wide">
                Club of Sahiwal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Elements */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls & Action Elements */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button
              id="get-involved-btn-desktop"
              onClick={onOpenJoinModal}
              className="inline-flex items-center px-4 py-2 text-xs font-extrabold uppercase tracking-widest rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-indigo-950 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile Right Controls Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-amber-400 dark:hover:bg-slate-800 transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 px-3">
                <button
                  id="get-involved-btn-mobile"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm font-extrabold uppercase tracking-widest rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-indigo-950 shadow-md transition-all duration-150 cursor-pointer"
                >
                  Get Involved & Support
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
