import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { AmbientGlowBackground } from './components/AmbientGlowBackground';
import { HeroBento } from './components/HeroBento';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ProofBento } from './components/ProofBento';
import { WorkSection } from './components/WorkSection';
import { SolutionsBento } from './components/SolutionsBento';
import { BigIdeaSection } from './components/BigIdeaSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Code-split non-critical modal dialog so it is only loaded when triggered by user interaction
const GrowthCallModal = lazy(() =>
  import('./components/GrowthCallModal').then((m) => ({ default: m.GrowthCallModal }))
);

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBottleneckForBooking, setSelectedBottleneckForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (bottleneck?: string) => {
    setSelectedBottleneckForBooking(bottleneck);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#E5D0A1] selection:text-[#0B0B0B] relative font-sans overflow-x-hidden w-full max-w-[100vw]">
      {/* Global Ambient Champagne Glow Background Layer */}
      <AmbientGlowBackground />

      {/* 1. Fixed Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Home / Hero Section */}
        <HeroBento onOpenBooking={() => handleOpenBooking()} />

        {/* Marquee Ticker */}
        <MarqueeTicker />

        {/* 2. Testimonials (ProofBento) */}
        <ProofBento onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Work & Case Studies (WorkSection) */}
        <WorkSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Services & Solutions (SolutionsBento) */}
        <SolutionsBento onOpenBooking={() => handleOpenBooking()} />

        {/* 4. The XLNC Core Framework (SYSTEM / BigIdeaSection) */}
        <BigIdeaSection onOpenBooking={() => handleOpenBooking()} />

        {/* Final Call-to-Action Section */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />

        {/* Contact / Get in Touch Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Growth Call Booking Modal (Lazy-loaded on demand) */}
      {isBookingOpen && (
        <Suspense fallback={null}>
          <GrowthCallModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            initialBottleneck={selectedBottleneckForBooking}
          />
        </Suspense>
      )}
    </div>
  );
}
