import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Video } from 'lucide-react';

interface SolutionsBentoProps {
  onOpenBooking: () => void;
}

export const SolutionsBento: React.FC<SolutionsBentoProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="services" 
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 border-t border-[#222222] bg-[#0B0B0B] overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[850px] h-[300px] sm:h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(229,208,161,0.045)_0%,rgba(11,11,11,0)_70%)] rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[radial-gradient(circle,rgba(229,208,161,0.025)_0%,rgba(11,11,11,0)_70%)] rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-8 md:px-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER (Strict Client Copy)                          */}
        {/* ============================================================ */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-[11px] font-mono tracking-[0.25em] text-[#E5D0A1] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
            04 — OUR SERVICES
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-3 sm:mb-4">
            Everything you need to{' '}
            <span className="font-serif italic font-normal text-[#E5D0A1]">
              acquire and grow
            </span>{' '}
            customers.
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-[#A3A3A3] font-normal leading-relaxed max-w-2xl">
            Performance-led acquisition and content designed to move brands forward.
          </p>
        </div>

        {/* ============================================================ */}
        {/* TWO LARGE PREMIUM SERVICE CARDS                              */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

          {/* ---------------------------------------------------------- */}
          {/* SERVICE CARD 01: PERFORMANCE MARKETING                     */}
          {/* ---------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={onOpenBooking}
            className="group relative rounded-3xl bg-gradient-to-b from-[#151515] via-[#111111] to-[#0D0D0D] border border-[#242424] p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-between shadow-[0_12px_44px_rgba(0,0,0,0.45)] hover:border-[#E5D0A1]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Top Subtle Gold Accent Line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5D0A1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Giant Background Number "01" with Low Opacity */}
            <div 
              aria-hidden="true" 
              className="absolute -right-2 -bottom-6 sm:right-2 sm:bottom-0 text-[140px] sm:text-[180px] md:text-[220px] font-mono font-bold leading-none select-none pointer-events-none text-white/[0.025] group-hover:text-[#E5D0A1]/[0.055] group-hover:translate-x-1.5 transition-all duration-700 ease-out"
            >
              01
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-[#202020]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#E5D0A1] uppercase">
                    01
                  </span>
                  <span className="text-xs text-[#444444] font-mono">/</span>
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#888888] uppercase">
                    ACQUISITION
                  </span>
                </div>
                
                <div className="w-9 h-9 rounded-xl bg-[#181818] border border-[#282828] flex items-center justify-center text-[#E5D0A1] group-hover:border-[#E5D0A1]/40 transition-colors">
                  <TrendingUp className="w-4 h-4 text-[#E5D0A1]" />
                </div>
              </div>

              {/* Service Title */}
              <div className="pt-7 pb-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-4">
                  PERFORMANCE
                  <br />
                  MARKETING
                </h3>

                {/* Client Tagline with editorial cadence */}
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#E5D0A1] leading-snug">
                  Drive Growth.
                  <br />
                  Generate Leads.
                  <br />
                  Acquire Customers.
                </p>
              </div>

              {/* Service Deliverables List */}
              <div className="pt-6 border-t border-[#202020]">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-3.5">
                  Core Capabilities
                </div>
                
                <ul className="space-y-3">
                  {[
                    'Meta Ads Management',
                    'Customer Acquisition Campaigns',
                    'Lead Generation'
                  ].map((service, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#EAE5DE] group-hover:text-white transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1A1A1A] border border-[#2B2B2B] group-hover:border-[#E5D0A1]/40 flex items-center justify-center shrink-0 transition-colors">
                        <ArrowUpRight className="w-3 h-3 text-[#E5D0A1]" />
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom-Right Interactive Action Row */}
            <div className="mt-8 pt-5 border-t border-[#202020] flex items-center justify-between relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#777777] group-hover:text-[#E5D0A1] transition-colors">
                Acquire Qualified Customers
              </span>
              <div className="w-10 h-10 rounded-full bg-[#181818] border border-[#282828] flex items-center justify-center text-[#E5D0A1] group-hover:bg-[#E5D0A1] group-hover:text-[#0B0B0B] group-hover:border-[#E5D0A1] transition-all duration-300 shadow-sm shrink-0">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>


          {/* ---------------------------------------------------------- */}
          {/* SERVICE CARD 02: ORGANIC CONTENT CREATION                  */}
          {/* ---------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            onClick={onOpenBooking}
            className="group relative rounded-3xl bg-gradient-to-b from-[#151515] via-[#111111] to-[#0D0D0D] border border-[#242424] p-7 sm:p-9 md:p-11 flex flex-col justify-between shadow-[0_12px_44px_rgba(0,0,0,0.45)] hover:border-[#E5D0A1]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Top Subtle Gold Accent Line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5D0A1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Giant Background Number "02" with Low Opacity */}
            <div 
              aria-hidden="true" 
              className="absolute -right-2 -bottom-6 sm:right-2 sm:bottom-0 text-[140px] sm:text-[180px] md:text-[220px] font-mono font-bold leading-none select-none pointer-events-none text-white/[0.025] group-hover:text-[#E5D0A1]/[0.055] group-hover:translate-x-1.5 transition-all duration-700 ease-out"
            >
              02
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-[#202020]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#E5D0A1] uppercase">
                    02
                  </span>
                  <span className="text-xs text-[#444444] font-mono">/</span>
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#888888] uppercase">
                    CREATIVE
                  </span>
                </div>
                
                <div className="w-9 h-9 rounded-xl bg-[#181818] border border-[#282828] flex items-center justify-center text-[#E5D0A1] group-hover:border-[#E5D0A1]/40 transition-colors">
                  <Video className="w-4 h-4 text-[#E5D0A1]" />
                </div>
              </div>

              {/* Service Title */}
              <div className="pt-7 pb-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase leading-[1.1] mb-4">
                  ORGANIC CONTENT
                  <br />
                  CREATION
                </h3>

                {/* Client Tagline with editorial cadence */}
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#E5D0A1] leading-snug">
                  Create. Engage.
                  <br />
                  Grow Your Brand.
                </p>
              </div>

              {/* Service Deliverables List */}
              <div className="pt-6 border-t border-[#202020]">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-3.5">
                  Core Capabilities
                </div>
                
                <ul className="space-y-3">
                  {[
                    'Ad Creatives',
                    'Video Ads',
                    'Social Media Organic Content'
                  ].map((service, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#EAE5DE] group-hover:text-white transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1A1A1A] border border-[#2B2B2B] group-hover:border-[#E5D0A1]/40 flex items-center justify-center shrink-0 transition-colors">
                        <ArrowUpRight className="w-3 h-3 text-[#E5D0A1]" />
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom-Right Interactive Action Row */}
            <div className="mt-8 pt-5 border-t border-[#202020] flex items-center justify-between relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#777777] group-hover:text-[#E5D0A1] transition-colors">
                Compound Brand Authority
              </span>
              <div className="w-10 h-10 rounded-full bg-[#181818] border border-[#282828] flex items-center justify-center text-[#E5D0A1] group-hover:bg-[#E5D0A1] group-hover:text-[#0B0B0B] group-hover:border-[#E5D0A1] transition-all duration-300 shadow-sm shrink-0">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
