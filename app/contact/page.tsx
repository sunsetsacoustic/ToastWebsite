"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

function ContactForm() {
    const searchParams = useSearchParams();
    const [message, setMessage] = useState("");
    const [hasParams, setHasParams] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const guests = searchParams.get("guests");
        const hours = searchParams.get("hours");
        const cost = searchParams.get("cost");
        const vibe = searchParams.get("vibe");

        if (guests || hours || cost || vibe) {
            setHasParams(true);
            const vibeText = vibe ? `(${vibe} vibe)` : "";
            const formattedCost = cost ? `Estimated budget: $${cost}.` : "";

            const template = `Hi! I used your calculator for my event. I'm planning a party for ${guests || "..."} guests for ${hours || "..."} hours ${vibeText}. ${formattedCost} I'd like to book this setup.`;

            setMessage(template);
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        alert("Thanks! This is a demo, so no email was sent, but the form works!");
    };

    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark pt-24">
            <Navbar />

            <section className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-cream mb-6">Contact Us</h1>
                        <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
                            Let's make your event unforgettable. Fill out the details below and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                        {hasParams && (
                            <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-lg p-4 mb-8 flex items-center gap-3 text-brand-primary animate-in fade-in slide-in-from-top-4 duration-500">
                                <CheckCircle2 size={20} />
                                <span className="font-bold text-sm tracking-wide uppercase">Party Details Loaded</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs uppercase font-bold text-white/50 tracking-[0.2em] ml-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs uppercase font-bold text-white/50 tracking-[0.2em] ml-1">Event Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs uppercase font-bold text-white/50 tracking-[0.2em] ml-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs uppercase font-bold text-white/50 tracking-[0.2em] ml-1">Message</label>
                                <textarea
                                    rows={6}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all leading-relaxed"
                                    placeholder="Tell us about your event..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-brand-primary text-brand-dark font-bold py-5 rounded-lg uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Inquiry
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">Loading...</div>}>
            <ContactForm />
        </Suspense>
    );
}
