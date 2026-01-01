"use client";

import { Check, Star, Camera } from "lucide-react";

export default function Services() {
    return (
        <section className="py-32 relative z-10" id="services"> {/* Increased spacing */}
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-4">Our Services</h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-light">
                        Choose the package that fits your event. We keep it simple. Have questions? <a href="/contact" className="text-white/60 underline hover:text-white transition-colors">Ask us anything.</a>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                    {/* Card 1: Co-Pilot */}
                    <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-xl p-10 hover:border-white/20 transition-all flex flex-col group h-full"> {/* Glassmorphism */}
                        <div className="mb-6">
                            <h3 className="text-3xl font-display text-white mb-2 group-hover:text-brand-primary transition-colors">The Co-Pilot</h3>
                            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Service Only</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "TABC Certified Bartender(s)",
                                "Basic Bar Tools (Shakers, openers, etc.)",
                                "Setup & Cleanup of Bar Area",
                                "Custom Menu Consultation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 font-light">
                                    <Check size={18} className="text-brand-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 border border-white/20 rounded-sm text-white font-medium tracking-widest hover:bg-white hover:text-black transition-all uppercase text-sm mt-auto">
                            Request Quote
                        </button>
                    </div>

                    {/* Card 2: Full Toast */}
                    <div className="bg-zinc-900/40 backdrop-blur-md border border-brand-primary/30 rounded-xl p-10 relative flex flex-col h-full shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]">
                        {/* Badge */}
                        <div className="absolute top-0 right-0 bg-brand-primary/20 backdrop-blur-sm border-l border-b border-brand-primary/30 text-brand-primary text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest flex items-center gap-2">
                            <Star size={10} fill="currentColor" /> Most Popular
                        </div>

                        <div className="mb-6">
                            <h3 className="text-3xl font-display text-brand-primary mb-2">The Full Toast</h3>
                            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">All Inclusive</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "Everything in Co-Pilot",
                                "The Portable Mobile Bar",
                                "Disposable Cups & Napkins",
                                "Ice (1.5lbs per guest)",
                                "All Mixers (Juices, Sodas, Syrups)",
                                "Fresh Garnishes (Fruit, Herbs)",
                                "Printed Menu Display"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-100 font-light">
                                    <Check size={18} className="text-brand-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 bg-brand-primary text-brand-dark border border-brand-primary rounded-sm font-bold tracking-widest hover:bg-transparent hover:text-brand-primary transition-all uppercase text-sm mt-auto">
                            Book The Full Experience
                        </button>
                    </div>
                </div>

                {/* Photographer Add-on */}
                <div className="max-w-5xl mx-auto mt-16 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-4 rounded-full text-zinc-400 border border-white/10 relative z-10 shrink-0 group-hover:text-brand-primary group-hover:border-brand-primary/50 transition-all">
                        <Camera size={28} strokeWidth={1.5} />
                    </div>

                    <div className="text-center md:text-left flex-grow relative z-10">
                        <h3 className="text-xl font-display text-white mb-2">Capture The Moment</h3>
                        <p className="text-zinc-400 font-light leading-relaxed text-sm">
                            Don't stress about photos. We subcontract with top-tier local photographers to document your event.
                            We can bundle this service into your quote for a seamless experience.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <span className="inline-block px-6 py-3 border border-white/20 rounded-full text-zinc-300 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-default">
                            Inquire For Pricing
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
