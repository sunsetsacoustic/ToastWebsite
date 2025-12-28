import React from 'react';

export const ToastLogo = ({ className = "h-12 w-auto", color = "currentColor" }: { className?: string, color?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 150"
        fill="none"
        className={className}
        aria-label="Toast Mobile Bar Co."
    >
        {/* Letter T */}
        <path d="M40 30 H 90" stroke={color} strokeWidth="8" strokeLinecap="square" />
        <path d="M65 30 V 100" stroke={color} strokeWidth="8" strokeLinecap="square" />

        {/* Stylized 'O' (The Tilted Glass) */}
        <g transform="translate(130, 65) rotate(15)">
            {/* Bowl of glass */}
            <path d="M-25 -25 Q 0 25 25 -25" stroke={color} strokeWidth="6" fill="none" />
            {/* Liquid level */}
            <path d="M-20 -10 Q 0 20 20 -10" fill={color} opacity="0.8" />
            {/* Stem */}
            <path d="M0 25 V 50" stroke={color} strokeWidth="4" />
            {/* Base */}
            <path d="M-15 50 H 15" stroke={color} strokeWidth="4" />
            {/* Bubbles */}
            <circle cx="15" cy="-35" r="3" fill={color} />
            <circle cx="25" cy="-45" r="2" fill={color} />
        </g>

        {/* Letter A */}
        <path d="M200 100 L 225 30 L 250 100" stroke={color} strokeWidth="8" strokeLinecap="square" strokeLinejoin="round" />
        <path d="M210 75 H 240" stroke={color} strokeWidth="7" />

        {/* Letter S */}
        <path d="M290 35 Q 260 35 260 55 Q 260 75 290 75 Q 320 75 320 95 Q 320 115 290 115" stroke={color} strokeWidth="8" fill="none" />

        {/* Letter T */}
        <path d="M330 30 H 380" stroke={color} strokeWidth="8" strokeLinecap="square" />
        <path d="M355 30 V 100" stroke={color} strokeWidth="8" strokeLinecap="square" />

        {/* Subtext: MOBILE BAR CO. */}
        <text
            x="210"
            y="140"
            textAnchor="middle"
            fill={color}
            fontFamily="sans-serif"
            fontSize="14"
            letterSpacing="4"
            fontWeight="bold"
        >
            MOBILE BAR CO.
        </text>
    </svg>
);
