"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="py-24 bg-zinc-900/30 border-y border-white/5">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4 block">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-8">
                        Family Owned & Operated
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed font-light">
                        "Run by a husband and wife team in Texas. We combine tech-forward planning with
                        old-school hospitality to ensure your event feels personal, professional, and effortless."
                    </p>
                    <div className="mt-12 flex justify-center gap-4">
                        {/* Signature or visual element could go here */}
                        <div className="h-px w-20 bg-white/20 self-center" />
                        <span className="text-brand-gold font-display italic text-2xl">The Toast Team</span>
                        <div className="h-px w-20 bg-white/20 self-center" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
