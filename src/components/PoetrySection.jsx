import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { poemStanzas, poemEnding } from '../data/poetryData';
import { pujaAudio } from '../utils/audioSynthesizer';

export const PoetrySection = ({ language }) => {
  const [activeTab, setActiveTab] = useState('both');
  const [activeStanzaIndex, setActiveStanzaIndex] = useState(null);

  const handleReadStanza = (idx) => {
    setActiveStanzaIndex(idx);
    pujaAudio.playDiyaChime();
  };

  return (
    <section id="poetry" className="py-24 bg-[#140306] relative border-t border-[#4a101c]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'মৌলিক সাহিত্য ও দর্শন' : 'ORIGINAL POETRY & MANIFESTO'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#fff7ee]">
            {language === 'bn' ? '“শুধু দর্শক নই”' : '“Not Mere Spectators”'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'পূজার আনুষ্ঠানিকতার ঊর্ধ্বে উঠে নারীর আত্মশক্তি, বিজ্ঞানমনস্কতা ও অদম্য সাহসের উদাত্ত আহ্বান।'
              : 'A poetic manifesto bridging traditional devotion with female autonomy, computational literacy, and societal courage.'}
          </p>

          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-[#e6b422] text-[#1a0407] border-[#e6b422]'
                  : 'bg-[#1b0509] text-[#a08976] border-[#4a101c]'
              }`}
            >
              {language === 'bn' ? 'উভয় ভাষা (বাংলা + English)' : 'Dual View (Both)'}
            </button>
            <button
              onClick={() => setActiveTab('bengali')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                activeTab === 'bengali'
                  ? 'bg-[#e6b422] text-[#1a0407] border-[#e6b422]'
                  : 'bg-[#1b0509] text-[#a08976] border-[#4a101c]'
              }`}
            >
              বাংলা মূল কবিতা
            </button>
            <button
              onClick={() => setActiveTab('english')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                activeTab === 'english'
                  ? 'bg-[#e6b422] text-[#1a0407] border-[#e6b422]'
                  : 'bg-[#1b0509] text-[#a08976] border-[#4a101c]'
              }`}
            >
              English Verse
            </button>
          </div>
        </div>

        <div className="bg-[#1b0509] border border-[#5a1420] rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-4 right-6 text-7xl text-[#e6b422]/5 font-serif select-none pointer-events-none">
            ॐ
          </div>

          <div className="space-y-8 divide-y divide-[#3b0811]/60">
            {poemStanzas.map((stanza, idx) => (
              <div 
                key={stanza.stanzaNumber}
                onClick={() => handleReadStanza(idx)}
                className={`pt-6 first:pt-0 transition-colors cursor-pointer rounded-xl p-3 ${
                  activeStanzaIndex === idx ? 'bg-[#29070e]/80 border-l-2 border-[#e6b422]' : 'hover:bg-[#20060c]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#d09e3a] font-mono mb-2">
                  <span>STANZA {String(stanza.stanzaNumber).padStart(2, '0')}</span>
                  <span className="italic">{language === 'bn' ? stanza.themeBn : stanza.themeEn}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(activeTab === 'bengali' || activeTab === 'both') && (
                    <div className="space-y-1 text-base text-[#fff1e0] font-editorial leading-loose">
                      {stanza.linesBn.map((line, lIdx) => (
                        <p key={lIdx} className="tracking-wide">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}

                  {(activeTab === 'english' || activeTab === 'both') && (
                    <div className="space-y-1 text-sm text-[#d8c5b2] font-serif italic leading-relaxed md:border-l md:border-[#3b0811] md:pl-4">
                      {stanza.linesEn.map((line, lIdx) => (
                        <p key={lIdx}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#2c0810] via-[#3a0914] to-[#2c0810] border border-[#e6b422]/40 text-center space-y-3 relative">
            <Quote className="w-8 h-8 text-[#e6b422]/40 mx-auto" />
            <div className="text-xl sm:text-2xl font-editorial font-bold text-[#ffdf85] tracking-wide">
              {language === 'bn' ? poemEnding.quoteBn : poemEnding.quoteEn}
            </div>
            <div className="text-xs text-[#eed7ba] uppercase tracking-wider pt-2">
              {language === 'bn' ? poemEnding.creditBn : poemEnding.creditEn}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
