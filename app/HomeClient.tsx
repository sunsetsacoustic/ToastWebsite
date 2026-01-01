"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToastCalculator from "@/components/ToastCalculator";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function HomeClient() {
    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
            <Navbar />
            <Hero />
            <div id="calculator" className="py-20 relative z-10">
                <ToastCalculator />
            </div>
            <div id="how-it-works">
                <HowItWorks />
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="services">
                <Services />
            </div>
            <Contact />
            <Footer />
        </main>
    );
}
