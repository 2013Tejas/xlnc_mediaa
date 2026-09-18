import React from 'react';
import { Sparkle } from 'lucide-react';

interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'slow';
}

const DEFAULT_ITEMS = [
  'CUSTOMER ACQUISITION',
  'HIGH-TICKET SERVICES',
  'LEAD GENERATION',
  'CONVERSION ARCHITECTURE',
  'FOLLOW-UP VELOCITY',
  'GROWTH SYSTEMS',
  'PIPELINE PREDICTABILITY',
  'MEASURABLE PERFORMANCE'
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  className = '',
}) => {
  // 4 identical sets ensures a seamless -50% translateX marquee loop
  const quadItems = [...items, ...items, ...items, ...items];

  return (
    <div
      id="marquee-ticker"
      className={`relative w-full overflow-hidden border-y border-[#181818] bg-[#000000] py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] select-none ${className}`}
      style={{ contain: 'paint' }}
    >
      {/* Top Precision Gold Light Beam Line with Specular Glow */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5D0A1]/60 to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#E5D0A1]/45 blur-[1px] z-20" />

      {/* Bottom Subtle Amber Reflected Light Line */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#B38D46]/40 to-transparent z-20" />

      {/* Static Ambient Spotlights Illuminating the Black Stage */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-20 bg-gradient-to-r from-transparent via-[#E5D0A1]/14 to-transparent blur-2xl z-0" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-16 bg-[#D8B96A]/10 blur-3xl z-0" />
      <div className="pointer-events-none absolute left-3/4 top-1/2 -translate-y-1/2 w-80 h-16 bg-[#D8B96A]/10 blur-3xl z-0" />

      {/* Moving Ambient Light Rays Sweeping Across Words (GPU CSS Keyframes) */}
      <div
        className="pointer-events-none absolute inset-y-0 w-64 sm:w-96 bg-gradient-to-r from-transparent via-[#FFFFFF]/12 to-transparent blur-xl z-10 animate-ray-sweep-1"
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-72 sm:w-[420px] bg-gradient-to-r from-transparent via-[#E5D0A1]/16 to-transparent blur-2xl z-10 animate-ray-sweep-2"
      />

      {/* Left and Right Deep Black Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#000000] via-[#000000]/95 to-transparent z-30" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#000000] via-[#000000]/95 to-transparent z-30" />

      {/* Continuous Marquee Track */}
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap relative z-10">
        {quadItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-10 cursor-default transition-all duration-300"
          >
            {/* Luminous Text With Light Glow and Specular Gradient */}
            <span
              className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F2E8D2] to-[#BBAA85] group-hover:from-[#FFFFFF] group-hover:via-[#FFF6E0] group-hover:to-[#E5D0A1] drop-shadow-[0_0_10px_rgba(229,208,161,0.35)] group-hover:drop-shadow-[0_0_24px_rgba(241,202,109,0.95)]"
              style={{
                textShadow: '0 0 16px rgba(229, 208, 161, 0.28)',
              }}
            >
              {item}
            </span>

            {/* Radiant Sparkle Light Beacon */}
            <div className="relative flex items-center justify-center">
              {/* Outer Breathing Light Halo (GPU CSS Keyframes) */}
              <span
                className="absolute w-4 h-4 rounded-full bg-[#E5D0A1]/30 blur-[4px] animate-halo-breathe"
              />
              {/* Concentrated Light Flare Core */}
              <span className="absolute w-1.5 h-1.5 rounded-full bg-[#FFF8E7] shadow-[0_0_8px_#E5D0A1,0_0_18px_rgba(229,208,161,0.7)]" />
              <Sparkle className="w-2.5 h-2.5 text-[#E5D0A1] fill-[#E5D0A1]/70 relative z-10 opacity-90 group-hover:scale-130 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


