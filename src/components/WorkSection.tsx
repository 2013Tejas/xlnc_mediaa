import React, { useState, useEffect, useRef } from 'react';
import { WORK_VIDEOS } from '../data';
import { WorkCarousel } from './WorkCarousel';

interface WorkSectionProps {
  onOpenBooking: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenBooking }) => {
  // Global active video state across Work section:
  // Starts with the first video so it autostarts playing immediately with muted audio
  const [activeVideoId, setActiveVideoId] = useState<string | number | null>(() => WORK_VIDEOS[0]?.id ?? null);
  const sectionRef = useRef<HTMLElement>(null);

  // Section-level IntersectionObserver:
  // When user scrolls away from the WorkSection entirely, pause playback.
  // When scrolling into the section, autostart playback with muted audio.
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
            setActiveVideoId(null);
          } else {
            setActiveVideoId((prev) => prev ?? (WORK_VIDEOS[0]?.id ?? null));
          }
        });
      },
      {
        threshold: [0, 0.05],
        root: null
      }
    );

    sectionObserver.observe(sectionEl);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      role="region"
      aria-label="Our Work and Video Portfolio"
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 border-t border-[#1C1C1C] bg-[#050505] isolate"
      style={{
        // Ensure native document scroll remains fluid across all devices
        overflowX: 'clip',
        overflowY: 'visible'
      }}
    >
      {/* Anchor targets for direct linking & navigation */}
      <span id="videos" className="sr-only" />
      <span id="portfolio" className="sr-only" />

      {/* ============================================================ */}
      {/* PREMIUM RESPONSIVE ABSTRACT BACKGROUND SPECIFICATION         */}
      {/* ============================================================ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none -z-10"
        style={{
          contain: 'paint'
        }}
      >
        {/* Deep luxury canvas background */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* 
          LEFT GEOMETRIC ELEMENT:
          - Fluid scalable sizing using clamp()
          - Rounded rectangular shape heavily cropped by the left edge
          - Subtle muted bronze / warm-gold radial gradient in upper portion
          - Smoothly fades toward dark charcoal/black
          - Low contrast, completely non-intrusive
        */}
        <div
          className="work-bg-left absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: 'clamp(280px, 26vw, 560px)',
            height: 'clamp(420px, 52vw, 760px)',
            left: 'clamp(-180px, -8vw, -80px)',
            top: 'clamp(-180px, -10vw, -60px)',
            borderRadius: '0 0 120px 0',
            background:
              'radial-gradient(circle at 70% 5%, rgba(122, 101, 60, 0.42), rgba(35, 32, 25, 0.18) 42%, rgba(5, 5, 5, 0) 72%)',
            boxShadow: 'inset 0 -40px 80px rgba(5, 5, 5, 0.9)'
          }}
        />

        {/* 
          RIGHT GEOMETRIC ELEMENT:
          - Fluid scalable sizing using clamp() with aspect-ratio: 1
          - Huge dark circular / ring-like geometric shape near upper-right edge
          - Dark charcoal/black with subtle radial atmospheric depth
          - Low contrast, never interferes with main content
        */}
        <div
          className="work-bg-right absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: 'clamp(360px, 30vw, 650px)',
            aspectRatio: '1',
            right: 'clamp(-300px, -10vw, -100px)',
            top: 'clamp(-300px, -12vw, -100px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, rgba(28, 28, 28, 0.12) 0% 45%, rgba(18, 18, 18, 0.65) 46% 62%, rgba(5, 5, 5, 0) 63%)'
          }}
        />

        {/* Subtle center atmospheric falloff ensuring center remains clean and dark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1100px] h-[60vh] max-h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(12, 12, 12, 0.5) 0%, rgba(5, 5, 5, 0.95) 70%, rgba(5, 5, 5, 1) 100%)'
          }}
        />

        {/* Top and bottom subtle blending gradients */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </div>

      {/* Scoped CSS for responsive media query overrides and reduced motion */}
      <style>{`
        /* Mobile overrides (<= 767px) */
        @media (max-width: 767px) {
          .work-bg-left {
            width: 240px !important;
            height: 360px !important;
            left: -150px !important;
            top: -120px !important;
            opacity: 0.65 !important;
          }
          .work-bg-right {
            width: 320px !important;
            right: -220px !important;
            top: -180px !important;
            opacity: 0.55 !important;
          }
        }

        /* Very small screens (<= 375px) */
        @media (max-width: 375px) {
          .work-bg-left {
            width: 200px !important;
            height: 300px !important;
            left: -145px !important;
            opacity: 0.5 !important;
          }
          .work-bg-right {
            width: 270px !important;
            right: -190px !important;
            top: -160px !important;
            opacity: 0.4 !important;
          }
        }

        /* Work Container responsive width */
        .work-container {
          width: 100%;
        }

        @media (min-width: 768px) {
          .work-container {
            width: min(100% - 48px, 1440px);
            margin-inline: auto;
          }
        }
      `}</style>

      <div className="work-container relative z-10 mx-auto">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16 px-4 sm:px-6">
          {/* Eyebrow badge matching existing site design language */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-[11px] font-mono tracking-[0.25em] text-[#E5D0A1] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D0A1] animate-pulse" />
            WORK
          </div>

          {/* Main Section Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] text-center">
            We Create Content That{' '}
            <span className="font-serif italic font-normal text-[#E5D0A1]">
              Drives Results
            </span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* PREMIUM HORIZONTAL VIDEO CAROUSEL / GRID                     */}
        {/* ============================================================ */}
        <WorkCarousel
          videos={WORK_VIDEOS}
          activeVideoId={activeVideoId}
          onActiveVideoChange={setActiveVideoId}
        />
      </div>
    </section>
  );
};
