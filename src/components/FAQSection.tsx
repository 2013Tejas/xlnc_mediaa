import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle, ChevronsUpDown } from 'lucide-react';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onOpenBooking }) => {
  // All FAQ questions start collapsed by default; users click to expand answers
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (openIndices.length === FAQS.length) {
      setOpenIndices([]);
    } else {
      setOpenIndices(FAQS.map((_, i) => i));
    }
  };

  const allOpen = openIndices.length === FAQS.length;

  return (
    <section id="faq" className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 border-t border-[#222222] overflow-hidden">
      {/* Subtle ambient light aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-1/4 w-[300px] sm:w-[450px] md:w-[500px] h-[300px] sm:h-[450px] md:h-[500px] bg-gradient-to-bl from-[#E5D0A1]/[0.05] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14 md:mb-16">
        <div className="max-w-2xl">
          <div className="badge-editorial mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#E5D0A1]" />
            Clarifications &amp; Details
          </div>
          <h2 className="font-headline-lg text-white">
            Frequently Asked{' '}
            <span className="font-serif italic font-normal text-[#E5D0A1]">
              Questions
            </span>
          </h2>
          <p className="font-body-lg text-[#A3A3A3] mt-4 font-normal">
            Everything you need to know about how XLNC Media structures customer acquisition for high-ticket businesses.
          </p>
        </div>

        {/* Toggle all button */}
        <button
          onClick={toggleAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] border border-[#222222] text-xs font-semibold tracking-wide text-[#CEC5B7] hover:text-white hover:border-[#333333] transition-all self-start sm:self-auto cursor-pointer shadow-2xs select-none"
        >
          <ChevronsUpDown className="w-3.5 h-3.5 opacity-70" />
          <span>{allOpen ? 'Collapse All' : 'Expand All'}</span>
        </button>
      </div>

      {/* All FAQ Items List */}
      <div className="max-w-3xl space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          const num = String(idx + 1).padStart(2, '0');
          return (
            <div
              key={idx}
              className="bg-[#121212] border border-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300"
            >
              {/* Question Header */}
              <button
                id={`faq-btn-${idx}`}
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-7 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer select-none group"
              >
                <div className="space-y-1.5 flex-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#666666] uppercase">
                      QUESTION {num}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-[#E5D0A1] transition-colors leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <span className="w-7 h-7 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center shrink-0 text-[#E5D0A1] transition-transform duration-200 group-hover:scale-105 mt-1">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              {/* Answer Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-2 border-t border-[#222222] bg-[#141414]">
                      <div className="text-[10px] font-mono font-bold tracking-widest text-[#E5D0A1] uppercase mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1]" />
                        ANSWER
                      </div>
                      <p className="text-sm sm:text-base text-[#CEC5B7] leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

        {/* Small FAQ Footer note */}
        <div className="max-w-3xl mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#666666]">
          <span>Have an industry-specific scenario?</span>
          <button
            id="faq-contact-cta"
            onClick={onOpenBooking}
            className="font-semibold text-[#E5D0A1] hover:underline cursor-pointer self-start sm:self-auto"
          >
            Ask on a Growth Call →
          </button>
        </div>
      </div>
    </section>
  );
};
