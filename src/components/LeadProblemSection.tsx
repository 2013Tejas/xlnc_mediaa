import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, CheckCircle2, ArrowRight, Clock, UserX, DollarSign, Zap } from 'lucide-react';

export const LeadProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'broken' | 'system'>('broken');

  return (
    <section className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto border-t border-[#222222]">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5D0A1]/[0.08] border border-[#E5D0A1]/25 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-[#E5D0A1] mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1]" />
          The Acquisition-Loss Diagnostic
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light md:font-normal tracking-tight text-white leading-[1.1]">
          Getting a Lead Doesn't Mean{' '}
          <span className="font-serif italic font-normal text-[#E5D0A1]">
            Getting a Customer.
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#A3A3A3] mt-3 sm:mt-4 font-normal max-w-2xl leading-relaxed">
          Agency hype convinces businesses that lead volume solves everything. In reality, most high-ticket service companies lose 70% to 90% of their prospective revenue after the initial enquiry occurs.
        </p>
      </div>

      {/* Interactive Toggle Pill (Mobile horizontal scroll safe) */}
      <div className="flex items-center justify-start gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 max-w-full">
        <div className="p-1 rounded-full bg-[#141414] border border-[#262626] flex items-center shadow-2xs shrink-0">
          <button
            id="tab-broken-pipeline"
            onClick={() => setActiveTab('broken')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === 'broken'
                ? 'bg-[#E5D0A1] text-[#0B0B0B] shadow-xs'
                : 'text-[#A3A3A3] hover:text-white'
            }`}
          >
            The Leaky Reality (Where Leads Die)
          </button>
          <button
            id="tab-system-pipeline"
            onClick={() => setActiveTab('system')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === 'system'
                ? 'bg-[#E5D0A1] text-[#0B0B0B] shadow-xs'
                : 'text-[#A3A3A3] hover:text-white'
            }`}
          >
            The XLNC Acquisition Engine (Preserved Value)
          </button>
        </div>
      </div>

      {/* Bento Container for Pipeline Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Main Interactive Flow Card (8 Cols) */}
        <div className="lg:col-span-8 bg-[#121212] border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] rounded-3xl p-6 sm:p-10 flex flex-col justify-between transition-all duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666] block">
                {activeTab === 'broken' ? 'TYPICAL STATUS QUO' : 'CALIBRATED ARCHITECTURE'}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-white mt-0.5">
                {activeTab === 'broken'
                  ? 'Friction & Drop-Off In The Unstructured Funnel'
                  : 'Tight Feedback Loops Across The Entire Journey'}
              </h3>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-[11px] font-medium border ${
                activeTab === 'broken'
                  ? 'bg-[#181818] text-[#A3A3A3] border-[#262626]'
                  : 'bg-[#1C1B1B] text-[#E5D0A1] border-[#E5D0A1]/30'
              }`}
            >
              {activeTab === 'broken' ? 'High Friction Loss' : 'Optimized Conversion Flow'}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'broken' ? (
              <motion.div
                key="broken-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-2.5"
              >
                {[
                  {
                    step: '01',
                    stage: 'ENQUIRY SUBMISSION',
                    event: 'Prospect submits contact form with immediate buying intent.',
                    status: 'Active interest (100% intent window)',
                    type: 'normal'
                  },
                  {
                    step: '02',
                    stage: 'SLOW INITIAL RESPONSE',
                    event: 'Form sits in an email inbox for 4 to 24 hours before anyone responds.',
                    status: 'Intent drops by 60%',
                    type: 'leak'
                  },
                  {
                    step: '03',
                    stage: 'ZERO NURTURE OR INDOCTRINATION',
                    event: 'No case study or social proof sent; prospect Googles other competitors.',
                    status: 'Authority diluted',
                    type: 'leak'
                  },
                  {
                    step: '04',
                    stage: 'THE GHOST / NO-SHOW',
                    event: 'Meeting finally scheduled days later; prospect has forgotten or lost urgency.',
                    status: 'Show-up rate below 40%',
                    type: 'leak'
                  },
                  {
                    step: '05',
                    stage: 'OPPORTUNITY LOST',
                    event: 'Ad spend consumed, staff time wasted, pipeline remains empty.',
                    status: 'Total budget burn',
                    type: 'fatal'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#161616] border border-[#222222] hover:border-[#E5D0A1]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span
                        className="text-[11px] font-mono font-medium w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 bg-[#222222] text-[#E5D0A1]"
                      >
                        {item.step}
                      </span>
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-white">
                          {item.stage}
                        </div>
                        <div className="text-xs text-[#A3A3A3] mt-0.5">{item.event}</div>
                      </div>
                    </div>
                    <div className="text-[11px] font-medium text-right shrink-0">
                      <span
                        className="px-2.5 py-1 rounded-full bg-[#1C1B1B] border border-[#262626] text-[#CEC5B7]"
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="system-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-2.5"
              >
                {[
                  {
                    step: '01',
                    stage: 'TARGETED ATTRACTION',
                    event: 'High-intent prospects engage with authoritative asset or campaign.',
                    status: 'Pre-qualified & vetted',
                    type: 'success'
                  },
                  {
                    step: '02',
                    stage: 'RAPID CONVERSATIONAL RESPONSE',
                    event: 'Intelligent triage responds within 3 minutes with personalized greeting.',
                    status: 'First contact in <5 mins',
                    type: 'success'
                  },
                  {
                    step: '03',
                    stage: 'PRE-CALL INDOCTRINATION PACKET',
                    event: 'Prospect receives founder video, case study, and agenda before meeting.',
                    status: 'Pre-sold on capability',
                    type: 'success'
                  },
                  {
                    step: '04',
                    stage: 'HIGH-SHOW CONSULTATION',
                    event: 'Automated calendar reminders & briefing hold show-up rates above 80%.',
                    status: '80%+ Consult Show Rate',
                    type: 'success'
                  },
                  {
                    step: '05',
                    stage: 'HIGH-TICKET CUSTOMER ONBOARDED',
                    event: 'Predictable contract closed at full target margin with clear onboarding.',
                    status: 'Compounding LTV growth',
                    type: 'success'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#161616] border border-[#222222] hover:border-[#E5D0A1]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="text-[11px] font-mono font-medium w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 bg-[#E5D0A1] text-[#0B0B0B]">
                        {item.step}
                      </span>
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-white">
                          {item.stage}
                        </div>
                        <div className="text-xs text-[#A3A3A3] mt-0.5">{item.event}</div>
                      </div>
                    </div>
                    <div className="text-[11px] font-medium text-right shrink-0">
                      <span className="px-2.5 py-1 rounded-full bg-[#1C1B1B] border border-[#E5D0A1]/20 text-[#E5D0A1]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-[#A3A3A3]">
            <span>Acquisition Loss Diagnostic</span>
            <span className="font-semibold text-white">
              {activeTab === 'broken' ? 'Est. Revenue Lost: ~74%' : 'Acquisition Preservation: ~86%'}
            </span>
          </div>
        </div>

        {/* Supporting Editorial Stat Card (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Top takeaway card */}
          <div className="bg-[#141414] text-white rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5D0A1] mb-4">
                <Zap className="w-3.5 h-3.5 text-[#E5D0A1]" />
                <span>THE HARD TRUTH</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-3">
                More leads are not always the answer.
              </h4>

              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed font-normal">
                If your follow-up is slow, your qualification is loose, or your consultation process lacks pre-framing, pumping more leads into the top simply accelerates cash burn.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#222222] text-xs text-[#CEC5B7]">
              <span className="text-[#E5D0A1] font-semibold block mb-1">
                The XLNC Fix:
              </span>
              We engineer and fortify the entire conversion bridge before turning up volume.
            </div>
          </div>

          {/* Metric difference card */}
          <div className="bg-[#121212] border border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#E5D0A1]/30 rounded-3xl p-6 flex flex-col justify-between transition-all">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666]">
              AVERAGE SHOW-UP BENCHMARK
            </span>
            <div className="my-3">
              <div className="text-3xl font-light tracking-tight text-[#E5D0A1]">
                82% vs 38%
              </div>
              <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                Consultation attendance rate with automated pre-call nurture vs unassisted calendar invites.
              </p>
            </div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5 pt-3 border-t border-[#222222]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5D0A1]" />
              <span>Verified High-Ticket Average</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
