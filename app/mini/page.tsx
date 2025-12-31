"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ToastMiniPage() {
    return (
        <main className="min-h-screen bg-[#0a1f35] text-white selection:bg-slate-500 selection:text-white font-sans overflow-x-hidden">
            <Navbar />
            {/* GLOBAL VIGNETTE BACKGROUND */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, #0a1f35 0%, #000000 100%)' }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <h1 className="text-5xl md:text-7xl font-light tracking-[0.1em] text-white mb-6 uppercase">
                            The Mini Bar.
                        </h1>
                        <p className="text-xl text-gray-300 font-light tracking-wide mb-10 max-w-lg mx-auto lg:mx-0">
                            Luxury Dirty Sodas. Zero Mess.
                        </p>
                        <Link
                            href="/#contact?type=mini"
                            className="inline-block px-10 py-4 bg-slate-600/80 hover:bg-slate-500 text-white font-medium text-sm tracking-[0.2em] uppercase rounded-sm border border-white/10 transition-all duration-500 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            Book The Party
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        {/* Spotlight Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                        {/* Hero Image */}
                        <div className="relative w-[300px] md:w-[400px] aspect-[4/5]">
                            <Image
                                src="/images/toast_mini_hero_luxury.png"
                                alt="Blue Raspberry Dirty Soda"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONCEPT SECTION */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Concept Image */}
                        <div className="aspect-square relative rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                            <Image
                                src="/images/toast_mini_pouring_luxury.png"
                                alt="Pouring Cream into Soda"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase mb-8 text-white">
                            Not Your Average <br /><span className="font-serif italic capitalize text-slate-300">Juice Box</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                            <p>
                                We bring the viral <strong className="text-white font-medium">"Dirty Soda"</strong> trend to your backyard. Crisp sparkling soda, infused with premium fruit syrups, finished with a splash of sweet cream.
                            </p>
                            <p>
                                Zero mess for you, 100% cool for them.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. MENU GRID SECTION */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase text-white">
                            The Menu
                        </h2>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-8" />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* CARD 1: TIGER'S BLOOD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-sm transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04]"
                        >
                            <div className="h-64 mb-8 relative flex items-center justify-center">
                                {/* Use Luxury Tiger Image */}
                                <Image
                                    src="/images/toast_mini_tiger_luxury.png"
                                    alt="Tiger's Blood Soda"
                                    fill
                                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-light tracking-[0.1em] text-white mb-3 uppercase">Tiger's Blood 🐯</h3>
                                <p className="text-gray-400 font-light text-sm tracking-wide">Strawberry • Coconut • Cream</p>
                            </div>
                        </motion.div>

                        {/* CARD 2: SHARK ATTACK */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group p-8 rounded-sm transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04]"
                        >
                            <div className="h-64 mb-8 relative flex items-center justify-center">
                                {/* Reusing Luxury Hero for Shark Attack (Blue) */}
                                <Image
                                    src="/images/toast_mini_hero_luxury.png"
                                    alt="Shark Attack Soda"
                                    fill
                                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-light tracking-[0.1em] text-white mb-3 uppercase">Shark Attack 🦈</h3>
                                <p className="text-gray-400 font-light text-sm tracking-wide">Blue Rasp • Lime • Gummy Shark</p>
                            </div>
                        </motion.div>

                        {/* CARD 3: THE UNICORN */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group p-8 rounded-sm transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04]"
                        >
                            <div className="h-64 mb-8 relative flex items-center justify-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                                {/* Using Tiger image again but tweaked via CSS as placeholder for Unicorn until specific asset exists, or just keep it distinct by context */}
                                <Image
                                    src="/images/toast_mini_tiger_luxury.png"
                                    alt="The Unicorn Soda"
                                    fill
                                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 hue-rotate-30"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-light tracking-[0.1em] text-white mb-3 uppercase">The Unicorn 🦄</h3>
                                <p className="text-gray-400 font-light text-sm tracking-wide">Cotton Candy • Sprinkles • Cream</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. PACKAGE SECTION */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6 max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border border-white/10 bg-white/[0.02] backdrop-blur-xl p-12 md:p-16 text-center relative"
                    >
                        <h2 className="text-2xl font-light tracking-[0.2em] text-white mb-6 uppercase">The Mini Package</h2>
                        <div className="text-4xl md:text-5xl font-light text-slate-300 mb-10 tracking-widest">$500 FLAT</div>

                        <ul className="space-y-6 text-left max-w-xs mx-auto mb-12">
                            {[
                                "2 Hours of Service",
                                "Up to 50 Guests",
                                "Full 'Dirty Soda' Bar Setup",
                                "Professional Soda-Tender",
                                "Cups, Straws, Ice Included"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-4 text-gray-300 font-light tracking-wide">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                                        <Check size={10} className="text-white" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="text-xs text-gray-600 mb-10 tracking-widest uppercase">
                            *For ages 6-16. Travel fees may apply outside 20 miles.
                        </div>

                        <Link
                            href="/#contact?type=mini"
                            className="block w-full py-4 bg-slate-600 hover:bg-slate-500 text-white font-medium text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-lg"
                        >
                            Check Availability
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
