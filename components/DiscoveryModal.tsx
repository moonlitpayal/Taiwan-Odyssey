import React, { useState } from 'react';
import { Landmark, Region } from '../types';
import { X, MapPin, Sparkles, CheckCircle, Compass, Mountain, Waves, Landmark as Temple, Anchor, HelpCircle, ArrowRight, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface DiscoveryModalProps {
  landmark: Landmark;
  region: Region;
  isOpen: boolean;
  isCollected: boolean;
  onClose: () => void;
  onCollect: (id: string) => void;
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

const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  landmark,
  region,
  isOpen,
  isCollected,
  onClose,
  onCollect
}) => {
  const [isFlying, setIsFlying] = useState(false);
  const [flyPos, setFlyPos] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Quiz State
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFact, setShowFact] = useState(false);

  if (!isOpen) return null;

  const handleCollectClick = (e: React.MouseEvent) => {
    if (isCollected || isFlying) return;

    // If landmark has a quiz and we haven't passed it yet, show quiz
    if (landmark.quiz && landmark.quiz.length > 0 && !showFact) {
      setShowQuiz(true);
      return;
    }

    // Default collect behavior (if no quiz or logic ensures quiz passed)
    executeCollect(e);
  };

  const executeCollect = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setFlyPos({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });

    setIsFlying(true);
    onCollect(landmark.id);

    // Cleanup animation state
    setTimeout(() => {
      setIsFlying(false);
      setShowQuiz(false); // Reset quiz view
      setShowFact(false);
      setIsCorrect(null);
      setSelectedOption(null);
    }, 1200);
  }

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    setSelectedOption(index);

    const correct = landmark.quiz![0].correctAnswer === index;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => setShowFact(true), 800);
    } else {
      // Allow retry after a delay? Or just show incorrect. 
      // For this UX, let's let them retry or just show it's wrong.
      // Let's reset after a moment so they can try again.
      setTimeout(() => {
        setSelectedOption(null);
        setIsCorrect(null);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#05070a]/90 backdrop-blur-xl transition-opacity duration-500" onClick={onClose} />

      {/* Flying Element */}
      {isFlying && (
        <div
          className="fixed z-[100] pointer-events-none animate-fly"
          style={{
            left: flyPos.x,
            top: flyPos.y,
            '--start-x': `${flyPos.x}px`,
            '--start-y': `${flyPos.y}px`
          } as React.CSSProperties}
        >
          <div className="p-4 rounded-full glass border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.2)] bg-black">
            <RegionIcon regionId={region.id} color={region.accentColor} size={32} />
          </div>
        </div>
      )}

      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl glass shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row h-[85vh] md:h-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md border border-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Gallery Section - Hidden on mobile if Quiz is active to space save? Or just kept. */}
        <div className={`w-full md:w-1/2 h-48 md:h-[600px] relative overflow-hidden group transition-all duration-500 ${showQuiz ? 'md:w-1/3' : ''}`}>
          {landmark.gallery && landmark.gallery.length > 0 ? (
            <>
              <img
                key={isFlying ? 'static' : currentImageIndex}
                src={landmark.gallery[currentImageIndex].url}
                alt={landmark.gallery[currentImageIndex].caption || landmark.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
              />
              {/* Gallery Navigation Arrows */}
              {landmark.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? landmark.gallery!.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100 duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === landmark.gallery!.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100 duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              {/* Gallery Navigation Dots */}
              {landmark.gallery.length > 1 && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
                  {landmark.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <p className="text-white/60 text-xs font-mono tracking-widest uppercase">
                  {landmark.gallery[currentImageIndex].caption}
                </p>
              </div>
            </>
          ) : (
            <img
              src={landmark.image}
              alt={landmark.name}
              className="h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#05070a]/20 pointer-events-none" />
        </div>

        {/* Content/Quiz Section */}
        <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-[#05070a]/40 transition-all duration-500 overflow-y-auto ${showQuiz ? 'md:w-2/3' : ''}`}>

          {/* Normal View */}
          {!showQuiz ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-white/40" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {region.name} Region
                  </span>
                </div>

                {landmark.googleMapsUrl && (
                  <a
                    href={landmark.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30 px-3 py-1.5 rounded-full hover:bg-cyan-500/10"
                  >
                    <Compass className="h-3 w-3" />
                    <span>View Map</span>
                  </a>
                )}
              </div>

              <h2 className="mb-4 font-serif text-4xl md:text-7xl leading-tight text-white italic">
                {landmark.name}
              </h2>

              <div className="mb-8 overflow-y-auto max-h-[200px] pr-4 custom-scrollbar">
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  {landmark.description}
                </p>
                <p className="mt-4 text-sm text-white/40 leading-relaxed font-light">
                  An essential fragment of the Taiwan Odyssey, representing the unique narrative spirit of the {region.id} chapter. Every traveler who reaches this destination becomes a part of its living history.
                </p>
              </div>

              <div className="mt-auto flex flex-col space-y-4">
                <button
                  onClick={handleCollectClick}
                  disabled={isCollected}
                  className={`group/btn relative flex items-center justify-center space-x-3 rounded-full px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-500 border overflow-hidden
                            ${isCollected
                      ? 'border-white/10 bg-white/5 text-white/40 cursor-default'
                      : 'border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:scale-[1.02]'}`}
                >
                  {isCollected ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>Memory Archived</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 group-hover/btn:animate-spin" />
                      <span>Seal Passport Stamp</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    </>
                  )}
                </button>

                <div className="flex justify-center">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    STAMP ID: TW-{region.id.substring(0, 3).toUpperCase()}-{landmark.id.substring(0, 3).toUpperCase()}
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Quiz View */
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right duration-500">
              <div className="mb-8">
                <button onClick={() => setShowQuiz(false)} className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors mb-4 text-xs tracking-widest uppercase font-mono">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                  <span>Back to Details</span>
                </button>
                <h3 className="text-2xl font-serif italic text-white mb-2">Traveler's Challenge</h3>
                <p className="text-white/60 font-light">Answer correctly to bind this memory to your passport.</p>
              </div>

              {landmark.quiz && landmark.quiz[0] && (
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 rounded border border-white/10 bg-white/5 text-white/50 text-[10px] tracking-widest uppercase mb-4">
                      Question 01
                    </span>
                    <h4 className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                      {landmark.quiz[0].question}
                    </h4>
                  </div>

                  {!showFact ? (
                    <div className="grid grid-cols-1 gap-3">
                      {landmark.quiz[0].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(idx)}
                          disabled={selectedOption !== null}
                          className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group
                                            ${selectedOption === null
                              ? 'border-white/10 hover:border-white/30 hover:bg-white/5 text-white/80'
                              : selectedOption === idx
                                ? isCorrect
                                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-100' // Correct Selection
                                  : 'border-red-500/50 bg-red-500/10 text-red-100' // Wrong Selection
                                : 'border-white/5 text-white/20' // Non-selected
                            }
                                        `} // End className
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-light">{option}</span>
                            {selectedOption === idx && (
                              isCorrect
                                ? <CheckCircle className="h-5 w-5 text-emerald-400" />
                                : <AlertCircle className="h-5 w-5 text-red-400" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="animate-in fade-in zoom-in duration-500 bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-emerald-500/20 rounded-full">
                          <Sparkles className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-lg text-emerald-400 font-serif italic mb-2">Correct!</h4>
                          <p className="text-white/80 leading-relaxed font-light mb-6">
                            {landmark.quiz[0].fact}
                          </p>
                          <button
                            onClick={(e) => executeCollect(e)}
                            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-medium text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Claim Stamp</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedOption !== null && !isCorrect && (
                    <p className="mt-4 text-center text-red-400/80 text-xs tracking-widest uppercase animate-pulse">
                      Incorrect. Try again...
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DiscoveryModal;
