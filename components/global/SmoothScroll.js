"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { usePathname, useSearchParams } from "next/navigation"; // Added Next.js router hooks

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Hook Lenis into GSAP's ticker
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  // 2. Trigger Lenis to recalculate dimensions every time the URL changes.
  // This completely fixes the "back button" bug.
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.resize();
    }
  }, [pathname, searchParams]);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false} // CRITICAL FIX: Turns off default loop so GSAP takes over
      options={{
        lerp: 0.07,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
        syncTouch: true,
      }}
      className="min-h-screen w-full" 
    >
      {children}
    </ReactLenis>
  );
}