import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * Soft neon glow that trails the cursor. Fixed + pointer-events:none, so it
 * never intercepts interaction. Disabled on touch/coarse pointers and when
 * reduced motion is requested.
 */
const CursorGlow = () => {
  const ref = useRef(null);
  const isTouch = useMediaQuery({ query: "(pointer: coarse)" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (isTouch || reduced) return;
    const el = ref.current;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isTouch, reduced]);

  if (isTouch || reduced) return null;
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
