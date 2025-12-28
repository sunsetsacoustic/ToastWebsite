import React from 'react';

export const ToastLogo = ({ className = "h-12 w-auto" }: { className?: string }) => (
    <svg
        viewBox="0 0 300 130"
        fill="none"
        className={className}
        aria-label="TOAST Mobile Bar"
    >
        {/* T */}
        <path d="M10 20 H 50 M 30 20 V 80" stroke="#F5F5F5" strokeWidth="6" strokeLinecap="square" />

        {/* O - Stylized Teardrop/Liquid Shape */}
        <g transform="translate(85, 50)">
            {/* Outer Teardrop Shape */}
            <path d="M0 -35 C 20 -35, 35 -15, 35 10 C 35 30, 20 45, 0 45 C -20 45, -35 30, -35 10 C -35 -15, -20 -35, 0 -35"
                stroke="#D4AF37" strokeWidth="5" fill="none" transform="rotate(-15)" />
            {/* Liquid Fill Level */}
            <path d="M-28 12 Q 0 25 28 8 C 30 25, 15 40, 0 40 C -15 40, -30 25, -28 12"
                fill="#D4AF37" opacity="0.9" transform="rotate(-15)" />
            {/* Bubbles */}
            <circle cx="10" cy="-15" r="3" fill="#D4AF37" />
            <circle cx="20" cy="-25" r="2" fill="#D4AF37" />
        </g>

        {/* A */}
        <path d="M140 80 L 160 20 L 180 80 M 150 60 H 170" stroke="#F5F5F5" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round" />

        {/* S */}
        <path d="M200 30 Q 180 30, 180 45 Q 180 60, 210 60 Q 240 60, 240 75 Q 240 90, 210 90" stroke="#F5F5F5" strokeWidth="6" fill="none" />

        {/* T */}
        <path d="M250 20 H 290 M 270 20 V 80" stroke="#F5F5F5" strokeWidth="6" strokeLinecap="square" />

        {/* Subtext */}
        <text x="150" y="115" textAnchor="middle" fill="#D4AF37" fontFamily="sans-serif" fontSize="12" letterSpacing="3" fontWeight="bold">
            MOBILE BAR CO.
        </text>
    </svg>
);
