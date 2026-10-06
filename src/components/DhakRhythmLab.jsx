import React, { useState, useRef, useEffect } from 'react';
import { Play, Square, Sparkles, Flame, Volume2, Music2 } from 'lucide-react';
import { pujaAudio } from '../utils/audioSynthesizer';

export const DhakRhythmLab = ({ language }) => {
  const [isPlayingLoop, setIsPlayingLoop] = useState(false);
  const [activePattern, setActivePattern] = useState('dhunuchi');
  const [lastHitNote, setLastHitNote] = useState('');
  
  const smokeCanvasRef = useRef(null);

  useEffect(() => {
    return () => {
      pujaAudio.stopLoop();
    };
  }, []);

  const handleToggleLoop = () => {
    if (isPlayingLoop) {
      pujaAudio.stopLoop();
      setIsPlayingLoop(false);
    } else {
      pujaAudio.startDhakLoop(activePattern);
      setIsPlayingLoop(true);
    }
  };

  const handleSelectPattern = (pattern) => {
    setActivePattern(pattern);
    if (isPlayingLoop) {
      pujaAudio.startDhakLoop(pattern);
    }
  };

  const playSingleBol = (bol) => {
    setLastHitNote(bol.toUpperCase());
    switch (bol) {
      case 'dha':
        pujaAudio.playDhakDha(0.9);
        break;
      case 'kring':
        pujaAudio.playDhakKring(0.8);
        break;
      case 'ta':
        pujaAudio.playDhakTa(0.75);
        break;
      case 'kanshi':
        pujaAudio.playKanshi(0.6);
        break;
      case 'shankha':
        pujaAudio.playShankha(2.2, 0.65);
        break;
    }
    setTimeout(() => setLastHitNote(''), 300);
  };

  // Interactive Dhunuchi Smoke Canvas
  useEffect(() => {
    const canvas = smokeCanvasRef.current;
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

    const particles = [];

    const spawnSmoke = (x, y, isEmber = false) => {
      particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 2 + 1.2),
        size: isEmber ? Math.random() * 2.5 + 1 : Math.random() * 14 + 10,
        opacity: isEmber ? 0.9 : 0.45,
        maxLife: isEmber ? 60 : 120,
        life: 0,
        color: isEmber ? '#f7b03b' : 'rgba(235, 220, 205,'
      });
    };

    let autoCounter = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      autoCounter++;
      if (autoCounter % 3 === 0) {
        spawnSmoke(width / 2, height - 30);
        if (Math.random() > 0.6) {
          spawnSmoke(width / 2, height - 30, true);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.1;
        p.size += 0.25;

        const progress = p.life / p.maxLife;
        const currentOpacity = p.opacity * (1 - progress);

        if (p.color.startsWith('rgba')) {
          ctx.fillStyle = `${p.color} ${Math.max(0, currentOpacity)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#e6b422';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (p.life >= p.maxLife || p.y < -30) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      spawnSmoke(x, y);
      if (Math.random() > 0.5) spawnSmoke(x, y, true);
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('touchmove', handlePointerMove);

    return () => {
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('touchmove', handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="dhak" className="py-24 bg-[#140306] relative border-t border-[#4a101c]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'উৎসবের স্পন্দন · শব্দ ও ধুনো' : 'FESTIVE ACOUSTICS & AARTI RHYTHM'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#fff7ee]">
            {language === 'bn' ? 'ঢাকের বোল ও ধুনুচি আরতি ল্যাব' : 'Dhak Rhythm & Dhunuchi Aarti Lab'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'কাঠি ও চামড়ার সংযোগে বেজে ওঠে বাঙালি পূজার আত্মিক ধ্বনি। ইন্টারেক্টিভ ড্রাম প্যাডে নিজস্ব বোল বাজান এবং মাউস নাড়িয়ে ভার্চুয়াল ধুনুচির ধোঁয়া ছড়িয়ে দিন।'
              : 'Pure Web Audio synthesis reproducing the visceral beats of Bengal’s master Dhakis. Play authentic strokes and interact with simulated Dhunuchi frankincense smoke.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-[#1e050a] border border-[#5a1420] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-[#4a101c] pb-4">
              <div className="flex items-center gap-2">
                <Music2 className="w-5 h-5 text-[#e6b422]" />
                <span className="text-sm font-semibold text-[#f5deb3]">
                  {language === 'bn' ? 'ঢাকের পারকাসন প্যাড' : 'Synthesized Dhak Percussion Pads'}
                </span>
              </div>
              {lastHitNote && (
                <span className="px-3 py-1 rounded bg-[#e6b422] text-[#1a0407] font-mono font-bold text-xs animate-bounce">
                  BOL: {lastHitNote}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                onClick={() => playSingleBol('dha')}
                className="p-5 rounded-2xl bg-[#320810] border-2 border-[#8a2436] hover:border-[#e6b422] hover:bg-[#4a0d18] active:scale-95 text-center transition-all cursor-pointer group shadow-lg"
              >
                <div className="text-xl font-display font-bold text-[#ffd966] group-hover:scale-110 transition-transform">
                  ধা (Dha)
                </div>
                <div className="text-[11px] text-[#c8b7a6] mt-1">Deep Bass Skin</div>
              </button>

              <button
                onClick={() => playSingleBol('kring')}
                className="p-5 rounded-2xl bg-[#320810] border-2 border-[#8a2436] hover:border-[#e6b422] hover:bg-[#4a0d18] active:scale-95 text-center transition-all cursor-pointer group shadow-lg"
              >
                <div className="text-xl font-display font-bold text-[#ffd966] group-hover:scale-110 transition-transform">
                  ক্রিং (Kring)
                </div>
                <div className="text-[11px] text-[#c8b7a6] mt-1">Wood Rim Snap</div>
              </button>

              <button
                onClick={() => playSingleBol('ta')}
                className="p-5 rounded-2xl bg-[#320810] border-2 border-[#8a2436] hover:border-[#e6b422] hover:bg-[#4a0d18] active:scale-95 text-center transition-all cursor-pointer group shadow-lg"
              >
                <div className="text-xl font-display font-bold text-[#ffd966] group-hover:scale-110 transition-transform">
                  তা (Ta)
                </div>
                <div className="text-[11px] text-[#c8b7a6] mt-1">Center Slap</div>
              </button>

              <button
                onClick={() => playSingleBol('kanshi')}
                className="p-5 rounded-2xl bg-[#25060c] border border-[#6b1b28] hover:border-[#e6b422] active:scale-95 text-center transition-all cursor-pointer group"
              >
                <div className="text-lg font-display font-bold text-[#f5deb3]">
                  কাঁসি (Kanshi)
                </div>
                <div className="text-[11px] text-[#a08976] mt-1">Bell Metal Gong</div>
              </button>

              <button
                onClick={() => playSingleBol('shankha')}
                className="p-5 rounded-2xl bg-[#25060c] border border-[#6b1b28] hover:border-[#e6b422] active:scale-95 text-center transition-all cursor-pointer group col-span-2 sm:col-span-2"
              >
                <div className="text-lg font-display font-bold text-[#ffdf85] flex items-center justify-center gap-2">
                  <span>শঙ্খনাদ (Conch)</span>
                  <Sparkles className="w-4 h-4 text-[#e6b422]" />
                </div>
                <div className="text-[11px] text-[#a08976] mt-1">Sacred Harmonic Drone</div>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#140306]/90 border border-[#4a101c] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-[#f5deb3]">
                    {language === 'bn' ? 'স্বয়ংক্রিয় উৎসবের ছন্দ' : 'Continuous Festival Grooves'}
                  </div>
                  <div className="text-[11px] text-[#a08976]">
                    Authentic tempo and dynamic percussion synthesis
                  </div>
                </div>

                <button
                  onClick={handleToggleLoop}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                    isPlayingLoop
                      ? 'bg-[#c5283d] text-white shadow-[0_0_15px_rgba(197,40,61,0.5)]'
                      : 'bg-[#e6b422] text-[#1a0407] hover:bg-[#ffd966]'
                  }`}
                >
                  {isPlayingLoop ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPlayingLoop ? (language === 'bn' ? 'ঢাক বন্ধ করুন' : 'Stop Dhak') : (language === 'bn' ? 'ঢাক চালান' : 'Start Dhak')}</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => handleSelectPattern('dhunuchi')}
                  className={`px-3 py-1.5 text-xs rounded-md border transition-colors cursor-pointer ${
                    activePattern === 'dhunuchi'
                      ? 'bg-[#3b0811] border-[#e6b422] text-[#fff]'
                      : 'bg-[#1e050a] border-[#4a101c] text-[#a89585] hover:text-[#fff]'
                  }`}
                >
                  6/8 Dhunuchi Dance
                </button>
                <button
                  onClick={() => handleSelectPattern('dha-kring')}
                  className={`px-3 py-1.5 text-xs rounded-md border transition-colors cursor-pointer ${
                    activePattern === 'dha-kring'
                      ? 'bg-[#3b0811] border-[#e6b422] text-[#fff]'
                      : 'bg-[#1e050a] border-[#4a101c] text-[#a89585] hover:text-[#fff]'
                  }`}
                >
                  Traditional Dha-Kring
                </button>
                <button
                  onClick={() => handleSelectPattern('fast')}
                  className={`px-3 py-1.5 text-xs rounded-md border transition-colors cursor-pointer ${
                    activePattern === 'fast'
                      ? 'bg-[#3b0811] border-[#e6b422] text-[#fff]'
                      : 'bg-[#1e050a] border-[#4a101c] text-[#a89585] hover:text-[#fff]'
                  }`}
                >
                  Sandhi Aarti Climax
                </button>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 bg-[#1e050a] border border-[#5a1420] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-[#4a101c] pb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#f7b03b]" />
                <span className="text-sm font-semibold text-[#f5deb3]">
                  {language === 'bn' ? 'ধুনুচি আরতি সিমুলেটর' : 'Interactive Dhunuchi Aarti'}
                </span>
              </div>
              <span className="text-[10px] text-[#e6b422] uppercase tracking-wider font-mono">
                Canvas Physics
              </span>
            </div>

            <p className="text-xs text-[#c8b7a6] leading-relaxed">
              {language === 'bn'
                ? 'মাউস বা স্পর্শ দিয়ে ক্যানভাসে নাড়াচাড়া করুন। জ্বলন্ত নারকেলের ছোবড়া ও ধুনোর সুগন্ধি ধোঁয়া ভার্চুয়ালি বাতাসে ছড়িয়ে পড়বে।'
                : 'Move your cursor or finger over the canvas below to wave the sacred earthen Dhunuchi burner. Organic frankincense embers and aromatic smoke follow your gesture.'}
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/50 h-72 bg-gradient-to-t from-[#20050a] via-[#150306] to-[#0c0204]">
              <canvas
                ref={smokeCanvasRef}
                className="w-full h-full cursor-grab active:cursor-grabbing block"
              />
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none text-center">
                <div className="text-3xl filter drop-shadow-[0_0_12px_rgba(247,176,59,0.8)]">
                  🏺
                </div>
                <div className="text-[10px] text-[#f7b03b] font-semibold tracking-wider uppercase">
                  {language === 'bn' ? 'মাটির ধুনুচি' : 'Earthen Dhunuchi'}
                </div>
              </div>
            </div>

            <div className="text-xs text-[#a08976] leading-relaxed border-t border-[#4a101c]/50 pt-3">
              {language === 'bn'
                ? 'সন্ধিপূজার শেষে ভক্তরা এই মাটির পাত্রে ধুনো ও কর্পূর জ্বালিয়ে ঢাকের উন্মাদ বোলের সাথে নৃত্য করেন, যা অশুভ শক্তিকে দূর করার বিশ্বাস বহন করে।'
                : 'During the evening Sandhi Aarti, devotees dance balancing smoking earthen pots filled with coconut husks and frankincense to cleanse evil vibrations.'}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
