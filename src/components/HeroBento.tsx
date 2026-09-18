import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DarkAmbientBackground } from './DarkAmbientBackground';

interface HeroProps {
  onOpenBooking: () => void;
}

export const HeroBento: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <div 
      id="hero" 
      role="region"
      aria-label="Hero"
      className="hero relative min-h-0 lg:min-h-[94vh] pt-24 sm:pt-28 md:pt-36 lg:pt-44 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden flex flex-col items-center justify-center text-center w-full bg-[#050505] isolate"
    >
      {/* Exact Recreation Background Layer */}
      <DarkAmbientBackground />

      {/* Radiant Ambient Center Glow to prevent empty laptop canvas */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 w-[260px] sm:w-[500px] md:w-[950px] h-[180px] sm:h-[340px] md:h-[520px] bg-gradient-to-b from-[#D8B96A]/14 via-[#B08A3C]/06 to-transparent blur-[70px] sm:blur-[110px] md:blur-[130px] rounded-full z-0 max-w-full" 
      />

      {/* Foreground Content Container with expansive presence (z-10) */}
      <div className="content relative z-10 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center w-full px-2 sm:px-0">
        
        {/* Main Headline: Centered with high-contrast editorial hierarchy */}
        <h1
          className="hero-animate-h1 text-[clamp(28px,7.2vw,44px)] sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] font-extrabold text-white tracking-[-0.035em] leading-[1.14] sm:leading-[1.06] max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-1 sm:px-2 text-center"
        >
          We Help High-Ticket Service Businesses{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5EACB] to-[#D8B96A]">
            Get More Customers Every Month
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          className="hero-animate-p text-[clamp(14px,3.6vw,17px)] sm:text-lg md:text-[19px] lg:text-xl text-[#B3AFA6] max-w-[92%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-normal leading-[1.5] sm:leading-relaxed mt-3.5 sm:mt-5 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 text-center"
        >
          We build customer acquisition systems that help you attract qualified prospects, convert more enquiries, and grow without relying solely on referrals or inconsistent marketing
        </p>

        {/* Twin CTA Buttons */}
        <div
          className="hero-animate-cta flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-[280px] sm:max-w-none mx-auto px-2 sm:px-4"
        >
          {/* Primary CTA: Book a Growth Call with Premium Glow Button */}
          <button
            id="hero-book-call-btn"
            onClick={onOpenBooking}
            style={{
              position: "relative",
              padding: "1.5px",
              borderRadius: "9999px",
              overflow: "hidden",
              cursor: "pointer",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 10px 32px 0px rgba(216, 185, 106, 0.32)",
            }}
            className="w-full sm:w-auto min-h-[48px] group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Spinning Conic Glow Engine (Offloaded to GPU CSS, optimized canvas size) */}
            <div
              className="animate-spin-conic pointer-events-none"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "480px",
                height: "480px",
                background: "conic-gradient(from 0deg, transparent 0%, #D8B96A 20%, #F5E5BA 26%, transparent 50%)",
                zIndex: 0,
              }}
            />

            {/* Inner Content Layer */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                background: "#0D0D0D",
                borderRadius: "9999px",
                padding: "14px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              <span className="text-white text-xs sm:text-[13px] font-semibold tracking-tight whitespace-nowrap">
                Book a Growth Call
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] text-[#D8B96A]" />
            </div>
          </button>

          {/* Secondary CTA: WhatsApp Button */}
          <a
            id="hero-whatsapp-btn"
            href="https://wa.me/message/EZ62J4V347HBL1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#121212]/95 hover:bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#D8B96A]/60 text-[#E5D0A1] hover:text-white text-xs sm:text-[13px] font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-[0px_6px_20px_rgba(216,185,106,0.18)] group whitespace-nowrap"
          >
            <svg
              className="w-4 h-4 text-[#D8B96A] group-hover:text-[#F5E5BA] transition-colors shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] text-[#8E8678] group-hover:text-[#D8B96A] transition-colors shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
