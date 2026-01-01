"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-serif text-white mb-2">TOAST</h2>
                        <p className="text-white/40 text-sm">Mobile Bar Experience</p>
                    </div>

                    {/* Simple Links */}
                    <div className="flex items-center gap-8 text-sm text-zinc-500">
                        <Link href="/mini" className="hover:text-white transition-colors">Kids Parties</Link>
                        <a href="mailto:hello@toastmobile.bar" className="hover:text-white transition-colors">Email</a>
                        <a href="https://instagram.com/ToastMobileBar" target="_blank" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://www.christophertoddvisuals.com/photography" target="_blank" className="hover:text-white transition-colors">Photography</a>
                        <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                        <Link href="/resources/alcohol-buying-guide" className="hover:text-white transition-colors">Buying Guide</Link>
                        <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                        <span className="text-zinc-700">&copy; 2025</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
