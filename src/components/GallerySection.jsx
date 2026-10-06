import React, { useState } from 'react';
import { MapPin, Maximize2, X } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { pujaAudio } from '../utils/audioSynthesizer';

export const GallerySection = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', 'Rituals', 'Artisans', 'Pandals'];

  const filteredPhotos = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((p) => p.category === selectedCategory);

  const openLightbox = (photo) => {
    setActivePhoto(photo);
    pujaAudio.playDiyaChime();
  };

  return (
    <section id="gallery" className="py-24 bg-[#140306] relative border-t border-[#4a101c]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'দৃশ্যমান ঐতিহ্য · কলকাতা আর্কাইভ' : 'VISUAL HERITAGE · KOLKATA CULTURAL ARCHIVE'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#fff7ee]">
            {language === 'bn' ? 'শারদোৎসবের অনির্বাণ মুহূর্ত' : 'Durga Puja Heritage Moments'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'কুমারটুলির মাটি থেকে মণ্ডপের আলো—বাঙালির প্রাণের উৎসবের দুর্লভ চিত্রাবলি ও স্থাপত্য সংকলন।'
              : 'Tradition, devotion, structural ingenuity, and cultural radiance documented across Kolkata’s historic festival grounds.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  pujaAudio.playDhakTa(0.3);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#e6b422] text-[#1a0407] border-[#e6b422]'
                    : 'bg-[#1e050a] text-[#a08976] border-[#4a101c] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden border border-[#5a1420] bg-[#1e050a] shadow-xl hover:border-[#e6b422]/80 transition-all cursor-pointer flex flex-col justify-end min-h-[340px]"
            >
              <img
                src={photo.imageUrl}
                alt={photo.titleEn}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#120305] via-[#120305]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="relative z-10 p-5 space-y-1.5">
                <span className="text-[10px] font-mono text-[#e6b422] uppercase tracking-wider block">
                  {photo.category}
                </span>
                <h3 className="text-base font-semibold text-[#fff] leading-snug group-hover:text-[#ffd966] transition-colors">
                  {language === 'bn' ? photo.titleBn : photo.titleEn}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-[#c8b7a6]">
                  <MapPin className="w-3 hand-3 text-[#e6b422]" />
                  <span className="line-clamp-1">{photo.location}</span>
                </div>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#140306]/80 text-[#e6b422] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-[#090103]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#180408] border border-[#d4af37]/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#140306]/80 text-[#eed7ba] hover:text-white border border-[#5a1420] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-3/5 bg-black flex items-center justify-center min-h-[320px] md:min-h-[460px]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#e6b422] uppercase tracking-wider block">
                  HERITAGE ACCESSION · {activePhoto.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#fff7ee]">
                  {language === 'bn' ? activePhoto.titleBn : activePhoto.titleEn}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#d09e3a]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activePhoto.location}</span>
                </div>

                <p className="text-xs text-[#c8b7a6] leading-relaxed pt-2 border-t border-[#4a101c]/60">
                  {language === 'bn' ? activePhoto.captionBn : activePhoto.captionEn}
                </p>
              </div>

              <div className="pt-4 border-t border-[#4a101c]/60 space-y-1 text-[11px] text-[#8a7261]">
                <div><strong>Archive:</strong> {activePhoto.photographer}</div>
                <div><strong>Classification:</strong> {activePhoto.license}</div>
                <div className="text-[#d09e3a] pt-1">Digital Durga Puja 2026 Archive</div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
