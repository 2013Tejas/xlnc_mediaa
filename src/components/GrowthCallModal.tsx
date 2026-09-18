import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Calendar, Clock, Building2, User, Mail, Phone, ShieldCheck } from 'lucide-react';
import { BookingFormData } from '../types';

interface GrowthCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBottleneck?: string;
}

const TIME_SLOTS = [
  '09:30 AM EST',
  '11:00 AM EST',
  '01:30 PM EST',
  '03:00 PM EST',
  '04:30 PM EST'
];

export const GrowthCallModal: React.FC<GrowthCallModalProps> = ({
  isOpen,
  onClose,
  initialBottleneck
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    businessName: '',
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Consulting / Professional Services',
    dealSize: '$5k - $15k per client',
    monthlyRevenue: '$20k - $50k / month',
    primaryBottleneck: initialBottleneck || 'Inconsistent Enquiries',
    selectedDate: 'Tomorrow, 11:00 AM',
    selectedTime: '11:00 AM EST',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialBottleneck if provided or changed
  useEffect(() => {
    if (initialBottleneck) {
      setFormData((prev) => ({ ...prev, primaryBottleneck: initialBottleneck }));
    }
  }, [initialBottleneck]);

  // Handle Escape key (only attached when open)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#1A1A1A] border border-[#E5D0A1]/25 rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-4 sm:p-8 z-10 my-2 sm:my-8 max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100vh-2rem)] overflow-y-auto pb-[calc(1rem+env(safe-area-inset-bottom,0px))]"
          style={{
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Close button (44x44px touch target) */}
          <button
            id="close-growth-modal-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full text-[#A3A3A3] hover:text-white hover:bg-[#262626] transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="badge-editorial mb-3 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
                  Direct Consultation with Growth Strategist
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-white">
                  Book a Growth Call
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] mt-1.5 leading-relaxed">
                  We’ll analyze your current acquisition pipeline, identify your primary bottleneck, and determine whether an XLNC system is the right fit.
                </p>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mt-5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        s <= step ? 'bg-[#E5D0A1]' : 'bg-[#262626]'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-[0.15em] text-[#666666] mt-2 font-mono">
                  <span>Step {step} of 3</span>
                  <span>
                    {step === 1 && 'Business Scope'}
                    {step === 2 && 'Bottleneck Diagnosis'}
                    {step === 3 && 'Schedule & Contact'}
                  </span>
                </div>
              </div>

              {/* Form steps */}
              <form onSubmit={handleNextStep}>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                        Business / Practice Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 absolute left-3.5 top-3 text-[#666666]" />
                        <input
                          id="input-business-name"
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          placeholder="e.g. Vance Architecture Studio"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-[#262626] rounded-xl text-base sm:text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#E5D0A1] focus:ring-1 focus:ring-[#E5D0A1] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                        High-Ticket Service Domain
                      </label>
                      <select
                        id="select-service-type"
                        value={formData.serviceType}
                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#262626] rounded-xl text-base sm:text-sm text-white focus:outline-none focus:border-[#E5D0A1] focus:ring-1 focus:ring-[#E5D0A1] transition-colors"
                      >
                        <option value="Consulting / Professional Services" className="bg-[#121212] text-white">Consulting & Advisory Services</option>
                        <option value="Commercial Architecture / Engineering" className="bg-[#121212] text-white">Architecture, Design & Engineering</option>
                        <option value="Specialty Medical & Health Practice" className="bg-[#121212] text-white">Specialty Medical / Regenerative Clinic</option>
                        <option value="Legal & High-Ticket Financial" className="bg-[#121212] text-white">Legal, Tax & Wealth Management</option>
                        <option value="B2B Agency & Implementation" className="bg-[#121212] text-white">Specialized Agency / B2B Services</option>
                        <option value="Other High-Ticket Offering" className="bg-[#121212] text-white">Other High-Consideration Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                        Average Client / Project Deal Size
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['$3k – $8k', '$8k – $25k', '$25k – $75k+'].map((range) => (
                          <button
                            key={range}
                            type="button"
                            id={`btn-deal-size-${range}`}
                            onClick={() => handleInputChange('dealSize', range)}
                            className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                              formData.dealSize === range
                                ? 'bg-[#E5D0A1] text-[#0B0B0B] border-[#E5D0A1] font-semibold shadow-xs'
                                : 'bg-[#121212] text-[#CEC5B7] border-[#262626] hover:border-[#444444]'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        id="btn-step1-next"
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#E5D0A1] text-[#0B0B0B] text-[14px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#F1CA6D] hover:shadow-[0px_8px_24px_rgba(229,208,161,0.25)] transition-all cursor-pointer shadow-xs"
                      >
                        Next: Identify Bottleneck
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-2">
                        What is your primary customer acquisition challenge?
                      </label>
                      <div className="space-y-2">
                        {[
                          { id: 'Inconsistent Enquiries', label: 'Inconsistent Enquiries', desc: 'Unpredictable swings from month to month' },
                          { id: 'Referral Dependency', label: 'Heavy Referral Dependency', desc: 'No predictable outbound or incoming system you control' },
                          { id: 'Low Lead Quality', label: 'Unqualified Prospects', desc: 'Inquiries lack budget or authority for high-ticket fees' },
                          { id: 'Slow Follow-up / Leaks', label: 'Slow Follow-Up & Ghosting', desc: 'Inquiries go cold before completing consultation' },
                          { id: 'Low Show-up Rates', label: 'Low Consult Show-up', desc: 'Calls get booked but prospects cancel or fail to show' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            id={`btn-bottleneck-${item.id}`}
                            onClick={() => handleInputChange('primaryBottleneck', item.label)}
                            className={`w-full p-3 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                              formData.primaryBottleneck === item.label
                                ? 'bg-[#1c1a17] text-white border-[#E5D0A1]/50 shadow-xs'
                                : 'bg-[#121212] border-[#262626] text-[#CEC5B7] hover:border-[#444444]'
                            }`}
                          >
                            <div>
                              <div className={`text-sm font-medium ${formData.primaryBottleneck === item.label ? 'text-[#E5D0A1]' : 'text-white'}`}>{item.label}</div>
                              <div className={`text-xs mt-0.5 ${formData.primaryBottleneck === item.label ? 'text-[#CEC5B7]' : 'text-[#777777]'}`}>{item.desc}</div>
                            </div>
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 ${
                                formData.primaryBottleneck === item.label
                                  ? 'border-[#E5D0A1] bg-[#E5D0A1] text-[#0B0B0B]'
                                  : 'border-[#444444]'
                              }`}
                            >
                              {formData.primaryBottleneck === item.label && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        id="btn-step2-back"
                        onClick={() => setStep(1)}
                        className="py-3 px-5 border border-[#262626] text-[#A3A3A3] text-xs uppercase font-medium tracking-[0.15em] rounded-full hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        id="btn-step2-next"
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#E5D0A1] text-[#0B0B0B] text-[14px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#F1CA6D] hover:shadow-[0px_8px_24px_rgba(229,208,161,0.25)] transition-all cursor-pointer shadow-xs"
                      >
                        Next: Choose Time
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                          Your Full Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3.5 top-3 text-[#666666]" />
                          <input
                            id="input-full-name"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Alex Morgan"
                            className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-[#262626] rounded-xl text-base sm:text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#E5D0A1] focus:ring-1 focus:ring-[#E5D0A1] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                          Work Email
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3.5 top-3 text-[#666666]" />
                          <input
                            id="input-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="alex@vancestudio.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-[#262626] rounded-xl text-base sm:text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#E5D0A1] focus:ring-1 focus:ring-[#E5D0A1] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                        Direct Phone / WhatsApp (For calendar confirmation)
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-3 text-[#666666]" />
                        <input
                          id="input-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 349-2810"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-[#262626] rounded-xl text-base sm:text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#E5D0A1] focus:ring-1 focus:ring-[#E5D0A1] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-[0.15em] mb-1.5">
                        Select Preferred Consultation Slot
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            id={`btn-slot-${slot.replace(/\s+/g, '-')}`}
                            onClick={() => handleInputChange('selectedTime', slot)}
                            className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                              formData.selectedTime === slot
                                ? 'bg-[#E5D0A1] text-[#0B0B0B] border-[#E5D0A1] font-semibold shadow-xs'
                                : 'bg-[#121212] text-[#CEC5B7] border-[#262626] hover:border-[#444444]'
                            }`}
                          >
                            <Clock className="w-3 h-3 inline mr-1 opacity-70" />
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#121212] border border-[#262626] text-xs text-[#A3A3A3] flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#E5D0A1] shrink-0 mt-0.5" />
                      <span>
                        No sales pitch or generic agency pressure. We conduct a genuine operational review of your acquisition funnel and show you the exact bottleneck.
                      </span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        id="btn-step3-back"
                        onClick={() => setStep(2)}
                        className="py-3 px-5 border border-[#262626] text-[#A3A3A3] text-xs uppercase font-medium tracking-[0.15em] rounded-full hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        id="btn-step3-submit"
                        disabled={isSubmitting}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#E5D0A1] text-[#0B0B0B] text-[14px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#F1CA6D] hover:shadow-[0px_8px_24px_rgba(229,208,161,0.25)] transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                      >
                        {isSubmitting ? 'Reserving Strategic Slot...' : 'Confirm Growth Call'}
                        <CheckCircle2 className="w-4 h-4 text-[#0B0B0B]" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          ) : (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E5D0A1]/10 text-[#E5D0A1] border border-[#E5D0A1]/25 flex items-center justify-center mx-auto mb-4 shadow-2xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light tracking-tight text-white">
                Growth Call Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <span className="font-medium text-[#E5D0A1]">{formData.fullName || 'Partner'}</span>. We have reserved your diagnostic session for <span className="font-medium text-white">{formData.selectedTime}</span> for <span className="font-medium text-white">{formData.businessName || 'your business'}</span>.
              </p>

              <div className="my-6 p-4 rounded-xl bg-[#181818] border border-[#2a2a2a] text-left max-w-md mx-auto text-xs space-y-2 text-[#CEC5B7]">
                <div className="flex justify-between border-b border-[#262626] pb-2">
                  <span className="text-[#666666]">Subject</span>
                  <span className="font-medium text-white">XLNC Customer Acquisition Audit</span>
                </div>
                <div className="flex justify-between border-b border-[#262626] pb-2">
                  <span className="text-[#666666]">Primary Focus</span>
                  <span className="font-medium text-[#E5D0A1]">{formData.primaryBottleneck}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Confirmation Sent</span>
                  <span className="font-medium text-white">{formData.email || 'Email and WhatsApp'}</span>
                </div>
              </div>

              <button
                id="btn-modal-done"
                onClick={handleReset}
                className="py-2.5 px-8 bg-[#E5D0A1] text-[#0B0B0B] text-xs uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-[#F1CA6D] transition-colors cursor-pointer shadow-xs"
              >
                Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
