import React, { useState, useRef, useEffect } from 'react';
import { Eye, Brush, Sparkles, RefreshCw, CheckCircle, Info } from 'lucide-react';
import { pujaAudio } from '../utils/audioSynthesizer';

export const KumortuliStudio = ({ language }) => {
  const [activeStage, setActiveStage] = useState(3);
  const [hasPaintedEye, setHasPaintedEye] = useState(false);
  const canvasRef = useRef(null);

  const stages = [
    {
      num: 1,
      titleBn: 'কাঠামো নির্মাণ (Kathamo)',
      titleEn: 'Bamboo Armature (Kathamo)',
      descBn: 'রথের দিনে প্রথম বাঁশ ও খড় দিয়ে প্রতিমার পবিত্র কাঠামো তৈরি শুরু হয়।',
      descEn: 'Commences on Rath Yatra; master artisans bind bamboo reeds and paddy straw to form the skeletal spine of the deity.'
    },
    {
      num: 2,
      titleBn: 'গঙ্গার পলিমাটির প্রলেপ (Mati Lepan)',
      titleEn: 'Sacred Clay Application (Mati Lepan)',
      descBn: 'ভাগীরথীর পলিমাটি ও ভুসির সংমিশ্রণে নিখুঁত হস্তশিল্পে দেবীর অবয়ব গড়ে তোলা হয়।',
      descEn: 'Alluvial silt harvested from the River Hooghly blended with organic rice husk is meticulously layered by hand to sculpt divine musculature.'
    },
    {
      num: 3,
      titleBn: 'চক্ষুদান (Chokkhu Daan)',
      titleEn: 'The Sacred Eye Painting (Chokkhu Daan)',
      descBn: 'মহালয়ার ভোরে পটের ওপর মা দুর্গার ত্রিনয়ন অঙ্কন করে মূর্তিতে দেবত্বের প্রাণপ্রতিষ্ঠা করা হয়।',
      descEn: 'On the auspicious dawn of Mahalaya, in quiet meditative silence, the chief artisan paints Maa Durga’s piercing third eye to awaken divine consciousness.'
    },
    {
      num: 4,
      titleBn: 'ডাকের সাজ ও অলঙ্করণ (Daaker Saaj)',
      titleEn: 'Ornamentation & Silver Foil (Daaker Saaj)',
      descBn: 'শোলার কারুকাজ, জার্মান সিলভার ও সোনার মুকুটে দেবী প্রতিমাকে বর্ণাঢ্য রূপ দেওয়া হয়।',
      descEn: 'Adorned in immaculate white Sholapith, embossed silver foil (Daaker Saaj), and shimmering gold crowns for the grand festival.'
    }
  ];

  const drawFace = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#ebd1b2');
    grad.addColorStop(1, '#caa078');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#f2dcc3';
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, canvas.height / 2 + 10, 110, 140, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#946648';
    ctx.stroke();

    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 90, canvas.height / 2 - 90);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 - 170);
    ctx.lineTo(canvas.width / 2 + 90, canvas.height / 2 - 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    const drawAlmondEye = (x, y, flip) => {
      ctx.save();
      ctx.translate(x, y);
      if (flip) ctx.scale(-1, 1);
      ctx.beginPath();
      ctx.moveTo(-45, 0);
      ctx.bezierCurveTo(-20, -22, 20, -22, 45, -5);
      ctx.bezierCurveTo(20, 14, -20, 14, -45, 0);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#1a0508';
      ctx.stroke();

      ctx.fillStyle = '#120205';
      ctx.beginPath();
      ctx.arc(0, -2, 11, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(3, -5, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(45, -5);
      ctx.lineTo(60, -18);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    };

    drawAlmondEye(canvas.width / 2 - 50, canvas.height / 2 + 15, false);
    drawAlmondEye(canvas.width / 2 + 50, canvas.height / 2 + 15, true);

    ctx.fillStyle = '#b31b2c';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 - 25, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#a47150';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 + 45);
    ctx.lineTo(canvas.width / 2 + 8, canvas.height / 2 + 45);
    ctx.stroke();

    ctx.fillStyle = '#9e1a29';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 24, canvas.height / 2 + 75);
    ctx.bezierCurveTo(canvas.width / 2 - 10, canvas.height / 2 + 65, canvas.width / 2 + 10, canvas.height / 2 + 65, canvas.width / 2 + 24, canvas.height / 2 + 75);
    ctx.bezierCurveTo(canvas.width / 2, canvas.height / 2 + 92, canvas.width / 2 - 12, canvas.height / 2 + 88, canvas.width / 2 - 24, canvas.height / 2 + 75);
    ctx.fill();

    if (hasPaintedEye) {
      drawThirdEye(ctx, canvas.width / 2, canvas.height / 2 - 62);
    } else {
      ctx.fillStyle = 'rgba(160, 40, 50, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#b31b2c';
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, canvas.height / 2 - 62, 10, 22, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#6e3012';
      ctx.textAlign = 'center';
      ctx.fillText(language === 'bn' ? 'এখানে ক্লিক করুন' : 'Click here to Paint', canvas.width / 2, canvas.height / 2 - 92);
    }
  };

  const drawThirdEye = (ctx, cx, cy) => {
    ctx.save();
    ctx.fillStyle = '#100305';
    ctx.strokeStyle = '#b31b2c';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(cx, cy - 26);
    ctx.bezierCurveTo(cx + 14, cy - 10, cx + 14, cy + 10, cx, cy + 26);
    ctx.bezierCurveTo(cx - 14, cy + 10, cx - 14, cy - 10, cx, cy - 26);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(238, 198, 67, 0.7)';
    ctx.lineWidth = 1.5;
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * 28, cy + Math.sin(angle) * 28);
      ctx.lineTo(cx + Math.cos(angle) * 44, cy + Math.sin(angle) * 44);
      ctx.stroke();
    }
    ctx.restore();
  };

  useEffect(() => {
    drawFace();
  }, [hasPaintedEye, language]);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const targetX = canvas.width / 2;
    const targetY = canvas.height / 2 - 62;
    const dist = Math.hypot(x - targetX, y - targetY);

    if (dist < 60 || !hasPaintedEye) {
      setHasPaintedEye(true);
      pujaAudio.playShankha(2.0, 0.65);
      pujaAudio.playDiyaChime();
    }
  };

  const handleResetEye = () => {
    setHasPaintedEye(false);
    pujaAudio.playKanshi(0.4);
  };

  return (
    <section id="kumortuli" className="py-24 bg-[#180408] relative border-t border-[#4a101c]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'কুমারটুলির ঐতিহ্যের পাঠশালা' : 'KUMORTULI ARTISAN LEGACY STUDIO'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#fff7ee]">
            {language === 'bn' ? 'মৃৎশিল্প থেকে ডিজিটাল সৃষ্টি' : 'From Sacred Earth to Divine Form'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'গঙ্গার পবিত্র মাটি, খড় ও বাঁশের বাঁধন দিয়ে শুরু হয় তিন শতকের প্রাচীন ঐতিহ্য। এখানে রয়েছে প্রতিমা নির্মাণের চার পর্যায় এবং মহালয়ার চক্ষুদান অন্বেষণ।'
              : 'Centuries of Bengal clay craftsmanship preserved: witness the 4 sacred stages of idol creation and participate in the auspicious ritual of Chokkhu Daan.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stages.map((stage) => {
            const isActive = activeStage === stage.num;
            return (
              <button
                key={stage.num}
                onClick={() => {
                  setActiveStage(stage.num);
                  pujaAudio.playDhakTa(0.4);
                }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#2f0810] border-[#e6b422] text-[#fff] shadow-[0_0_20px_rgba(230,180,34,0.25)]'
                    : 'bg-[#1b0509]/80 border-[#4a101c]/60 text-[#bba998] hover:border-[#8f1e31]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#d09e3a] uppercase tracking-wider">
                    Stage 0{stage.num}
                  </span>
                  <h3 className="text-base font-semibold text-[#f5deb3] mt-1 mb-2">
                    {language === 'bn' ? stage.titleBn : stage.titleEn}
                  </h3>
                  <p className="text-xs text-[#c8b7a6] leading-relaxed line-clamp-3">
                    {language === 'bn' ? stage.descBn : stage.descEn}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-[#e6b422]">
                  <span>{isActive ? (language === 'bn' ? 'বর্তমান ধাপ' : 'Active Stage') : (language === 'bn' ? 'ক্লিক করুন' : 'Select Stage')}</span>
                  {isActive && <CheckCircle className="w-3.5 h-3.5 text-[#e6b422]" />}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#21060c] border border-[#5a1420] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-lg group">
              <img
                src="/public/images/kumortuli_clay_sculptor_art_1791293961007.jpg"
                alt="Kumortuli artisan working with sacred clay"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140306] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#f5deb3]">
                <strong>Kumortuli Studios, North Kolkata</strong> · Clay sculpting on sacred armature
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#140306]/80 border border-[#4a101c] text-xs text-[#c8b7a6] space-y-2">
              <div className="flex items-center gap-1.5 text-[#e6b422] font-semibold">
                <Info className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'কুমারটুলির ঐতিহাসিক তথ্য' : 'Artisanal Heritage Context'}</span>
              </div>
              <p className="leading-relaxed">
                {language === 'bn'
                  ? 'কুমারটুলির প্রবীণ মৃৎশিল্পীরা বংশপরম্পরায় এই শিল্পকে বাঁচিয়ে রেখেছেন। দুর্গা প্রতিমার মাটি তৈরিতে ব্যবহৃত হয় ভাগীরথী নদীর পলিমাটি ও পুণ্যস্থানসমূহের ধূলিকণা।'
                  : 'Artisans inherit century-old sculpting formulas passing knowledge through oral apprenticeship. The clay composition involves sacred alluvial silt, cow dung binder, and fine jute strands.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
              <Brush className="w-4 h-4" />
              <span>{language === 'bn' ? 'ইন্টারেক্টিভ চক্ষুদান অনুশীलन' : 'INTERACTIVE CHOKKHU DAAN RITUAL'}</span>
            </div>

            <p className="text-xs text-[#d8c5b2] max-w-sm">
              {language === 'bn'
                ? 'দেবীর ললাটে ক্লিক করে তৃতীয় নয়ন (ত্রিনয়ন) অঙ্কন করুন এবং দেবীর আশীর্বাদ জাগিয়ে তুলুন।'
                : 'Click or touch the forehead region to paint the divine Third Eye (Trinayan) and illuminate Her presence.'}
            </p>

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/70 shadow-2xl p-1 bg-[#1a0509]">
              <canvas
                ref={canvasRef}
                width={320}
                height={340}
                onClick={handleCanvasClick}
                className="cursor-crosshair rounded-xl block max-w-full"
              />

              {hasPaintedEye && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#2e0811]/90 border border-[#e6b422] text-[10px] text-[#ffdf85] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#e6b422]" />
                  <span>{language === 'bn' ? 'প্রাণপ্রতিষ্ঠা সম্পন্ন' : 'Trinayan Awakened'}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleResetEye}
                className="px-3.5 py-1.5 text-xs font-medium text-[#c8b7a6] bg-[#1b0509] border border-[#5a1420] rounded-lg hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'পুনরায় চেষ্টা' : 'Reset Canvas'}</span>
              </button>

              <button
                onClick={() => {
                  setHasPaintedEye(true);
                  pujaAudio.playShankha(2.2, 0.7);
                  pujaAudio.playDiyaChime();
                }}
                className="px-4 py-1.5 text-xs font-semibold text-[#1a0407] bg-[#e6b422] hover:bg-[#ffd966] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'ত্রিনয়ন প্রজ্জ্বলন' : 'Ignite Trinayan'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
