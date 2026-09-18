import React, { useRef, useEffect, useCallback, useMemo } from 'react';

export interface StarfieldMotionProps {
  theme?: 'dark' | 'light';
  darkBackground?: string;
  lightBackground?: string;
  dotColor?: string;
  dotColorLight?: string;
  gap?: number;
  baseRadius?: number;
  padding?: number;
  influenceRadius?: number;
  pushStrength?: number;
  glowBoost?: number;
  shootingStarsEnabled?: boolean;
  shootingStarMinInterval?: number;
  shootingStarMaxInterval?: number;
  shootingStarTrailLength?: number;
  breatheEnabled?: boolean;
  twinkleEnabled?: boolean;
  borderRadius?: number | string;
  maxDots?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MAX_DOTS_DEFAULT = 8000;

function colorToRgb(color: string): string {
  // Handle transparent
  if (color === 'transparent') {
    return '255,255,255';
  }
  // Handle rgba(r,g,b,a) or rgb(r,g,b)
  const rgbaMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbaMatch) return `${rgbaMatch[1]},${rgbaMatch[2]},${rgbaMatch[3]}`;

  // Handle hex (#fff or #ffffff)
  const h = color.replace('#', '');
  const expanded =
    h.length === 3
      ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
      : h.slice(0, 6);
  const num = parseInt(expanded, 16);
  if (isNaN(num)) return '229,208,161';
  return `${(num >> 16) & 255},${(num >> 8) & 255},${num & 255}`;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  len: number;
}

interface GridState {
  W: number;
  H: number;
  dpr: number;
  cols: number;
  rows: number;
  count: number;
  gap: number;
  baseX: Float32Array;
  baseY: Float32Array;
  posX: Float32Array;
  posY: Float32Array;
  velX: Float32Array;
  velY: Float32Array;
  dotRadius: Float32Array;
  dotBaseAlpha: Float32Array;
  dotType: Uint8Array;
  twinklePhase: Float32Array;
  twinkleSpeed: Float32Array;
  starRotation: Float32Array;
  typeIndices: number[][];
  spatialGrid: number[][];
  gridCols: number;
  gridRows: number;
  cellSize: number;
  shootingStars: ShootingStar[];
  nextShoot: number;
  mouseX: number;
  mouseY: number;
  mouseInside: boolean;
  smoothX: number;
  smoothY: number;
  frameAlpha: Float32Array;
  frameRadius: Float32Array;
  mouseAffected: Uint8Array;
  enableGlow: boolean;
}

export const StarfieldMotion: React.FC<StarfieldMotionProps> = ({
  darkBackground = 'transparent',
  lightBackground = '#ffffff',
  dotColor = '#E5D0A1',
  dotColorLight = '#18181b',
  theme = 'dark',
  gap: userGap = 12,
  baseRadius = 1.1,
  padding = 8,
  influenceRadius = 110,
  pushStrength = 18,
  glowBoost = 0.65,
  shootingStarsEnabled = true,
  shootingStarMinInterval = 2.5,
  shootingStarMaxInterval = 5.5,
  shootingStarTrailLength = 45,
  breatheEnabled = true,
  twinkleEnabled = true,
  borderRadius = 0,
  maxDots = MAX_DOTS_DEFAULT,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef<GridState | null>(null);

  const isLight = theme === 'light';
  const bg = isLight ? lightBackground : darkBackground;
  const rgb = colorToRgb(isLight ? dotColorLight : dotColor);

  const device = useMemo(() => {
    if (typeof window === 'undefined') {
      return { dprCap: 2, dotBudget: maxDots, minGap: 10, enableGlow: true };
    }
    const w = window.innerWidth;
    const hasTouch = navigator.maxTouchPoints > 1;
    const isMobile = w < 768;
    const isTablet = w >= 768 && w < 1024 && hasTouch;

    if (isMobile) {
      return {
        dprCap: 1.5,
        dotBudget: Math.min(maxDots, 1600),
        minGap: 16,
        enableGlow: false,
      };
    }
    if (isTablet) {
      return {
        dprCap: 1.5,
        dotBudget: Math.min(maxDots, 3600),
        minGap: 12,
        enableGlow: true,
      };
    }
    return { dprCap: 2, dotBudget: maxDots, minGap: 10, enableGlow: true };
  }, [maxDots]);

  const buildGrid = useCallback(
    (canvas: HTMLCanvasElement, W: number, H: number): GridState => {
      const dpr = Math.min(window.devicePixelRatio || 1, device.dprCap);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      // Auto-scale gap so dot count never exceeds device budget
      const budget = device.dotBudget;
      let gap = Math.max(userGap, device.minGap);
      const naiveCols = Math.floor((W - padding * 2) / gap) + 1;
      const naiveRows = Math.floor((H - padding * 2) / gap) + 1;
      if (naiveCols * naiveRows > budget) {
        gap = Math.ceil(Math.sqrt((W * H) / budget));
        if (gap < userGap) gap = userGap;
      }

      const cols = Math.floor((W - padding * 2) / gap) + 1;
      const rows = Math.floor((H - padding * 2) / gap) + 1;
      const count = cols * rows;
      const offsetX = (W - (cols - 1) * gap) / 2;
      const offsetY = (H - (rows - 1) * gap) / 2;

      const baseX = new Float32Array(count);
      const baseY = new Float32Array(count);
      const posX = new Float32Array(count);
      const posY = new Float32Array(count);
      const velX = new Float32Array(count);
      const velY = new Float32Array(count);
      const dotRadius = new Float32Array(count);
      const dotBaseAlpha = new Float32Array(count);
      const dotType = new Uint8Array(count);
      const twinklePhase = new Float32Array(count);
      const twinkleSpeed = new Float32Array(count);
      const starRotation = new Float32Array(count);

      const typeIndices: number[][] = [[], [], [], []];
      const brightThresh = 0.982;
      const medThresh = 0.95;
      const smallThresh = 0.88;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const x = offsetX + c * gap;
          const y = offsetY + r * gap;
          baseX[idx] = x;
          baseY[idx] = y;
          posX[idx] = x;
          posY[idx] = y;

          const roll = Math.random();
          if (roll > brightThresh) {
            dotType[idx] = 3; // Bright star with cross rays & aura
            dotRadius[idx] = 3.2 + Math.random() * 1.5;
            dotBaseAlpha[idx] = 0.75 + Math.random() * 0.25;
            twinkleSpeed[idx] = 0.5 + Math.random() * 1.2;
          } else if (roll > medThresh) {
            dotType[idx] = 2; // Medium star with radial glow
            dotRadius[idx] = 2.2 + Math.random() * 0.8;
            dotBaseAlpha[idx] = 0.45 + Math.random() * 0.3;
            twinkleSpeed[idx] = 0.7 + Math.random() * 1.8;
          } else if (roll > smallThresh) {
            dotType[idx] = 1; // Small 8-point star
            dotRadius[idx] = 1.4 + Math.random() * 0.5;
            dotBaseAlpha[idx] = 0.25 + Math.random() * 0.2;
            twinkleSpeed[idx] = 0.9 + Math.random() * 2.5;
          } else {
            dotType[idx] = 0; // Grid point dot
            dotRadius[idx] = baseRadius;
            dotBaseAlpha[idx] = 0.14 + Math.random() * 0.08;
            twinkleSpeed[idx] = 0;
          }

          if (dotType[idx] > 0) {
            // Gentle natural cosmic jitter for organic celestial dispersion
            baseX[idx] += (Math.random() - 0.5) * gap * 0.8;
            baseY[idx] += (Math.random() - 0.5) * gap * 0.8;
            posX[idx] = baseX[idx];
            posY[idx] = baseY[idx];
          }

          twinklePhase[idx] = Math.random() * Math.PI * 2;
          starRotation[idx] = Math.random() * Math.PI * 0.5;
          typeIndices[dotType[idx]].push(idx);
        }
      }

      // Spatial hash grid for high-speed cursor interactions
      const cellSize = influenceRadius;
      const gridCols = Math.ceil(W / cellSize) + 1;
      const gridRows = Math.ceil(H / cellSize) + 1;
      const spatialGrid: number[][] = new Array(gridCols * gridRows);
      for (let i = 0; i < spatialGrid.length; i++) spatialGrid[i] = [];

      for (let i = 0; i < count; i++) {
        const gc = Math.floor(baseX[i] / cellSize);
        const gr = Math.floor(baseY[i] / cellSize);
        if (gc >= 0 && gc < gridCols && gr >= 0 && gr < gridRows) {
          spatialGrid[gr * gridCols + gc].push(i);
        }
      }

      return {
        W,
        H,
        dpr,
        cols,
        rows,
        count,
        gap,
        baseX,
        baseY,
        posX,
        posY,
        velX,
        velY,
        dotRadius,
        dotBaseAlpha,
        dotType,
        twinklePhase,
        twinkleSpeed,
        starRotation,
        typeIndices,
        spatialGrid,
        gridCols,
        gridRows,
        cellSize,
        shootingStars: [],
        nextShoot: 1.5 + Math.random() * 3,
        mouseX: -9999,
        mouseY: -9999,
        mouseInside: false,
        smoothX: -9999,
        smoothY: -9999,
        frameAlpha: new Float32Array(count),
        frameRadius: new Float32Array(count),
        mouseAffected: new Uint8Array(count),
        enableGlow: device.enableGlow,
      };
    },
    [userGap, baseRadius, padding, influenceRadius, device]
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    stateRef.current = buildGrid(canvas, rect.width, rect.height);

    // Pre-computed sin/cos table for star shape (8 points)
    const starCos = new Float64Array(8);
    const starSin = new Float64Array(8);
    for (let j = 0; j < 8; j++) {
      const angle = (j * Math.PI) / 4;
      starCos[j] = Math.cos(angle);
      starSin[j] = Math.sin(angle);
    }

    function breatheAlpha(x: number, y: number, t: number) {
      const wave1 = Math.sin(x * 0.012 + y * 0.008 + t * 0.6) * 0.5 + 0.5;
      const wave2 = Math.sin(x * 0.007 - y * 0.011 + t * 0.4) * 0.5 + 0.5;
      return wave1 * 0.3 + wave2 * 0.2;
    }

    const ALPHA_STEPS = 64;
    function quantAlpha(a: number) {
      return Math.round(a * ALPHA_STEPS) / ALPHA_STEPS;
    }

    function animate() {
      animRef.current = requestAnimationFrame(animate);
      const s = stateRef.current;
      if (!s || !ctx) return;

      const t = performance.now() * 0.001;

      if (s.mouseInside) {
        s.smoothX += (s.mouseX - s.smoothX) * 0.12;
        s.smoothY += (s.mouseY - s.smoothY) * 0.12;
      } else {
        s.smoothX += (-9999 - s.smoothX) * 0.05;
        s.smoothY += (-9999 - s.smoothY) * 0.05;
      }

      ctx.setTransform(s.dpr, 0, 0, s.dpr, 0, 0);
      if (bg !== 'transparent') {
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, s.W, s.H);
      } else {
        ctx.clearRect(0, 0, s.W, s.H);
      }

      // ── Shooting Stars ──
      if (shootingStarsEnabled) {
        s.nextShoot -= 0.016;
        if (s.nextShoot <= 0) {
          const startEdge = Math.random();
          let sx: number, sy: number, angle: number;
          if (startEdge < 0.5) {
            sx = Math.random() * s.W * 0.6;
            sy = -5;
            angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.2;
          } else {
            sx = s.W + 5;
            sy = Math.random() * s.H * 0.5;
            angle = Math.PI * 0.6 + Math.random() * Math.PI * 0.3;
          }

          s.shootingStars.push({
            x: sx,
            y: sy,
            vx: Math.cos(angle) * (3.5 + Math.random() * 3.5),
            vy: Math.sin(angle) * (3.5 + Math.random() * 3.5),
            life: 1,
            decay: 0.008 + Math.random() * 0.012,
            len: shootingStarTrailLength + Math.random() * 45,
          });
          s.nextShoot =
            shootingStarMinInterval +
            Math.random() * (shootingStarMaxInterval - shootingStarMinInterval);
        }

        for (let i = s.shootingStars.length - 1; i >= 0; i--) {
          const ss = s.shootingStars[i];
          ss.x += ss.vx;
          ss.y += ss.vy;
          ss.life -= ss.decay;
          if (ss.life <= 0 || ss.x < -50 || ss.x > s.W + 50 || ss.y > s.H + 50) {
            s.shootingStars.splice(i, 1);
            continue;
          }

          const speed = Math.sqrt(ss.vx * ss.vx + ss.vy * ss.vy);
          const tailX = ss.x - (ss.vx / speed) * ss.len;
          const tailY = ss.y - (ss.vy / speed) * ss.len;

          const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          grad.addColorStop(0, `rgba(${rgb},0)`);
          grad.addColorStop(0.7, `rgba(${rgb},${ss.life * 0.35})`);
          grad.addColorStop(1, `rgba(${rgb},${ss.life * 0.95})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.3;
          ctx.lineCap = 'round';
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(ss.x, ss.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${ss.life * 0.95})`;
          ctx.fill();
        }
      }

      // ── PHASE 1: Compute Alpha / Radius with Spatial Cursor Push ──
      const fAlpha = s.frameAlpha;
      const fRadius = s.frameRadius;
      const mAffected = s.mouseAffected;
      mAffected.fill(0);

      const smx = s.smoothX;
      const smy = s.smoothY;
      const infR = influenceRadius;
      const infR2 = infR * infR;

      if (smx > -5000) {
        const minGC = Math.max(0, Math.floor((smx - infR) / s.cellSize));
        const maxGC = Math.min(
          s.gridCols - 1,
          Math.floor((smx + infR) / s.cellSize)
        );
        const minGR = Math.max(0, Math.floor((smy - infR) / s.cellSize));
        const maxGR = Math.min(
          s.gridRows - 1,
          Math.floor((smy + infR) / s.cellSize)
        );

        for (let gr = minGR; gr <= maxGR; gr++) {
          for (let gc = minGC; gc <= maxGC; gc++) {
            const cell = s.spatialGrid[gr * s.gridCols + gc];
            for (let ci = 0; ci < cell.length; ci++) {
              const i = cell[ci];
              const dx = s.baseX[i] - smx;
              const dy = s.baseY[i] - smy;
              if (dx * dx + dy * dy < infR2) {
                mAffected[i] = 1;
              }
            }
          }
        }
      }

      for (let i = 0; i < s.count; i++) {
        const type = s.dotType[i];
        let alpha = s.dotBaseAlpha[i];
        let radius = s.dotRadius[i];

        if (type === 0 && breatheEnabled) {
          alpha += breatheAlpha(s.baseX[i], s.baseY[i], t) * 0.12;
        }

        if (type > 0 && twinkleEnabled) {
          const tw = Math.sin(t * s.twinkleSpeed[i] + s.twinklePhase[i]);
          const tw2 = Math.sin(
            t * s.twinkleSpeed[i] * 0.37 + s.twinklePhase[i] * 2.1
          );
          const flicker = tw * 0.35 + tw2 * 0.15 + 0.5;

          if (type === 3) {
            alpha = s.dotBaseAlpha[i] * (0.55 + flicker * 0.45);
            s.starRotation[i] += 0.003;
          } else if (type === 2) {
            alpha = s.dotBaseAlpha[i] * (0.35 + flicker * 0.65);
            s.starRotation[i] += 0.005;
          } else {
            alpha = s.dotBaseAlpha[i] * (0.15 + flicker * 0.85);
            s.starRotation[i] += 0.008;
          }

          const flareWave = Math.sin(t * 0.3 + s.twinklePhase[i] * 5);
          if (flareWave > 0.97) {
            const flareIntensity = (flareWave - 0.97) / 0.03;
            alpha = Math.min(1, alpha + flareIntensity * 0.5);
            radius = s.dotRadius[i] * (1 + flareIntensity * 0.4);
          }
        }

        // Elastic physics simulation
        let targetX = s.baseX[i];
        let targetY = s.baseY[i];

        if (mAffected[i]) {
          const bx = s.baseX[i];
          const by = s.baseY[i];
          const dx = bx - smx;
          const dy = by - smy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const f = 1 - dist / infR;
          const ease = f * f * f;

          if (dist > 0.5) {
            targetX = bx + (dx / dist) * pushStrength * ease;
            targetY = by + (dy / dist) * pushStrength * ease;
          }
          alpha = Math.min(1, alpha + glowBoost * ease);
          if (type > 0) {
            radius = radius * (1 + ease * 0.6);
          }

          const edgeMargin = pushStrength + 6;
          const edgeFadeX = Math.min(bx, s.W - bx) / edgeMargin;
          const edgeFadeY = Math.min(by, s.H - by) / edgeMargin;
          const edgeDamp = Math.min(1, Math.min(edgeFadeX, edgeFadeY));
          if (edgeDamp < 1) {
            targetX = bx + (targetX - bx) * edgeDamp;
            targetY = by + (targetY - by) * edgeDamp;
          }
        }

        s.velX[i] += (targetX - s.posX[i]) * 0.15;
        s.velY[i] += (targetY - s.posY[i]) * 0.15;
        s.velX[i] *= 0.75;
        s.velY[i] *= 0.75;
        s.posX[i] += s.velX[i];
        s.posY[i] += s.velY[i];

        fAlpha[i] = quantAlpha(alpha);
        fRadius[i] = radius;
      }

      // ── PHASE 2: Batched Rendering ──
      // Type 0: Dots grouped by alpha
      const type0 = s.typeIndices[0];
      const alphaGroups = new Map<number, number[]>();
      for (let j = 0; j < type0.length; j++) {
        const i = type0[j];
        const a = fAlpha[i];
        if (a < 0.01) continue;
        let group = alphaGroups.get(a);
        if (!group) {
          group = [];
          alphaGroups.set(a, group);
        }
        group.push(i);
      }

      alphaGroups.forEach((indices, a) => {
        ctx.fillStyle = `rgba(${rgb},${a})`;
        ctx.beginPath();
        for (let j = 0; j < indices.length; j++) {
          const i = indices[j];
          const px = s.posX[i];
          const py = s.posY[i];
          ctx.moveTo(px + baseRadius, py);
          ctx.arc(px, py, baseRadius, 0, Math.PI * 2);
        }
        ctx.fill();
      });

      // Type 1: Small stars
      const type1 = s.typeIndices[1];
      for (let j = 0; j < type1.length; j++) {
        const i = type1[j];
        const a = fAlpha[i];
        if (a < 0.01) continue;
        const px = s.posX[i];
        const py = s.posY[i];
        const outerR = fRadius[i];
        const innerR = outerR * 0.3;
        const rot = s.starRotation[i];
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);

        ctx.fillStyle = `rgba(${rgb},${a})`;
        ctx.beginPath();
        for (let k = 0; k < 8; k++) {
          const r = k % 2 === 0 ? outerR : innerR;
          const lx = px + (starCos[k] * cosR - starSin[k] * sinR) * r;
          const ly = py + (starCos[k] * sinR + starSin[k] * cosR) * r;
          if (k === 0) ctx.moveTo(lx, ly);
          else ctx.lineTo(lx, ly);
        }
        ctx.closePath();
        ctx.fill();
      }

      // Type 2: Medium Stars with Ambient Glow
      const type2 = s.typeIndices[2];
      for (let j = 0; j < type2.length; j++) {
        const i = type2[j];
        const a = fAlpha[i];
        if (a < 0.01) continue;
        const px = s.posX[i];
        const py = s.posY[i];
        const outerR = fRadius[i];
        const innerR = outerR * 0.3;
        const rot = s.starRotation[i];
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);

        ctx.fillStyle = `rgba(${rgb},${a})`;
        ctx.beginPath();
        for (let k = 0; k < 8; k++) {
          const r = k % 2 === 0 ? outerR : innerR;
          const lx = px + (starCos[k] * cosR - starSin[k] * sinR) * r;
          const ly = py + (starCos[k] * sinR + starSin[k] * cosR) * r;
          if (k === 0) ctx.moveTo(lx, ly);
          else ctx.lineTo(lx, ly);
        }
        ctx.closePath();
        ctx.fill();

        if (s.enableGlow) {
          const glowR = outerR * 3;
          const glowA = a * 0.12;
          const grad = ctx.createRadialGradient(
            px,
            py,
            outerR * 0.2,
            px,
            py,
            glowR
          );
          grad.addColorStop(0, `rgba(${rgb},${glowA})`);
          grad.addColorStop(1, `rgba(${rgb},0)`);
          ctx.beginPath();
          ctx.arc(px, py, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      // Type 3: Hero Bright Stars with Radial Glow + 4-Point Cross Diffraction Rays
      const type3 = s.typeIndices[3];
      for (let j = 0; j < type3.length; j++) {
        const i = type3[j];
        const a = fAlpha[i];
        if (a < 0.01) continue;
        const px = s.posX[i];
        const py = s.posY[i];
        const outerR = fRadius[i];
        const innerR = outerR * 0.3;
        const rot = s.starRotation[i];
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);

        ctx.fillStyle = `rgba(${rgb},${a})`;
        ctx.beginPath();
        for (let k = 0; k < 8; k++) {
          const r = k % 2 === 0 ? outerR : innerR;
          const lx = px + (starCos[k] * cosR - starSin[k] * sinR) * r;
          const ly = py + (starCos[k] * sinR + starSin[k] * cosR) * r;
          if (k === 0) ctx.moveTo(lx, ly);
          else ctx.lineTo(lx, ly);
        }
        ctx.closePath();
        ctx.fill();

        if (s.enableGlow) {
          const glowR = outerR * 4.5;
          const glowA = a * 0.2;
          const grad = ctx.createRadialGradient(
            px,
            py,
            outerR * 0.2,
            px,
            py,
            glowR
          );
          grad.addColorStop(0, `rgba(${rgb},${glowA})`);
          grad.addColorStop(1, `rgba(${rgb},0)`);
          ctx.beginPath();
          ctx.arc(px, py, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          if (a > 0.35) {
            const rayLen = outerR * 3.8;
            const rayAlpha = a * 0.25;
            ctx.strokeStyle = `rgba(${rgb},${rayAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            const rx1 = px + cosR * rayLen;
            const ry1 = py + sinR * rayLen;
            const rx2 = px - cosR * rayLen;
            const ry2 = py - sinR * rayLen;
            const rx3 = px - sinR * rayLen;
            const ry3 = py + cosR * rayLen;
            const rx4 = px + sinR * rayLen;
            const ry4 = py - cosR * rayLen;
            ctx.moveTo(rx2, ry2);
            ctx.lineTo(rx1, ry1);
            ctx.moveTo(rx3, ry3);
            ctx.lineTo(rx4, ry4);
            ctx.stroke();
          }
        }
      }
    }

    const onWindowMouseMove = (e: MouseEvent) => {
      const s = stateRef.current;
      if (!s || !container) return;
      const r = container.getBoundingClientRect();
      const isInside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;

      if (isInside) {
        s.mouseX = e.clientX - r.left;
        s.mouseY = e.clientY - r.top;
        s.mouseInside = true;
      } else {
        s.mouseInside = false;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const s = stateRef.current;
      if (!s || !e.touches.length || !container) return;
      const r = container.getBoundingClientRect();
      s.mouseX = e.touches[0].clientX - r.left;
      s.mouseY = e.touches[0].clientY - r.top;
      s.mouseInside = true;
    };

    const onTouchEnd = () => {
      const s = stateRef.current;
      if (s) s.mouseInside = false;
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const s = stateRef.current;
        const rect = container.getBoundingClientRect();
        const newState = buildGrid(canvas, rect.width, rect.height);
        if (s) {
          newState.mouseX = s.mouseX;
          newState.mouseY = s.mouseY;
          newState.mouseInside = s.mouseInside;
          newState.smoothX = s.smoothX;
          newState.smoothY = s.smoothY;
        }
        stateRef.current = newState;
      }, 100);
    });

    window.addEventListener('mousemove', onWindowMouseMove, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);
    container.addEventListener('touchcancel', onTouchEnd);
    ro.observe(container);

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener('mousemove', onWindowMouseMove);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
      ro.disconnect();
    };
  }, [
    bg,
    rgb,
    buildGrid,
    baseRadius,
    influenceRadius,
    pushStrength,
    glowBoost,
    shootingStarsEnabled,
    shootingStarMinInterval,
    shootingStarMaxInterval,
    shootingStarTrailLength,
    breatheEnabled,
    twinkleEnabled,
  ]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative select-none pointer-events-auto ${className}`}
      style={{
        width: '100%',
        height: '100%',
        borderRadius,
        background: bg,
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default StarfieldMotion;
