"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent opacity-30" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                            Family Owned <br />
                            <span className="text-white/50 italic">& Operated</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
                            Run by a husband and wife team in Texas. We combine tech-forward planning with old-school hospitality to ensure your <a href="/services" className="text-zinc-300 underline underline-offset-4 hover:text-white transition-colors">event</a> feels personal, professional, and effortless.
                        </p>
                        <p className="text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                            We believe every pour tells a story. From the initial consultation to the final toast, we're dedicated to making your celebration unforgettable. <a href="/contact" className="text-zinc-400 underline underline-offset-4 hover:text-white transition-colors">Contact us</a> to start planning.
                        </p>
                    </div>

                    <div className="pt-8">
                        <div className="inline-block transform -rotate-2">
                            <span className="font-script text-4xl md:text-5xl text-brand-gold/80">The Toast Team</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
