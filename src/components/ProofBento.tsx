import React from 'react';
import { CLIENT_SCREENSHOTS } from '../data';

interface ProofBentoProps {
  onOpenBooking?: () => void;
}

export const ProofBento: React.FC<ProofBentoProps> = () => {
  // Fixed order of the 4 original client screenshots:
  // 1. Nikhil Sir  (Top Left)
  // 2. Sportygen   (Top Right)
  // 3. Match Point (Bottom Left)
  // 4. Salman Bhai (Bottom Right)
  return (
    <section 
      id="results" 
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden border-t border-[#EBDDC7] border-b border-[#EBDDC7]"
      style={{
        backgroundColor: '#FBF5E8',
        backgroundImage: `
          radial-gradient(circle at 50% 15%, rgba(255, 255, 255, 0.45), transparent 45%),
          radial-gradient(rgba(80, 60, 30, 0.025) 0.6px, transparent 0.6px)
        `,
        backgroundSize: '100% 100%, 4px 4px'
      }}
    >
      {/* Anchor targets for internal navigation */}
      <span id="testimonials" className="sr-only" />
      <span id="proof" className="sr-only" />

      <div className="relative z-10 max-w-[1040px] mx-auto">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D5] border border-[#E0D5C1] text-[#171717] text-[11px] font-semibold uppercase tracking-[0.14em] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B96A]" />
            CLIENT TESTIMONIALS &amp; VERIFIED PROOF
          </div>
          <h2 className="font-headline-lg text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Trusted by Businesses That{' '}
            <span className="font-serif italic font-normal text-[#171717]">
              Wanted to Grow.
            </span>
          </h2>
          <p className="mt-2 text-[#5A5243] text-xs sm:text-sm font-normal">
            Direct WhatsApp client communication &amp; verified performance results.
          </p>
        </div>

        {/* ============================================================ */}
        {/* CLEAN 2×2 ORIGINAL SCREENSHOT GRID (1 COLUMN ON MOBILE)       */}
        {/* All cards have the EXACT same visible dimensions             */}
        {/* ============================================================ */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-9 max-w-[360px] xs:max-w-[380px] sm:max-w-full mx-auto items-center"
        >
          {CLIENT_SCREENSHOTS.map((item, index) => (
            <div
              key={item.id}
              className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0B0E11] shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-[#D8CDBC]/60 flex items-center justify-center p-2 xs:p-2.5 sm:p-3 transition-all duration-300 ease-out md:hover:-translate-y-[3px] md:hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] cursor-default select-none"
            >
              <picture className="w-full h-full flex items-center justify-center">
                <source
                  type="image/webp"
                  srcSet={`${item.mobileScreenshotUrl || item.screenshotUrl} 680w, ${item.screenshotUrl} 1206w`}
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 460px, 500px"
                />
                <img
                  src={item.fallbackUrl || item.screenshotUrl}
                  alt={`${item.displayName || 'Client'} verified campaign results and client communication`}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain block pointer-events-none rounded-xl"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </picture>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
