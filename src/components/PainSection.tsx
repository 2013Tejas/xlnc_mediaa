import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, TrendingUp, TrendingDown, Repeat, AlertCircle, ArrowRight } from 'lucide-react';

interface PainSectionProps {
  onOpenBooking: () => void;
}

export const PainSection: React.FC<PainSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 max-w-[1280px] mx-auto border-t border-[#222222]">
      {/* Section Header */}
      <div className="max-w-3xl mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5D0A1]/[0.08] border border-[#E5D0A1]/25 text-[11px] font-bold uppercase tracking-[0.12em] text-[#E5D0A1] mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1]" />
          The Unpredictability Problem
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light md:font-normal tracking-tight text-white leading-[1.08]">
          Getting Customers Shouldn't Feel This{' '}
          <span className="font-serif italic font-normal text-[#E5D0A1]">
            Unpredictable.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#A3A3A3] mt-4 font-normal max-w-2xl leading-relaxed">
          Most high-ticket service businesses operate on an erratic roller-coaster. One great quarter of word-of-mouth followed by months of silence and uncertainty.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
        
        {/* CARD 1: THE ROLLERCOASTER MATRIX (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 bg-[#121212] border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666]">
                THE REVENUE ROLLER-COASTER
              </span>
              <span className="text-xs font-mono text-[#666666]">IRREGULAR CYCLE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {/* Great Month */}
              <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222]">
                <div className="flex items-center gap-2 text-xs font-medium text-white uppercase tracking-wider mb-2">
                  <TrendingUp className="w-4 h-4 text-[#E5D0A1]" />
                  <span>Great Month</span>
                </div>
                <div className="text-2xl font-light text-white">Enquiries ↑</div>
                <p className="text-xs text-[#A3A3A3] mt-1.5 leading-relaxed">
                  Referrals hit at once. Pipeline is full. The team is stretched thin delivering work. Marketing completely halts.
                </p>
              </div>

              {/* Slow Month */}
              <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222]">
                <div className="flex items-center gap-2 text-xs font-medium text-white uppercase tracking-wider mb-2">
                  <TrendingDown className="w-4 h-4 text-[#666666]" />
                  <span>Slow Month</span>
                </div>
                <div className="text-2xl font-light text-[#A3A3A3]">Leads ↓</div>
                <p className="text-xs text-[#A3A3A3] mt-1.5 leading-relaxed">
                  Projects wrap up. Enquiries drop to zero. Panic sets in. Scrambling to post randomly or ask past clients for favours.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#222222] text-xs text-[#A3A3A3]">
            <span className="font-semibold text-white">The Root Cause:</span> Relying on irregular luck rather than an engineered customer intake engine.
          </div>
        </motion.div>

        {/* CARD 2: THE REFERRAL TRAP (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 bg-[#121212] border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666]">
                DEPENDENCY ANALYSIS
              </span>
              <Repeat className="w-4 h-4 text-[#E5D0A1]/70" />
            </div>

            <div className="my-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-1">
                Word-of-Mouth Fragility
              </div>
              <div className="text-xl sm:text-2xl font-light tracking-tight text-white">
                REFERRALS → → →
              </div>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mt-3 leading-relaxed">
                Referrals are wonderful validation of your quality, but they cannot be turned up on demand. When your sole acquisition mechanism is outside your direct control, your business valuation and sanity stay vulnerable.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#161616] border border-[#222222] text-xs font-medium text-[#CEC5B7]">
            <span className="text-white font-semibold">Reality check:</span> You don't control when someone else remembers to recommend you.
          </div>
        </motion.div>

        {/* CARD 3: THE 2:00 AM QUESTION (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-5 bg-[#141414] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        >
          <div>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5D0A1] mb-4">
              THE QUIET ANXIETY
            </div>

            <blockquote className="text-2xl sm:text-3xl font-serif italic text-white leading-tight my-4">
              &ldquo;Where will next month's customers come from?&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mt-4">
              A high-ticket business with exceptional talent should never have to ask this question. When you have a calibrated acquisition system, pipeline visibility becomes a calm mathematical constant.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#666666]">
            <span>Current Status: Uncertainty</span>
            <span className="text-[#E5D0A1] font-semibold">Target: Predictability</span>
          </div>
        </motion.div>

        {/* CARD 4: THE FOUR FRICTION QUESTIONS (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 bg-[#121212] border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666]">
                DIAGNOSTIC QUESTIONS
              </span>
              <HelpCircle className="w-4 h-4 text-[#E5D0A1]/70" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
              {[
                'Why aren’t these leads converting?',
                'Why isn’t our marketing bringing enough customers?',
                'Where are we losing potential customers?',
                'Why does growth feel so unpredictable?'
              ].map((q, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#161616] border border-[#222222] text-xs font-medium text-white flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#222222] text-[#E5D0A1] text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement Card */}
          <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222] text-xs sm:text-sm text-[#CEC5B7] leading-relaxed">
            <span className="font-semibold text-white block mb-1">
              The Fundamental Realization:
            </span>
            Your business may not simply have a marketing problem. It may have a{' '}
            <strong className="text-[#E5D0A1] font-semibold underline decoration-[#E5D0A1]/40">customer acquisition system problem</strong>.
          </div>
        </motion.div>

      </div>
    </section>
  );
};
