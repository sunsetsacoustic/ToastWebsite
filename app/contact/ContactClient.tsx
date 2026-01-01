"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    date: formData.get('date'),
                    message: message,
                }),
            });

            if (response.ok) {
                alert("Quote request sent successfully! We'll be in touch soon.");
                // Reset could happen here, or redirect
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark pt-32 pb-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-dark to-brand-dark opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <Navbar />

            <section className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-5xl md:text-7xl font-serif text-white">Contact Us</h1>
                        <p className="text-zinc-400 text-lg font-light max-w-xl mx-auto">
                            Let's make your event unforgettable. Fill out the details below and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                        {hasParams && (
                            <div className="bg-brand-primary/10 border-l-2 border-brand-primary p-4 mb-12 flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500 rounded-r-lg">
                                <CheckCircle2 size={24} className="text-brand-primary shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-brand-primary uppercase tracking-widest text-xs mb-1">Quote Details Loaded</h3>
                                    <p className="text-zinc-300 text-sm font-light">
                                        We've pre-filled the message with your calculator results. Feel free to add more details!
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="mb-12 text-center md:text-left">
                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed hidden md:block">
                                Secure your date with Kingwood's favorite dry hire bartending service. We proudly serve Kingwood, Atascocita, Humble, Porter, and New Caney. Whether it's a backyard wedding or a corporate happy hour, we handle the bar so you can handle the party.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                                        placeholder="Name"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="relative group">
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white/90 focus:outline-none focus:border-white transition-colors"
                                    />
                                    <label
                                        htmlFor="date"
                                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500"
                                    >
                                        Event Date
                                    </label>
                                </div>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                                    placeholder="Email"
                                    defaultValue={""}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                                >
                                    Email
                                </label>
                            </div>

                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows={6}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder-transparent"
                                    placeholder="Message"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                                >
                                    Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-white text-black font-bold py-5 rounded-xl uppercase tracking-widest hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Inquiry
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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

export default function ContactClient() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">Loading...</div>}>
            <ContactForm />
        </Suspense>
    );
}
