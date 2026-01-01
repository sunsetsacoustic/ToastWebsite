import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuPresenter from '@/components/MenuPresenter';

export const metadata = {
    title: 'Signature Cocktail Menu | TOAST Mobile Bar Co.',
    description: 'View our curated menu of craft cocktails, smoked old fashioneds, and seasonal drinks. The premier dry-hire bar service for Kingwood, Humble, and Atascocita.',
};

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
            <Navbar />
            <div className="pt-24">
                <MenuPresenter />
            </div>
            <Footer />
        </main>
    );
}
