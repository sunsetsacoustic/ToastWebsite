"use client";

import { Check, Star, Camera } from "lucide-react";

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
                                    <Check size={18} className="text-brand-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 border border-white/20 rounded-sm text-white font-bold tracking-wider hover:bg-white hover:text-brand-dark transition-all uppercase text-sm">
                            Request Quote
                        </button>
                    </div>

                    {/* Card 2: Full Toast */}
                    <div className="bg-zinc-800/80 border border-brand-primary/30 rounded-xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-black/50 flex flex-col ring-1 ring-brand-primary/20">
                        {/* Badge */}
                        <div className="absolute top-0 right-0 bg-brand-primary text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                            <Star size={12} fill="currentColor" /> Most Popular
                        </div>

                        <h3 className="text-2xl font-display font-bold text-brand-primary mb-2">The Full Toast</h3>
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
                                    <Check size={18} className="text-brand-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-brand-primary text-brand-dark rounded-sm font-bold tracking-wider hover:bg-yellow-500 transition-all uppercase text-sm shadow-lg shadow-brand-primary/20">
                            Book The Full Experience
                        </button>
                    </div>
                </div>

                {/* Photographer Add-on */}
                <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-brand-secondary/10 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="bg-brand-dark p-4 rounded-full text-brand-primary border border-brand-primary/20 relative z-10 shrink-0">
                        <Camera size={32} strokeWidth={1.5} />
                    </div>

                    <div className="text-center md:text-left flex-grow relative z-10">
                        <h3 className="text-xl font-display font-bold text-white mb-2">Capture The Moment</h3>
                        <p className="text-white/60 leading-relaxed">
                            Don't stress about photos. We subcontract with top-tier local photographers to document your event.
                            We can bundle this service into your quote for a seamless experience.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <span className="inline-block px-6 py-2 border border-brand-primary/30 rounded-full text-brand-primary text-sm font-bold tracking-wider uppercase hover:bg-brand-primary hover:text-brand-dark transition-all cursor-default">
                            Inquire For Pricing
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
