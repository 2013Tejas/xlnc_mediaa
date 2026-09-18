import React from 'react';

export interface DarkAmbientBackgroundProps {
  className?: string;
}

/**
 * DarkAmbientBackground
 * Exact recreation of the reference screenshot background specification:
 * - 90-96% near-black (#050505) canvas with extremely subtle low-strength radial gradient
 * - Upper-left large circular arc ring (950px, border 155px solid rgba(53,51,46,0.30), inset 0 0 80px rgba(0,0,0,0.25))
 * - Lower-right large circular arc ring (900px, border 145px solid rgba(53,51,46,0.28), bronze/charcoal linear gradient)
 * - Exactly four subtle 1px outlined geometric shapes in exact reference coordinates:
 *   1. Star (X: ~176px, Y: ~181px) - stroke rgba(135,125,105,0.22)
 *   2. Triangle (X: ~1630px, Y: ~195px) - stroke rgba(135,125,105,0.20)
 *   3. Pentagon (X: ~353px, Y: ~489px) - stroke rgba(135,125,105,0.22)
 *   4. Diamond (X: ~1347px, Y: ~520px) - stroke rgba(135,125,105,0.20)
 * - Gentle edge vignette and completely empty, dark center reserved for typography
 * - Smooth 24-29s ambient float with prefers-reduced-motion support
 */
export const DarkAmbientBackground: React.FC<DarkAmbientBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`background absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      style={{ contain: 'strict' }}
    >
      {/* 1. Background Rings Layer */}
      <div className="background-rings absolute inset-0 overflow-hidden pointer-events-none">
        {/* Upper-Left Large Circular Arc */}
        <div className="ring ring-left" />

        {/* Lower-Right Large Circular Arc */}
        <div className="ring ring-right" />
      </div>

      {/* 2. Exactly Four 1px Outlined Geometric Decorations */}
      {/* 2.1 Star (Upper-Left: ~10% from left, ~22% from top) */}
      <svg
        className="shape shape-star"
        viewBox="0 0 40 40"
        width="35"
        height="35"
        aria-hidden="true"
      >
        <polygon
          points="20,3 24.5,14 36,15 27,22.5 30,34 20,27.5 10,34 13,22.5 4,15 15.5,14"
          fill="none"
          stroke="rgba(135, 125, 105, 0.22)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 2.2 Triangle (Upper-Right: ~92% from left, ~24% from top) */}
      <svg
        className="shape shape-triangle"
        viewBox="0 0 40 40"
        width="35"
        height="35"
        aria-hidden="true"
      >
        <polygon
          points="20,3 37,34 3,34"
          fill="none"
          stroke="rgba(135, 125, 105, 0.20)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 2.3 Pentagon (Left-Center: ~20% from left, ~60% from top) */}
      <svg
        className="shape shape-pentagon"
        viewBox="0 0 40 40"
        width="35"
        height="35"
        aria-hidden="true"
      >
        <polygon
          points="20,3 37,15 31,35 9,35 3,15"
          fill="none"
          stroke="rgba(135, 125, 105, 0.22)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 2.4 Diamond / Rotated Square (Right-Center: ~76% from left, ~63% from top) */}
      <svg
        className="shape shape-diamond"
        viewBox="0 0 40 40"
        width="35"
        height="35"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="7"
          width="26"
          height="26"
          rx="1"
          transform="rotate(45 20 20)"
          fill="none"
          stroke="rgba(135, 125, 105, 0.20)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 3. Gentle Edge Vignette */}
      <div className="background-vignette" />
    </div>
  );
};
