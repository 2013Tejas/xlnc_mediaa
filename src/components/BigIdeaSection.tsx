import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BigIdeaSectionProps {
  onOpenBooking: () => void;
}

export const BigIdeaSection: React.FC<BigIdeaSectionProps> = ({ onOpenBooking }) => {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const stages = [
    {
      number: '01',
      label: 'ATTRACT',
      service: 'Performance Marketing',
      description:
        'Reach the right audience through strategic Meta Ads, performance marketing, and customer acquisition campaigns designed to generate quality leads.',
      visualType: 'attract'
    },
    {
      number: '02',
      label: 'ENGAGE',
      service: 'Organic Content Creation',
      description:
        'Build a strong brand presence with creative ad designs, engaging video ads, and consistent social media content that keeps your audience connected.',
      visualType: 'engage'
    },
    {
      number: '03',
      label: 'ACQUIRE',
      service: 'Customer Acquisition',
      description:
        'Turn attention into real business growth through lead generation and customer acquisition campaigns that bring more customers through your doors.',
      visualType: 'acquire'
    }
  ];

  return (
    <section 
      id="system" 
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 border-t border-[#222222] bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(229,208,161,0.045)_0%,rgba(10,10,10,0)_70%)] rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[radial-gradient(circle,rgba(229,208,161,0.03)_0%,rgba(10,10,10,0)_70%)] rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-8 md:px-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER (Client-Provided Copy)                        */}
        {/* ============================================================ */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#282828] text-[11px] font-mono tracking-[0.25em] text-[#E5D0A1] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
            05 — OUR SYSTEM
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-3 sm:mb-4">
            From attention{' '}
            <span className="font-serif italic font-normal text-[#E5D0A1]">
              to acquisition.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-[#A3A3A3] font-normal leading-relaxed max-w-2xl">
            A connected system designed to attract the right audience, build engagement, and turn attention into business growth.
          </p>

          {/* Quick System Sequence Indicator */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl bg-[#121212] border border-[#222222] text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase text-[#888888]">
            <span className={hoveredStage === 0 ? 'text-[#E5D0A1] font-semibold' : 'text-white'}>01 ATTRACT</span>
            <span className="text-[#444444]">→</span>
            <span className={hoveredStage === 1 ? 'text-[#E5D0A1] font-semibold' : 'text-white'}>02 ENGAGE</span>
            <span className="text-[#444444]">→</span>
            <span className={hoveredStage === 2 ? 'text-[#E5D0A1] font-semibold' : 'text-[#E5D0A1]'}>03 ACQUIRE</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CONNECTED THREE-STAGE PROGRESSION SYSTEM                     */}
        {/* ============================================================ */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting System Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[64px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#E5D0A1]/20 via-[#E5D0A1]/40 to-[#E5D0A1]/70 pointer-events-none z-0 overflow-hidden"
          >
            {/* GPU-Accelerated Flow Pulse */}
            <div 
              className="w-24 h-[2px] -top-[0.5px] bg-gradient-to-r from-transparent via-[#E5D0A1] to-transparent absolute animate-system-pulse"
            />
          </div>

          {/* 3 Stage Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const isLast = idx === 2;
              const isHovered = hoveredStage === idx;

              return (
                <div key={stage.number} className="relative flex flex-col">
                  
                  {/* Mobile Vertical Connecting Line (Between Stage 1->2 and 2->3) */}
                  {idx < 2 && (
                    <div 
                      aria-hidden="true" 
                      className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-b from-[#E5D0A1]/40 to-[#E5D0A1]/20 z-20 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] opacity-75" />
                    </div>
                  )}

                  {/* Stage Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredStage(idx)}
                    onMouseLeave={() => setHoveredStage(null)}
                    className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden h-full ${
                      isLast
                        ? 'bg-gradient-to-b from-[#181612] via-[#131210] to-[#0D0D0C] border border-[#E5D0A1]/35 shadow-[0_12px_44px_rgba(0,0,0,0.55)] hover:border-[#E5D0A1]/60 hover:shadow-[0_20px_50px_rgba(229,208,161,0.12)]'
                        : 'bg-gradient-to-b from-[#141414] via-[#111111] to-[#0D0D0D] border border-[#242424] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#E5D0A1]/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.55)]'
                    } hover:-translate-y-1`}
                  >
                    {/* Top Specular Accent Line */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 pointer-events-none ${
                        isLast 
                          ? 'bg-gradient-to-r from-transparent via-[#E5D0A1]/60 to-transparent opacity-80' 
                          : 'bg-gradient-to-r from-transparent via-[#E5D0A1]/40 to-transparent opacity-0 group-hover:opacity-100'
                      }`} 
                    />

                    {/* Giant Low-Opacity Background Number */}
                    <div 
                      aria-hidden="true" 
                      className="absolute -right-2 -bottom-4 text-[120px] sm:text-[140px] font-mono font-bold leading-none select-none pointer-events-none text-white/[0.02] group-hover:text-[#E5D0A1]/[0.05] group-hover:translate-x-1 transition-all duration-500"
                    >
                      {stage.number}
                    </div>

                    <div>
                      {/* Card Top Meta Bar */}
                      <div className="flex items-center justify-between pb-5 border-b border-[#202020] mb-6">
                        <div className="flex items-center gap-2.5">
                          <span className={`text-xs font-mono font-bold tracking-[0.2em] uppercase ${
                            isLast ? 'text-[#E5D0A1]' : 'text-[#CCCCCC]'
                          }`}>
                            STAGE {stage.number}
                          </span>
                          <span className="text-xs text-[#444444] font-mono">/</span>
                          <span className="text-[10px] font-mono tracking-[0.2em] text-[#777777] uppercase">
                            03
                          </span>
                        </div>

                        {isLast ? (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E5D0A1]/10 border border-[#E5D0A1]/30 text-[10px] font-mono text-[#E5D0A1] uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
                            Outcome
                          </div>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-[#2A2A2A] group-hover:bg-[#E5D0A1]/50 transition-colors" />
                        )}
                      </div>

                      {/* Visually Dominant Stage Label */}
                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-[#FFF8EC] transition-colors leading-none mb-2">
                        {stage.label}
                      </h3>

                      {/* Secondary Service Name */}
                      <div className="text-xs font-mono tracking-[0.18em] uppercase text-[#E5D0A1] font-semibold mb-5">
                        {stage.service}
                      </div>

                      {/* Abstract Visual Language Representation (CSS/SVG) */}
                      <div className="my-5 p-4 rounded-2xl bg-[#0E0E0E] border border-[#1F1F1F] group-hover:border-[#2C2C2C] transition-colors overflow-hidden relative">
                        
                        {/* 01: ATTRACT - Concentric Circles / Radial Targeting Signal */}
                        {stage.visualType === 'attract' && (
                          <div className="h-24 w-full flex items-center justify-center relative">
                            {/* Outer Pulse Ring */}
                            <div className="absolute w-20 h-20 rounded-full border border-[#E5D0A1]/20 group-hover:scale-110 transition-transform duration-700" />
                            {/* Middle Ring */}
                            <div className="absolute w-14 h-14 rounded-full border border-[#E5D0A1]/35 group-hover:border-[#E5D0A1]/60 transition-colors duration-500" />
                            {/* Inner Ring */}
                            <div className="absolute w-8 h-8 rounded-full border border-[#E5D0A1]/50 group-hover:border-[#E5D0A1] transition-colors duration-300" />
                            {/* Center Target Point */}
                            <div className="w-2.5 h-2.5 rounded-full bg-[#E5D0A1] shadow-[0_0_10px_#E5D0A1] z-10" />
                            
                            {/* Subtle Crosshairs */}
                            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5D0A1]/20 to-transparent pointer-events-none" />
                            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#E5D0A1]/20 to-transparent pointer-events-none" />

                            <div className="absolute bottom-1 right-2 text-[9px] font-mono text-[#666666] tracking-wider uppercase">
                              PRECISION REACH
                            </div>
                          </div>
                        )}

                        {/* 02: ENGAGE - Interconnected Dynamic Content Nodes */}
                        {stage.visualType === 'engage' && (
                          <div className="h-24 w-full flex items-center justify-center relative">
                            <svg className="w-full h-full" viewBox="0 0 200 80">
                              {/* Connection Lines */}
                              <line x1="30" y1="40" x2="75" y2="25" stroke="#E5D0A1" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                              <line x1="75" y1="25" x2="125" y2="55" stroke="#E5D0A1" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                              <line x1="125" y1="55" x2="170" y2="35" stroke="#E5D0A1" strokeWidth="1.2" strokeOpacity="0.5" />
                              <line x1="75" y1="25" x2="170" y2="35" stroke="#E5D0A1" strokeWidth="1" strokeOpacity="0.2" />

                              {/* Nodes */}
                              <circle cx="30" cy="40" r="4" fill="#1C1C1C" stroke="#E5D0A1" strokeWidth="1.5" />
                              <circle cx="75" cy="25" r="5" fill="#E5D0A1" fillOpacity="0.2" stroke="#E5D0A1" strokeWidth="1.5" />
                              <circle cx="125" cy="55" r="5" fill="#E5D0A1" fillOpacity="0.2" stroke="#E5D0A1" strokeWidth="1.5" />
                              <circle cx="170" cy="35" r="5.5" fill="#E5D0A1" stroke="#FFFFFF" strokeWidth="1.5" />
                            </svg>

                            <div className="absolute bottom-1 right-2 text-[9px] font-mono text-[#666666] tracking-wider uppercase">
                              BRAND RESONANCE
                            </div>
                          </div>
                        )}

                        {/* 03: ACQUIRE - Upward Progression / Customer Conversion Funnel Node */}
                        {stage.visualType === 'acquire' && (
                          <div className="h-24 w-full flex items-center justify-center relative">
                            <svg className="w-full h-full" viewBox="0 0 200 80">
                              <defs>
                                <linearGradient id="acquireGradient" x1="0" y1="1" x2="0" y2="0">
                                  <stop offset="0%" stopColor="#E5D0A1" stopOpacity="0.05" />
                                  <stop offset="100%" stopColor="#E5D0A1" stopOpacity="0.3" />
                                </linearGradient>
                              </defs>
                              
                              {/* Funnel to Destination Apex */}
                              <path d="M 20 65 L 80 50 L 140 25 L 175 16" fill="none" stroke="#E5D0A1" strokeWidth="2.5" strokeLinecap="round" />
                              <path d="M 20 65 L 80 50 L 140 25 L 175 16 L 175 70 L 20 70 Z" fill="url(#acquireGradient)" />

                              {/* Stepping Nodes */}
                              <circle cx="20" cy="65" r="3" fill="#888888" />
                              <circle cx="80" cy="50" r="3.5" fill="#E5D0A1" />
                              <circle cx="140" cy="25" r="4" fill="#E5D0A1" />
                              <circle cx="175" cy="16" r="6" fill="#E5D0A1" stroke="#FFFFFF" strokeWidth="2" />
                            </svg>

                            <div className="absolute bottom-1 right-2 text-[9px] font-mono text-[#E5D0A1] tracking-wider uppercase font-semibold">
                              CONVERSION PEAK
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Exact Client-Provided Description */}
                      <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed font-normal mt-4">
                        {stage.description}
                      </p>
                    </div>

                    {/* Bottom Status / Progression Meta */}
                    <div className="mt-7 pt-4 border-t border-[#202020] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#666666] tracking-wider uppercase">
                        {idx === 0 && 'Stage 01 → Input'}
                        {idx === 1 && 'Stage 02 → Engine'}
                        {idx === 2 && 'Stage 03 → Outcome'}
                      </span>
                      <span className={`flex items-center gap-1 font-semibold ${
                        isLast ? 'text-[#E5D0A1]' : 'text-[#888888] group-hover:text-[#E5D0A1]'
                      } transition-colors`}>
                        {idx < 2 ? 'Next Stage →' : 'Compounding Revenue'}
                      </span>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ============================================================ */}
        {/* CONVERSION BOTTOM CALLOUT                                     */}
        {/* ============================================================ */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#111111] border border-[#242424] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#E5D0A1] mb-2">
              <Sparkles className="w-3 h-3" />
              CONNECTED ACQUISITION FRAMEWORK
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-1">
              Ready to install this three-stage system in your business?
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              We diagnose, build, and optimize your complete acquisition journey from attention to predictable revenue.
            </p>
          </div>

          <button
            id="system-cta-booking"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#E5D0A1] text-[#0B0B0B] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#F1CA6D] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-md shrink-0 font-mono"
          >
            <span>Schedule System Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
