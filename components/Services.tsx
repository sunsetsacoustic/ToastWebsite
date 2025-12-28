"use client";

import { Check, Star } from "lucide-react";

export default function Services() {
    return (
        <section className="py-24 bg-brand-dark relative z-10" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-4">Our Services</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Choose the package that fits your event. We keep it simple.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Card 1: Co-Pilot */}
                    <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all flex flex-col">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">The Co-Pilot</h3>
                        <p className="text-white/40 mb-8 uppercase tracking-widest text-xs font-bold">Service Only</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "TABC Certified Bartender(s)",
                                "Basic Bar Tools (Shakers, openers, etc.)",
                                "Setup & Cleanup of Bar Area",
                                "Custom Menu Consultation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/80">
                                    <Check size={18} className="text-brand-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 border border-white/20 rounded-sm text-white font-bold tracking-wider hover:bg-white hover:text-brand-dark transition-all uppercase text-sm">
                            Request Quote
                        </button>
                    </div>

                    {/* Card 2: Full Toast */}
                    <div className="bg-zinc-800/80 border border-brand-gold/30 rounded-xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-black/50 flex flex-col ring-1 ring-brand-gold/20">
                        {/* Badge */}
                        <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                            <Star size={12} fill="currentColor" /> Most Popular
                        </div>

                        <h3 className="text-2xl font-display font-bold text-brand-gold mb-2">The Full Toast</h3>
                        <p className="text-white/40 mb-8 uppercase tracking-widest text-xs font-bold">All Inclusive</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Everything in Co-Pilot",
                                "The Portable Mobile Bar",
                                "Disposable Cups & Napkins",
                                "Ice (1.5lbs per guest)",
                                "All Mixers (Juices, Sodas, Syrups)",
                                "Fresh Garnishes (Fruit, Herbs)",
                                "Printed Menu Display"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <Check size={18} className="text-brand-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-brand-gold text-brand-dark rounded-sm font-bold tracking-wider hover:bg-yellow-500 transition-all uppercase text-sm shadow-lg shadow-brand-gold/20">
                            Book The Full Experience
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
