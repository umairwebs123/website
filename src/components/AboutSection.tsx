import React from 'react';
import { Heart, Globe2, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-indigo-600 dark:text-amber-400" />,
      title: 'Promote True Friendship',
      description: 'Strengthening the bond of companionship and mutual respect among members through regular fellowships and events.',
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      title: 'Encourage Personal Service',
      description: 'Devoting ourselves directly to serving our communities through health camps, school sponsorship, and vocational training.',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Foster International Understanding',
      description: 'Building bridges of peace and cooperation with national and global Inner Wheel districts to support worldwide human relief.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subsection Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 dark:text-amber-400 block mb-2">Our Origins</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 dark:text-white mb-4">
            Women United in Global Fellowship
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* History/Introduction Panel */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-indigo-950 dark:text-white font-serif italic leading-relaxed">
              "We cannot live for ourselves alone. Our lives are connected by a thousand invisible threads."
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Founded on 10 January 1924 by Margarette Golding, Inner Wheel is one of the largest women’s voluntary service organizations in the world. Active in over 100 countries, the organization gathers over 100,000 members who dedicate their hearts and professional skills to service.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              The <strong>Sahiwal Chapter</strong> has been an active anchor of public philanthropy since 1998. We design community projects that elevate local livelihoods, grant scholarships to rural girls, establish clean medical care centers, and ensure that women acquire relevant skills to become self-reliant.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-indigo-50/50 dark:bg-slate-800/40 rounded-xl border border-indigo-100/50 dark:border-slate-700/50 flex items-start space-x-3 transition-colors duration-300"
            >
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-indigo-950 dark:text-white uppercase tracking-wider block">Margarette Golding Award</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Our club takes pride in presenting outstanding local volunteers with international citations for exemplary public service.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Pillars Column Card Layout */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group p-6 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-slate-755 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-start space-x-4 text-left"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-300 border border-slate-100 dark:border-slate-800 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-indigo-950 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
