/**
 * Digital Durga Puja 2026: Shakti • Creativity • Technology
 * Curated and Engineered by Ankana Patra, Department of Computer Science & Technology (CST)
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShaktiExplorer } from './components/ShaktiExplorer';
import { KumortuliStudio } from './components/KumortuliStudio';
import { DhakRhythmLab } from './components/DhakRhythmLab';
import { TechPavilion } from './components/TechPavilion';
import { PoetrySection } from './components/PoetrySection';
import { PranamDiya } from './components/PranamDiya';
import { GallerySection } from './components/GallerySection';
import { ShaktiPledge } from './components/ShaktiPledge';
import { Footer } from './components/Footer';
import { pujaAudio } from './utils/audioSynthesizer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState('bn');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    pujaAudio.playDiyaChime();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#120306] text-[#f7eee4] font-body selection:bg-[#d4af37]/30 selection:text-[#fff6d6] relative">
      
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        onOpenPledge={() => scrollToSection('pledge')}
      />

      {/* Main Experience Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onExploreShakti={() => scrollToSection('shakti')}
          onExploreAudio={() => scrollToSection('dhak')}
          onLightDiya={() => scrollToSection('diya-aarti')}
        />

        {/* 10 Shaktis Deep Dive */}
        <ShaktiExplorer language={language} />

        {/* Kumortuli Artisan Studio & Chokkhu Daan */}
        <KumortuliStudio language={language} />

        {/* Dhak Rhythm Lab & Interactive Dhunuchi Aarti */}
        <DhakRhythmLab language={language} />

        {/* Department CST Innovation Pavilion */}
        <TechPavilion language={language} />

        {/* Original Poetry "শুধু দর্শক নই" */}
        <PoetrySection language={language} />

        {/* Sacred Aarti Diya Lighting */}
        <PranamDiya language={language} />

        {/* Cultural Photo Archive */}
        <GallerySection language={language} />

        {/* Shakti Pledge & Laureate Citation Generator */}
        <ShaktiPledge language={language} />
      </main>

      {/* Institutional Footer */}
      <Footer language={language} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#e6b422] text-[#1a0407] hover:bg-[#ffd966] shadow-[0_4px_20px_rgba(230,180,34,0.4)] transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}