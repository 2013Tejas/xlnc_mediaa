# Website Background Design Specification: Editorial Dark Bronze Frame

A complete, self-contained background design system featuring near-black textured canvas framed by oversized muted bronze geometric forms (left cropped ring & right inward-facing chevron), fine monochromatic grain, and an open text-safe center.

---

## 1. Core Visual Formula

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   ◯                                        <             │
│  ◯                                          <            │
│ ◯                         DARK                <           │
│◯                     CONTENT AREA             <           │
│ ◯                                            <            │
│  ◯                                          <             │
│   ◯                                        <             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

> **Key Rule**: Keep the center quiet (55–60%), push visual weight to the edges with oversized muted bronze geometry, and preserve high readability for foreground typography and UI elements.

---

## 2. Color Palette Tokens

| Element | Hex / RGBA Code | Purpose |
| :--- | :--- | :--- |
| **Main Background Base** | `#030303` / `#050505` | Near-black matte canvas with subtle vignette |
| **Center Tonal Lift** | `#080808` | Gentle radial highlight behind central content |
| **Bronze Light** | `#756544` | Top/outer bronze linear gradient stop |
| **Bronze Primary** | `#66583C` | Core architectural matte bronze tone |
| **Bronze Dark** | `#4E442F` | Lower/interior shadow stop |
| **Warm Gold Accent** | `#C9A24E` / `#E5D0A1` | Italic typography accents, button highlights |
| **Fine Film Grain** | `opacity: 0.08` | Monochromatic SVG fractal noise (`mix-blend-screen`) |
| **Soft Specular Halo** | `rgba(201, 162, 78, 0.035)` | 60px blurred specular atmospheric glow |
| **Card Surface** | `rgba(16, 16, 16, 0.85)` | Translucent obsidian backdrop with `backdrop-blur-md` |
| **Card Border** | `#222222` | Refined hairline container border |

---

## 3. Geometry Specifications

### Left Element (Cropped Architectural Ring)
- **Shape**: Oversized circular ring entering from the left edge.
- **Positioning**: `cx="-60"`, `cy="450"`, `radius="370"`.
- **Stroke Width**: `140px`.
- **Styling**: `linearGradient` from `#756544` to `#66583C` to `#4E442F`, matte, architectural, non-glossy.

### Right Element (Inward-Facing Chevron)
- **Shape**: Broad angular `<` chevron band entering from the right edge and pointing toward the center.
- **Positioning**: `d="M1880 50 L1460 450 L1880 850"`.
- **Stroke Width**: `140px` with `strokeLinecap="round"` and `strokeLinejoin="round"`.
- **Styling**: Same muted bronze family with subtle diagonal gradient shading.

---

## 4. React + Tailwind CSS (Drop-In Component)

```tsx
import React from 'react';

interface EditorialDarkBronzeBackgroundProps {
  className?: string;
}

export const EditorialDarkBronzeBackground: React.FC<EditorialDarkBronzeBackgroundProps> = ({
  className = ''
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#030303] ${className}`}
    >
      {/* 1. Subtle Vignette & Central Atmospheric Tonal Lift */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, #080808 0%, #030303 70%, #010101 100%)`
        }}
      />

      {/* 2. Fine Monochromatic Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      {/* 3. Oversized Architectural Bronze SVG (Left Ring + Right Chevron) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1800 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bronzeRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#756544" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#66583C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4E442F" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="bronzeChevron" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#756544" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#66583C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4E442F" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* Left Oversized Ring */}
        <circle 
          cx="-60"
          cy="450"
          r="370"
          stroke="url(#bronzeRing)"
          strokeWidth="140"
          opacity="0.9"
        />

        {/* Right Oversized Inward Chevron */}
        <path 
          d="M1880 50 L1460 450 L1880 850"
          stroke="url(#bronzeChevron)"
          strokeWidth="140"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* Soft Specular Ambient Halos */}
        <circle cx="80" cy="450" r="320" fill="#C9A24E" className="opacity-[0.035] filter blur-3xl" />
        <circle cx="1520" cy="450" r="320" fill="#C9A24E" className="opacity-[0.035] filter blur-3xl" />
      </svg>
    </div>
  );
};
```

---

## 5. Pure HTML & CSS Architecture

```html
<section class="editorial-bronze-section">
  <!-- Dedicated Decorative Background -->
  <div class="editorial-background" aria-hidden="true">
    <div class="vignette-layer"></div>
    <div class="grain-layer"></div>
    <svg class="geometry-svg" preserveAspectRatio="none" viewBox="0 0 1800 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="htmlRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#756544" stop-opacity="0.92" />
          <stop offset="45%" stop-color="#66583C" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#4E442F" stop-opacity="0.75" />
        </linearGradient>
        <linearGradient id="htmlChevronGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#756544" stop-opacity="0.92" />
          <stop offset="45%" stop-color="#66583C" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#4E442F" stop-opacity="0.75" />
        </linearGradient>
      </defs>

      <circle cx="-60" cy="450" r="370" stroke="url(#htmlRingGrad)" stroke-width="140" opacity="0.9" />
      <path d="M1880 50 L1460 450 L1880 850" stroke="url(#htmlChevronGrad)" stroke-width="140" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
    </svg>
  </div>

  <!-- Content Layer (Text-Safe Center) -->
  <div class="editorial-content">
    <h2 class="editorial-heading">
      Ready to Get <span class="accent-gold">More Customers?</span>
    </h2>
    <p class="editorial-copy">
      If you’re a high-ticket service business looking to build a more predictable, systematic way to attract and convert high-value clients, let’s talk.
    </p>
  </div>
</section>
```

```css
.editorial-bronze-section {
  position: relative;
  width: 100%;
  padding: 96px 24px;
  overflow: hidden;
  background-color: #030303;
  color: #F2F2F0;
}

.editorial-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background: #030303;
}

.vignette-layer {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, #080808 0%, #030303 70%, #010101 100%);
  pointer-events: none;
}

.grain-layer {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  mix-blend-mode: screen;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E");
}

.geometry-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.editorial-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
}

.editorial-heading {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: #F2F2F0;
}

.accent-gold {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
  color: #C9A24E;
}

.editorial-copy {
  margin-top: 1.5rem;
  font-size: 1.125rem;
  color: #A3A3A3;
  line-height: 1.6;
  max-width: 640px;
}
```
