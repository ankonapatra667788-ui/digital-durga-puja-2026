import React, { useState } from 'react';
import { 
  ShieldAlert, ShieldCheck, Megaphone, GraduationCap, 
  Target, Scale, Palette, HeartHandshake, Zap, Cpu,
  Sparkles, CheckCircle2, Play
} from 'lucide-react';
import { shaktiData } from '../data/shaktiData';
import { pujaAudio } from '../utils/audioSynthesizer';

const iconMap = {
  ShieldAlert,
  ShieldCheck,
  Megaphone,
  GraduationCap,
  Target,
  Scale,
  Palette,
  HeartHandshake,
  Zap,
  Cpu
};

export const ShaktiExplorer = ({ language }) => {
  const [selectedShaktiId, setSelectedShaktiId] = useState(1);
  const [simulatedValue, setSimulatedValue] = useState(95);
  const [isSimulating, setIsSimulating] = useState(false);

  const currentItem = shaktiData.find((item) => item.id === selectedShaktiId) || shaktiData[0];
  const IconComponent = iconMap[currentItem.iconName] || Sparkles;

  const handleSelect = (id) => {
    setSelectedShaktiId(id);
    if (id % 2 === 0) {
      pujaAudio.playDhakKring(0.5);
    } else {
      pujaAudio.playDhakDha(0.5);
    }
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    pujaAudio.playKanshi(0.6);
    setTimeout(() => {
      setSimulatedValue(Math.min(100, Math.round(92 + Math.random() * 7.9)));
      setIsSimulating(false);
      pujaAudio.playDiyaChime();
    }, 600);
  };

  return (
    <section id="shakti" className="py-24 bg-[#140306] relative border-t border-[#4a101c]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'দশভুজা দর্শন · রূপান্তর' : 'THE TEN SACRED ARMS · MODERN MANIFESTATION'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#fff7ee]">
            {language === 'bn' ? '১০ অস্ত্র থেকে আজকের ১০ মহাশক্তি' : 'The Ten Arms to The Ten Powers of Today'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'পুরাণে অসুর বধের যে অস্ত্রসমূহ দেবী দুর্গাকে দেওয়া হয়েছিল, আজকের যুগে সেগুলিই জ্ঞান, প্রযুক্তি, নৈতিকতা এবং সমতার আধুনিক হাতিয়ার।'
              : 'The sacred weapons bestowed upon Goddess Durga by the cosmic deities, re-imagined as the transformative forces driving women in engineering, ethics, and society.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-10">
          {shaktiData.map((item) => {
            const isSelected = item.id === selectedShaktiId;
            const ItemIcon = iconMap[item.iconName] || Sparkles;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#3b0811] border-[#e6b422] text-[#fff] shadow-[0_0_18px_rgba(230,180,34,0.3)] scale-[1.03]'
                    : 'bg-[#1b0509]/70 border-[#4a101c]/60 text-[#bba998] hover:border-[#8f1e31] hover:text-[#fff]'
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-[#d09e3a]">
                  {String(item.id).padStart(2, '0')}
                </span>
                <ItemIcon className={`w-5 h-5 ${isSelected ? 'text-[#e6b422]' : 'text-[#8a2436]'}`} />
                <span className="text-[11px] font-semibold line-clamp-1 leading-tight">
                  {language === 'bn' ? item.traditionalWeaponBn.split(' ')[0] : item.traditionalWeaponEn.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#1e050a] via-[#24060d] to-[#170307] rounded-3xl border border-[#5a1420] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6b422]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-[#4a101c]/60 lg:pr-8">
              
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#d09e3a] font-mono">
                  ARM {String(currentItem.id).padStart(2, '0')} OF 10
                </span>
                <span className="text-xs text-[#a08976] italic">
                  Gifted by: {currentItem.divineDeityGift}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#fff7ee]">
                  {language === 'bn' ? currentItem.traditionalWeaponBn : currentItem.traditionalWeaponEn}
                </h3>
                <p className="text-xs text-[#e6b422] font-mono mt-1 uppercase tracking-wider">
                  Domain: {currentItem.domain}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2a070f] border-l-4 border-[#e6b422] text-[#f0caa3] italic text-sm leading-relaxed">
                {language === 'bn' ? currentItem.quoteBn : currentItem.quoteEn}
              </div>

              <div className="text-sm text-[#c8b7a6] leading-relaxed">
                {language === 'bn' ? currentItem.descriptionBn : currentItem.descriptionEn}
              </div>

            </div>

            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'আধুনিক রূপান্তর ও প্রয়োগ' : 'MODERN EMPOWERMENT & CST APPLICATION'}</span>
              </div>

              <div>
                <h4 className="text-2xl font-display font-bold text-[#ffdf85]">
                  {language === 'bn' ? currentItem.modernPowerBn : currentItem.modernPowerEn}
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-[#140306]/80 border border-[#4a101c] space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#d09e3a] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e6b422]" />
                  <span>{language === 'bn' ? 'সিএসটি ডিপার্টমেন্ট প্রযুক্তিগত প্রয়োগ:' : 'CST Department Technology Analog:'}</span>
                </div>
                <p className="text-sm text-[#f5e6d6] leading-relaxed">
                  {language === 'bn' ? currentItem.cstApplicationBn : currentItem.cstApplicationEn}
                </p>
                <div className="text-xs text-[#b8a08d] pt-1">
                  <strong>Impact:</strong> {currentItem.realWorldImpact}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#2b0811]/70 border border-[#7a1c2a]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#eed7ba]">
                    {currentItem.simulationMetric.label}
                  </div>
                  <div className="text-2xl font-mono font-bold text-[#fff] mt-0.5 tabular-nums flex items-baseline gap-1">
                    <span>{isSimulating ? '---' : simulatedValue}</span>
                    <span className="text-xs font-sans text-[#e6b422]">
                      {currentItem.simulationMetric.unit}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="px-4 py-2 text-xs font-semibold text-[#1a0407] bg-[#e6b422] hover:bg-[#ffd966] rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>
                    {isSimulating
                      ? (language === 'bn' ? 'সিমুলেশন চলছে...' : 'Auditing System...')
                      : (language === 'bn' ? 'সিস্টেম টেস্ট চালান' : 'Run Live Benchmark')}
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
