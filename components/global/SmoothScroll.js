"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        // These settings are tuned for a "Premium SaaS" feel
        lerp: 0.08,        // Lower is smoother, higher is more responsive (0.05 - 0.1 is the sweet spot)
        duration: 1.2,     // How long the scroll animation lasts
        smoothWheel: true, // Enables smooth scrolling for mouse wheels
        wheelMultiplier: 1, // Speed of the scroll
        touchMultiplier: 2, // Smoothness for touch devices
        infinite: false,   // Set to true only if you want an endless loop
      }}
    >
      {children}
    </ReactLenis>
  );
}