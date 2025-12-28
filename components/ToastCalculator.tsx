"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Beer, Wine, GlassWater } from "lucide-react";

// Helper component for simple slider if shadcn is not available yet
// Since we said "raw Tailwind", I'll build a simple range input first or a custom slider.
// For now, using standard input range with custom styling.

export default function ToastCalculator() {
    const [guests, setGuests] = useState(100);
    const [hours, setHours] = useState(4);
    const [vibe, setVibe] = useState<"light" | "average" | "heavy">("average");

    // Logic:
    // Base Rule: 2 drinks first hour + 1 drink per additional hour.
    // Formula: (Guests * ((Hours - 1) + 2)) * Modifier

    const getModifier = () => {
        switch (vibe) {
            case "light": return 0.7;
            case "heavy": return 1.3;
            default: return 1.0;
        }
    };

    const drinksPerPersonBase = (hours - 1) + 2;
    const totalDrinks = Math.ceil((guests * drinksPerPersonBase) * getModifier());

    const beerCases = Math.ceil((totalDrinks * 0.50) / 24);
    const wineBottles = Math.ceil((totalDrinks * 0.25) / 5);
    const liquorBottles = Math.ceil((totalDrinks * 0.25) / 17);

    return (
        <section className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">

                    {/* Controls Side */}
                    <div className="p-8 md:p-12 space-y-10">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-brand-gold mb-2">The Toast Calculator</h2>
                            <p className="text-white/60">Don't guess. Know exactly what to buy.</p>
                        </div>

                        {/* Guests Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <label className="text-sm uppercase tracking-widest font-bold text-white/80">Guests</label>
                                <span className="text-2xl font-display font-bold text-brand-gold">{guests}</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="300"
                                value={guests}
                                onChange={(e) => setGuests(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold hover:accent-yellow-400 transition-all"
                            />
                            <div className="flex justify-between text-xs text-white/40">
                                <span>10</span>
                                <span>300</span>
                            </div>
                        </div>

                        {/* Hours Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <label className="text-sm uppercase tracking-widest font-bold text-white/80">Duration</label>
                                <span className="text-2xl font-display font-bold text-brand-gold">{hours} Hours</span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="8"
                                value={hours}
                                onChange={(e) => setHours(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold hover:accent-yellow-400 transition-all"
                            />
                            <div className="flex justify-between text-xs text-white/40">
                                <span>2 Hrs</span>
                                <span>8 Hrs</span>
                            </div>
                        </div>

                        {/* Vibe Selection */}
                        <div className="space-y-4">
                            <label className="text-sm uppercase tracking-widest font-bold text-white/80">Crowd Vibe</label>
                            <div className="grid grid-cols-3 gap-3">
                                {(["light", "average", "heavy"] as const).map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setVibe(v)}
                                        className={`py-3 px-2 rounded-lg text-sm font-bold border transition-all duration-300 capitalize ${vibe === v
                                            ? "bg-brand-gold text-brand-dark border-brand-gold scale-105 shadow-lg shadow-brand-gold/20"
                                            : "bg-white/5 text-white/60 border-transparent hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        {v}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-center text-white/40 italic mt-2">
                                {vibe === "light" && "Conservative drinkers. Probably a day event."}
                                {vibe === "average" && "Standard celebration logic."}
                                {vibe === "heavy" && "Ready to party. Stock up!"}
                            </p>
                        </div>

                    </div>

                    {/* Results Side */}
                    <div className="bg-brand-gold p-8 md:p-12 text-brand-dark flex flex-col justify-between relative overflow-hidden">
                        {/* Background pattern opacity */}
                        <div className="absolute inset-0 bg-white/10 opacity-20 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold uppercase tracking-widest border-b-2 border-brand-dark/20 pb-4 mb-8">Estimated Shopping List</h3>

                            <div className="space-y-8">
                                {/* Beer */}
                                <div className="flex items-center gap-5">
                                    <div className="bg-brand-dark/10 p-3 rounded-full">
                                        <Beer size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <span className="block text-5xl font-display font-bold leading-none">{beerCases}</span>
                                        <span className="text-sm font-bold uppercase opacity-80">Cases of Beer (24pk)</span>
                                    </div>
                                </div>

                                {/* Wine */}
                                <div className="flex items-center gap-5">
                                    <div className="bg-brand-dark/10 p-3 rounded-full">
                                        <Wine size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <span className="block text-5xl font-display font-bold leading-none">{wineBottles}</span>
                                        <span className="text-sm font-bold uppercase opacity-80">Bottles of Wine (750ml)</span>
                                    </div>
                                </div>

                                {/* Liquor */}
                                <div className="flex items-center gap-5">
                                    <div className="bg-brand-dark/10 p-3 rounded-full">
                                        <GlassWater size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <span className="block text-5xl font-display font-bold leading-none">{liquorBottles}</span>
                                        <span className="text-sm font-bold uppercase opacity-80">Liquor Bottles (750ml)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 bg-brand-dark/10 p-4 rounded-lg text-xs font-medium leading-relaxed opacity-80">
                            *Estimates based on industry standards. We recommend rounding up to be safe. Unopened bottles can often be returned!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
