import React, { useState, useEffect, useCallback } from 'react';
import { REGIONS } from './constants';
import { RegionID, Landmark, Region } from './types';
import { Globe, BookOpen, Compass, ChevronDown } from 'lucide-react';
import VerticalNav from './components/VerticalNav';
import BentoCard from './components/BentoCard';
import DiscoveryModal from './components/DiscoveryModal';
import Passport from './components/Passport';
import WelcomeBanner from './components/WelcomeBanner';

/* -----------------------------------------------------------------------
   ⚠️ DATABASE MODE: SIMULATION (SANDBOX SAFE)
   
   The real Supabase connection is commented out below because the 
   Preview Sandbox blocks external connections. 
   
   TO GO LIVE: Uncomment the "REAL SUPABASE" section and remove the "MOCK" functions.
   -----------------------------------------------------------------------
*/

import { supabase } from './supabaseClient';

// Verification Log
console.log('Supabase Client Initialized:', supabase);


const NeonFlag: React.FC = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="neon-flag-glow overflow-visible">
    <rect width="32" height="20" rx="2" fill="#FE0000" className="opacity-90" />
    <rect width="16" height="10" rx="1" fill="#0000AB" />
    <circle cx="8" cy="5" r="2" fill="white" />
    <circle cx="8" cy="5" r="3.2" stroke="white" strokeWidth="0.8" strokeDasharray="1 1.2" />
    <rect x="-1" y="-1" width="34" height="22" rx="3" stroke="white" strokeWidth="0.5" className="opacity-30" />
  </svg>
);

const App: React.FC = () => {
  const [currentRegionId, setCurrentRegionId] = useState<RegionID>('north');
  const [appRegions, setAppRegions] = useState<Region[]>(REGIONS);
  const [collectedStamps, setCollectedStamps] = useState<string[]>([]);
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [headerPing, setHeaderPing] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const [showWelcome, setShowWelcome] = useState(false);

  // --- DATA LOADING STRATEGY ---
  useEffect(() => {
    async function loadData() {
      // 1. Load Stamps from LocalStorage (Simulated Persistence)
      const saved = localStorage.getItem('tw_odyssey_stamps');
      if (saved) setCollectedStamps(JSON.parse(saved));

      // 2. Load Landmarks (Real DB Fetch)
      const { data: dbLandmarks } = await supabase.from('landmarks').select('*');

      if (dbLandmarks && dbLandmarks.length > 0) {
        setAppRegions((prevRegions) =>
          prevRegions.map(region => {
            // Find all DB landmarks for this region
            const regionLandmarks = dbLandmarks.filter((l: any) => l.region === region.id);

            // If DB has data for this region, use it fully (allows adding NEW landmarks)
            if (regionLandmarks.length > 0) {
              const mappedLandmarks = regionLandmarks.map((l: any) => ({
                id: l.id,
                name: l.title, // Map Supabase 'title' -> Frontend 'name'
                description: l.description,
                // Handle Gallery or Fallback Image
                image: (l.gallery && l.gallery.length > 0) ? l.gallery[0].url : '',
                gallery: l.gallery || [],
                googleMapsUrl: l.google_maps_url,
                tags: l.specs?.tags || []
              }));
              return { ...region, landmarks: mappedLandmarks };
            }

            // Fallback to local if no DB data for this region
            return region;
          })
        );
      } else {
        console.log("System: No DB landmarks found, using static defaults.");
      }

      // 3. Welcome Banner Logic
      const sawWelcome = sessionStorage.getItem('tw_odyssey_welcome_v2');
      if (!sawWelcome) {
        setTimeout(() => setShowWelcome(true), 1200);
      }

      // 4. Start App Animation
      setTimeout(() => setIsLoaded(true), 100);
    }

    loadData();
  }, []);

  const currentRegion = appRegions.find((r) => r.id === currentRegionId) as Region;

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    sessionStorage.setItem('tw_odyssey_welcome_v2', 'true');
  };

  // --- CONTEST ENTRY HANDLER ---
  const handleContestEntry = async (formData: { name: string; email: string; phone: string }) => {
    console.log("📝 Processing Contest Entry...");

    // ---------------------------------------------------------
    // REAL DATABASE
    try {
      const { error } = await supabase
        .from('bookings')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          stamps_collected: collectedStamps.length,
          created_at: new Date().toISOString(),
        }]);
      if (error) throw error;

      console.log("✅ Data saved to Supabase:", formData);
      alert(`Success! ${formData.name}, your entry has been logged.`);
      handleCloseWelcome();

    } catch (err) {
      console.error(err);
      alert("Database Error (See Console)");
      return;
    }
    // ---------------------------------------------------------
  };

  const handleCollectStamp = (id: string) => {
    if (collectedStamps.includes(id)) return;
    const newStamps = [...collectedStamps, id];
    setCollectedStamps(newStamps);
    localStorage.setItem('tw_odyssey_stamps', JSON.stringify(newStamps));

    // Trigger header reaction
    setTimeout(() => {
      setHeaderPing(true);
      setTimeout(() => setHeaderPing(false), 2000);
    }, 1000);
  };

  const handleScroll = useCallback((e: React.WheelEvent) => {
    // Throttle scroll to prevent rapid region changes
    if (Math.abs(e.deltaY) < 40) return;
    if (isPassportOpen || !!selectedLandmark || showWelcome) return;

    const currentIndex = appRegions.findIndex((r) => r.id === currentRegionId);
    if (e.deltaY > 0 && currentIndex < appRegions.length - 1) {
      setCurrentRegionId(appRegions[currentIndex + 1].id as RegionID);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentRegionId(appRegions[currentIndex - 1].id as RegionID);
    }
  }, [currentRegionId, isPassportOpen, selectedLandmark, showWelcome, appRegions]);

  return (
    <div
      className="relative min-h-screen bg-[#05070a] overflow-y-auto"
    // onWheel={handleScroll} // SCROLL-JACKING DISABLED: Allowing native scroll to see all content
    >
      {showWelcome && (
        <WelcomeBanner
          onClose={handleCloseWelcome}
          onRegister={handleContestEntry}
        />
      )}

      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {appRegions.map((region) => (
          <div
            key={region.id}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out-expo
              ${currentRegionId === region.id ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}`}
            style={{
              transform: currentRegionId === region.id
                ? `scale(1.1) translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`
                : 'scale(1.1)'
            }}
          >
            <img
              src={region.backgroundImage}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* Vignette and Dark Overlays */}
            <div className="absolute inset-0 bg-[#05070a]/60" />
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply"
              style={{
                background: `radial-gradient(circle at center, transparent 0%, #05070a 100%)`
              }}
            />
            {/* Glow Accent */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[50vh] opacity-30 blur-[120px]`}
              style={{
                background: `linear-gradient(to top, ${region.accentColor}, transparent)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-40 p-8 flex justify-between items-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="relative h-12 flex items-center group cursor-pointer">
          {/* Default Logo State */}
          <div className="flex items-center space-x-3 transition-all duration-500 ease-out-expo group-hover:opacity-0 group-hover:-translate-x-8">
            <Globe className="h-5 w-5 text-white/80 transition-colors duration-500" />
            <h1 className="font-mono text-sm font-medium uppercase tracking-[0.4em] text-white whitespace-nowrap">
              Taiwan Odyssey
            </h1>
          </div>
          {/* Hover Logo State: Neon Flag + Meaning */}
          <div className="absolute left-0 flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out-expo pointer-events-none">
            <NeonFlag />
            <div className="ml-4 flex flex-col">
              <div className="flex items-baseline space-x-2">
                <span className="font-serif italic text-2xl text-white tracking-widest leading-none">Formosa</span>
              </div>
              <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/40 mt-1.5 flex items-center">
                <span className="w-1.5 h-px bg-white/20 mr-2" />
                The Beautiful Island Journey
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => setIsPassportOpen(true)}
            className={`group relative flex items-center space-x-4 glass pl-6 pr-2 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden
              ${headerPing ? 'ping-glow border-cyan-400/50' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase group-hover:text-white transition-colors">
              Traveler Passport
            </span>
            <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-500 ${headerPing ? 'bg-cyan-400/40' : ''}`}>
              <BookOpen className={`h-4 w-4 text-white group-hover:text-cyan-400 ${headerPing ? 'text-cyan-400 scale-125' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Main Narrative Content */}
      <main className={`relative z-10 container mx-auto px-6 pt-32 min-h-screen flex flex-col justify-between pb-12 transition-all duration-700 ${isPassportOpen || showWelcome ? 'blur-md grayscale scale-95 opacity-50' : ''}`}>
        <div className={`max-w-4xl transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-12 bg-white/20" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">
              Chapter 0{appRegions.findIndex(r => r.id === currentRegionId) + 1}
            </span>
          </div>

          <h2 className="font-serif text-[10vw] md:text-9xl leading-[0.9] text-white italic mb-6 select-none">
            {currentRegion.title}
          </h2>

          <p className="max-w-xl text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
            {currentRegion.description}
          </p>

          <button
            onClick={() => {
              const nextIdx = (appRegions.findIndex(r => r.id === currentRegionId) + 1) % appRegions.length;
              setCurrentRegionId(appRegions[nextIdx].id as RegionID);
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Reset scroll on change
            }}
            className="group flex items-center space-x-4 text-white/40 hover:text-white transition-all focus:outline-none"
          >
            <Compass className="h-5 w-5 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Next Horizon</span>
            <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
          </button>
        </div>

        {/* Bento Grid Landmarks */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {currentRegion.landmarks.map((landmark) => (
            <BentoCard
              key={landmark.id}
              landmark={landmark}
              color={currentRegion.accentColor}
              onClick={() => setSelectedLandmark(landmark)}
            />
          ))}
        </div>
      </main>

      {/* Navigation */}
      {!isPassportOpen && !showWelcome && (
        <VerticalNav
          currentRegionId={currentRegionId}
          onRegionSelect={setCurrentRegionId}
        />
      )}

      {/* Discovery Modal */}
      {selectedLandmark && (
        <DiscoveryModal
          landmark={selectedLandmark}
          region={currentRegion}
          isOpen={!!selectedLandmark}
          isCollected={collectedStamps.includes(selectedLandmark.id)}
          onClose={() => setSelectedLandmark(null)}
          onCollect={handleCollectStamp}
        />
      )}

      {/* Passport Modal */}
      <Passport
        isOpen={isPassportOpen}
        onClose={() => setIsPassportOpen(false)}
        collectedStamps={collectedStamps}
      />

      {/* Interactive Grainy Layer */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
};

export default App;