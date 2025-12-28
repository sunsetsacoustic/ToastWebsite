"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="py-24 bg-zinc-900/30 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left Side: Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full aspect-[4/5] bg-zinc-800 rounded-lg relative overflow-hidden group"
                    >
                        {/* Placeholder content */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-4xl font-bold uppercase tracking-widest group-hover:bg-zinc-700/50 transition-colors">
                            Owner Photo
                        </div>
                    </motion.div>

                    {/* Right Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left"
                    >
                        <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-8">
                            Family Owned & Operated
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                            "Run by a husband and wife team in Texas. We combine tech-forward planning with
                            old-school hospitality to ensure your event feels personal, professional, and effortless."
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-brand-primary/50" />
                            <span className="text-brand-primary font-display italic text-2xl">The Toast Team</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
