# Editorial Sand & Architectural Ribbon Background System

A complete, self-contained background design system featuring warm tactile editorial paper grain, radial light highlights, and architectural concentric ribbon arcs. Ready to copy and paste into any project.

---

## 1. Color Palette Tokens

| Element | Hex / RGBA Code | Description |
| :--- | :--- | :--- |
| **Canvas Base** | `#EFE9DF` | Primary warm editorial sand canvas |
| **Radial Highlight** | `rgba(245, 239, 230, 0.90)` | Top-left specular lighting gradient |
| **Primary Ribbon Arc** | `#E3DACB` (opacity: 0.70–0.80) | Broad architectural curve stroke |
| **Inner Concentric Arc**| `#DFD4C3` (opacity: 0.60) | Secondary nested concentric ribbon |
| **Outer Whispering Arc**| `#DAD0BE` (opacity: 0.50) | Fine diagonal ribbon stroke |
| **Ambient Specular Halo**| `#FAF6F0` (opacity: 0.40) | 60px blurred specular atmospheric glow |
| **Headline Obsidian** | `#0B0B0B` / `#111111` | High-contrast editorial display typography |
| **Muted Caption Text**| `#595247` / `#6B6353` | Warm bronze-sand muted text |
| **Card Surface** | `rgba(250, 246, 240, 0.95)` | Translucent sand-ivory card backdrop |
| **Card Border** | `#DDD4C5` / `#E4DACB` | Hairline border tone |
| **Accent Gold** | `#F5C869` | High-contrast button highlight |

---

## 2. React + Tailwind CSS (Drop-In Component)

Copy and paste this into `EditorialSandBackground.tsx`:

```tsx
import React from 'react';

interface EditorialSandBackgroundProps {
  className?: string;
}

export const EditorialSandBackground: React.FC<EditorialSandBackgroundProps> = ({ 
  className = '' 
}) => {
  return (
    <div 
      aria-hidden="true" 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#EFE9DF] ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, rgba(245, 239, 230, 0.9) 0%, rgba(239, 233, 223, 1) 100%)`
      }}
    >
      {/* 1. Embedded SVG Fractal Noise Paper Grain (No external assets required) */}
      <div 
        className="absolute inset-0 opacity-25 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      {/* 2. Precision Architectural Ribbon Arcs */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        preserveAspectRatio="none" 
        viewBox="0 0 1440 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Concentric Ribbon Arcs */}
        <circle 
          cx="120" 
          cy="420" 
          r="260" 
          stroke="#E3DACB" 
          strokeWidth="80" 
          className="opacity-70" 
        />
        <circle 
          cx="120" 
          cy="420" 
          r="190" 
          stroke="#DFD4C3" 
          strokeWidth="45" 
          className="opacity-60" 
        />

        {/* Right Sweeping Diagonal Ribbon Arcs */}
        <path 
          d="M1100 -50 C1250 180, 1380 460, 1500 850" 
          stroke="#E3DACB" 
          strokeWidth="110" 
          strokeLinecap="round" 
          className="opacity-80" 
        />
        <path 
          d="M1160 -40 C1300 200, 1420 500, 1530 840" 
          stroke="#DAD0BE" 
          strokeWidth="50" 
          className="opacity-50" 
        />

        {/* Top-Right Soft Specular Halo */}
        <circle 
          cx="1380" 
          cy="120" 
          r="300" 
          fill="#FAF6F0" 
          className="opacity-40 filter blur-3xl" 
        />
      </svg>
    </div>
  );
};
```

### Usage in Any Section:

```tsx
import { EditorialSandBackground } from './EditorialSandBackground';

export const MySection = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      {/* Background layer */}
      <EditorialSandBackground />

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0B0B0B]">Your Title Here</h2>
        <p className="mt-3 text-[#595247]">Your subtitle text goes here.</p>
      </div>
    </section>
  );
};
```

---

## 3. Pure HTML & CSS (Framework-Agnostic)

Copy and paste this into any HTML/CSS project:

### HTML:
```html
<section class="editorial-sand-section">
  <!-- 1. Background Layer -->
  <div class="sand-background" aria-hidden="true">
    <div class="sand-grain"></div>
    <svg class="sand-ribbons" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="420" r="260" stroke="#E3DACB" stroke-width="80" opacity="0.70" />
      <circle cx="120" cy="420" r="190" stroke="#DFD4C3" stroke-width="45" opacity="0.60" />
      <path d="M1100 -50 C1250 180, 1380 460, 1500 850" stroke="#E3DACB" stroke-width="110" stroke-linecap="round" opacity="0.80" />
      <path d="M1160 -40 C1300 200, 1420 500, 1530 840" stroke="#DAD0BE" stroke-width="50" opacity="0.50" />
      <circle cx="1380" cy="120" r="300" fill="#FAF6F0" opacity="0.40" filter="blur(60px)" />
    </svg>
  </div>

  <!-- 2. Foreground Content -->
  <div class="editorial-content">
    <h2>Headline Title</h2>
    <p>Subtitle content sits here.</p>
  </div>
</section>
```

### CSS:
```css
/* Container */
.editorial-sand-section {
  position: relative;
  width: 100%;
  padding: 96px 24px;
  overflow: hidden;
  color: #0B0B0B;
}

/* Background Layer */
.sand-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background-color: #EFE9DF;
  background-image: radial-gradient(circle at 10% 20%, rgba(245, 239, 230, 0.9) 0%, rgba(239, 233, 223, 1) 100%);
}

/* Paper Grain Texture */
.sand-grain {
  position: absolute;
  inset: 0;
  opacity: 0.25;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E");
}

/* Ribbon SVG */
.sand-ribbons {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Content Container */
.editorial-content {
  position: relative;
  z-index: 10;
  max-width: 1140px;
  margin: 0 auto;
}
```

---

## 4. Matching Card & Input Styles (Light Luxury Sand Theme)

When placing forms, cards, or inputs on top of this background, use these complementary surface tokens:

```css
/* Floating Sand Card */
.sand-theme-card {
  background-color: rgba(250, 246, 240, 0.95);
  border: 1px solid #DDD4C5;
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(60, 45, 25, 0.07);
}

/* Card Header */
.sand-theme-card-header {
  background-color: rgba(243, 234, 219, 0.90);
  border-bottom: 1px solid #E4DACB;
}

/* High-Contrast Action Button */
.sand-theme-button {
  background-color: #111111;
  color: #F5C869;
  border-radius: 9999px;
  font-weight: 700;
  padding: 14px 28px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  border: none;
  cursor: pointer;
}
```
