import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';
import { pujaAudio } from '../utils/audioSynthesizer';

export const Navbar = ({
  language,
  onLanguageChange,
  onOpenPledge
}) => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const nextState = !isAudioMuted;
    setIsAudioMuted(nextState);
    pujaAudio.setMute(nextState);
    if (!nextState) {
      pujaAudio.playDiyaChime();
    }
  };

  const navLinks = [
    { href: '#shakti', labelBn: '১০ মহাশক্তি', labelEn: '10 Shaktis' },
    { href: '#kumortuli', labelBn: 'মৃৎশিল্প ল্যাব', labelEn: 'Artisan Studio' },
    { href: '#dhak', labelBn: 'ঢাক ও ধুনুচি', labelEn: 'Dhak & Aarti' },
    { href: '#cst-tech', labelBn: 'সিএসটি প্রযুক্তি', labelEn: 'CST Tech' },
    { href: '#poetry', labelBn: 'কবিতা', labelEn: 'Poetry' },
    { href: '#gallery', labelBn: 'আর্কাইভ', labelEn: 'Gallery' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#140306]/90 backdrop-blur-md border-b border-[#5a1420]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-lg md:text-xl font-display font-semibold tracking-wider text-[#f5deb3] hover:text-[#fff2c2] transition-colors flex items-center gap-2 group"
        >
          <span className="text-[#e6b422] text-xl transform group-hover:scale-110 transition-transform">ॐ</span>
          <span className="tracking-widest">DIGITAL DURGA PUJA 2026</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#d8c7b8] hover:text-[#f8d878] transition-colors relative py-1 text-xs tracking-wider uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e6b422] hover:after:w-full after:transition-all"
            >
              {language === 'bn' ? link.labelBn : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => onLanguageChange(language === 'bn' ? 'en' : 'bn')}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-[#7a2230]/60 bg-[#29070e] text-[#f0caa3] hover:border-[#e6b422] hover:text-[#fff] transition-all cursor-pointer whitespace-nowrap"
            title="Toggle Language / ভাষা পরিবর্তন"
          >
            {language === 'bn' ? 'EN' : 'বাংলা'}
          </button>

          {/* Sound Synthesizer Controller */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-md border text-xs transition-colors cursor-pointer flex items-center gap-1.5 ${
              isAudioMuted
                ? 'border-neutral-700 bg-neutral-900/60 text-neutral-400'
                : 'border-[#941827] bg-[#420912] text-[#f8d878] hover:bg-[#570d19]'
            }`}
            title={isAudioMuted ? 'Unmute Festive Audio' : 'Mute Festive Audio'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
            <span className="hidden sm:inline text-[11px] font-sans-ui tracking-wide">
              {isAudioMuted ? 'Muted' : 'Acoustics'}
            </span>
          </button>

          {/* Primary CTA - Pledge Certificate */}
          <button
            onClick={onOpenPledge}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#1f060a] bg-gradient-to-r from-[#e6b422] via-[#f7d668] to-[#e6b422] rounded-md hover:brightness-110 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'শক্তির প্রতিজ্ঞা' : 'Shakti Pledge'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e8cbb5] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180407] border-b border-[#5a1420] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#e8cbb5] hover:text-[#e6b422] border-b border-[#300a11]/40"
            >
              {language === 'bn' ? link.labelBn : link.labelEn}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPledge();
            }}
            className="w-full mt-3 py-2 text-xs font-semibold text-[#1f060a] bg-[#e6b422] rounded flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{language === 'bn' ? 'শক্তির প্রতিজ্ঞা গ্রহণ' : 'Claim Shakti Pledge'}</span>
          </button>
        </div>
      )}
    </header>
  );
};
