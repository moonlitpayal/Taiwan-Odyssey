
import React from 'react';
import { REGIONS } from '../constants';
import { RegionID } from '../types';

interface VerticalNavProps {
  currentRegionId: RegionID;
  onRegionSelect: (id: RegionID) => void;
}

import { Anchor, Compass, Mountain, Waves, Landmark as Temple } from 'lucide-react';

const VerticalNav: React.FC<VerticalNavProps> = ({ currentRegionId, onRegionSelect }) => {
  const getRegionIcon = (id: string, isActive: boolean) => {
    const props = {
      size: 20,
      className: `transition-colors duration-500 ${isActive
          ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
          : 'text-white/40 group-hover:text-white/80'
        }`,
      style: isActive ? { color: REGIONS.find(r => r.id === id)?.accentColor } : undefined
    };

    switch (id) {
      case 'north': return <Compass {...props} />;
      case 'central': return <Mountain {...props} />;
      case 'east': return <Waves {...props} />;
      case 'south': return <Temple {...props} />;
      case 'islands': return <Anchor {...props} />;
      default: return <Compass {...props} />;
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end space-y-10">
      {REGIONS.map((region, index) => {
        const isActive = currentRegionId === region.id;

        return (
          <button
            key={region.id}
            onClick={() => onRegionSelect(region.id as RegionID)}
            className="group flex items-center space-x-6 focus:outline-none"
          >
            <span
              className={`font-mono text-xs tracking-[0.2em] uppercase transition-all duration-500 origin-right
              ${isActive ? 'opacity-100 translate-x-0 font-bold' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}
              style={{ color: isActive ? region.accentColor : '#ffffff' }}
            >
              {region.name}
            </span>
            <div className="relative flex items-center justify-center w-6">
              <div
                className={`w-px h-14 bg-white/10 absolute -top-12 left-1/2 -translate-x-1/2 ${index === 0 ? 'hidden' : ''}`}
              />

              <div
                className={`relative transition-all duration-500 ${isActive ? 'scale-125' : 'group-hover:scale-110'}`}
              >
                {getRegionIcon(region.id, isActive)}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default VerticalNav;
