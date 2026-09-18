import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PremiumBlackGoldBackground } from './PremiumBlackGoldBackground';

interface QualificationProps {
  onOpenBooking: () => void;
}

export const QualificationSection: React.FC<QualificationProps> = ({ onOpenBooking }) => {
  const goodFit = [
    { title: 'High-Ticket Service Offering', desc: 'Typical engagement, contract, or patient value ranges from $3,000 to $50,000+.' },
    { title: 'Proven Market Offer', desc: 'You have legitimate case studies, happy past clients, and clear domain competence.' },
    { title: 'Operational Capacity to Scale', desc: 'Your team can handle an influx of 5 to 20+ new high-value client engagements monthly.' },
    { title: 'Commitment to Predictable Systems', desc: 'You recognize that long-term pipeline control beats sporadic, uncontrollable spikes.' },
    { title: 'Willing to Invest in Real Growth', desc: 'You view customer acquisition as an essential business asset, not an expense to minimize.' }
  ];

  const notAFit = [
    { title: 'Looking for the Cheapest Vendor', desc: 'If your priority is low-cost commodity labor rather than high-margin revenue impact.' },
    { title: 'Seeking Vanity Social Media Posts', desc: 'We do not run random TikTok dances or empty Instagram aesthetic feeds without conversion intent.' },
    { title: 'Zero Operational Capacity', desc: 'If bringing on three new high-ticket accounts would break your delivery or cause fulfillment failure.' },
    { title: 'Expecting Magic Overnight Spikes', desc: 'Systematic customer acquisition requires calibrated architecture, testing, and continuous feedback.' }
  ];

  return (
    <section 
      id="qualification" 
      role="region"
      aria-label="Partnership Standards"
      className="relative w-full overflow-hidden border-t border-[#1C1C1C] bg-[#020202] py-16 sm:py-20 md:py-24 lg:py-28 isolate"
    >
      {/* Signature Premium Black & Gold Website Background Specification */}
      <PremiumBlackGoldBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-18">
          <div className="badge-editorial mb-4 shadow-2xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[#E5D0A1]" />
            Mutual Partnership Standards
          </div>
          <h2 className="font-headline-lg text-[#F4F4F2]">
            We Work Best With Businesses{' '}
            <span className="font-serif italic font-normal text-[#E5D0A1]">
              Ready to Grow.
            </span>
          </h2>
          <p className="font-body-lg text-[#A8A49C] mt-3 sm:mt-4 font-normal max-w-2xl">
            We limit our active partner roster to maintain exceptional execution velocity and strategic focus. Here is how to know if we are the right match.
          </p>
        </div>

        {/* Split Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* GOOD FIT CARD (7 Cols) */}
          <motion.div
            id="qualification-good-fit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group lg:col-span-7 bg-[#0C0B0A]/95 backdrop-blur-xl border border-[#2B2316] shadow-[0_12px_40px_rgba(0,0,0,0.75)] hover:border-[#D8B96A]/60 hover:shadow-[0_24px_55px_rgba(216,185,106,0.18)] rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            {/* Specular Top Light Beam Line */}
            <div 
              aria-hidden="true" 
              className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5D0A1]/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10" 
            />

            {/* Ambient Warm Golden Corner Spotlight */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[radial-gradient(circle,rgba(216,185,106,0.14)_0%,rgba(139,94,20,0.03)_50%,transparent_70%)] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" 
            />

            {/* Architectural Watermark Lines */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.04] stroke-[#E5D0A1]"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="55" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="30" strokeWidth="1" />
            </svg>

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-5 border-b border-[#221C12] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5D0A1] shadow-[0_0_8px_#E5D0A1] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5D0A1]">
                    IDEAL PARTNER PROFILE
                  </span>
                </div>
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#1A150D] text-[#E5D0A1] border border-[#3E321E]">
                  High Compatibility
                </span>
              </div>

              <div className="space-y-3 my-6">
                {goodFit.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 sm:p-4.5 rounded-2xl bg-[#13110D]/90 border border-[#241E14] hover:border-[#4A3B24] flex items-start gap-3.5 transition-all group/item"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#20180D] border border-[#443319] text-[#E5D0A1] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(229,208,161,0.15)]">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#F4F2EC] tracking-tight group-hover/item:text-[#FFECC2] transition-colors">{item.title}</h4>
                      <p className="text-xs text-[#A8A49C] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#221C12] flex items-center justify-between">
              <span className="text-xs text-[#8C877D] font-normal">Ready to review your pipeline numbers?</span>
              <button
                id="good-fit-apply-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5D0A1] hover:text-[#FFF1D0] transition-colors cursor-pointer"
              >
                <span>Explore Working Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* NOT A FIT CARD (5 Cols) */}
          <motion.div
            id="qualification-not-fit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group lg:col-span-5 bg-[#0C0B0A]/95 backdrop-blur-xl border border-[#262018] shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-[#D8B96A]/60 hover:shadow-[0_24px_55px_rgba(216,185,106,0.18)] rounded-3xl p-7 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            {/* Specular Top Gold Light Beam Line */}
            <div 
              aria-hidden="true" 
              className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5D0A1]/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10" 
            />

            {/* Ambient Warm Golden Corner Spotlight */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[radial-gradient(circle,rgba(216,185,106,0.14)_0%,rgba(139,94,20,0.04)_50%,transparent_70%)] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" 
            />

            {/* Fine Calibration Security Watermark */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.04] stroke-[#E5D0A1]"
              viewBox="0 0 200 200"
              fill="none"
            >
              <rect x="30" y="30" width="140" height="140" rx="20" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" strokeWidth="1" />
              <line x1="100" y1="20" x2="100" y2="180" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="20" y1="100" x2="180" y2="100" strokeWidth="1" strokeDasharray="2 4" />
            </svg>

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-5 border-b border-[#221C12] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5D0A1] shadow-[0_0_8px_#E5D0A1] group-hover:animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C4B495] group-hover:text-[#E5D0A1] transition-colors">
                    DISQUALIFICATION STANDARDS
                  </span>
                </div>
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#18150F] text-[#E5D0A1] border border-[#3E321E]">
                  Zero-Tolerance
                </span>
              </div>

              <div className="space-y-3 my-6">
                {notAFit.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 sm:p-4.5 rounded-2xl bg-[#13110D]/90 border border-[#241E14] hover:border-[#4A3B24] flex items-start gap-3.5 transition-all group/item"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#1F170E] border border-[#3D2C17] text-[#D8B96A] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:border-[#E5D0A1] group-hover/item:text-[#FFF4DD] transition-colors">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#EDE9E1] tracking-tight group-hover/item:text-white transition-colors">{item.title}</h4>
                      <p className="text-xs text-[#A8A49C] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#221C12] flex items-start gap-2.5 text-xs text-[#9E988D] leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#D8B96A] shrink-0 mt-0.5" />
              <span>
                <strong className="font-semibold text-[#E5D0A1]">Operating Candor:</strong> If our acquisition infrastructure is not projected to return a verifiable 5–10× ROI for your unit economics, we decline the engagement upfront.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
