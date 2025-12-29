"use client";

import { ClipboardList, ShoppingBag, Wine } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            icon: <ClipboardList size={56} strokeWidth={1.5} />,
            title: "The Plan",
            text: "Use our tech to generate your perfect shopping list based on your guest count and preferences."
        },
        {
            icon: <ShoppingBag size={56} strokeWidth={1.5} />,
            title: "The Buy",
            text: "You purchase the alcohol directly from your preferred retailer. No markups, no hidden fees."
        },
        {
            icon: <Wine size={56} strokeWidth={1.5} />,
            title: "The Toast",
            text: "We arrive with the bar, ice, mixers, garnishes, and TABC-certified staff to serve your guests."
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden" id="how-it-works">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-4">How It Works</h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group text-center relative z-10"
                        >
                            <div className="w-24 h-24 mx-auto flex items-center justify-center text-white/80 mb-6 bg-brand-dark/50 backdrop-blur-sm rounded-full border border-transparent group-hover:border-white/10 transition-all duration-500">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-display text-white mb-4">{step.title}</h3>
                            <p className="text-zinc-400 leading-relaxed max-w-sm mx-auto font-light text-sm">
                                {step.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
