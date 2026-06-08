import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useReducedMotion } from "../hooks/useReducedMotion";

const PETAL_COLORS = ["#f8bbd0", "#f5d0db", "#e9a7be"];

/**
 * Subtle falling sakura petals on a fixed, pointer-events:none canvas.
 * Rendered in front as a light atmospheric layer (low opacity). Skipped on
 * mobile and under reduced motion to protect performance/accessibility.
 */
const SakuraPetals = () => {
  const canvasRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (isMobile || reduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame;
    let petals = [];

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(window.innerWidth / 36); // sparse, tasteful
      petals = Array.from({ length: count }, () => spawn());
    };

    const spawn = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      size: 6 + Math.random() * 9,
      speedY: 0.5 + Math.random() * 1.1,
      sway: 0.6 + Math.random() * 1.2,
      swayPhase: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.04,
      angle: Math.random() * Math.PI,
      color: PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0],
      alpha: 0.35 + Math.random() * 0.4,
    });

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      // simple petal: two arcs forming a teardrop-ish blossom leaf
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(p.size * 0.6, -p.size * 0.5, 0, -p.size);
      ctx.quadraticCurveTo(-p.size * 0.6, -p.size * 0.5, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of petals) {
        p.swayPhase += 0.02;
        p.y += p.speedY;
        p.x += Math.sin(p.swayPhase) * p.sway;
        p.angle += p.spin;
        if (p.y > window.innerHeight + p.size) {
          Object.assign(p, spawn(), { y: -p.size });
        }
        drawPetal(p);
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
  return <canvas ref={canvasRef} className="sakura-canvas" aria-hidden="true" />;
};

export default SakuraPetals;
