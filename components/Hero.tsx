"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Clean dark overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/toast-pouring.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="container relative z-20 px-6 text-center max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }} // Slower, more cinematic fade-in
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-brand-cream mb-4 leading-tight tracking-tight"
                >
                    RAISE A GLASS.
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-2xl font-sans font-light text-white/90 uppercase tracking-[0.2em] mb-12"
                >
                    TOAST Mobile Bar Co. | Luxury Dry Hire Bartending
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
                >
                    <Link
                        href="#calculator"
                        className="group inline-flex items-center gap-3 px-10 py-4 border border-white text-white font-sans font-medium hover:bg-white hover:text-black transition-all duration-300 rounded-sm tracking-widest text-sm"
                    >
                        CALCULATE YOUR MENU
                        <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-pulse"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
