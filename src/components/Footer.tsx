import React from 'react';
import { ArrowUp, Heart, Globe, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-indigo-950 dark:bg-slate-950 text-slate-400 py-16 transition-colors duration-300 border-t border-indigo-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout splits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start text-left mb-12">
          
          {/* Logo Brand Statement Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white/10 dark:bg-slate-900 flex items-center justify-center p-1.5 border border-white/20">
                <div className="w-6 h-6 rounded-full border border-sky-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-widest text-white uppercase leading-none">
                  Inner Wheel Sahiwal
                </span>
                <span className="text-xs font-serif italic text-amber-400">
                  District 342, Pakistan Division
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              We are a sisterhood of service, connecting compassionate leaders across Sahiwal to empower women, sponsor young schools, and create reliable medical clinics.
            </p>

            <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Voluntary Charity • ID #1998342</span>
            </div>
          </div>

          {/* Jump Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Explore Directories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home Intro</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">Our Vision & Origins</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">Service projects</a>
              </li>
              <li>
                <a href="#committee" className="hover:text-amber-400 transition-colors">Executive leaders</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Connect / Inquiries</a>
              </li>
            </ul>
          </div>

          {/* External Affiliation links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Global Association Links
            </h4>
            <p className="text-xs text-slate-400 leading-normal mb-3">
              Inner Wheel Districts connect globally. Access official libraries and international guidelines via links below.
            </p>
            
            <a
              href="https://www.internationalinnerwheel.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 p-2 px-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-all text-decoration-none"
            >
              <Globe className="w-4 h-4 text-sky-400" />
              <span>International Inner Wheel Portal</span>
            </a>
          </div>

        </div>

        {/* Legal Credits Banner */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-center sm:text-left">
            <span>© {currentYear} Inner Wheel Club Sahiwal. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-705">|</span>
            <span className="flex items-center justify-center mt-1 sm:mt-0 text-[11px]">
              Crafted in collaboration with the Sisterhood of Service in Sahiwal
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-1 inline" />
            </span>
          </div>

          {/* Upward Scroll Element */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-indigo-900/60 hover:bg-amber-500 border border-indigo-850 hover:border-transparent text-white hover:text-indigo-950 flex items-center justify-center transition-all cursor-pointer shadow-md shadow-slate-950/20"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>
        
      </div>
    </footer>
  );
};
