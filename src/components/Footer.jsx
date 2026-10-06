import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f0204] border-t border-[#4a101c]/60 text-[#a08976] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl text-[#e6b422]">ॐ</span>
              <span className="text-lg font-display font-bold text-[#fff7ee] tracking-wider">
                DIGITAL DURGA PUJA 2026
              </span>
            </div>
            
            <p className="text-xs text-[#b8a08d] leading-relaxed max-w-md">
              {language === 'bn'
                ? 'বাঙালির প্রাণের দুর্গাপূজা এবং আধুনিক বিজ্ঞানের মেলবন্ধন। মা দুর্গার দশভুজার মহিমাকে আজকের নারী সমাজের জ্ঞান, প্রযুক্তি ও সাহসের প্রতীকরূপে উপস্থাপিত করার বিশেষ উদ্যোগ।'
                : 'A curated dialogue bridging Bengal’s historic cultural festival with frontier computer science, female leadership, and sustainable festival engineering.'}
            </p>

            <div className="text-xs text-[#eed7ba] pt-2">
              <strong>Curator:</strong> Ankana Patra · Department of Computer Science & Technology (CST)
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-[#e6b422] uppercase tracking-wider">
              {language === 'bn' ? 'বিভাগসমূহ' : 'Exhibits'}
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#shakti" className="hover:text-white transition-colors">{language === 'bn' ? '১০ মহাশক্তি' : 'The 10 Shaktis'}</a></li>
              <li><a href="#kumortuli" className="hover:text-white transition-colors">{language === 'bn' ? 'কুমারটুলি ল্যাব' : 'Kumortuli Craft Studio'}</a></li>
              <li><a href="#dhak" className="hover:text-white transition-colors">{language === 'bn' ? 'ঢাকের বোল ও ধুনুচি' : 'Dhak & Aarti Lab'}</a></li>
              <li><a href="#cst-tech" className="hover:text-white transition-colors">{language === 'bn' ? 'সিএসটি প্রযুক্তি' : 'CST Tech Pavilion'}</a></li>
              <li><a href="#poetry" className="hover:text-white transition-colors">{language === 'bn' ? 'কবিতা: শুধু দর্শক নই' : 'Original Poetry'}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-[#e6b422] uppercase tracking-wider">
              {language === 'bn' ? 'ঐতিহ্য ও নীতি' : 'Preservation'}
            </div>
            <p className="text-xs text-[#8a7261] leading-relaxed">
              All visual archival assets are curated for cultural education, civic innovation, and academic design competition evaluation.
            </p>
            <div className="text-[11px] text-[#e6b422]/80">
              Autumn 2026 Edition · Kolkata
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#3b0811]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Digital Durga Puja. Conceived & Crafted by <span className="text-[#ffd966] font-medium">Ankana Patra</span>, Department CST.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1f050b] border border-[#5a1420] text-[#eed7ba] hover:text-white hover:border-[#e6b422] transition-colors cursor-pointer"
          >
            <span>{language === 'bn' ? 'উপরে ফিরুন' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
