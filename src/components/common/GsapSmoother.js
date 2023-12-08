"use client";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);
export default function GsapSmoother({ children }) {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });
  },[children]);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
