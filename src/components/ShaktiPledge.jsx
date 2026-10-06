import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Download, Award } from 'lucide-react';
import { pujaAudio } from '../utils/audioSynthesizer';

export const ShaktiPledge = ({ language }) => {
  const [name, setName] = useState('Ankana Patra');
  const [dept, setDept] = useState('Department of Computer Science & Technology');
  const [power, setPower] = useState('Coding with Empathy & AI Ethics');
  const [commitment, setCommitment] = useState('To build technology that uplifts humanity and dismantles digital prejudice.');
  const [isGenerated, setIsGenerated] = useState(true);

  const [pledgeWall, setPledgeWall] = useState([
    { name: 'Ankana Patra', dept: 'Dept. CST', power: 'AI for Humanity & Safety', date: 'Just now' },
    { name: 'Sneha Mukherjee', dept: 'Robotics Lab', power: 'Accessible Assistive Machines', date: '10m ago' },
    { name: 'Dr. R. Banerjee', dept: 'Dean of Computing', power: 'Pedagogical Equality', date: '25m ago' },
    { name: 'Priyanka Sen', dept: 'CST Aspirant', power: 'Algorithmic Truth', date: '1h ago' }
  ]);

  const certCanvasRef = useRef(null);

  const generateCertificate = () => {
    const canvas = certCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 800;
    const height = 560;
    canvas.width = width;
    canvas.height = height;

    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#1c0408');
    bgGrad.addColorStop(0.5, '#2c070e');
    bgGrad.addColorStop(1, '#150306');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    ctx.strokeStyle = '#f0c652';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(28, 28, width - 56, height - 56);

    const drawCorner = (x, y, flipX, flipY) => {
      ctx.save();
      ctx.translate(x, y);
      if (flipX) ctx.scale(-1, 1);
      if (flipY) ctx.scale(1, -1);
      ctx.strokeStyle = '#e6b422';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(25, 0);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 25);
      ctx.stroke();
      ctx.restore();
    };
    drawCorner(36, 36, false, false);
    drawCorner(width - 36, 36, true, false);
    drawCorner(36, height - 36, false, true);
    drawCorner(width - 36, height - 36, true, true);

    ctx.fillStyle = '#f7d668';
    ctx.font = '28px serif';
    ctx.textAlign = 'center';
    ctx.fillText('ॐ', width / 2, 70);

    ctx.font = '12px "Hind Siliguri", serif';
    ctx.fillStyle = '#eed7ba';
    ctx.fillText('सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके · शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु তে', width / 2, 95);

    ctx.font = 'bold 22px "Cinzel", "Playfair Display", serif';
    ctx.fillStyle = '#ffd966';
    ctx.fillText('DIGITAL DURGA PUJA 2026', width / 2, 130);

    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#d09e3a';
    ctx.fillText('SHAKTI LAUREATE CITATION OF EXCELLENCE', width / 2, 150);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(120, 165);
    ctx.lineTo(width - 120, 165);
    ctx.stroke();

    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#f5deb3';
    ctx.fillText('THIS SACRED CITATION PROUDLY CERTIFIES THAT', width / 2, 195);

    ctx.font = 'bold 30px "Playfair Display", "Hind Siliguri", serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(name || 'Ankana Patra', width / 2, 235);

    ctx.font = 'italic 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#eed7ba';
    ctx.fillText(dept || 'Department of Computer Science & Technology', width / 2, 260);

    ctx.fillStyle = 'rgba(56, 12, 20, 0.6)';
    ctx.fillRect(100, 285, width - 200, 95);
    ctx.strokeStyle = '#d4af37';
    ctx.strokeRect(100, 285, width - 200, 95);

    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#e6b422';
    ctx.fillText('CHOSEN SHAKTI POWER & COMMITMENT:', width / 2, 310);

    ctx.font = 'bold 16px "Playfair Display", "Hind Siliguri", serif';
    ctx.fillStyle = '#fff1d0';
    ctx.fillText(`“${power || 'Courage & Innovation'}”`, width / 2, 335);

    ctx.font = '12px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#d8c5b2';
    ctx.fillText(commitment || 'Pledged to serve society with technology and courage.', width / 2, 360);

    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    ctx.textAlign = 'left';
    ctx.font = '11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#eed7ba';
    ctx.fillText(`Issued: ${dateStr}`, 100, 475);
    ctx.fillText('ID: SHAKTI-2026-CST-884', 100, 492);

    ctx.textAlign = 'center';
    ctx.strokeStyle = '#e6b422';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(width / 2, 475, 26, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#ffd966';
    ctx.fillText('VERIFIED', width / 2, 472);
    ctx.fillText('SHAKTI', width / 2, 484);

    ctx.textAlign = 'right';
    ctx.font = 'italic 16px "Playfair Display", cursive';
    ctx.fillStyle = '#fff';
    ctx.fillText('Ankana Patra', width - 100, 465);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.beginPath();
    ctx.moveTo(width - 220, 473);
    ctx.lineTo(width - 100, 473);
    ctx.stroke();
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#eed7ba';
    ctx.fillText('Curator · Department CST', width - 100, 488);
  };

  useEffect(() => {
    generateCertificate();
  }, [name, dept, power, commitment, isGenerated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsGenerated(true);
    pujaAudio.playDiyaChime();
    pujaAudio.playShankha(1.8, 0.6);

    setPledgeWall((prev) => [
      { name: name.trim(), dept: dept.trim() || 'Tech Innovator', power: power.trim(), date: 'Just now' },
      ...prev.slice(0, 5)
    ]);
  };

  const handleDownload = () => {
    const canvas = certCanvasRef.current;
    if (!canvas) return;
    pujaAudio.playKanshi(0.5);
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `Shakti_Pledge_Certificate_${name.replace(/\s+/g, '_')}_2026.png`;
    link.click();
  };

  return (
    <section id="pledge" className="py-24 bg-[#180408] relative border-t border-[#4a101c]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'তোমার শক্তি কী? · আত্মজাগরণ' : 'AWAKEN YOUR INNER SHAKTI · CITATION'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#fff7ee]">
            {language === 'bn' ? 'শক্তির প্রতিজ্ঞা ও ডিজিটাল সনদ' : 'The Shakti Pledge & Laureate Citation'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'প্রতিটি মানুষের মাঝেই রয়েছে এক সুপ্ত মহাশক্তি। আপনার নাম ও অঙ্গীকার লিপিবদ্ধ করে সংগ্রহ করুন ডিজিটাল দুর্গাপূজা ২০২৬-এর গোল্ড-ক্রেস্টেড সম্মাননা সনদ।'
              : 'Every soul bears a unique manifestation of Shakti. Inscribe your modern pledge to generate and download your personalized, high-resolution Digital Shakti Laureate Certificate.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 bg-[#1f050b] border border-[#5a1420] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="flex items-center gap-2 border-b border-[#4a101c] pb-3">
              <Award className="w-5 h-5 text-[#e6b422]" />
              <h3 className="text-base font-semibold text-[#f5deb3]">
                {language === 'bn' ? 'সনদের তথ্য পূরণ করুন' : 'Personalize Your Citation'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#d09e3a] mb-1 uppercase tracking-wider">
                  {language === 'bn' ? 'আপনার নাম (Full Name)' : 'Your Full Name'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ankana Patra"
                  required
                  maxLength={50}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#140306] border border-[#5a1420] text-[#fff] text-sm focus:border-[#e6b422] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d09e3a] mb-1 uppercase tracking-wider">
                  {language === 'bn' ? 'বিভাগ বা পেশা (Dept / Institution)' : 'Department / Affiliation'}
                </label>
                <input
                  type="text"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  placeholder="e.g. Department of CST / Research Scholar"
                  maxLength={65}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#140306] border border-[#5a1420] text-[#fff] text-sm focus:border-[#e6b422] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d09e3a] mb-1 uppercase tracking-wider">
                  {language === 'bn' ? 'আপনার মহাশক্তি (Your Chosen Power)' : 'Your Modern Shakti Power'}
                </label>
                <input
                  type="text"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                  placeholder="e.g. Coding with Empathy / Cyber Sovereignty"
                  required
                  maxLength={60}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#140306] border border-[#5a1420] text-[#fff] text-sm focus:border-[#e6b422] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d09e3a] mb-1 uppercase tracking-wider">
                  {language === 'bn' ? 'সামাজিক অঙ্গীকার (Pledge Note)' : 'Pledge Commitment Statement'}
                </label>
                <textarea
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  placeholder="Write your commitment to society..."
                  rows={2}
                  maxLength={120}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#140306] border border-[#5a1420] text-[#fff] text-sm focus:border-[#e6b422] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e6b422] via-[#ffd966] to-[#e6b422] text-[#1a0407] font-semibold text-xs tracking-wider uppercase transition-all hover:brightness-110 cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{language === 'bn' ? 'সনদ আপডেট ও পুনঃমুদ্রণ' : 'Update & Re-render Certificate'}</span>
              </button>
            </form>

            <div className="pt-3 border-t border-[#4a101c]/60">
              <div className="text-xs font-semibold text-[#d09e3a] mb-2 uppercase tracking-wider">
                {language === 'bn' ? 'সম্প্রদায়ের সাম্প্রতিক প্রতিজ্ঞাসমূহ' : 'Recent Shakti Laureates'}
              </div>
              <div className="space-y-2">
                {pledgeWall.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#140306]/70 border border-[#4a101c]/40 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#f5deb3]">{item.name}</div>
                      <div className="text-[11px] text-[#e6b422] italic">{item.power}</div>
                    </div>
                    <span className="text-[10px] text-[#8a7261]">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 flex flex-col items-center space-y-4">
            
            <div className="w-full rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#100204]">
              <canvas
                ref={certCanvasRef}
                className="w-full h-auto block max-w-full"
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="text-xs text-[#a08976]">
                Rendered on client-side 800×560 Hi-DPI HTML5 canvas · No watermark
              </div>

              <button
                onClick={handleDownload}
                className="px-6 py-2.5 text-xs font-bold rounded-xl bg-[#e6b422] hover:bg-[#ffd966] text-[#1a0407] transition-all cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>{language === 'bn' ? 'সনদ ডাউনলোড করুন (PNG)' : 'Download Laureate Citation (PNG)'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
