"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    setTimeout(() => {
      console.log("runing");
      window.scrollTo(0, 0);
    }, 0)
    
  }, []);
  return null;
}