import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

/**
 * Replace this constant with the client's actual Calendly or Cal.com booking link when ready.
 * Example: 'https://cal.com/xlnc-media' or 'https://calendly.com/xlnc-media/growth-call'
 * 
 * If left empty (''), clicking "Book a Call" will trigger the built-in Growth Call modal fallback.
 */
export const BOOKING_URL = '';

interface ContactSectionProps {
  onOpenBooking?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const handleBookCallClick = (e: React.MouseEvent) => {
    if (!BOOKING_URL && onOpenBooking) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-[#080808] border-t border-[#1C1B1B] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Subtle Ambient Background Tonal Lift & Soft Champagne Gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <div
          className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D8B96A]/[0.035] blur-[120px] pointer-events-none"
        />
        <div
          className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D8B96A]/[0.025] blur-[140px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Eyebrow, Heading, Supporting text */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B96A] animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-[#D8B96A] uppercase">
                GET IN TOUCH
              </span>
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#FFFFFF] tracking-tight uppercase leading-[1.08] mb-4 sm:mb-6">
              LET'S HAVE A<br className="hidden sm:inline" />{' '}
              CONVERSATION
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#A3A3A3] leading-relaxed max-w-lg font-normal">
              Have a project in mind? Let's talk about how we can help your business grow.
            </p>
          </div>

          {/* RIGHT COLUMN: Contact Details (Email, Phone, WhatsApp, Book a Call) */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4 w-full">
            
            {/* 1. EMAIL */}
            <a
              id="contact-email-link"
              href="mailto:lokeshxlncmedia@gmail.com"
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#111111]/90 border border-[#222222] hover:border-[#D8B96A]/60 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm hover:shadow-[0_4px_24px_rgba(216,185,106,0.12)] cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#D8B96A]/40 flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-4 h-4 text-[#D8B96A] group-hover:text-[#F5E5BA] transition-colors" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#8E8678] group-hover:text-[#D8B96A] transition-colors">
                    EMAIL
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-white group-hover:text-[#E5D0A1] transition-colors truncate">
                    lokeshxlncmedia@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#D8B96A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* 2. PHONE */}
            <a
              id="contact-phone-link"
              href="tel:+918830009116"
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#111111]/90 border border-[#222222] hover:border-[#D8B96A]/60 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm hover:shadow-[0_4px_24px_rgba(216,185,106,0.12)] cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#D8B96A]/40 flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-4 h-4 text-[#D8B96A] group-hover:text-[#F5E5BA] transition-colors" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#8E8678] group-hover:text-[#D8B96A] transition-colors">
                    PHONE
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-white group-hover:text-[#E5D0A1] transition-colors truncate">
                    +91 88300 09116
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#D8B96A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* 3. WHATSAPP */}
            <a
              id="contact-whatsapp-link"
              href="https://wa.me/message/EZ62J4V347HBL1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#111111]/90 border border-[#222222] hover:border-[#D8B96A]/60 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm hover:shadow-[0_4px_24px_rgba(216,185,106,0.12)] cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#D8B96A]/40 flex items-center justify-center shrink-0 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#D8B96A] group-hover:text-[#F5E5BA] transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#8E8678] group-hover:text-[#D8B96A] transition-colors">
                    WHATSAPP
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-white group-hover:text-[#E5D0A1] transition-colors truncate">
                    Start a conversation
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#D8B96A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* 4. BOOK A CALL → BUTTON */}
            <div className="pt-2 sm:pt-3">
              {BOOKING_URL ? (
                <a
                  id="contact-book-call-btn"
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E5D0A1] text-[#0B0B0B] text-sm sm:text-[15px] font-bold tracking-tight rounded-full hover:bg-[#F1CA6D] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_8px_30px_rgba(229,208,161,0.22)]"
                >
                  <span className="uppercase">BOOK A CALL</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#0B0B0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <button
                  id="contact-book-call-btn"
                  type="button"
                  onClick={handleBookCallClick}
                  className="group w-full min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E5D0A1] text-[#0B0B0B] text-sm sm:text-[15px] font-bold tracking-tight rounded-full hover:bg-[#F1CA6D] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_8px_30px_rgba(229,208,161,0.22)]"
                >
                  <span className="uppercase">BOOK A CALL</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#0B0B0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
