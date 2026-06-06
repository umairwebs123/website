import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-500 dark:text-amber-400 transition-colors duration-200 shadow-sm border border-slate-200/50 dark:border-slate-700/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center text-amber-600"
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center text-teal-300"
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
