
import React from 'react';
import { Landmark } from '../types';
import { ChevronRight } from 'lucide-react';

interface BentoCardProps {
  landmark: Landmark;
  color: string;
  onClick: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ landmark, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative h-[300px] w-full overflow-hidden rounded-2xl glass transition-all duration-500 hover:scale-[1.02] hover:border-white/20 text-left focus:outline-none"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={landmark.image}
          alt={landmark.name}
          className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {landmark.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] uppercase tracking-widest text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-white">
          {landmark.name}
        </h3>
        <p className="line-clamp-2 text-sm text-white/60 leading-relaxed font-light">
          {landmark.description}
        </p>
        
        <div className="mt-4 flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 transition-all duration-300 group-hover:text-white">
          <span>Explore Chapter</span>
          <ChevronRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: color }}
      />
    </button>
  );
};

export default BentoCard;
