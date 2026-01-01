'use client';

import React, { useState } from 'react';
import DrinkCard from './DrinkCard';
import { useMenuStore } from '../store/useMenuStore';

const MenuPresenter: React.FC = () => {
    const { drinks } = useMenuStore();

    const featuredDrinks = drinks.filter(d => d.category === 'Featured');
    const signatureDrinks = drinks.filter(d => d.category === 'Signature');
    const classicDrinks = drinks.filter(d => d.category === 'Classic');

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 animate-in fade-in duration-700">
            {/* Header */}
            <div className="text-center mb-20">
                <h1 className="text-3xl md:text-4xl font-display text-brand-primary tracking-wide mb-4">Curated Selections</h1>
                <p className="text-brand-secondary/80 font-light max-w-lg mx-auto">
                    Handcrafted cocktails designed to elevate your celebration. Experience the taste of Texas luxury.
                </p>
            </div>

            {/* Featured Section */}
            {featuredDrinks.length > 0 && (
                <div className="mb-24">
                    <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-brand-secondary/60 mb-10 text-center">Featured Highlights</h3>
                    <div className="flex flex-wrap justify-center gap-12">
                        {featuredDrinks.map((drink) => (
                            <div key={drink.id} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
                                <DrinkCard drink={drink} featured />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Signature Collections */}
            {signatureDrinks.length > 0 && (
                <div className="mb-32">
                    <div className="flex items-center justify-center mb-16">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent mr-4"></span>
                        <h3 className="text-2xl font-display text-brand-primary tracking-widest uppercase text-sm">Signature Collections</h3>
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent ml-4"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
                        {signatureDrinks.map((drink) => (
                            <DrinkCard key={drink.id} drink={drink} />
                        ))}
                    </div>
                </div>
            )}

            {/* Classic Collections */}
            {classicDrinks.length > 0 && (
                <div className="pb-16">
                    <div className="flex items-center justify-center mb-16">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent mr-4"></span>
                        <h3 className="text-2xl font-display text-brand-primary tracking-widest uppercase text-sm">Classic Collections</h3>
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent ml-4"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
                        {classicDrinks.map((drink) => (
                            <DrinkCard key={drink.id} drink={drink} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuPresenter;
