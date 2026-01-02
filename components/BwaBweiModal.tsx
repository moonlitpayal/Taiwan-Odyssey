import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

interface BwaBweiModalProps {
    isOpen: boolean;
    onClose: () => void;
    onReset: () => void; // Called when user loses to reset stamps
}

type BlockSide = 'flat' | 'round';
interface TossResult {
    left: BlockSide;
    right: BlockSide;
}

const MoonBlock = ({ side, rotation = 0, className = "" }: { side: BlockSide, rotation?: number, className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={`w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl filter ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
    >
        {side === 'round' ? (
            // Round Side (Yin) - The bulging red side
            <path
                d="M10,50 Q10,10 50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Z"
                fill="url(#gradientRound)"
                stroke="#7f1d1d"
                strokeWidth="1"
            />
        ) : (
            // Flat Side (Yang) - The flat wood side
            <path
                d="M10,50 Q10,10 50,10 Q90,10 90,50 L90,60 Q50,60 10,60 Z"
                fill="#deb887"
                stroke="#92400e"
                strokeWidth="1"
                style={{ filter: 'url(#woodGrain)' }}
            />
        )}
        <defs>
            <linearGradient id="gradientRound" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <filter id="woodGrain">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0.2" />
                <feBlend mode="multiply" in="SourceGraphic" />
            </filter>
        </defs>
    </svg>
);

const BwaBweiModal: React.FC<BwaBweiModalProps> = ({ isOpen, onClose, onReset }) => {
    const [step, setStep] = useState<'intro' | 'game' | 'result'>('intro');
    const [isTossing, setIsTossing] = useState(false);
    const [result, setResult] = useState<TossResult | null>(null);
    const [outcomeType, setOutcomeType] = useState<'win' | 'laugh' | 'cry' | null>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            setStep('intro');
            setOutcomeType(null);
            setResult(null);
            setMessage('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleToss = () => {
        if (isTossing) return;
        setIsTossing(true);
        setMessage('');

        // Simulate animation time
        setTimeout(() => {
            // Logic: 0 = Flat, 1 = Round
            // Independent probability
            const leftRoll = Math.random() < 0.5 ? 'flat' : 'round';
            const rightRoll = Math.random() < 0.5 ? 'flat' : 'round';

            setResult({ left: leftRoll, right: rightRoll });
            setIsTossing(false);
            determineOutcome(leftRoll, rightRoll);
        }, 1500);
    };

    const determineOutcome = (left: BlockSide, right: BlockSide) => {
        setStep('result');
        // 1 Flat + 1 Round = WIN (Holy Answer / Shèng Jiǎo)
        if (left !== right) {
            setOutcomeType('win');
            setMessage("Holy Answer (Shèng Jiǎo). The way is open.");
        }
        else if (left === 'flat' && right === 'flat') {
            setOutcomeType('laugh');
            // Laughing Answer (Xiào Jiǎo)
            setMessage("Laughing Answer (Xiào Jiǎo). The deity is laughing.");
        }
        else {
            setOutcomeType('cry');
            // Crying/Angry Answer (Kū Jiǎo)
            setMessage("Crying Answer (Kū Jiǎo). The deity disagrees.");
        }
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-700" />

            {/* Cinematic Container */}
            <div className="relative w-full max-w-4xl min-h-[600px] flex flex-col items-center justify-center p-8 md:p-12 text-center animate-in zoom-in-95 duration-700">

                {/* Glow Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
                </div>

                {step === 'intro' && (
                    <div className="max-w-xl flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500">
                        <Sparkles className="w-12 h-12 text-amber-400 mb-6 animate-pulse" />
                        <h2 className="font-serif text-4xl md:text-5xl text-white italic mb-6">You are eligible...</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            You have collected 12 stamps. The gods grant you <b>one chance</b> to cast the blocks.
                            <br /><br />
                            A Holy Answer will reveal the path.
                            <br />
                            A Refusal means you must journey again.
                        </p>
                        <button
                            onClick={() => setStep('game')}
                            className="px-8 py-3 bg-red-800 hover:bg-red-700 text-white rounded-full font-mono text-sm uppercase tracking-widest transition-all"
                        >
                            Proceed to Ritual
                        </button>
                    </div>
                )}

                {step !== 'intro' && (
                    <>
                        {/* Header only if waiting to toss or tossing */}
                        {(!result && !outcomeType) || isTossing ? (
                            <>
                                <h2 className="relative font-serif text-5xl md:text-7xl text-white italic mb-4 tracking-tighter drop-shadow-2xl">
                                    <span className="text-red-500">Bwa</span> Bwei
                                </h2>
                                <p className="relative text-white/50 font-mono text-xs tracking-[0.4em] uppercase mb-16">
                                    The Ritual of the Moon Blocks
                                </p>
                            </>
                        ) : null}


                        <div className="relative w-full flex justify-center items-center h-64 mb-12 perspective-[1000px]">
                            {isTossing ? (
                                <div className="flex space-x-12 animate-spin-slow opacity-80 blur-sm">
                                    <MoonBlock side="round" rotation={0} className="animate-bounce" />
                                    <MoonBlock side="flat" rotation={180} className="animate-bounce delay-100" />
                                </div>
                            ) : result ? (
                                <div className="flex space-x-8 md:space-x-16 transition-all duration-500 animate-in zoom-in spin-in-12">
                                    <MoonBlock side={result.left} rotation={Math.random() * 40 - 20} />
                                    <MoonBlock side={result.right} rotation={Math.random() * 40 - 20} />
                                </div>
                            ) : (
                                <div className="flex space-x-8 md:space-x-16 opacity-30">
                                    <MoonBlock side="round" rotation={-10} />
                                    <MoonBlock side="flat" rotation={10} />
                                </div>
                            )}
                        </div>

                        <div className="relative z-20 flex flex-col items-center space-y-6 min-h-[120px]">
                            {step === 'game' && !isTossing && !result && (
                                <button
                                    onClick={handleToss}
                                    className="group relative px-12 py-4 bg-red-900/20 border border-red-500/50 rounded-full overflow-hidden hover:bg-red-900/40 transition-all hover:scale-105 active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="font-mono text-sm tracking-[0.3em] text-red-100 uppercase">
                                        Cast the Blocks
                                    </span>
                                </button>
                            )}

                            {outcomeType === 'win' && (
                                <div className="flex flex-col items-center max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                    <h3 className="text-3xl md:text-5xl text-emerald-400 font-serif italic mb-8 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] text-center">
                                        This digital horizon is currently under construction.
                                    </h3>

                                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-8 md:p-12 rounded-3xl mb-8 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                        {/* Shining Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]" />

                                        <p className="text-white/90 text-lg font-light leading-relaxed mb-6 font-serif tracking-wide">
                                            Crafted with curiosity and ambition, this platform is being built by <span className="text-amber-300 font-normal border-b border-amber-300/30 pb-0.5">Payal Dharma Mehta</span>.
                                        </p>

                                        <p className="text-white/70 text-sm font-light leading-relaxed mb-8">
                                            Her vision was ignited by the profound narrative of the <i className="text-white/90">"Taiwan National Soft Power Digital Promotion Project"</i> released by MOFA—a story of how a nation reimagines its role on the world stage through nature and innovation.
                                        </p>

                                        <p className="text-white/70 text-sm font-light leading-relaxed mb-8">
                                            Just as a simple chip became a portal to memories in the film, this website is being designed to be your gateway to a new perspective.
                                        </p>

                                        <div className="flex items-start space-x-4 pl-4 border-l-2 border-emerald-500/50 my-8">
                                            <p className="text-emerald-100/80 text-sm italic leading-relaxed">
                                                "Into this living ecosystem arrives a traveler... unaware that Taiwan is about to transform the way he sees the world."
                                            </p>
                                        </div>

                                        <p className="text-white/60 text-xs font-mono uppercase tracking-[0.2em] mt-6">
                                            We are preparing that transformation now.
                                        </p>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            onClick={onClose}
                                            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] font-mono text-xs uppercase tracking-widest transition-all hover:scale-105"
                                        >
                                            Back to Map
                                        </button>
                                    </div>
                                </div>
                            )}

                            {(outcomeType === 'laugh' || outcomeType === 'cry') && (
                                <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-xl">
                                    <h3 className={`text-2xl font-serif italic mb-2 ${outcomeType === 'laugh' ? 'text-yellow-400' : 'text-red-500'}`}>
                                        {outcomeType === 'laugh' ? "Xiào Jiǎo (Laughing Answer)" : "Kū Jiǎo (Crying Answer)"}
                                    </h3>

                                    <p className="text-white/80 text-lg font-light mb-8">
                                        {outcomeType === 'laugh'
                                            ? "The deity is laughing. The answer is unclear."
                                            : "The deity disagrees. Fate has spoken."
                                        }
                                    </p>

                                    <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-lg mb-8">
                                        <p className="text-red-200 text-sm tracking-wide">
                                            You must prove your dedication again.
                                        </p>
                                    </div>

                                    <button
                                        onClick={onReset}
                                        className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all flex items-center space-x-2"
                                    >
                                        <RefreshCw size={14} />
                                        <span>Accept Fate (Reset Stamps)</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default BwaBweiModal;
