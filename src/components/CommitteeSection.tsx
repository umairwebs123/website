import React, { useState } from 'react';
import { CommitteeMember } from '../types';
import { Mail, MessageCircle, Heart, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXECUTIVE_OFFICERS: CommitteeMember[] = [
  {
    id: 'm1',
    name: 'Mrs. Shazia Amjad',
    role: 'Club President',
    bio: 'An esteemed educator and veteran development volunteer in Punjab, advocating for girl-child educational incentives and vocational coaching.',
    quote: '"Friendship and service are the two wings by which we lift our community above struggle."'
  },
  {
    id: 'm2',
    name: 'Dr. Humaira Rashid',
    role: 'Vice President',
    bio: "A medical consultant with over 20 years of clinic leadership, piloting Sahiwal's weekend clinical nutrition models for rural mothers.",
    quote: '"Empowering one woman means healing an entire generation."'
  },
  {
    id: 'm3',
    name: 'Mrs. Naila Jamil',
    role: 'Club Secretary',
    bio: 'Organizing strategist specializing in digital documentation, tracking event logistics and keeping the club connected to national assemblies.',
    quote: '"True service is structured, transparent, and fueled by persistent warmth."'
  },
  {
    id: 'm4',
    name: 'Mrs. Farzana Shah',
    role: 'Club Treasurer',
    bio: 'Finance analyst maintaining rigorous account auditing and ensuring that 100% of municipal public donations go directly to fields.',
    quote: '"Financial meticulousness ensures that every rupee of charity sparks its maximum hope."'
  },
  {
    id: 'm5',
    name: 'Ms. Sadia Yusuf',
    role: 'International Service Organizer (ISO)',
    bio: 'Liaison specialist connecting Sahiwal with other Inner Wheel clubs across the UK and South Asia for collaborative global relief projects.',
    quote: '"Understanding across borders is the ultimate catalyst for a sustainable global peace."'
  },
  {
    id: 'm6',
    name: 'Mrs. Yasmin Bukhari',
    role: 'Club Correspondent',
    bio: 'Journalist managing public press relations, composing regional monthly digests, and sharing Sahiwal chapters stories globally.',
    quote: '"Telling the stories of quiet community heroism inspires others to join the wheel."'
  }
];

export const CommitteeSection: React.FC = () => {
  const [activeQuote, setActiveQuote] = useState<string | null>(null);

  return (
    <section
      id="committee"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 dark:text-amber-400 block mb-2">Our Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 dark:text-white mb-4">
            Executive Committee (2025 - 2026)
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Meet the dedicated, voluntary committee members of Sahiwal who direct our resources and ensure absolute integrity.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Committee Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {EXECUTIVE_OFFICERS.map((officer, index) => (
            <motion.div
              key={officer.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150/40 dark:border-slate-800/80 rounded-2xl hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:border-indigo-100 dark:hover:border-slate-750 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Roles Banner */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-indigo-950 dark:text-white group-hover:text-indigo-650 dark:group-hover:text-amber-400 transition-colors">
                    {officer.name}
                  </h3>
                  <span className="text-xs font-bold text-indigo-600 dark:text-amber-400 uppercase tracking-widest">
                    {officer.role}
                  </span>
                </div>
                
                {/* Theme Conscious Circle Badge */}
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100/50 dark:border-slate-700/50 flex items-center justify-center text-indigo-600 dark:text-amber-300">
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </div>
              </div>

              {/* Bio Block */}
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[72px] mb-6">
                {officer.bio}
              </p>

              {/* Action Buttons inside member card */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/40 dark:border-slate-850">
                <button
                  onClick={() => setActiveQuote(activeQuote === officer.id ? null : officer.id)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-amber-400 cursor-pointer"
                >
                  <Quote className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                  <span>Personal Philosophy</span>
                </button>
              </div>

              {/* Expandable Quote Section */}
              <AnimatePresence>
                {activeQuote === officer.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 pt-4 border-t border-dashed border-indigo-150/50 dark:border-slate-800"
                  >
                    <p className="text-xs font-serif italic text-indigo-950 dark:text-slate-300 bg-indigo-50/70 dark:bg-slate-950 p-3.5 rounded-xl border-l-[3px] border-amber-500">
                      {officer.quote}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
