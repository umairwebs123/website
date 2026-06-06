import React from 'react';
import { Sparkles, Heart, Gift, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-white dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 transition-colors duration-500"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 bg-indigo-200/50 dark:bg-indigo-600/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-amber-100/50 dark:bg-amber-500/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-pulse" />

      {/* Decorative Brand Frame Details */}
      <div className="absolute top-0 right-0 p-8 text-indigo-100 dark:text-slate-800 pointer-events-none select-none hidden lg:block font-serif text-9xl font-bold opacity-30 select-none">
        IW
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy/Title Panel */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 px-3.5 py-1.5 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-950 dark:text-indigo-200">
                International Inner Wheel — District 340-342
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-indigo-950 dark:text-white font-sans leading-tight"
            >
              Building Friendship,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 dark:from-amber-400 dark:to-orange-400">
                Inspiring Lives
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Welcome to the Inner Wheel Club of Sahiwal, Pakistan. We are a compassionate organization of empowered women dedicated to personal service, philanthropic community development, and building global bonds of true understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-indigo-950 text-sm font-extrabold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Join Our Family
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-indigo-200 dark:border-slate-800 bg-white/40 hover:bg-white/90 dark:bg-slate-900/40 dark:hover:bg-slate-900/90 text-indigo-950 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 text-sm font-extrabold uppercase tracking-widest transition-all cursor-pointer"
              >
                View Service Projects
              </a>
            </motion.div>
          </div>

          {/* Right Floating Badge / Graphic Panel */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-tr from-indigo-600/10 to-amber-500/15 dark:from-indigo-950/40 dark:to-amber-500/10 border border-indigo-200/40 dark:border-slate-850/50 p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-indigo-100/50 dark:shadow-none"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-amber-500/10 flex items-center justify-center text-indigo-600 dark:text-amber-400">
                  <Heart className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-xs font-mono font-bold tracking-tight text-indigo-600 dark:text-amber-300 bg-indigo-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-indigo-100 dark:border-slate-800">
                  Chartered 1998
                </span>
              </div>

              <div className="my-8 text-left">
                <span className="text-xs uppercase tracking-widest font-bold text-indigo-900 dark:text-indigo-300 block mb-1">Our Mission Theme</span>
                <span className="font-serif italic text-2xl sm:text-3xl text-indigo-950 dark:text-slate-100 leading-snug">
                  "Lead the Change, Create Hope for Tomorrow"
                </span>
              </div>

              <div className="pt-4 border-t border-indigo-100 dark:border-slate-800 flex items-center space-x-3 text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-extrabold text-indigo-900 dark:text-amber-400">
                      {(n === 4) ? '50+' : `•`}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-semibold leading-none">Joined by vibrant community leaders</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlight Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-md"
        >
          {[
            { metric: '25+', label: 'Years of Service', detail: 'Serving since 1998' },
            { metric: '50+', label: 'Active Members', detail: 'Leading professionals' },
            { metric: '100+', label: 'Impact Projects', detail: 'Across Sahiwal Region' },
            { metric: '15k+', label: 'Beneficiaries', detail: 'Supported & empowered' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left space-y-1 p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-amber-400">
                {stat.metric}
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {stat.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
