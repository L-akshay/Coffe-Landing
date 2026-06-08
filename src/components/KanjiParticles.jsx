import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useReducedMotion } from "../hooks/useReducedMotion";

// Decorative glyphs — a mix of kanji + katakana with a Tokyo-night feel.
const GLYPHS = "刺激大胆不敵旨味滋養波光夢中東京ネオンミルクサクラ零式".split("");
const NEON = ["#2de2ff", "#ff2d78", "#ffb7c5", "#faeade"];

/**
 * Subtle drifting kanji/katakana particle field rendered to a fixed canvas.
 * Performance-minded: skipped entirely on mobile and when the user prefers
 * reduced motion; particle count scales with viewport width.
 */
const KanjiParticles = () => {
  const canvasRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (isMobile || reduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;
    let particles = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((window.innerWidth * window.innerHeight) / 36000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 14 + Math.random() * 30,
        speed: 0.15 + Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 0.3,
        glyph: GLYPHS[(Math.random() * GLYPHS.length) | 0],
        color: NEON[(Math.random() * NEON.length) | 0],
        alpha: 0.06 + Math.random() * 0.18,
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -p.size) {
          p.y = window.innerHeight + p.size;
          p.x = Math.random() * window.innerWidth;
        }
        ctx.font = `${p.size}px "Shippori Mincho", serif`;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillText(p.glyph, p.x, p.y);
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile, reduced]);

  if (isMobile || reduced) return null;

  return <canvas ref={canvasRef} className="kanji-particles" aria-hidden="true" />;
};

export default KanjiParticles;
