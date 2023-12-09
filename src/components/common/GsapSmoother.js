"use client";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollTrigger.normalizeScroll(true);
// ScrollTrigger.config({ ignoreMobileResize: true });
export default function GsapSmoother({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  useEffect(() => {
    if(!isMobile){
      ScrollSmoother.create({
        smooth: 0.8,
        effects: true,
        smoothTouch: 0.1,
      });
    }
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
