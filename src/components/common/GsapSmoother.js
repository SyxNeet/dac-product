"use client";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// ScrollTrigger.normalizeScroll(true);
// ScrollTrigger.config({ ignoreMobileResize: true });
export default function GsapSmoother({ children,lang }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  useEffect(() => {
    console.log("loggg");
    try {
      if (!isMobile) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        ScrollSmoother.create({
          smooth: 0.8,
          effects: true,
          smoothTouch: 0.1,
        });
  
        return () => {
          gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        };
      }
    } catch (error) {
      console.error('Error in GSAP initialization:', error);
    }
  }, [lang]);
  
  
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
