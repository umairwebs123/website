import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { CommitteeSection } from './components/CommitteeSection';
import { GallerySection } from './components/GallerySection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { GetInvolvedModal } from './components/GetInvolvedModal';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
        
        {/* Navigation Header bar with theme toggler */}
        <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        
        {/* Main Content Layout */}
        <main>
          {/* Welcome Screen Area */}
          <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />
          
          {/* Historical Objectives & Story */}
          <AboutSection />
          
          {/* Recent Service Campaigns Portfolio */}
          <ProjectsGrid />
          
          {/* Active Leaders / Members panel */}
          <CommitteeSection />
          
          {/* Event slides & Photo snapshots */}
          <GallerySection />
          
          {/* Dynamic feedback Form block */}
          <ContactForm />
        </main>
        
        {/* Standard responsive Footing with secondary switch and scrolling back togglers */}
        <Footer />

        {/* Global application membership portal */}
        <GetInvolvedModal
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
        />
        
      </div>
    </ThemeProvider>
  );
}
