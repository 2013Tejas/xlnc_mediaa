# Premium Dark Gold Abstract Website Background System

A complete, self-contained background design system featuring pure obsidian black canvas, subtle charcoal forms, restrained warm gold gradients, and strong central negative space.

---

## 1. Design Principles & Color Palette

| Token Name | Hex / RGBA Code | Purpose |
| :--- | :--- | :--- |
| **Canvas Base** | `#000000` / `#020202` | Pure / near-pure black matte canvas |
| **Charcoal Geometry** | `#111111` / `#151515` / `#1B1B1B` | Deep shadow geometric structures |
| **Warm Gold Glow** | `rgba(190, 150, 67, 0.62)` | Subtle specular ambient light on outer edges |
| **Muted Brown Transition** | `rgba(137, 104, 43, 0.42)` | Smooth bridge between gold and dark charcoal |
| **Atmospheric Glow** | `rgba(180, 135, 50, 0.05)` | Barely noticeable corner lighting halos |
| **Foreground Text** | `#FFFFFF` / `#B8B8B8` / `#777777` | High contrast, ultra-readable typography |

---

## 2. React + Tailwind Component

```tsx
import React from 'react';

export const PremiumDarkGoldBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      aria-hidden="true" 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#000000] ${className}`}
    >
      {/* 1. Atmospheric Ambient Halos */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 12% 5%, rgba(180, 135, 50, 0.06), transparent 28%), radial-gradient(circle at 90% 80%, rgba(180, 135, 50, 0.035), transparent 32%)`
        }}
      />

      {/* 2. Upper-Left Abstract Shape (Gold to Charcoal to Near-Black) */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: 'clamp(260px, 28vw, 420px)',
          height: 'clamp(320px, 40vw, 560px)',
          top: '-12%',
          left: '-7%',
          borderRadius: '0 0 55% 0',
          background: `linear-gradient(180deg, rgba(177, 138, 58, 0.62) 0%, rgba(120, 94, 43, 0.36) 17%, rgba(45, 42, 35, 0.75) 45%, rgba(25, 25, 25, 0.95) 75%, #111111 100%)`,
          filter: 'blur(0.5px)'
        }}
      />

      {/* 3. Lower-Right Circular Ring (Large Asymmetrical Form with Inner Hole) */}
      <div 
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(550px, 70vw, 950px)',
          aspectRatio: '1',
          right: '-22%',
          bottom: '-14%',
          background: `radial-gradient(circle at 22% 5%, rgba(190, 150, 67, 0.62), rgba(137, 104, 43, 0.42) 15%, rgba(57, 49, 35, 0.58) 32%, rgba(27, 27, 27, 0.92) 62%, rgba(14, 14, 14, 1) 100%)`
        }}
      >
        {/* Inner Hole */}
        <div 
          className="absolute rounded-full bg-[#000000]"
          style={{
            width: '53%',
            height: '53%',
            top: '31%',
            left: '31%'
          }}
        />
      </div>
    </div>
  );
};
```

---

## 3. Pure HTML & CSS Architecture

```html
<section class="premium-dark-gold-section">
  <!-- Dedicated Background Layer -->
  <div class="background" aria-hidden="true">
    <div class="top-left-shape"></div>
    <div class="bottom-right-ring"></div>
  </div>

  <!-- Content Layer -->
  <div class="content">
    <h2>Your Headline</h2>
    <p>Subtitle or description.</p>
  </div>
</section>
```

```css
.premium-dark-gold-section {
  position: relative;
  width: 100%;
  padding: 96px 24px;
  overflow: hidden;
  background-color: #000000;
  color: #FFFFFF;
}

.background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background: #000000;
}

.background::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 5%, rgba(180, 135, 50, 0.06), transparent 28%),
    radial-gradient(circle at 90% 80%, rgba(180, 135, 50, 0.035), transparent 32%);
  pointer-events: none;
}

/* Upper-left abstract shape */
.top-left-shape {
  position: absolute;
  width: clamp(260px, 28vw, 420px);
  height: clamp(320px, 40vw, 560px);
  top: -12%;
  left: -7%;
  border-radius: 0 0 55% 0;
  background: linear-gradient(
    180deg,
    rgba(177, 138, 58, 0.62) 0%,
    rgba(120, 94, 43, 0.36) 17%,
    rgba(45, 42, 35, 0.75) 45%,
    rgba(25, 25, 25, 0.95) 75%,
    #111111 100%
  );
  filter: blur(0.5px);
}

/* Lower-right ring */
.bottom-right-ring {
  position: absolute;
  width: clamp(550px, 70vw, 950px);
  aspect-ratio: 1;
  right: -22%;
  bottom: -14%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 22% 5%,
    rgba(190, 150, 67, 0.62),
    rgba(137, 104, 43, 0.42) 15%,
    rgba(57, 49, 35, 0.58) 32%,
    rgba(27, 27, 27, 0.92) 62%,
    rgba(14, 14, 14, 1) 100%
  );
}

/* Inner hole */
.bottom-right-ring::after {
  content: "";
  position: absolute;
  width: 53%;
  height: 53%;
  top: 31%;
  left: 31%;
  border-radius: 50%;
  background: #000000;
}

.content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
}
```
