import { useMediaQuery } from "react-responsive";

/**
 * True when the user has requested reduced motion at the OS level.
 * Used to skip heavy GSAP smoothing, particles and decorative loops.
 * @returns {boolean}
 */
export const useReducedMotion = () =>
  useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });
