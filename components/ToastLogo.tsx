import React from 'react';

export const ToastLogo = ({ className = "h-12 w-auto" }: { className?: string }) => (
    <svg viewBox="0 0 300 100" fill="none" className={className} aria-label="TOAST Mobile Bar">
        {/* T */}
        <path d="M10 20 H 50 M 30 20 V 80" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="square" />

        {/* O - Teardrop Shape */}
        <g transform="translate(85, 50)">
            <path d="M0 -35 C 20 -35, 35 -15, 35 10 C 35 30, 20 45, 0 45 C -20 45, -35 30, -35 10 C -35 -15, -20 -35, 0 -35"
                stroke="#E2E8F0" strokeWidth="5" fill="none" transform="rotate(-15)" />
            {/* Liquid Fill */}
            <path d="M-28 12 Q 0 25 28 8 C 30 25, 15 40, 0 40 C -15 40, -30 25, -28 12"
                fill="#7DA0B1" opacity="0.9" transform="rotate(-15)" />
            <circle cx="10" cy="-15" r="3" fill="#E2E8F0" />
            <circle cx="20" cy="-25" r="2" fill="#E2E8F0" />
        </g>

        {/* A */}
        <path d="M140 80 L 160 20 L 180 80 M 150 60 H 170" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round" />

        {/* S */}
        <path d="M200 30 Q 180 30, 180 45 Q 180 60, 210 60 Q 240 60, 240 75 Q 240 90, 210 90" stroke="#E2E8F0" strokeWidth="6" fill="none" />

        {/* T */}
        <path d="M250 20 H 290 M 270 20 V 80" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="square" />

        {/* Subtext */}
        <text x="150" y="115" textAnchor="middle" fill="#7DA0B1" fontFamily="sans-serif" fontSize="12" letterSpacing="3" fontWeight="bold">
            MOBILE BAR CO.
        </text>
    </svg>
);
