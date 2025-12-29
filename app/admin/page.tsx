'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuManager from '@/components/MenuManager';

export default function AdminMenuPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'toast123') {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center px-6">
                    <div className="w-full max-w-md bg-brand-dark/50 p-8 rounded-lg border border-brand-primary/20 backdrop-blur-sm">
                        <h1 className="text-2xl font-display text-brand-primary mb-6 text-center">Admin Access</h1>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-sans text-brand-secondary/70 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 bg-brand-dark border border-brand-primary/30 rounded focus:outline-none focus:border-brand-primary text-brand-cream"
                                    placeholder="Enter admin password"
                                />
                            </div>
                            {error && <p className="text-red-400 text-sm">Incorrect password</p>}
                            <button
                                type="submit"
                                className="w-full px-6 py-2 bg-brand-primary text-brand-dark font-medium rounded hover:bg-brand-primary/90 transition-colors"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
            <Navbar />
            <div className="pt-24 pb-20">
                <MenuManager />
            </div>
            <Footer />
        </main>
    );
}
