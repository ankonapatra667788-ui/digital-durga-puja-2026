import React, { useState, useEffect } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { pujaAudio } from '../utils/audioSynthesizer';

export const PranamDiya = ({ language }) => {
  const [isLit, setIsLit] = useState(false);
  const [lampCount, setLampCount] = useState(10842);

  useEffect(() => {
    const saved = localStorage.getItem('durga_diya_lit_count');
    if (saved) {
      setLampCount(Number(saved));
    }
  }, []);

  const handleLightDiya = () => {
    setIsLit(true);
    pujaAudio.playDiyaChime();
    pujaAudio.playShankha(1.8, 0.5);
    setLampCount((prev) => {
      const next = prev + 1;
      localStorage.setItem('durga_diya_lit_count', String(next));
      return next;
    });
  };

  return (
    <section id="diya-aarti" className="py-20 bg-[#160307] relative border-t border-[#4a101c]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
          {language === 'bn' ? 'অনলাইন অঞ্জলি ও আরতি প্রদীপ' : 'DIGITAL ANJALI & SACRED FLAME'}
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#fff7ee]">
          {language === 'bn' ? 'ভক্তিময় আরতি ও ডিজিটাল প্রদীপ' : 'Light The Sacred Community Diya'}
        </h2>

        <p className="text-sm text-[#c8b7a6] max-w-xl mx-auto leading-relaxed">
          {language === 'bn'
            ? 'এক ক্লিকে প্রজ্জ্বলিত করুন পুণ্য প্রদীপ। বিশ্বের যে প্রান্তেই থাকুন না কেন, আপনার প্রার্থনা ও শ্রদ্ধা পৌঁছে যাক মহামায়ার চরণে।'
            : 'Offer your devotional light to Maa Durga. Join thousands of devotees worldwide maintaining the eternal flame of peace and collective strength.'}
        </p>

        <div className="py-6 flex flex-col items-center justify-center">
          <div 
            onClick={handleLightDiya}
            className="relative cursor-pointer group flex flex-col items-center"
          >
            <div className={`relative transition-all duration-700 ${isLit ? 'scale-110' : 'scale-90 opacity-40'}`}>
              <div className={`absolute -inset-6 rounded-full bg-gradient-to-t from-[#e6b422]/40 to-transparent blur-xl ${isLit ? 'animate-pulse' : 'hidden'}`} />
              <div className="w-10 h-16 rounded-[50%_50%_20%_20%] bg-gradient-to-t from-[#c5283d] via-[#f7b03b] to-[#fff6d6] shadow-[0_0_30px_rgba(247,176,59,0.8)] animate-bounce duration-1000 mx-auto" />
            </div>

            <div className="relative -mt-2">
              <div className="w-32 h-10 rounded-[0_0_50px_50px] bg-gradient-to-b from-[#f0c652] via-[#b8861b] to-[#6e4e0b] shadow-2xl border-t border-[#ffd966]" />
              <div className="w-16 h-4 mx-auto bg-[#4a3406] rounded-b-md" />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#d09e3a]">
            <Flame className="w-4 h-4 text-[#e6b422] fill-current" />
            <span>
              {language === 'bn' ? 'মোট প্রজ্জ্বলিত প্রদীপ:' : 'Sacred Lamps Lit Globally:'}
            </span>
            <span className="font-mono font-bold text-base text-[#fff] tabular-nums">
              {lampCount.toLocaleString()}
            </span>
          </div>
        </div>

        <div>
          <button
            onClick={handleLightDiya}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e6b422] via-[#ffd966] to-[#e6b422] text-[#1a0407] font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(230,180,34,0.4)] transition-all cursor-pointer flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isLit ? (language === 'bn' ? 'পুনরায় প্রণাম জানান' : 'Offer Another Flame') : (language === 'bn' ? 'প্রদীপ প্রজ্বলন করুন' : 'Light The Diya')}</span>
          </button>
        </div>

        <div className="text-xs font-serif italic text-[#a08976] max-w-lg mx-auto pt-2">
          {language === 'bn'
            ? '“ওঁ জয়ন্তী মঙ্গলা কালী ভদ্রকালী কপালিনী। দুর্গা শিবা ক্ষমা ধাত্রী স্বাহা স্বধা নমোঽস্তু তে॥”'
            : '“Om Jayanti Mangala Kali Bhadrakali Kapalini, Durga Shiva Kshama Dhatri Swaha Swadha Namo’stu Te.”'}
        </div>

      </div>
    </section>
  );
};
