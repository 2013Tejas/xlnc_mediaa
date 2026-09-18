import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface SandInverseBannerProps {
  onOpenBooking: () => void;
}

export const SandInverseBanner: React.FC<SandInverseBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F7F3EB] text-[#0B0B0B] rounded-3xl p-5 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.55)] border border-[#E5DFD3]"
      >
        {/* Subtle Architectural Grid Lines in background */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 opacity-[0.035] pointer-events-none [background-image:linear-gradient(to_right,#0B0B0B_1px,transparent_1px),linear-gradient(to_bottom,#0B0B0B_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />

        {/* Ambient Warm Vignette */}
        <div 
          aria-hidden="true" 
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#E5D0A1]/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-3xl relative z-10">
          {/* Eyebrow Inverted Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B]/[0.06] border border-[#0B0B0B]/15 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B0B0B] mb-5 sm:mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#675833]" />
            The High-Ticket Editorial Standard
          </div>

          {/* Accented Headline pairing Manrope & Newsreader Italic */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-[#0B0B0B] tracking-[-0.02em] leading-[1.14] mb-4 sm:mb-6">
            Stop Relying on Word-of-Mouth.{' '}
            <span className="font-serif italic font-normal text-[#675833] block sm:inline">
              Engineer Predictable Authority.
            </span>
          </h2>

          {/* Body Copy in Dark Charcoal */}
          <p className="text-sm sm:text-base md:text-lg text-[#313030] leading-relaxed max-w-2xl font-normal mb-6 sm:mb-10">
            High-ticket service firms don’t scale by shouting in crowded feeds. We architect end-to-end client acquisition ecosystems that turn qualified interest into committed partners consistently.
          </p>

          {/* Contained Flipped Contrast Button & Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <button
              id="sand-inverse-cta-btn"
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0B0B0B] text-[#FFFFFF] text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#1f1e1e] hover:text-[#E5D0A1] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg w-full sm:w-auto text-center"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#E5D0A1]" />
            </button>

            <span className="text-xs sm:text-[13px] text-[#55524B] tracking-normal font-medium">
              30-min bottleneck diagnosis • No generic agency decks
            </span>
          </div>

          {/* Trust Guarantees / Criteria */}
          <div className="mt-10 pt-8 border-t border-[#0B0B0B]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-[13px] text-[#4b463b] font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#675833] shrink-0" />
              <span>Full Pipeline Audit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#675833] shrink-0" />
              <span>Dedicated Systems Blueprint</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#675833] shrink-0" />
              <span>Strict Non-Compete Exclusivity</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
