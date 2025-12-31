"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ToastMiniPage() {
    return (
        <main className="min-h-screen bg-[#001F3F] text-white selection:bg-[#00F0FF] selection:text-black font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background "Glow" blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF00FF]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-[0.9]">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00FF00]">COOLEST</span><br />
                            BAR IN TOWN.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
                            Luxury Dirty Soda Bars for the Next Generation. Zero mess, 100% cool.
                        </p>
                        <Link
                            href="/#contact?type=mini"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#00F0FF] text-white font-black text-xl tracking-widest rounded-full shadow-[0_0_30px_rgba(255,0,255,0.5)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:scale-105 transition-all"
                        >
                            BOOK THE PARTY
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Hero Image */}
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#00F0FF]/30 group shadow-2xl shadow-[#00F0FF]/20">
                            <Image
                                src="/images/toast_mini_hero.png"
                                alt="Blue Raspberry Dirty Soda with Gummy Sharks"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONCEPT SECTION */}
            <section className="py-32 bg-black/30 relative">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1"
                    >
                        {/* Concept Image */}
                        <div className="aspect-square bg-gray-900 rounded-3xl border border-[#FF00FF]/30 relative overflow-hidden shadow-2xl shadow-[#FF00FF]/10">
                            <Image
                                src="/images/toast_mini_pouring.png"
                                alt="Pouring Cream into Soda"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
                            Not Your Average <span className="text-[#FF00FF]">Juice Box.</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We bring the viral <strong className="text-white">"Dirty Soda"</strong> trend to your backyard. Crisp sparkling soda, infused with premium fruit syrups, finished with a splash of sweet cream.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mt-4">
                            Zero mess for you, 100% cool for them.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. MENU GRID SECTION */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00FF00] to-[#FF00FF]">
                            The Dirty Menu
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* CARD 1: TIGER'S BLOOD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#001226] border-2 border-[#FF00FF]/50 p-8 rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.15)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] transition-all duration-300 group"
                        >
                            <div className="h-64 bg-black/50 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/images/toast_mini_tiger.png"
                                    alt="Tiger's Blood Soda"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-2 italic">TIGER'S BLOOD 🐯</h3>
                            <p className="text-gray-400 font-medium">Strawberry • Coconut • Cream</p>
                            <div className="mt-6 text-[#FF00FF] text-sm font-bold uppercase tracking-widest border-t border-[#FF00FF]/20 pt-4">
                                Most Popular
                            </div>
                        </motion.div>

                        {/* CARD 2: SHARK ATTACK */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#001226] border-2 border-[#00F0FF]/50 p-8 rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
                        >
                            <div className="h-64 bg-black/50 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/images/toast_mini_hero.png"
                                    alt="Shark Attack Soda"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-2 italic">SHARK ATTACK 🦈</h3>
                            <p className="text-gray-400 font-medium">Blue Rasp • Lime • Gummy Shark</p>
                            <div className="mt-6 text-[#00F0FF] text-sm font-bold uppercase tracking-widest border-t border-[#00F0FF]/20 pt-4">
                                Crowd Favorite
                            </div>
                        </motion.div>

                        {/* CARD 3: THE UNICORN */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#001226] border-2 border-[#6d28d9]/80 p-8 rounded-2xl shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] transition-all duration-300"
                        >
                            <div className="h-64 bg-black/50 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center grayscale-[0.2] hover:grayscale-0 transition-all">
                                {/* Reusing Tiger for Unicorn with slight styling tweak to imply difference, or just use it. */}
                                <Image
                                    src="/images/toast_mini_tiger.png"
                                    alt="The Unicorn Soda"
                                    fill
                                    className="object-cover hue-rotate-30"
                                />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-2 italic">THE UNICORN 🦄</h3>
                            <p className="text-gray-400 font-medium">Cotton Candy • Sprinkles • Cream</p>
                            <div className="mt-6 text-[#9333ea] text-sm font-bold uppercase tracking-widest border-t border-[#9333ea]/20 pt-4">
                                Sweet Treat
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. PACKAGE SECTION */}
            <section className="py-32 bg-black/40">
                <div className="container mx-auto px-6 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/80 backdrop-blur-md border border-[#00FF00]/50 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
                    >
                        {/* Glow bg */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00FF00]/20 rounded-full blur-[80px] pointer-events-none" />

                        <h2 className="text-4xl font-black text-white mb-2 uppercase">The Mini Package</h2>
                        <div className="text-5xl md:text-6xl font-bold text-[#00FF00] mb-8 font-mono">$500 FLAT</div>

                        <ul className="space-y-4 text-left max-w-sm mx-auto mb-10 relative z-10">
                            {[
                                "2 Hours of Service",
                                "Up to 50 Guests",
                                "Full 'Dirty Soda' Bar Setup",
                                "Professional Soda-Tender",
                                "Cups, Straws, Ice Included"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-lg text-gray-200">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FF00]/20 flex items-center justify-center text-[#00FF00]">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="text-sm text-gray-500 mb-8 font-mono">
                            *For ages 6-16. Travel fees may apply outside 20 miles.
                        </div>

                        <Link
                            href="/#contact?type=mini"
                            className="block w-full py-4 bg-[#00FF00] text-black font-black text-xl uppercase tracking-widest rounded-xl hover:bg-[#33ff33] hover:shadow-[0_0_25px_rgba(0,255,0,0.5)] transition-all transform hover:-translate-y-1"
                        >
                            Check Availability
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
