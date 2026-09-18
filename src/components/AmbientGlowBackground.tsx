import React from 'react';

interface AmbientGlowBackgroundProps {
  className?: string;
}

/**
 * AmbientGlowBackground
 * Renders large, soft, semi-transparent radial ambient glows using the champagne gold
 * primary color (#E5D0A1), positioned behind key sections (Hero, Finance Showcase, etc.)
 * with smooth CSS animations to make the glow pulse and drift slowly across the background.
 */
export const AmbientGlowBackground: React.FC<AmbientGlowBackgroundProps> = ({ className = '' }) => {
  return (
    <div 
      aria-hidden="true" 
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 select-none max-w-full ${className}`}
      style={{ contain: 'strict' }}
    >
      {/* 1. Primary Hero Ambient Glow (Champagne #E5D0A1) - Top Center / Hero Matrix */}
      <div className="absolute top-[6%] sm:top-[8%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[680px] md:w-[1000px] lg:w-[1300px] h-[320px] sm:h-[550px] md:h-[750px] lg:h-[900px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-[80px] sm:blur-[130px] md:blur-[160px] animate-glow-drift-1"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(229, 208, 161, 0.28) 0%, 
              rgba(217, 197, 150, 0.16) 35%, 
              rgba(229, 208, 161, 0.05) 60%, 
              transparent 75%
            )`
          }}
        />
      </div>

      {/* 2. Hero-to-Finance Showcase Transition Glow (Champagne #E5D0A1 / Gold #F4CA64) */}
      <div className="absolute top-[22%] sm:top-[24%] md:top-[26%] left-[5%] sm:left-[15%] w-[300px] sm:w-[550px] md:w-[800px] h-[280px] sm:h-[450px] md:h-[650px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-[80px] sm:blur-[130px] md:blur-[170px] animate-glow-drift-2"
          style={{
            background: `radial-gradient(circle at center, 
              rgba(229, 208, 161, 0.24) 0%, 
              rgba(244, 202, 100, 0.12) 40%, 
              rgba(229, 208, 161, 0.03) 65%, 
              transparent 80%
            )`
          }}
        />
      </div>

      {/* 3. Finance & AI Showcase Ambient Flank Glow (East / Right side) */}
      <div className="absolute top-[32%] sm:top-[34%] md:top-[36%] right-[2%] sm:right-[10%] w-[280px] sm:w-[500px] md:w-[750px] h-[260px] sm:h-[420px] md:h-[600px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-[70px] sm:blur-[110px] md:blur-[150px] animate-glow-drift-3"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(229, 208, 161, 0.22) 0%, 
              rgba(217, 197, 150, 0.10) 42%, 
              rgba(229, 208, 161, 0.02) 68%, 
              transparent 80%
            )`
          }}
        />
      </div>

      {/* 4. Lower Mid-Page Atmospheric Champagne Veil */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[850px] h-[300px] sm:h-[500px] md:h-[700px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-[80px] sm:blur-[130px] md:blur-[180px] animate-glow-drift-1"
          style={{
            background: `radial-gradient(circle at center, 
              rgba(229, 208, 161, 0.18) 0%, 
              rgba(229, 208, 161, 0.06) 45%, 
              transparent 75%
            )`
          }}
        />
      </div>
    </div>
  );
};
