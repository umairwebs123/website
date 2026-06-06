import React, { useState } from 'react';
import { Project } from '../types';
import { Sparkles, Calendar, BookOpen, Settings, Droplet, HeartCrack, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SAMPLES_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Margarette Women Vocational Center',
    category: 'empowerment',
    description: 'A dedicated wing in Sahiwal providing free industrial stitching, handicraft designing, and small biz workshops to empower underprivileged widows and girls toward financial independence.',
    impact: 'Provided sewing machines and tools to 60+ graduates',
    status: 'ongoing',
    date: 'Jan 2025 - Present',
    imageUrl: '/src/assets/images/vocational_center_1780771235413.png',
    imageAlt: 'Vocational center',
  },
  {
    id: 'p2',
    title: 'Sahiwal Girl-Child Academic Support',
    category: 'education',
    description: 'Providing comprehensive corporate sponsorships covering school tuition books, stationery supplies, and digital tab access for 100+ brilliant girls at municipal schools of Sahiwal.',
    impact: '85% academic progress elevation in local tests',
    status: 'ongoing',
    date: 'Aug 2024 - Continuous',
    imageUrl: '/src/assets/images/girl_education_1780771257068.png',
    imageAlt: 'Girl child education support',
  },
  {
    id: 'p3',
    title: 'Arifwala Road Pure Water Plant',
    category: 'environment',
    description: 'Installation of a water filtration plant to deliver clean, fluoride-safe drinking water to thousands of marginalized residents near suburban colonies of Sahiwal.',
    impact: 'Prevents waterborne pathogens for 4,550+ locals daily',
    status: 'completed',
    date: 'Dec 2024',
    imageUrl: '/src/assets/images/water_plant_1780771277079.png',
    imageAlt: 'Filtration plant',
  },
  {
    id: 'p4',
    title: 'Suburban Sahiwal Free Health Camp',
    category: 'healthcare',
    description: 'Organizing periodic weekend clinics involving specialized pediatricians and gynecologists, providing free tests, blood screenings, vaccines, and crucial prenatal vitamins.',
    impact: 'Diagnostics and prescription drugs gifted to over 1,200 mothers',
    status: 'completed',
    date: 'Feb 2025',
    imageUrl: '/src/assets/images/health_camp_1780771293659.png',
    imageAlt: 'Suburban health check camp',
  },
  {
    id: 'p5',
    title: 'Urban Green Canopy Campaign',
    category: 'environment',
    description: 'Planting indigenous dense protective shading trees (Neem, Sukh Chain, Jamun) throughout congested streets and government institutions of Sahiwal city.',
    impact: '1,500+ saplings planted and sustained with local irrigation guard',
    status: 'ongoing',
    date: 'Oct 2024 - Present',
    imageUrl: '/src/assets/images/tree_planting_1780771315705.png',
    imageAlt: 'Tree plantation campaign',
  },
  {
    id: 'p6',
    title: 'Rural Midwifery Training Seminar',
    category: 'healthcare',
    description: 'A district-level certified educational campaign to train countryside midwives on hygienic clinical tools, emergency signs, and child safety procedures.',
    impact: 'Trained 45 village birthing practitioners',
    status: 'completed',
    date: 'Nov 2024',
    imageUrl: '/src/assets/images/midwifery_seminar_1780771335286.png',
    imageAlt: 'Midwives certification seminar',
  },
];

export const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'empowerment', label: 'Empowerment' },
    { value: 'education', label: 'Education' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'environment', label: 'Clean Water & Environment' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? SAMPLES_PROJECTS
    : SAMPLES_PROJECTS.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'empowerment': return <Settings className="w-4 h-4 text-amber-500" />;
      case 'education': return <BookOpen className="w-4 h-4 text-indigo-500" />;
      case 'healthcare': return <HeartCrack className="w-4 h-4 text-pink-500" />;
      case 'environment': return <Droplet className="w-4 h-4 text-sky-500" />;
      default: return <Sparkles className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 dark:text-amber-400 block mb-2">Our Hands-on Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 dark:text-white mb-4">
            Recent Service & Charity Portfolios
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            We identify gaps in local civic infrastructure and dedicate funding, volunteer hours, and equipment to fill them directly.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-indigo-600 dark:bg-amber-450 text-white dark:text-slate-950 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-amber-400 border border-slate-200/50 dark:border-slate-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Entry Stagger */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Project Image Frame */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                </div>

                {/* Project Content */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {getCategoryIcon(project.category)}
                      <span className="ml-1 text-[10px]">{project.category}</span>
                    </span>

                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md ${
                      project.status === 'ongoing'
                        ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-indigo-950 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer Info */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-850 flex flex-col space-y-3 mt-auto">
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium flex items-start space-x-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Impact:</strong> {project.impact}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-505 flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {project.date}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center text-xs font-bold text-indigo-600 dark:text-amber-400 hover:underline cursor-pointer"
                    >
                      Impact Details
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl flex flex-col space-y-5 text-left"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {getCategoryIcon(selectedProject.category)}
                      <span className="ml-1 text-[9px]">{selectedProject.category}</span>
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-950 dark:text-white font-serif italic">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-3 bg-indigo-50/40 dark:bg-slate-950 p-4 rounded-2xl border border-indigo-100/50 dark:border-slate-800/80">
                  <div className="text-xs">
                    <span className="font-extrabold uppercase tracking-wider text-indigo-950 dark:text-amber-400 block mb-1">Impact Highlight</span>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">{selectedProject.impact}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs pt-1.5 border-t border-slate-200/50 dark:border-slate-850">
                    <div>
                      <span className="text-slate-400 font-bold block">DATE</span>
                      <span className="text-slate-700 dark:text-white font-medium">{selectedProject.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">STATUS</span>
                      <span className="font-extrabold capitalize text-indigo-600 dark:text-amber-400">{selectedProject.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-slate-950 rounded-full cursor-pointer shadow-md"
                  >
                    Close Report
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
