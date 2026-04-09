"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger to avoid Next.js SSR errors
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Indicorns() {
  const containerRef = useRef(null);
  const headlineLinesRef = useRef([]);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  const addToHeadline = (el) => {
    if (el && !headlineLinesRef.current.includes(el)) headlineLinesRef.current.push(el);
  };
  const addToText = (el) => {
    if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Hidden States
      gsap.set(headlineLinesRef.current, { yPercent: 120, skewY: 5 });
      gsap.set(textRefs.current, { opacity: 0, y: 30 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.9, filter: "blur(10px)" });

      // 2. Main ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Masked Skew Reveal for Headline
      tl.to(headlineLinesRef.current, {
        yPercent: 0,
        skewY: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      })
      // Fade/Slide up the body text
      .to(
        textRefs.current,
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" },
        "-=0.8"
      )
      // Reveal the image with cinematic unblur
      .to(
        imageRef.current,
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "expo.out" },
        "-=1.2"
      );

      // 3. Continuous Floating Parallax for the Image
      gsap.to(imageRef.current, {
        y: -20,
        rotationZ: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-20 lg:py-32 bg-background border-t border-border overflow-hidden"
    >
      {/* Subtle background glow effect behind the image area to give depth */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT CONTENT: Typography & Data --- */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div ref={addToText} className="flex items-center gap-3 mb-6">
              <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                India's Elite Startups
              </p>
            </div>

            {/* Masked Headline Reveal */}
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-heading tracking-tight mb-8 leading-[1.05]">
              <div className="overflow-hidden pb-2">
                <div ref={addToHeadline} className="block">The Rise of the</div>
              </div>
              <div className="overflow-hidden pb-2 relative">
                <div ref={addToHeadline} className="block text-primary">
                  Indicorns.
                </div>
              </div>
            </h2>

            {/* Content Body */}
            <div className="space-y-6 relative">
              <p ref={addToText} className="text-lg md:text-xl text-heading font-medium leading-relaxed max-w-2xl">
                <span className="text-primary font-bold">Indicorns</span> are India’s most successful startups that have not only achieved profitability but have decisively crossed the <span className="font-bold border-b-2 border-primary/20 text-primary">₹100 crore</span> revenue mark as of FY 2023.
              </p>

              <p ref={addToText} className="text-base md:text-lg text-body leading-relaxed max-w-2xl">
                Each of these companies has been founded within the last 15 years and stands out for its remarkable growth and economic impact. This exclusive list includes startups that are unfunded, acquired, or publicly listed—representing the absolute pinnacle of Indian entrepreneurial excellence.
              </p>
            </div>
            
          </div>

          {/* --- RIGHT CONTENT: Pure Floating Image --- */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end relative perspective-[1000px]">
            <div 
              ref={imageRef}
              className="w-full max-w-[450px] lg:max-w-full h-auto flex items-center justify-center transform-style-3d relative z-10"
            >
              <img
                src="/indiancorn.png" 
                alt="Indicorns Illustration"
                className="w-full h-full object-contain drop-shadow-[0_30px_50px_rgba(0,35,106,0.15)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}