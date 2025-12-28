"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient/Image Placeholder */}
            {/* Added vignette overlay: bg-gradient-to-t is a simple way, or radial gradient. 
                Using a radial gradient that is transparent in center and black/dark on outside. */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-70 z-1" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-brand-dark z-0" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

            <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-brand-cream mb-6 leading-tight"
                >
                    RAISE A GLASS. <br />
                    <span className="text-white/60">WE'LL HANDLE THE REST.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                >
                    Texas' premier dry-hire mobile bar service. You bring the spirits, we bring the
                    service, style, and stress-free planning.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link
                        href="#calculator"
                        className="inline-flex items-center gap-2 bg-brand-primary hover:bg-yellow-500 text-brand-dark px-8 py-4 rounded-sm font-bold tracking-widest transition-all transform hover:scale-105"
                    >
                        CALCULATE YOUR MENU
                        <ArrowDown size={18} />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}
