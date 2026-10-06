import React, { useState } from 'react';
import { 
  ShieldAlert, Layers, ArrowUpRight, Sliders
} from 'lucide-react';
import { techProjects } from '../data/techProjects';
import { pujaAudio } from '../utils/audioSynthesizer';

export const TechPavilion = ({ language }) => {
  const [selectedProjectId, setSelectedProjectId] = useState('cst-01');
  const [crowdRate, setCrowdRate] = useState(340);
  const [isBeaconActive, setIsBeaconActive] = useState(false);
  const [meshLogs, setMeshLogs] = useState([]);
  const [ecoStage, setEcoStage] = useState('pre');

  const activeProject = techProjects.find((p) => p.id === selectedProjectId) || techProjects[0];

  const handleTriggerBeacon = () => {
    setIsBeaconActive(true);
    pujaAudio.playKanshi(0.5);
    setMeshLogs(['[NODE 04] Distress packet generated...', '[NODE 07] BLE hop 1 verified (RSSI: -62dBm)']);
    
    setTimeout(() => {
      setMeshLogs((prev) => [...prev, '[NODE 12] Relay to Medical Station Alpha']);
      pujaAudio.playDiyaChime();
    }, 500);

    setTimeout(() => {
      setMeshLogs((prev) => [...prev, '[RESOLVED] Emergency response dispatched in 1.28s']);
      setIsBeaconActive(false);
    }, 1200);
  };

  return (
    <section id="cst-tech" className="py-24 bg-[#180408] relative border-t border-[#4a101c]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs uppercase tracking-widest text-[#e6b422] font-semibold">
            {language === 'bn' ? 'সিএসটি ডিপার্টমেন্ট গবেষণা প্যাভিলিয়ন' : 'DEPARTMENT OF CST INNOVATION PAVILION'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#fff7ee]">
            {language === 'bn' ? 'শক্তি যখন প্রযুক্তিতে: বাস্তব উদ্ভাবন' : 'Shakti In Technology: Real-World Solutions'}
          </h2>
          <p className="text-[#c8b7a6] text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'ঐতিহ্য ও প্রকৌশলের মেলবন্ধন। ভিড় নিয়ন্ত্রণ, নারী সুরক্ষা, ঐতিহ্যবাহী ভাস্কর্য সংরক্ষণ এবং পরিবেশ রক্ষায় কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (CST) বিভাগের নিবেদিত গবেষণা।'
              : 'Tradition inspires; engineering builds. High-concurrency IoT, decentralized mesh safety, and robotic heritage preservation engineered for Kolkata’s mega-festival.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {techProjects.map((project) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProjectId(project.id);
                  pujaAudio.playDhakTa(0.4);
                }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#320811] border-[#e6b422] text-[#fff] shadow-[0_0_20px_rgba(230,180,34,0.25)]'
                    : 'bg-[#1e050a]/80 border-[#4a101c]/60 text-[#bba998] hover:border-[#8f1e31]'
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono text-[#d09e3a] uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-base font-semibold text-[#f5deb3] mb-2 leading-snug">
                    {language === 'bn' ? project.titleBn : project.titleEn}
                  </h3>
                  <p className="text-xs text-[#a08976] line-clamp-2">
                    {language === 'bn' ? project.taglineBn : project.taglineEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#4a101c]/40 flex items-center justify-between text-xs text-[#e6b422]">
                  <span>{isSelected ? (language === 'bn' ? 'সক্রিয় প্রদর্শনী' : 'Active Showcase') : (language === 'bn' ? 'বিস্তারিত দেখুন' : 'Inspect Specs')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-[#1f050b] border border-[#5a1420] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs text-[#d09e3a] font-mono uppercase tracking-widest">
                <span>PROJECT ID: {activeProject.id.toUpperCase()}</span>
                <span>·</span>
                <span>CATEGORY: {activeProject.category}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#fff7ee]">
                  {language === 'bn' ? activeProject.titleBn : activeProject.titleEn}
                </h3>
                <p className="text-sm text-[#ffd966] font-medium mt-1">
                  {language === 'bn' ? activeProject.taglineBn : activeProject.taglineEn}
                </p>
              </div>

              <p className="text-sm text-[#d8c5b2] leading-relaxed">
                {language === 'bn' ? activeProject.descriptionBn : activeProject.descriptionEn}
              </p>

              <div className="p-5 rounded-2xl bg-[#140306] border border-[#4a101c] space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#e6b422] font-semibold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#e6b422]" />
                  <span>{language === 'bn' ? 'প্রযুক্তিগত বৈশিষ্ট্যসমূহ' : 'System Architectural Specifications'}</span>
                </div>
                <ul className="space-y-2 text-xs text-[#f5e6d6]">
                  {activeProject.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#e6b422] mt-0.5">▪</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#2b0811] border-l-4 border-[#e6b422] text-xs text-[#f0caa3]">
                <strong>Field Deployment Result:</strong> {activeProject.impactMetric}
              </div>

            </div>

            <div className="lg:col-span-5 bg-[#140306] border border-[#5a1420] rounded-2xl p-6 space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#3b0810] pb-3">
                <div className="text-xs uppercase tracking-wider text-[#e6b422] font-semibold flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#e6b422]" />
                  <span>{language === 'bn' ? 'লাইভ অ্যালগরিদম সিমুলেটর' : 'Interactive Sandbox'}</span>
                </div>
                <span className="text-[10px] text-[#a08976] font-mono">EMULATOR v2.4</span>
              </div>

              {activeProject.interactiveDemoType === 'crowd' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#d8c5b2]">Simulated Gate Flow:</span>
                    <span className="font-mono font-bold text-[#e6b422]">{crowdRate} persons/min</span>
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="800"
                    value={crowdRate}
                    onChange={(e) => setCrowdRate(Number(e.target.value))}
                    className="w-full accent-[#e6b422] cursor-pointer"
                  />

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-[#24060d] border border-[#4a101c]">
                      <div className="text-[#a08976]">Pressure Index:</div>
                      <div className={`font-mono text-base font-bold ${crowdRate > 550 ? 'text-[#ff5555]' : 'text-[#77dd77]'}`}>
                        {((crowdRate / 800) * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#24060d] border border-[#4a101c]">
                      <div className="text-[#a08976]">Automated Reroute:</div>
                      <div className="font-mono text-xs font-semibold text-[#f5deb3]">
                        {crowdRate > 550 ? 'Gate 2 Diverted' : 'Normal Flow'}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#a08976] leading-relaxed">
                    LiDAR sensor predicts local queue stagnation. Dynamic LED arrows illuminate green at Gate 2 when bottleneck threshold exceeds 70%.
                  </div>
                </div>
              )}

              {activeProject.interactiveDemoType === 'safety' && (
                <div className="space-y-4">
                  <p className="text-xs text-[#d8c5b2]">
                    Simulate an offline SOS beacon when all cellular networks in the pandal perimeter are congested:
                  </p>

                  <button
                    onClick={handleTriggerBeacon}
                    disabled={isBeaconActive}
                    className="w-full py-2.5 rounded-lg bg-[#c5283d] hover:bg-[#de3248] text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>{isBeaconActive ? 'Beacon Transmitting...' : 'Transmit Distress Beacon'}</span>
                  </button>

                  <div className="p-3 rounded-lg bg-[#0e0204] border border-[#3b0810] font-mono text-[11px] text-[#a8e6cf] h-28 overflow-y-auto space-y-1">
                    {meshLogs.length === 0 ? (
                      <span className="text-[#6d5b5e]">Mesh network listening on 2.4GHz BLE channels...</span>
                    ) : (
                      meshLogs.map((log, i) => <div key={i}>{log}</div>)
                    )}
                  </div>
                </div>
              )}

              {activeProject.interactiveDemoType === 'robotics' && (
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border border-[#4a101c] bg-[#0c0204] p-3 text-center">
                    <div className="text-xs text-[#e6b422] font-semibold mb-2">
                      Volumetric Point Cloud Reconstruction
                    </div>
                    <div className="font-mono text-2xl text-[#f5deb3] tracking-widest my-3">
                      1,840,290 PTS
                    </div>
                    <div className="text-[11px] text-[#a08976]">
                      0.18mm spatial tolerance · Automated bamboo notch alignment verified
                    </div>
                  </div>
                  <div className="text-[11px] text-[#d8c5b2]">
                    The digital archive preserves master artisan techniques for the State Cultural Directorate and ensures intellectual property protection.
                  </div>
                </div>
              )}

              {activeProject.interactiveDemoType === 'green' && (
                <div className="space-y-4">
                  <div className="flex gap-1.5 p-1 bg-[#1f050b] rounded-lg border border-[#3b0810]">
                    {['pre', 'immersion', 'recovery'].map((stage) => (
                      <button
                        key={stage}
                        onClick={() => setEcoStage(stage)}
                        className={`flex-1 py-1.5 text-[11px] font-semibold rounded capitalize transition-colors ${
                          ecoStage === stage ? 'bg-[#e6b422] text-[#1a0407]' : 'text-[#a08976]'
                        }`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-[#24060d] border border-[#4a101c]">
                      <div className="text-[#a08976]">Dissolved Oxygen:</div>
                      <div className="font-mono text-base font-bold text-[#77dd77]">
                        {ecoStage === 'pre' ? '6.8 mg/L' : ecoStage === 'immersion' ? '5.4 mg/L' : '6.4 mg/L'}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#24060d] border border-[#4a101c]">
                      <div className="text-[#a08976]">Bio-Clay Degradation:</div>
                      <div className="font-mono text-base font-bold text-[#ffd966]">
                        {ecoStage === 'pre' ? '0%' : ecoStage === 'immersion' ? '65%' : '98% dissolved'}
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#a08976]">
                    Water quality data transmitted live to civic environment portals.
                  </div>
                </div>
              )}

              <div className="text-[10px] text-[#6d5b5e] border-t border-[#3b0810] pt-2 text-center">
                Curated by Ankana Patra, Department CST · Autonomous Systems & IoT
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
