import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Testimonials', href: '#results' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'System', href: '#system' }
  ];

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    setIsScrolled(window.scrollY > 20);

    // Asynchronous IntersectionObserver prevents forced reflow on mount and during scroll
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    const sectionIds = ['hero', 'results', 'work', 'services', 'system'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-2.5 sm:py-4 px-4 sm:px-8 lg:px-10 ${
          isScrolled 
            ? 'bg-[#000000]/85 backdrop-blur-xl border-b border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.6)]' 
            : 'bg-transparent'
        }`}
        style={{
          paddingTop: 'max(0.625rem, env(safe-area-inset-top, 0.625rem))',
          paddingLeft: 'max(1rem, env(safe-area-inset-left, 1rem))',
          paddingRight: 'max(1rem, env(safe-area-inset-right, 1rem))'
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo - Original Client Approved Asset */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="nav-logo-link"
            className="group flex items-center hover:opacity-90 transition-opacity shrink-0"
            aria-label="XLNC Media Home"
          >
            <img
              src="/assets/xlnc-media-logo.png"
              alt="XLNC Media - Client Acquisition Systems"
              width={820}
              height={350}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain block select-none"
              style={{ width: 'auto', aspectRatio: '820 / 350', objectFit: 'contain' }}
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Dynamic Navigation Links (Framer Dynamic Navbar Effect) */}
          <nav
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#0E0E0E]/90 backdrop-blur-xl border border-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] relative select-none"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              const isHovered = hoveredNav === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredNav(link.href)}
                  className={`relative px-4 py-1.5 text-xs lg:text-[13px] font-medium transition-colors cursor-pointer rounded-full z-10 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#FFFFFF] font-semibold'
                      : 'text-[#A3A3A3] hover:text-[#E8E8E8]'
                  }`}
                >
                  {/* Sliding Active Indicator Pill with Spring Physics */}
                  {isActive && (
                    <motion.div
                      layoutId="dynamicNavActivePill"
                      className="absolute inset-0 rounded-full bg-[#1F1F1F] border border-[#383838] shadow-[0_2px_12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)]"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 28,
                      }}
                    />
                  )}

                  {/* Gentle Hover Pill Indicator */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="dynamicNavHoverPill"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 28,
                      }}
                    />
                  )}

                  {/* Active Gold Micro-Dot Indicator */}
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#E5D0A1] shadow-[0_0_8px_#E5D0A1]"
                    />
                  )}

                  {/* Label Text */}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Primary CTA Button */}
            <button
              id="navbar-book-call-btn"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5D0A1] text-[#0B0B0B] text-[13px] font-semibold tracking-[-0.01em] rounded-full hover:bg-[#F1CA6D] hover:shadow-[0px_8px_24px_rgba(229,208,161,0.25)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Book a Growth Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
            </button>

            {/* Mobile / Compact Menu Toggle Button */}
            <motion.button
              id="mobile-menu-toggle-btn"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-full border border-[#262626] bg-[#121212]/90 text-[#E5D0A1] hover:bg-[#1a1a1a] transition-all shadow-md relative cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/75 backdrop-blur-md md:hidden"
              style={{ top: 'calc(54px + env(safe-area-inset-top, 0px))' }}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              className="fixed inset-x-3 sm:inset-x-6 z-40 bg-[#0C0C0C]/95 backdrop-blur-2xl border border-[#222222] rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] md:hidden overflow-hidden"
              style={{ top: 'calc(58px + env(safe-area-inset-top, 0px))' }}
            >
              {/* Mobile Dynamic Nav Items */}
              <div className="flex flex-col gap-1 relative">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`relative px-4 py-3 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between z-10 ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-[#999999] hover:text-white'
                      }`}
                    >
                      {/* Mobile Active Spring Pill */}
                      {isActive && (
                        <motion.div
                          layoutId="dynamicNavMobileActivePill"
                          className="absolute inset-0 rounded-2xl bg-[#1A1A1A] border border-[#333333] shadow-[0_2px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 28,
                          }}
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>

                      {/* Active Indicator Micro-dot or Arrow */}
                      {isActive ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="relative z-10 flex items-center gap-1.5"
                        >
                          <span className="text-[10px] uppercase font-mono tracking-wider text-[#D8B96A]">Current</span>
                          <span className="w-2 h-2 rounded-full bg-[#E5D0A1] shadow-[0_0_8px_#E5D0A1]" />
                        </motion.div>
                      ) : (
                        <span className="text-xs text-[#444444] opacity-50 relative z-10">→</span>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Mobile Menu Action CTA */}
              <div className="pt-3 mt-2 border-t border-[#1C1C1C]">
                <button
                  id="mobile-menu-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 px-5 bg-[#E5D0A1] text-[#0B0B0B] text-xs font-bold tracking-tight rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(229,208,161,0.25)] hover:bg-[#F1CA6D] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Book a Growth Call</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
