import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiquidMetalButtonProps {
  id?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
  variant?: 'gold' | 'silver';
}

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Procedural liquid metal shader based on Framer Liquid-Metal-Buttons (Shouvik Biswas)
const FRAGMENT_SHADER_SOURCE = `
precision highp float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_hover;
uniform int u_variant; // 0 = gold/champagne, 1 = silver/chrome

// Fast hash
vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

// 2D Perlin noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                   dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
               mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                   dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    float t = u_time * (0.8 + u_hover * 0.6);
    
    // Mouse ripple displacement
    vec2 mouseOffset = (u_mouse - vec2(0.5)) * 0.8;
    vec2 p = st * 3.2 - mouseOffset * u_hover;

    // Multi-octave turbulence inspired by Shouvik Biswas's Framer shader
    vec2 q = p;
    float a = 0.5;
    float d = 1.2;
    for (int j = 2; j < 7; j++) {
        float fj = float(j);
        q += 0.22 * sin(length(q) * 1.15 * fj + t * 0.75 + vec2(a, d)) / fj;
        a += cos(fj + d * 1.2 + q.x * 1.8 - t * 0.5);
        d += sin(fj * q.y + a + t * 0.4);
    }

    float base = length(q.yx + vec2(a, d) * 0.25) * 2.4;
    float val = 0.5 + 0.15 * sin(base + 1.0) + 0.28 * sin(base + 4.0) + 0.15 * sin(base + 9.0);
    val = clamp((val - 0.28) / 0.44, 0.0, 1.0);

    // Specular light highlights
    float specular = pow(max(0.0, sin(base * 1.8 + t * 1.2)), 8.0) * (0.6 + u_hover * 0.4);

    vec3 col;
    if (u_variant == 0) {
        // XLNC Champagne Gold / Molten Amber Palette
        vec3 c0 = vec3(0.05, 0.03, 0.01);
        vec3 c1 = vec3(0.38, 0.25, 0.09);
        vec3 c2 = vec3(0.90, 0.82, 0.63); // #E5D0A1
        vec3 c3 = vec3(1.00, 0.96, 0.88); // Gleaming bright highlight

        if (val < 0.33) {
            col = mix(c0, c1, val / 0.33);
        } else if (val < 0.66) {
            col = mix(c1, c2, (val - 0.33) / 0.33);
        } else {
            col = mix(c2, c3, (val - 0.66) / 0.34);
        }
        col += c3 * specular * 0.7;
    } else {
        // Silver / Mercury Chrome Palette
        vec3 c0 = vec3(0.02, 0.03, 0.05);
        vec3 c1 = vec3(0.20, 0.25, 0.32);
        vec3 c2 = vec3(0.70, 0.76, 0.84);
        vec3 c3 = vec3(0.98, 0.99, 1.00);

        if (val < 0.33) {
            col = mix(c0, c1, val / 0.33);
        } else if (val < 0.66) {
            col = mix(c1, c2, (val - 0.33) / 0.33);
        } else {
            col = mix(c2, c3, (val - 0.66) / 0.34);
        }
        col += c3 * specular * 0.8;
    }

    gl_FragColor = vec4(col, 1.0);
}
`;

export const LiquidMetalButton: React.FC<LiquidMetalButtonProps> = ({
  id = 'hero-primary-cta',
  onClick,
  className = '',
  label = 'Book a Growth Call',
  variant = 'gold',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: true,
      powerPreference: 'low-power',
    });

    if (!gl) {
      setWebGlSupported(false);
      return;
    }

    // Helper to compile shader
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failure', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const frag = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vert || !frag) {
      setWebGlSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebGlSupported(false);
      return;
    }
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error', gl.getProgramInfoLog(program));
      setWebGlSupported(false);
      return;
    }

    gl.useProgram(program);

    // Full-screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const uHoverLoc = gl.getUniformLocation(program, 'u_hover');
    const uVariantLoc = gl.getUniformLocation(program, 'u_variant');

    gl.uniform1i(uVariantLoc, variant === 'silver' ? 1 : 0);

    let animationFrameId: number;
    let startTime = performance.now();
    let currentHover = 0;
    let targetHover = 0;
    let isVisible = true;

    // Resize observer to match exact pixel container size with DPR
    const updateSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(rect.width * dpr);
      const height = Math.floor(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    updateSize();
    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(canvas);

    // Intersection observer to pause rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = (time: number) => {
      if (isVisible) {
        const elapsed = (time - startTime) * 0.001;
        targetHover = isHovered ? 1 : 0;
        currentHover += (targetHover - currentHover) * 0.1;

        gl.useProgram(program);
        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        gl.uniform2f(uMouseLoc, mousePos.x, mousePos.y);
        gl.uniform1f(uHoverLoc, currentHover);
        gl.uniform1i(uVariantLoc, variant === 'silver' ? 1 : 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      observer.disconnect();
      if (program) gl.deleteProgram(program);
      if (vert) gl.deleteShader(vert);
      if (frag) gl.deleteShader(frag);
    };
  }, [variant, isHovered, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      ref={containerRef as unknown as React.RefObject<HTMLButtonElement>}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLButtonElement>}
      className={`relative inline-flex items-center justify-center p-[2.5px] rounded-full group cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] select-none ${className}`}
    >
      {/* Outer ambient glow from the liquid metal */}
      <span
        className="absolute -inset-1.5 rounded-full blur-md opacity-40 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background:
            variant === 'silver'
              ? 'radial-gradient(circle, rgba(200,220,240,0.35) 0%, rgba(100,140,180,0.15) 60%, transparent 80%)'
              : 'radial-gradient(circle, rgba(229,208,161,0.5) 0%, rgba(180,140,70,0.2) 60%, transparent 80%)',
        }}
      />

      {/* The Liquid Metal WebGL Shader Layer (Outer Fluid Rim & Molten Waves) */}
      <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {webGlSupported ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover rounded-full"
            style={{ display: 'block' }}
          />
        ) : (
          /* CSS Fallback: Animated Molten Liquid Chrome/Gold Gradient */
          <span
            className="block w-full h-full rounded-full animate-spin-slow"
            style={{
              background:
                variant === 'silver'
                  ? 'conic-gradient(from 0deg, #0B0E14, #94A3B8, #F8FAFC, #334155, #0B0E14)'
                  : 'conic-gradient(from 0deg, #1A1308, #E5D0A1, #FFFBEB, #855C1B, #1A1308)',
              filter: 'blur(1px)',
            }}
          />
        )}
      </span>

      {/* Button Body / Inner Pill (Framer Dark Capsule with Hairline Reflection) */}
      <span
        className="relative z-10 inline-flex items-center justify-center gap-2.5 px-5 xs:px-7 sm:px-9 py-2.5 sm:py-3.5 rounded-full bg-[#0D0D0D]/90 backdrop-blur-md border border-white/15 group-hover:border-white/30 text-white transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.6)] whitespace-nowrap"
      >
        {/* Subtle inner top specular gleam */}
        <span
          aria-hidden="true"
          className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
        />

        {/* Rolling / Shifting CTA Text */}
        <span className="relative overflow-hidden inline-block h-4 sm:h-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#F3EAD8] group-hover:text-white transition-colors">
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
            {label}
          </span>
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 absolute inset-0 text-[#E5D0A1]"
            aria-hidden="true"
          >
            {label}
          </span>
        </span>

        {/* Icon with motion */}
        <span className="w-5 h-5 rounded-full bg-white/[0.08] group-hover:bg-[#E5D0A1] border border-white/10 group-hover:border-[#E5D0A1] flex items-center justify-center transition-all duration-300">
          <ArrowUpRight className="w-3 h-3 text-[#CEC5B7] group-hover:text-[#0B0B0B] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform duration-300" />
        </span>
      </span>
    </button>
  );
};

export default LiquidMetalButton;
