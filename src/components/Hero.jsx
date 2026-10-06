import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Flame, Music, Sparkles } from 'lucide-react';
import { pujaAudio } from '../utils/audioSynthesizer';

export const Hero = ({
  language,
  onExploreShakti,
  onExploreAudio,
  onLightDiya
}) => {
  const canvasRef = useRef(null);
  const [isPlayingShankha, setIsPlayingShankha] = useState(false);

  // Autumn 2026 Durga Puja calculation (Maha Shasthi 2026 falls on Oct 16, 2026)
  const targetDate = new Date('2026-10-16T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  // Golden embers & Kash flower canvas particle simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const count = 35;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        speedY: -(Math.random() * 0.6 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.7 + 0.2,
        fadeSpeed: (Math.random() * 0.008 + 0.003),
        isFlower: Math.random() > 0.65,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;
        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.isFlower) {
          ctx.fillStyle = `rgba(255, 250, 240, ${p.opacity * 0.6})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * 2.2, p.radius * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(245, 198, 65, ${p.opacity})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(238, 180, 34, 0.8)';
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleTriggerShankha = () => {
    setIsPlayingShankha(true);
    pujaAudio.playShankha(2.8, 0.7);
    setTimeout(() => {
      setIsPlayingShankha(false);
    }, 2800);
  };

  return (
    <section id="top" className="relative min-h-[95vh] pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#180407] via-[#24060c] to-[#120306]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#e6b422] font-semibold border-b border-[#e6b422]/30 pb-1">
              <span>ॐ Durga Puja 2026</span>
              <span aria-hidden="true" className="text-[#882233]">·</span>
              <span>Department of CST Showcase</span>
              <span aria-hidden="true" className="text-[#882233]">·</span>
              <span className="text-[#d8c5b2]">By Ankana Patra</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#fff7ee] leading-[1.12] tracking-tight">
              {language === 'bn' ? (
                <>
                  শুধু দর্শক নয়, <br />
                  <span className="bg-gradient-to-r from-[#f0caa3] via-[#ffdf85] to-[#f0caa3] bg-clip-text text-transparent">
                    আমরাই শক্তির স্রষ্টা।
                  </span>
                </>
              ) : (
                <>
                  Not Mere Spectators, <br />
                  <span className="bg-gradient-to-r from-[#f0caa3] via-[#ffdf85] to-[#f0caa3] bg-clip-text text-transparent">
                    We Are The Creators of Shakti.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#d8c7b8] leading-relaxed max-w-2xl font-body">
              {language === 'bn' ? (
                <>
                  মা দুর্গার <strong>দশটি অস্ত্র</strong> আজ কেবল পুরাণের প্রতীক নয়—তা রূপান্তরিত হয়েছে 
                  আধুনিক নারীর <strong>দশটি শক্তিতে</strong>: সাহস, সাইবার সার্বভৌমত্ব, প্রযুক্তি, উদ্ভাবন, শিক্ষা ও সমতায়।
                </>
              ) : (
                <>
                  From <strong>Maa Durga’s Ten Sacred Arms</strong> to the <strong>Ten Transformative Powers</strong> of 
                  today’s woman in Science, Technology, Engineering, Leadership, and Humanitarian Innovation.
                </>
              )}
            </p>

            {/* Countdown to Maha Shasthi Strip */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-4 py-2.5 px-4 rounded-xl bg-[#2a070f]/80 border border-[#721b2a]/50 text-xs text-[#eed7ba]">
                <div className="flex items-center gap-1.5 text-[#e6b422] font-semibold">
                  <Flame className="w-4 h-4 text-[#e6b422] animate-pulse" />
                  <span>{language === 'bn' ? 'মহাষষ্ঠী ২০২৬ শুভক্ষণ:' : 'Maha Shasthi 2026 Countdown:'}</span>
                </div>
                <div className="flex items-center gap-3 font-mono tabular-nums text-sm font-semibold text-[#fff]">
                  <span>{timeLeft.days} <small className="text-[#d09e3a] font-sans text-[10px]">D</small></span>
                  <span>:</span>
                  <span>{timeLeft.hours} <small className="text-[#d09e3a] font-sans text-[10px]">H</small></span>
                  <span>:</span>
                  <span>{timeLeft.minutes} <small className="text-[#d09e3a] font-sans text-[10px]">M</small></span>
                </div>
              </div>
            </div>

            {/* Functional Call To Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreShakti}
                className="px-6 py-3 text-sm font-semibold text-[#180407] bg-gradient-to-r from-[#e6b422] via-[#fad66a] to-[#d4af37] rounded-lg hover:shadow-[0_0_25px_rgba(230,180,34,0.35)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{language === 'bn' ? '১০ শক্তি অনুসন্ধান করুন' : 'Explore 10 Shaktis'}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreAudio}
                className="px-5 py-3 text-sm font-medium text-[#f0caa3] bg-[#2d0710] border border-[#7a1c2a] rounded-lg hover:bg-[#3f0a17] hover:border-[#e6b422]/60 transition-all cursor-pointer flex items-center gap-2"
              >
                <Music className="w-4 h-4 text-[#e6b422]" />
                <span>{language === 'bn' ? 'ঢাকের বোল শুনুন' : 'Dhak Rhythm Lab'}</span>
              </button>

              <button
                onClick={handleTriggerShankha}
                className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all cursor-pointer flex items-center gap-2 ${
                  isPlayingShankha
                    ? 'bg-[#e6b422] text-[#1a0407] border-[#e6b422] shadow-[0_0_20px_rgba(230,180,34,0.5)]'
                    : 'bg-[#1e050a] text-[#eed7ba] border-[#5a1420] hover:border-[#a92237]'
                }`}
                title="Sound the Sacred Conch Shell"
              >
                <Sparkles className="w-4 h-4 text-[#e6b422]" />
                <span>{isPlayingShankha ? (language === 'bn' ? 'শঙ্খনাদ...' : 'Sounding Conch...') : (language === 'bn' ? 'শঙ্খধ্বনি' : 'Conch Blast')}</span>
              </button>
            </div>

            <div className="text-xs text-[#a89585] pt-1">
              <span>{language === 'bn' ? 'কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (CST) বিভাগের সৃষ্টিশীল নিবেদন' : 'Creative Technical Project · Department of Computer Science & Technology (CST)'}</span>
            </div>
          </div>

          {/* Focal Visual Anchor Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#941827]/30 via-[#e6b422]/20 to-transparent blur-2xl animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[#e6b422]/20 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#e6b422]/30 pointer-events-none" />

              <div className="relative w-[88%] h-[88%] rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_20px_60px_rgba(0,0,0,0.7)] group">
                <img
                  src="/public/images/durga_digital_shakti_hero_1791293947575.jpg"
                  alt="Maa Durga in full divine digital splendour"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#140306] via-[#140306]/30 to-transparent opacity-90" />

                <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                  <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold mb-1">
                    या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता
                  </div>
                  <div className="text-[13px] text-[#f7eee4] font-serif italic">
                    {language === 'bn'
                      ? '“হে দেবী, তুমিই সর্বজীবে শক্তিরূপে অবস্থান করো।”'
                      : '“To that Divine Energy residing within all beings, our salutations.”'}
                  </div>

                  <div className="mt-3 flex items-center justify-center">
                    <button
                      onClick={onLightDiya}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3d0912]/90 border border-[#e6b422]/50 text-xs font-semibold text-[#f8d878] hover:bg-[#5a0f1c] hover:border-[#e6b422] transition-colors cursor-pointer"
                    >
                      <Flame className="w-3.5 h-3.5 text-[#e6b422]" />
                      <span>{language === 'bn' ? 'ডিজিটাল প্রদীপ প্রজ্বলন করুন' : 'Light a Digital Diya'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-[#29060c] border-2 border-[#e6b422] flex items-center justify-center text-2xl shadow-lg shadow-[#e6b422]/20">
                🔱
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
