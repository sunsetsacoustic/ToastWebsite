import React from 'react';

interface BrandLogoProps {
    className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-10" }) => {
    return (
        <div className={`flex items-baseline gap-[1px] ${className} text-white font-sans font-light tracking-widest select-none`}>
            {/* T */}
            <span className="text-3xl leading-none">T</span>

            {/* O - Custom SVG Replacement */}
            <div className="relative flex items-center justify-center w-8 h-8 self-center mx-0.5">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Circle Container */}
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />

                    {/* Sine Wave - Liquid Effect */}
                    <path
                        d="M10 70 Q 30 60, 50 70 T 90 70"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* AST */}
            <span className="text-3xl leading-none">A</span>
            <span className="text-3xl leading-none">S</span>
            <span className="text-3xl leading-none">T</span>
        </div>
    );
};
