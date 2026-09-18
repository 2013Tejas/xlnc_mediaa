import React from 'react';

export interface PremiumBlackGoldBackgroundProps {
  className?: string;
}

/**
 * PremiumBlackGoldBackground
 * Implements the "Premium Black & Gold Website Background Specification":
 * - Deep near-black background (#020202) with subtle radial atmospheric tone
 * - Upper-left oversized cropped gold ring (matte brushed/anodized dark bronze-to-gold)
 * - Lower-right oversized cropped gold ring with localized rim illumination
 * - Thin bright golden edge highlights (#FFD96A / #F4C84A)
 * - Soft ambient gold glow (#D89D2B at 10-18% opacity)
 * - 55-65% undisturbed central dark negative space
 * - Extremely fine, low-contrast SVG noise texture (<4%)
 * - Ultra-slow subtle ambient light breathing (10-12s)
 * - Fully responsive scaling across mobile, tablet, and wide desktop
 */
export const PremiumBlackGoldBackground: React.FC<PremiumBlackGoldBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`site-background absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#020202] ${className}`}
      style={{
        contain: 'paint',
        backgroundImage: `
          radial-gradient(circle at 12% 8%, rgba(139, 94, 20, 0.12), transparent 28%),
          radial-gradient(circle at 92% 88%, rgba(139, 94, 20, 0.11), transparent 30%),
          radial-gradient(circle at 50% 50%, rgba(5, 5, 5, 0.98), #020202 75%)
        `,
      }}
    >
      {/* 1. Fine Cinematic Grain Texture (<4% opacity) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-screen pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="pbg-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#pbg-noise)" />
      </svg>

      {/* 2. Atmospheric Ambient Gold Glow Beacons */}
      {/* Top-Left Ambient Halo */}
      <div
        className="absolute -top-[180px] -left-[180px] w-[500px] sm:w-[650px] lg:w-[800px] h-[500px] sm:h-[650px] lg:h-[800px] rounded-full blur-[90px] sm:blur-[130px] pointer-events-none opacity-45 sm:opacity-75"
        style={{
          background: 'radial-gradient(circle, rgba(216, 157, 43, 0.18) 0%, rgba(139, 94, 20, 0.08) 50%, transparent 70%)',
        }}
      />

      {/* Bottom-Right Ambient Halo */}
      <div
        className="absolute -bottom-[180px] -right-[180px] w-[480px] sm:w-[620px] lg:w-[780px] h-[480px] sm:h-[620px] lg:h-[780px] rounded-full blur-[90px] sm:blur-[130px] pointer-events-none opacity-45 sm:opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(216, 157, 43, 0.16) 0%, rgba(139, 94, 20, 0.07) 50%, transparent 70%)',
        }}
      />

      {/* 3. Upper-Left Oversized Cropped Gold Ring (SVG Precision) */}
      <div className="absolute -top-[180px] xs:-top-[220px] sm:-top-[360px] lg:-top-[420px] -left-[180px] xs:-left-[220px] sm:-left-[360px] lg:-left-[420px] w-[360px] xs:w-[440px] sm:w-[720px] lg:w-[860px] h-[360px] xs:h-[440px] sm:h-[720px] lg:h-[860px] pointer-events-none">
        <svg
          viewBox="0 0 860 860"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Matte Brushed Dark Bronze to Gold Gradient */}
            <linearGradient id="ul-ring-body" x1="120" y1="120" x2="740" y2="740" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3E2C13" />
              <stop offset="18%" stopColor="#5A421B" />
              <stop offset="38%" stopColor="#8A6326" />
              <stop offset="55%" stopColor="#C49432" />
              <stop offset="68%" stopColor="#F3C449" />
              <stop offset="82%" stopColor="#8A6326" />
              <stop offset="100%" stopColor="#3E2C13" />
            </linearGradient>

            {/* Inner Ring Depth Shadow */}
            <radialGradient id="ul-inner-shadow" cx="430" cy="430" r="430" gradientUnits="userSpaceOnUse">
              <stop offset="58%" stopColor="#020202" stopOpacity="1" />
              <stop offset="65%" stopColor="#1C1409" stopOpacity="0.85" />
              <stop offset="78%" stopColor="#4E3918" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#020202" stopOpacity="0" />
            </radialGradient>

            {/* Radiant Edge Highlight Gradient */}
            <linearGradient id="ul-edge-highlight" x1="200" y1="650" x2="680" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C49432" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#F4C84A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFD96A" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#F4C84A" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8A6326" stopOpacity="0.15" />
            </linearGradient>

            {/* Soft Glow Filter for Edge */}
            <filter id="ul-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ring Base Body: Outer R=410, Inner Hole R=230 (Thickness = 180px) */}
          <path
            d="M 430 20
               A 410 410 0 1 0 430 840
               A 410 410 0 1 0 430 20
               Z
               M 430 200
               A 230 230 0 1 1 430 660
               A 230 230 0 1 1 430 200
               Z"
            fill="url(#ul-ring-body)"
            fillRule="evenodd"
            opacity="0.88"
          />

          {/* Inner Cavity Radial Shadow for Matte Depth */}
          <circle cx="430" cy="430" r="232" fill="#020202" />
          <circle cx="430" cy="430" r="260" fill="url(#ul-inner-shadow)" pointerEvents="none" />

          {/* Precision Outer Rim Subtle Dark Stroke */}
          <circle cx="430" cy="430" r="410" stroke="#2B1F0E" strokeWidth="1.5" />

          {/* Precision Inner Rim Subtle Dark Stroke */}
          <circle cx="430" cy="430" r="230" stroke="#1F160A" strokeWidth="1.5" />

          {/* Animated Golden Edge Highlight (Slow Ambient Breathing ~11s via GPU CSS) */}
          <path
            d="M 430 840 A 410 410 0 0 1 840 430"
            stroke="url(#ul-edge-highlight)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#ul-glow)"
            className="pbg-pulse-11"
          />

          {/* Secondary Inner Edge Reflection Accent */}
          <path
            d="M 430 660 A 230 230 0 0 1 660 430"
            stroke="url(#ul-edge-highlight)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="pbg-pulse-11"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* 4. Lower-Right Oversized Cropped Gold Ring (SVG Precision) */}
      <div className="absolute -bottom-[170px] xs:-bottom-[210px] sm:-bottom-[330px] lg:-bottom-[390px] -right-[170px] xs:-right-[210px] sm:-right-[330px] lg:-right-[390px] w-[340px] xs:w-[420px] sm:w-[680px] lg:w-[820px] h-[340px] xs:h-[420px] sm:h-[680px] lg:h-[820px] pointer-events-none">
        <svg
          viewBox="0 0 820 820"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Matte Brushed Dark Bronze to Gold Gradient for Lower-Right */}
            <linearGradient id="lr-ring-body" x1="700" y1="700" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3E2C13" />
              <stop offset="20%" stopColor="#5A421B" />
              <stop offset="42%" stopColor="#8A6326" />
              <stop offset="58%" stopColor="#C49432" />
              <stop offset="72%" stopColor="#F3C449" />
              <stop offset="85%" stopColor="#8A6326" />
              <stop offset="100%" stopColor="#3E2C13" />
            </linearGradient>

            {/* Inner Ring Depth Shadow */}
            <radialGradient id="lr-inner-shadow" cx="410" cy="410" r="410" gradientUnits="userSpaceOnUse">
              <stop offset="58%" stopColor="#020202" stopOpacity="1" />
              <stop offset="65%" stopColor="#1C1409" stopOpacity="0.85" />
              <stop offset="78%" stopColor="#4E3918" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#020202" stopOpacity="0" />
            </radialGradient>

            {/* Radiant Edge Highlight Gradient along Upper-Left Curve */}
            <linearGradient id="lr-edge-highlight" x1="650" y1="180" x2="180" y2="650" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8A6326" stopOpacity="0.15" />
              <stop offset="28%" stopColor="#F4C84A" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FFD96A" stopOpacity="0.95" />
              <stop offset="72%" stopColor="#F4C84A" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#C49432" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Ring Base Body: Outer R=390, Inner Hole R=220 (Thickness = 170px) */}
          <path
            d="M 410 20
               A 390 390 0 1 0 410 800
               A 390 390 0 1 0 410 20
               Z
               M 410 190
               A 220 220 0 1 1 410 630
               A 220 220 0 1 1 410 190
               Z"
            fill="url(#lr-ring-body)"
            fillRule="evenodd"
            opacity="0.86"
          />

          {/* Inner Cavity Radial Shadow for Matte Depth */}
          <circle cx="410" cy="410" r="222" fill="#020202" />
          <circle cx="410" cy="410" r="250" fill="url(#lr-inner-shadow)" pointerEvents="none" />

          {/* Precision Outer Rim Subtle Dark Stroke */}
          <circle cx="410" cy="410" r="390" stroke="#2B1F0E" strokeWidth="1.5" />

          {/* Precision Inner Rim Subtle Dark Stroke */}
          <circle cx="410" cy="410" r="220" stroke="#1F160A" strokeWidth="1.5" />

          {/* Animated Golden Edge Highlight on Visible Upper-Left Arc (~13s via GPU CSS) */}
          <path
            d="M 410 20 A 390 390 0 0 0 20 410"
            stroke="url(#lr-edge-highlight)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#ul-glow)"
            className="pbg-pulse-13"
          />

          {/* Secondary Inner Edge Reflection Accent */}
          <path
            d="M 410 190 A 220 220 0 0 0 190 410"
            stroke="url(#lr-edge-highlight)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="pbg-pulse-13"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* 5. Central Negative Space Shield: Ensures 55-65% calm center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(2, 2, 2, 0.85) 0%, rgba(2, 2, 2, 0.4) 65%, transparent 100%)',
        }}
      />
    </div>
  );
};
