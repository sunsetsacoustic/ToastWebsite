"use client";

import { motion } from "framer-motion";
import { Beer, Wine, GlassWater, DollarSign, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePartyCalculator, SpiritType } from "../hooks/usePartyCalculator";

const SPIRITS: SpiritType[] = ['Vodka', 'Gin', 'Tequila', 'Whiskey', 'Rum'];

export default function ToastCalculator() {
    const router = useRouter();
    const {
        guests, setGuests,
        hours, setHours,
        vibe, setVibe,
        selectedSpirits, toggleSpirit,
        results
    } = usePartyCalculator();

    const handleRequestQuote = () => {
        const params = new URLSearchParams({
            guests: guests.toString(),
            hours: hours.toString(),
            vibe: vibe,
            cost: results.estimatedCost.toString()
        });
        router.push(`/contact?${params.toString()}`);
    };

    return (
        <section className="container mx-auto px-6 py-24">
            <div className="max-w-5xl mx-auto bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0 relative">

                    {/* Controls Side (Cockpit) */}
                    <div className="p-8 md:p-12 space-y-12 relative z-10">
                        <div>
                            <h2 className="text-4xl font-serif text-brand-primary mb-3">Event Details</h2>
                            <p className="text-white/60 font-light">Customize your party parameters to get an instant estimate.</p>
                        </div>

                        {/* Guests Slider */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-xs uppercase tracking-[0.2em] font-medium text-white/50">Guests</label>
                                <span className="text-4xl font-serif text-brand-primary">{guests}</span>
                            </div>
                            <div className="relative h-6 flex items-center">
                                <input
                                    type="range"
                                    min="10"
                                    max="300"
                                    value={guests}
                                    onChange={(e) => setGuests(parseInt(e.target.value))}
                                    className="absolute w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white hover:accent-brand-primary transition-all z-20 focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] [&::-webkit-slider-thumb]:transition-all"
                                />
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 rounded-full -translate-y-1/2 z-10">
                                    <div
                                        className="h-full bg-white/80 rounded-full"
                                        style={{ width: `${((guests - 10) / (300 - 10)) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hours Slider */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-xs uppercase tracking-[0.2em] font-medium text-white/50">Duration</label>
                                <span className="text-4xl font-serif text-brand-primary">{hours} <span className="text-lg font-sans text-white/40 font-light">Hours</span></span>
                            </div>
                            <div className="relative h-6 flex items-center">
                                <input
                                    type="range"
                                    min="2"
                                    max="8"
                                    value={hours}
                                    onChange={(e) => setHours(parseInt(e.target.value))}
                                    className="absolute w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white hover:accent-brand-primary transition-all z-20 focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] [&::-webkit-slider-thumb]:transition-all"
                                />
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 rounded-full -translate-y-1/2 z-10">
                                    <div
                                        className="h-full bg-white/80 rounded-full"
                                        style={{ width: `${((hours - 2) / (8 - 2)) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Menu Preferences (New) */}
                        <div className="space-y-4">
                            <label className="text-xs uppercase tracking-[0.2em] font-medium text-white/50">Menu Preferences</label>
                            <div className="flex flex-wrap gap-2">
                                {SPIRITS.map((spirit) => (
                                    <button
                                        key={spirit}
                                        onClick={() => toggleSpirit(spirit)}
                                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${selectedSpirits.includes(spirit)
                                            ? "bg-white text-brand-dark border-white shadow-lg shadow-white/10"
                                            : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white"
                                            }`}
                                    >
                                        {spirit}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Vibe Selection (Segmented Control) - Updated Size */}
                        <div className="space-y-4">
                            <label className="text-xs uppercase tracking-[0.2em] font-medium text-white/50">Crowd Vibe</label>
                            <div className="bg-white/5 p-1 rounded-full relative grid grid-cols-3 h-12"> {/* Increased height */}
                                {/* Sliding Background */}
                                <motion.div
                                    className="absolute top-1 bottom-1 bg-white/10 rounded-full shadow-sm border border-white/5"
                                    layoutId="vibe-indicator"
                                    initial={false}
                                    animate={{
                                        left: vibe === 'light' ? '4px' : vibe === 'average' ? '33.33%' : '66.66%',
                                        width: 'calc(33.33% - 4px)'
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />

                                {(["light", "average", "heavy"] as const).map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setVibe(v)}
                                        className={`relative z-10 h-full flex items-center justify-center text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${vibe === v ? "text-white" : "text-white/40 hover:text-white/70"}`}
                                    >
                                        {v}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-center text-white/30 font-light h-4">
                                {vibe === "light" && "Conservative drinkers. Probably a day event."}
                                {vibe === "average" && "Standard celebration logic."}
                                {vibe === "heavy" && "Ready to party. Stock up!"}
                            </p>
                        </div>
                    </div>

                    {/* Results Side (HUD) */}
                    <div className="relative p-8 md:p-12 flex flex-col justify-center overflow-hidden bg-white/5">
                        {/* Separator Line for mobile, vertical on desktop */}
                        <div className="absolute top-0 left-0 w-full h-px md:w-px md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                        <div className="grid gap-12 relative z-10 flex-grow content-center">
                            {/* Beer */}
                            <div className="group relative">
                                <div className="absolute -left-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none transform scale-150">
                                    <Beer size={120} strokeWidth={1} />
                                </div>
                                <div className="relative pl-4 border-l border-white/10">
                                    <span className="block text-6xl font-serif text-white mb-1 group-hover:text-brand-primary transition-colors duration-300">{results.beerCases}</span>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Cases of Beer (24pk)</span>
                                </div>
                            </div>

                            {/* Wine */}
                            <div className="group relative">
                                <div className="absolute -left-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none transform scale-150">
                                    <Wine size={120} strokeWidth={1} />
                                </div>
                                <div className="relative pl-4 border-l border-white/10">
                                    <span className="block text-6xl font-serif text-white mb-1 group-hover:text-brand-primary transition-colors duration-300">{results.wineBottles}</span>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Bottles of Wine</span>
                                </div>
                            </div>

                            {/* Liquor (Updated Layout) */}
                            <div className="group relative">
                                <div className="absolute -left-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none transform scale-150">
                                    <GlassWater size={120} strokeWidth={1} />
                                </div>
                                <div className="relative pl-4 border-l border-white/10">
                                    <span className="block text-6xl font-serif text-white mb-1 group-hover:text-brand-primary transition-colors duration-300">{results.liquorBottles}</span>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Total Liquor Bottles</span>

                                    {/* Breakdown */}
                                    <div className="mt-3 pt-3 border-t border-white/10">
                                        <p className="text-sm font-light text-white/80 leading-relaxed">
                                            {Object.entries(results.liquorBreakdown).map(([spirit, count], index, arr) => (
                                                <span key={spirit}>
                                                    <span className="font-semibold text-brand-primary">{count}</span> {spirit}
                                                    {index < arr.length - 1 && <span className="mx-2 opacity-30">•</span>}
                                                </span>
                                            ))}
                                            {Object.keys(results.liquorBreakdown).length === 0 && <span className="opacity-50 italic">No spirits selected</span>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Estimator (New Footer) */}
                        <div className="mt-12 pt-8 border-t border-dashed border-white/10 relative z-10 space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Estimated Cost</p>
                                    <p className="text-[10px] text-white/30 max-w-[200px]">Based on avg prices ($20-$30). Does not include Toast service fees.</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl font-serif text-white/90 flex items-center gap-1 justify-end">
                                        <span className="text-lg opacity-50 font-sans">$</span>
                                        {results.estimatedCost.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handleRequestQuote}
                                className="w-full py-4 border border-white/20 rounded-xl text-white font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 group"
                            >
                                Request Quote For This Menu
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
