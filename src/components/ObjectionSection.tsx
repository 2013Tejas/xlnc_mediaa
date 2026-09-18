import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BOTTLENECK_DATA } from '../data';
import { BottleneckType } from '../types';
import { HelpCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface ObjectionProps {
  onOpenBooking: (bottleneck?: string) => void;
}

export const ObjectionSection: React.FC<ObjectionProps> = ({ onOpenBooking }) => {
  const [selectedBottleneck, setSelectedBottleneck] = useState<BottleneckType>('FOLLOW_UP');

  const currentInfo = BOTTLENECK_DATA.find((b) => b.id === selectedBottleneck) || BOTTLENECK_DATA[0];

  return (
    <section id="diagnostic" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 lg:px-10 max-w-[1200px] mx-auto border-t border-[#222222]">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16 md:mb-18">
        <div className="badge-editorial mb-4 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#E5D0A1]" />
          Individualized Architecture
        </div>
        <h2 className="font-headline-lg text-white">
          Will This Work for{' '}
          <span className="font-serif italic font-normal text-[#E5D0A1]">
            My Business?
          </span>
        </h2>
        <p className="font-body-lg text-[#A3A3A3] mt-3 sm:mt-4 font-normal max-w-2xl">
          Every high-ticket service is constrained by a different limiting factor. We do not sell one-size-fits-all packages. We diagnose your specific pipeline breakdown and build directly around it.
        </p>
      </div>

      {/* Interactive Diagnostic Bento Component */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Selector Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666] px-2 mb-1">
            SELECT YOUR BIGGEST HYPOTHETICAL BREAKDOWN:
          </span>
          {BOTTLENECK_DATA.map((item) => {
            const isSelected = item.id === selectedBottleneck;
            return (
              <button
                key={item.id}
                id={`btn-diag-${item.id}`}
                onClick={() => setSelectedBottleneck(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#181716] text-white border-[#E5D0A1]/50 shadow-sm'
                    : 'bg-[#121212] text-[#CEC5B7] border-[#222222] shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:border-[#333333]'
                }`}
              >
                <div>
                  <div className={`text-xs font-medium tracking-tight uppercase ${isSelected ? 'text-[#E5D0A1]' : 'text-white'}`}>
                    {item.label}
                  </div>
                  <div
                    className={`text-xs mt-0.5 line-clamp-1 ${
                      isSelected ? 'text-white/80' : 'text-[#888888]'
                    }`}
                  >
                    {item.symptom}
                  </div>
                </div>

                <div
                  className={`w-2 h-2 rounded-full shrink-0 ml-3 transition-colors ${
                    isSelected ? 'bg-[#E5D0A1] shadow-[0_0_8px_rgba(229,208,161,0.6)]' : 'bg-[#2a2a2a]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Inspection & Solution Panel (7 Cols) */}
        <div className="lg:col-span-7 bg-[#121212] border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentInfo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#222222] mb-6">
                <div>
                  <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-[#666666] block">
                    DIAGNOSTIC TARGET
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mt-1">
                    {currentInfo.label} Bottleneck
                  </h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E5D0A1]/10 border border-[#E5D0A1]/20 text-[#E5D0A1]">
                  Custom Blueprint
                </span>
              </div>

              {/* Symptom & Core Issue */}
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222]">
                  <span className="text-[10px] font-mono uppercase text-[#666666] font-medium tracking-[0.15em] block mb-1">
                    WHAT YOU EXPERIENCE
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-white leading-snug">
                    &ldquo;{currentInfo.symptom}&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222]">
                  <span className="text-[10px] font-mono uppercase text-[#666666] font-medium tracking-[0.15em] block mb-1">
                    UNDERLYING STRUCTURAL CAUSE
                  </span>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    {currentInfo.coreIssue}
                  </p>
                </div>

                {/* XLNC Tailored Solution */}
                <div className="p-5 rounded-2xl bg-[#141414] text-white border border-[#222222] shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-medium text-[#E5D0A1] tracking-[0.15em] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>HOW XLNC BUILDS AROUND THIS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#CEC5B7] leading-relaxed font-normal mb-3">
                    {currentInfo.xlncSolution}
                  </p>
                  <div className="pt-3 border-t border-[#222222] flex items-center gap-2 text-xs text-[#A3A3A3]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5D0A1] shrink-0" />
                    <span>Expected Metric Impact: <strong className="text-white font-medium">{currentInfo.metricImpact}</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Clarification */}
          <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs text-[#A3A3A3] font-normal max-w-sm">
              XLNC identifies the biggest opportunity in your customer acquisition journey and builds around it.
            </div>

            <button
              id="diagnostic-book-call-btn"
              onClick={() => onOpenBooking(currentInfo.label)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E5D0A1] text-[#0B0B0B] text-xs uppercase font-semibold tracking-wider rounded-full hover:bg-[#F1CA6D] transition-all hover:scale-[1.02] self-start sm:self-auto cursor-pointer shadow-xs"
            >
              <span>Solve This Bottleneck</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
