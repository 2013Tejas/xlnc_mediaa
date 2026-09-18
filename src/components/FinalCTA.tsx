import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="cta" className="relative w-full py-14 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-10 overflow-hidden border-t border-[#222222] bg-[#030303]">
      {/* Editorial Near-Black Background Layer with Oversized Bronze Elements */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#030303]"
        style={{ contain: 'paint' }}
      >
        {/* 1. Subtle Vignette & Central Atmospheric Tonal Lift */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, #080808 0%, #030303 70%, #010101 100%)`
          }}
        />

        {/* 2. Fine Monochromatic Grain Texture (Overlay at low opacity) */}
        <div 
          className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
          }}
        />

        {/* 3. Architectural Geometry: Left Oversized Ring & Right Oversized Chevron (Responsive 1:1 geometry) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Oversized Ring (Enters from left edge, thick matte bronze) */}
          <div className="absolute -left-[100px] sm:-left-[160px] md:-left-[90px] lg:-left-[40px] top-1/2 -translate-y-1/2 w-[240px] sm:w-[380px] md:w-[540px] lg:w-[720px] aspect-square pointer-events-none">
            <svg viewBox="0 0 700 700" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="ctaRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#756544" stopOpacity="0.92" />
                  <stop offset="45%" stopColor="#66583C" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#4E442F" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              <circle 
                cx="350"
                cy="350"
                r="270"
                stroke="url(#ctaRingGrad)"
                strokeWidth="105"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Right Oversized Chevron (Pointing inward '<', thick matte bronze) */}
          <div className="absolute -right-[100px] sm:-right-[160px] md:-right-[90px] lg:-right-[40px] top-1/2 -translate-y-1/2 w-[240px] sm:w-[380px] md:w-[540px] lg:w-[720px] aspect-square pointer-events-none">
            <svg viewBox="0 0 700 700" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="ctaChevronGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#756544" stopOpacity="0.92" />
                  <stop offset="45%" stopColor="#66583C" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#4E442F" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              <path 
                d="M580 40 L280 350 L580 660"
                stroke="url(#ctaChevronGrad)"
                strokeWidth="105"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Soft Specular Atmospheric Halos behind shapes */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C9A24E] opacity-[0.035] filter blur-3xl pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C9A24E] opacity-[0.035] filter blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Foreground Content Container in Open Text-Friendly Center */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#101010]/85 backdrop-blur-md text-white rounded-3xl p-5 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden border border-[#222222] shadow-[0_24px_70px_rgba(0,0,0,0.65)]"
        >
          {/* Subtle Accent Glow */}
          <div 
            aria-hidden="true" 
            className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A24E]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-3xl relative z-10">
            {/* Intake Status Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2A2A2A] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-[#CEC5B7] mb-5 sm:mb-8 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24E] animate-pulse shrink-0" />
              <span>Currently Accepting New Growth Partners for Q3/Q4</span>
            </div>

            {/* Major Headline Pairing Crisp White and Antique Gold Italic */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-semibold text-[#F2F2F0] tracking-[-0.02em] leading-[1.1] mb-4 sm:mb-6 lg:mb-8">
              Ready to Get{' '}
              <span className="font-serif italic font-normal text-[#C9A24E]">
                More Customers?
              </span>
            </h2>

            {/* Supporting Copy in Crisp Muted White */}
            <p className="text-sm sm:text-base md:text-lg text-[#A3A3A3] leading-relaxed max-w-2xl font-normal mb-6 sm:mb-8 md:mb-10">
              If you’re a high-ticket service business looking to build a more consistent way to acquire customers, let’s talk.
            </p>

            {/* Primary Action Button (High-Contrast Warm Gold Pill) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <button
                id="final-cta-book-btn"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#E5D0A1] text-[#0B0B0B] text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#F1CA6D] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg w-full sm:w-auto"
              >
                <span>Book a Growth Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0B0B0B]" />
              </button>

              <span className="text-xs sm:text-[13px] text-[#8E8678] tracking-normal font-medium text-center sm:text-left">
                30-minute diagnostic session • Zero generic pitches
              </span>
            </div>

            {/* Supporting Trust Indicators with Bronze/Gold Checkmarks */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#222222] grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-[13px] text-[#CEC5B7] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24E] shrink-0" />
                <span>Understand your current bottleneck</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24E] shrink-0" />
                <span>Map your custom acquisition loop</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24E] shrink-0" />
                <span>Determine mutual strategic fit</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
