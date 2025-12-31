"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ContactContent() {
    const searchParams = useSearchParams();
    const [defaultMessage, setDefaultMessage] = useState("");

    useEffect(() => {
        const type = searchParams.get("type");
        if (type === "mini") {
            setDefaultMessage("I'm interested in the TOAST Mini Package! 🥤");
        }
    }, [searchParams]);

    return (
        <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                    <input
                        type="text"
                        id="name"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder=" "
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
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white/90 focus:outline-none focus:border-white transition-colors"
                    />
                    <label
                        htmlFor="date"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500"
                    >
                        Date
                    </label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                    <input
                        type="email"
                        id="email"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder=" "
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                    >
                        Email
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="text"
                        id="phone"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder=" "
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                    >
                        Phone
                    </label>
                </div>
            </div>

            <div className="relative group">
                <textarea
                    id="message"
                    rows={4}
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder=" "
                    defaultValue={defaultMessage}
                    key={defaultMessage}
                />
                <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white"
                >
                    Tell us about your event
                </label>
            </div>

            <button
                type="button"
                className="w-full bg-white text-black font-bold py-5 rounded-xl uppercase tracking-widest hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
                Send Inquiry
            </button>
        </form>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-brand-dark pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">You're Invited.</h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Ready to elevate your event? Let's start the conversation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    <Suspense fallback={<div className="text-center text-white/50">Loading form...</div>}>
                        <ContactContent />
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
}
