import React from 'react';
import { Drink } from '../types/drink';

import Image from 'next/image';

interface DrinkCardProps {
    drink: Drink;
    featured?: boolean;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink, featured }) => {
    return (
        <div className={`group relative flex flex-col items-center text-center transition-all duration-500 overflow-hidden rounded-lg p-6 ${featured ? 'py-10' : 'py-8'}`}>

            {/* Background Image */}
            {drink.image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={drink.image}
                        alt={drink.name}
                        fill
                        className="object-cover opacity-[0.30] group-hover:opacity-[0.40] transition-opacity duration-700 grayscale mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-full mb-3">
                    <h4 className={`font-display text-brand-cream tracking-wide group-hover:text-brand-primary transition-colors duration-300 ${featured ? 'text-3xl mb-2' : 'text-xl'}`}>
                        {drink.name}
                    </h4>
                </div>

                <p className={`font-sans text-brand-secondary/70 font-light leading-relaxed mb-4 ${featured ? 'text-base max-w-md' : 'text-sm'}`}>
                    {drink.description}
                </p>

                <div className={`flex flex-wrap gap-2 justify-center`}>
                    {drink.ingredients.map((ing, i) => (
                        <span
                            key={i}
                            className="text-[10px] uppercase tracking-[0.15em] text-brand-primary/80 border border-brand-primary/20 px-2.5 py-1 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"
                        >
                            {ing}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default DrinkCard;
