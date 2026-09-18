import React from 'react';
import { motion } from 'motion/react';
import { EyeOff, Layers, Crosshair, Users2 } from 'lucide-react';
import { PremiumBlackGoldBackground } from './PremiumBlackGoldBackground';

export const WhyXLNC: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'We Look Beyond Marketing Activity.',
      detail: 'Most agencies obsess over posting cadence, cosmetic graphics, and top-of-funnel impressions. We focus on the entire journey: from prospect awareness to signed contract and retained revenue.',
      icon: EyeOff
    },
    {
      number: '02',
      title: 'We Don’t Sell Random Deliverables.',
      detail: 'You won’t find a generic buffet of disconnected services here. We only deploy the exact assets and systems needed to solve the specific bottleneck strangling your pipeline today.',
      icon: Layers
    },
    {
      number: '03',
      title: 'We Focus on the Bottleneck.',
      detail: 'If your response time is slow, we fix that first. If your intake attracts tire-kickers, we install vetting. We prioritize the single highest-leverage breakdown before scaling volume.',
      icon: Crosshair
    },
    {
      number: '04',
      title: 'We Think Like Growth Partners.',
      detail: 'We analyze your margins, team capacity, and consultation economics. Our incentives are aligned with genuine business expansion, not billable busywork or vanity reports.',
      icon: Users2
    }
  ];

  return (
    <section 
      id="about" 
      role="region"
      aria-label="About XLNC Media"
      className="relative w-full overflow-hidden border-t border-[#1C1C1C] bg-[#020202] py-16 sm:py-20 md:py-24 lg:py-28 isolate"
    >
      {/* Anchor for why-xlnc */}
      <span id="why-xlnc" className="sr-only" />

      {/* Premium Black & Gold Website Background Layer */}
      <PremiumBlackGoldBackground />

      {/* Foreground Content Container in Clean Center Negative Space */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-18">
          <div className="badge-editorial mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
            About XLNC Media
          </div>
          <h2 className="font-headline-lg text-[#F4F4F2]">
            We’re Not Here to Keep You Busy With Marketing.{' '}
            <span className="font-serif italic text-[#E5D0A1] font-normal block sm:inline">
              We’re Here to Help You Grow.
            </span>
          </h2>
        </div>

        {/* 4 Bento Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#0A0A0A]/90 backdrop-blur-md border border-[#201E1A] shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:border-[#E5D0A1]/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.7)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#201E1A] mb-6">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#78756E]">
                      PILLAR {pillar.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#E5D0A1]/80" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#F4F4F2] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed font-normal">
                    {pillar.detail}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#201E1A] mt-6 flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] tracking-[0.15em] text-[#78756E]">APPROACH</span>
                  <span className="font-medium text-[#E5D0A1] text-[10px] tracking-[0.15em]">STRATEGIC ALIGNMENT</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
