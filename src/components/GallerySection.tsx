import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { ChevronLeft, ChevronRight, Plus, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Static image imports for production bundling compatibility
import vocationalCenterImg from '../assets/images/vocational_center_1780771235413.png';
import girlEducationImg from '../assets/images/girl_education_1780771257068.png';
import healthCampImg from '../assets/images/health_camp_1780771293659.png';
import treePlantingImg from '../assets/images/tree_planting_1780771315705.png';

const EVENTS_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Stitching Certification Convocation',
    description: 'Celebrating 28 young women graduating from the vocational sewing center at Sahiwal. Outstanding graduates were gifted modern sewing machinery kits.',
    category: 'Empowerment',
    imageUrl: vocationalCenterImg,
  },
  {
    id: 'g2',
    title: 'Free Mother-Child Health Clinic',
    description: 'Specialists checking infant nutritional progress and gifting critical clinical health packets and vitamins in Sahiwal rural health centers.',
    category: 'Healthcare',
    imageUrl: healthCampImg,
  },
  {
    id: 'g3',
    title: 'Sahiwal Youth Education Drive',
    description: 'Awarding merit-based scholarships, schoolbags, solar study lights, and notebooks to public primary girls at Sahiwal.',
    category: 'Youth Aid',
    imageUrl: girlEducationImg,
  },
  {
    id: 'g4',
    title: 'Neem Saplings Civic Tree Walk',
    description: 'Vanguard eco initiative planted dense shaded Neem roots alongside community trails of Farid Town, Sahiwal with local citizen assistance.',
    category: 'Environment',
    imageUrl: treePlantingImg,
  },
];

export const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? EVENTS_GALLERY.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === EVENTS_GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 dark:text-amber-400 block mb-2">Our Moments</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 dark:text-white mb-4">
            Service Gallery & Event Diaries
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Theme-Aware Slideshow Frame */}
        <div className="relative max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-150/40 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center text-left">
          
          {/* Real Photo Slide representing the event */}
          <div className="w-full md:w-1/2 aspect-video md:aspect-square rounded-2xl overflow-hidden border border-indigo-100/50 dark:border-slate-800/80 relative group bg-slate-100 dark:bg-slate-950">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={currentIndex}
                src={EVENTS_GALLERY[currentIndex].imageUrl}
                alt={EVENTS_GALLERY[currentIndex].title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
              <span className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-indigo-950 shadow-sm mb-1">
                {EVENTS_GALLERY[currentIndex].category}
              </span>
            </div>
          </div>

          {/* Copy description and controls */}
          <div className="w-full md:w-1/2 flex flex-col justify-between self-stretch py-2">
            <div className="space-y-4">
              <span className="text-[11px] font-bold font-mono text-indigo-600 dark:text-amber-400 uppercase tracking-widest block">
                Moment {currentIndex + 1} of {EVENTS_GALLERY.length}
              </span>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 dark:text-white leading-tight">
                {EVENTS_GALLERY[currentIndex].title}
              </h3>
              
              <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                {EVENTS_GALLERY[currentIndex].description}
              </p>
            </div>

            {/* Slider Switch Counters */}
            <div className="flex items-center justify-between mt-8 md:mt-0 pt-4 border-t border-slate-100 dark:border-slate-850">
              <span className="text-xs text-slate-400 font-bold tracking-tight"> Inner Wheel Sahiwal</span>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-705 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-705 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
