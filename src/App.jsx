import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import SakuraPetals from "./components/SakuraPetals";
import CursorGlow from "./components/CursorGlow";
import { useReducedMotion } from "./hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const reduced = useReducedMotion();

  useGSAP(() => {
    // Respect reduced-motion: keep native scroll, no inertial smoothing/effects.
    if (reduced) return;
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, [reduced]);

  return (
    <main>
      {/* Atmospheric overlays — fixed, non-interactive */}
      <SakuraPetals />
      <CursorGlow />
      <div className="paper-grain" aria-hidden="true" />

      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
