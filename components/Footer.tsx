"use client";

import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-display font-bold text-white mb-6">Let's Get The Party Started.</h2>
                        <p className="text-white/60 mb-8 leading-relaxed max-w-md">
                            Ready to book? Have questions about the calculator?
                            Fill out the form or reach out directly. We typically respond within 24 hours.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-white/80">
                                <Mail size={20} className="text-brand-gold" />
                                <a href="mailto:hello@toastmobile.bar" className="hover:text-white transition-colors">hello@toastmobile.bar</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/80">
                                <Instagram size={20} className="text-brand-gold" />
                                <a href="https://instagram.com/ToastMobileBar" target="_blank" className="hover:text-white transition-colors">@ToastMobileBar</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/80">
                                <MapPin size={20} className="text-brand-gold" />
                                <span>Serving Houston & Kingwood</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-white/5 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-white/60 tracking-wider">Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-white/60 tracking-wider">Date</label>
                                <input type="date" className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white/80 focus:outline-none focus:border-brand-gold transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2 mb-4">
                            <label className="text-xs uppercase font-bold text-white/60 tracking-wider">Email</label>
                            <input type="email" className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-xs uppercase font-bold text-white/60 tracking-wider">Message</label>
                            <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Tell us about your event..." />
                        </div>

                        <button type="button" className="w-full bg-brand-gold text-brand-dark font-bold py-3 rounded-md uppercase tracking-widest hover:bg-yellow-500 transition-all">
                            Send Inquiry
                        </button>
                    </form>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm">
                    <p>&copy; 2025 Toast Mobile Bar. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white/50">Privacy Policy</a>
                        <a href="#" className="hover:text-white/50">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
