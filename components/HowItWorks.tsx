"use client";

import { ClipboardList, ShoppingBag, Wine } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            icon: <ClipboardList size={48} strokeWidth={1} />,
            title: "The Plan",
            text: "Use our tech to generate your perfect shopping list based on your guest count and preferences."
        },
        {
            icon: <ShoppingBag size={48} strokeWidth={1} />,
            title: "The Buy",
            text: "You purchase the alcohol directly from your preferred retailer. No markups, no hidden fees."
        },
        {
            icon: <Wine size={48} strokeWidth={1} />,
            title: "The Toast",
            text: "We arrive with the bar, ice, mixers, garnishes, and TABC-certified staff to serve your guests."
        }
    ];

    return (
        <section className="py-28 bg-brand-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-4">How It Works</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                                {step.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
