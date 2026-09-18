import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Testimonials', href: '#results' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'System', href: '#system' }
  ];

  return (
    <footer className="border-t border-[#1C1B1B] bg-[#0B0B0B] py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-10 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] sm:pb-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-[#1C1B1B]">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5">
            <div className="mb-5">
              <img
                src="/assets/xlnc-media-logo.png"
                alt="XLNC MEDIA"
                width={820}
                height={350}
                className="h-8 sm:h-9 w-auto object-contain block select-none"
                style={{ width: 'auto', aspectRatio: '820 / 350', objectFit: 'contain' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#CEC5B7] max-w-sm leading-relaxed mb-6 font-normal">
              Customer Acquisition Systems for High-Ticket Services.
            </p>

            <div className="badge-editorial shadow-2xs max-w-full text-[10px] sm:text-[11px] leading-tight flex-wrap py-1.5 px-3 sm:px-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse shrink-0" />
              <span>Systems Operational • All Distribution Channels Live</span>
            </div>
          </div>

          {/* Navigation Column (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono font-medium tracking-[0.2em] text-[#666666] uppercase block mb-3">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-xs font-normal text-[#CEC5B7]">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#E5D0A1] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-[10px] font-mono font-medium tracking-[0.2em] text-[#666666] uppercase block mb-3">
                START A CONVERSATION
              </span>
              <button
                id="footer-book-call-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#E5D0A1] text-[#0B0B0B] text-[13px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#F1CA6D] hover:shadow-[0px_8px_24px_rgba(229,208,161,0.25)] transition-all hover:scale-[1.02] cursor-pointer shadow-xs w-full sm:w-auto"
              >
                <span>Book a Growth Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="mt-8 md:mt-0 flex items-center gap-2 text-xs font-normal text-[#A3A3A3] hover:text-[#E5D0A1] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666666]">
          <div>
            © {new Date().getFullYear()} XLNC Media. All rights reserved. Not affiliated with Meta, Google, or WhatsApp.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#888888]">High-Ticket Customer Acquisition Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
