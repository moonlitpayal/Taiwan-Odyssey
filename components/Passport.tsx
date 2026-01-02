import React from 'react';
import { X, User, Calendar, Award, Compass, Mountain, Waves, Landmark as Temple, Anchor } from 'lucide-react';

import { Region } from '../types';

interface PassportProps {
  isOpen: boolean;
  onClose: () => void;
  collectedStamps: string[];
  regions: Region[];
}

const RegionIcon = ({ regionId, color, size = 16 }: { regionId: string, color: string, size?: number }) => {
  switch (regionId) {
    case 'north': return <Compass size={size} style={{ color }} />;
    case 'central': return <Mountain size={size} style={{ color }} />;
    case 'east': return <Waves size={size} style={{ color }} />;
    case 'south': return <Temple size={size} style={{ color }} />;
    case 'islands': return <Anchor size={size} style={{ color }} />;
    default: return <Compass size={size} style={{ color }} />;
  }
};

const Passport: React.FC<PassportProps> = ({ isOpen, onClose, collectedStamps, regions }) => {
  if (!isOpen) return null;

  const allLandmarks = regions.flatMap(r => r.landmarks.map(l => ({ ...l, regionId: r.id, accentColor: r.accentColor })));
  const stamps = allLandmarks.filter(l => collectedStamps.includes(l.id));

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#05070a]/95 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Passport Container */}
      <div className="relative w-full max-w-4xl aspect-[1.4/1] perspective-[2000px] animate-in zoom-in-95 duration-500">

        {/* Deep Blue Aura Underlay (Replaced Cyan) */}
        <div className="absolute inset-0 -m-2 blur-3xl opacity-40 animate-pulse duration-[4000ms]">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-900 rounded-l-2xl" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-red-900 rounded-r-2xl" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center space-x-2 text-white/40 hover:text-white transition-all font-mono text-[10px] uppercase tracking-widest"
        >
          <span>Close Document</span>
          <X size={16} />
        </button>

        {/* The Passport Book */}
        <div className="w-full h-full flex bg-[#0d1117] rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5),_0_0_40px_rgba(30,58,138,0.3),_0_0_40px_rgba(254,0,0,0.15)] border border-white/5 relative z-10">

          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noisePass">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noisePass)" />
            </svg>
          </div>

          {/* Left Page: Identification */}
          <div className="w-1/2 h-full border-r border-white/10 p-10 flex flex-col relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
            {/* Edge Dark Blue Glow */}
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-blue-700/40 to-transparent" />

            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">Document: TW-886-PASS</span>
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                <Award size={14} className="text-blue-500" />
              </div>
            </div>

            <div className="flex space-x-6 mb-10">
              <div className="w-32 h-40 bg-[#161b22] rounded-lg border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
                <User size={48} className="text-white/10 group-hover:text-blue-800/30 transition-colors" />
                <div className="absolute bottom-2 font-mono text-[8px] text-white/20 uppercase">Digital Persona</div>
                <div className="absolute inset-0 border-2 border-white/5 m-1 rounded-sm border-dashed" />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div>
                  <div className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-1">Surname / Name</div>
                  <div className="text-xl font-serif italic text-white">The Explorer</div>
                </div>
                <div>
                  <div className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-1">Nationality</div>
                  <div className="text-sm font-mono text-white/80">CITIZEN OF THE VOID</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-1">Issue Date</div>
                    <div className="text-[10px] font-mono text-white/80">FEB 2024</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-1">Exp Date</div>
                    <div className="text-[10px] font-mono text-white/80">INFINITY</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Archived Memories</span>
                <span className="text-[10px] font-mono text-blue-500 font-bold">{stamps.length} / 12</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-700 shadow-[0_0_15px_rgba(30,58,138,0.6)] transition-all duration-[1500ms]"
                  style={{ width: `${(stamps.length / 12) * 100}%` }}
                />
              </div>
            </div>

            {/* Holographic Seal */}
            <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center opacity-30">
              <div className="absolute inset-0 animate-spin-slow">
                <svg className="w-full h-full p-2 overflow-visible" viewBox="0 0 100 100">
                  <path id="curve" fill="transparent" d="M 10,50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  <text className="fill-white text-[8px] font-mono uppercase tracking-widest">
                    <textPath xlinkHref="#curve">TW ODYSSEY • TRAVELER • </textPath>
                  </text>
                </svg>
              </div>
              <GlobeIcon size={16} className="text-white" />
            </div>
          </div>

          {/* Right Page: Visa Stamps */}
          <div className="w-1/2 h-full p-10 flex flex-col bg-[#0d1117] relative overflow-hidden">
            {/* Edge Red Glow */}
            <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-red-900/40 to-transparent" />

            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">Visas / Chapter Seals</h3>
              <div className="flex space-y-0.5 space-x-2">
                {['north', 'central', 'east', 'south', 'islands'].map(id => (
                  <RegionIcon key={id} regionId={id} color={regions.find(r => r.id === id)?.accentColor || '#fff'} size={12} />
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-4 overflow-y-auto pr-2 custom-scrollbar">
              {/* Collected Stamps */}
              {stamps.map((stamp) => (
                <div
                  key={stamp.id}
                  className="aspect-square rounded-xl glass border border-white/10 p-3 flex flex-col items-center justify-center text-center group relative animate-in zoom-in duration-500"
                >
                  <div className="mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <RegionIcon regionId={stamp.regionId} color={stamp.accentColor} size={24} />
                  </div>
                  <span className="text-[7px] font-mono uppercase tracking-widest leading-tight text-white/60">
                    {stamp.name}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full opacity-50" style={{ backgroundColor: stamp.accentColor }} />
                  {/* Digital Glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ backgroundColor: stamp.accentColor }} />
                </div>
              ))}

              {/* Empty Slots */}
              {Array.from({ length: 12 - stamps.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="aspect-square rounded-xl border border-white/[0.03] bg-white/[0.01] flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full border border-white/[0.05] flex items-center justify-center">
                    <div className="w-1 h-1 bg-white/[0.05] rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-white/20">
                End of current records — Proceed to explore further chapters
              </p>
            </div>
          </div>
        </div>

        {/* 3D Spine Effect Overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-r from-black/40 via-white/5 to-black/40 pointer-events-none z-20" />
      </div>
    </div>
  );
};

// Internal Globe Icon for the seal
const GlobeIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default Passport;