"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const portfolioCompanies = [
  { id: 1, name: "Done", logo: "/companylogo/done.png" },
  { id: 2, name: "Elevate Now", logo: "/companylogo/elevatenow.png" },
  { id: 3, name: "For Real", logo: "/companylogo/forreal.png" },
  { id: 4, name: "Peeko", logo: "/companylogo/peeko.png" },
  { id: 5, name: "Ridev", logo: "/companylogo/ridev.png" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const headlineLinesRef = useRef([]);
  const statsRef = useRef([]);
  const graphicRef = useRef(null);
  const fadeRefs = useRef([]);
  const svgLinesRef = useRef([]);
  const svgNodesRef = useRef([]);

  const addToHeadline = (el) => {
    if (el && !headlineLinesRef.current.includes(el)) headlineLinesRef.current.push(el);
  };
  const addToStats = (el) => {
    if (el && !statsRef.current.includes(el)) statsRef.current.push(el);
  };
  const addToFade = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };
  const addToLines = (el) => {
    if (el && !svgLinesRef.current.includes(el)) svgLinesRef.current.push(el);
  };
  const addToNodes = (el) => {
    if (el && !svgNodesRef.current.includes(el)) svgNodesRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Initial Setups
      gsap.set(headlineLinesRef.current, { yPercent: 120, skewY: 5 });
      gsap.set(fadeRefs.current, { opacity: 0, y: 20 });
      gsap.set(".stat-group", { opacity: 0, borderTopColor: "transparent" });
      
      // SVG Initial States
      gsap.set(svgLinesRef.current, { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });
      gsap.set(svgNodesRef.current, { scale: 0, transformOrigin: "center center" });
      gsap.set(".radar-ring", { scale: 0.5, opacity: 0, transformOrigin: "center center" });

      // 2. High-End Masked Skew Reveal for Headline
      tl.to(headlineLinesRef.current, {
        yPercent: 0,
        skewY: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      })
      // 3. Fade in subtext and buttons
      .to(
        fadeRefs.current,
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" },
        "-=0.8"
      )
      // 4. Reveal Stats Grid
      .to(
        ".stat-group",
        { opacity: 1, borderTopColor: "var(--border-light)", duration: 1, ease: "power2.out" },
        "-=0.5"
      );

      // 5. SVG Code Graphic Animation (Draws in like a blueprint)
      const graphicTl = gsap.timeline({ delay: 0.5 });
      
      graphicTl.to(svgLinesRef.current, {
        strokeDashoffset: 0,
        opacity: 0.3, // Soft subtle lines
        duration: 2,
        stagger: 0.1,
        ease: "power3.inOut"
      })
      .to(svgNodesRef.current, {
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.5)"
      }, "-=1.5")
      .to(".radar-ring", {
        scale: 2.5,
        opacity: 0,
        duration: 3,
        repeat: -1,
        ease: "power1.out"
      }, "-=1");

      // 6. Continuous 3D Floating Effect for the entire right side
      gsap.to(graphicRef.current, {
        y: -25,
        rotationX: 2,
        rotationY: -4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // 7. Dynamic Counter Animation for Stats
      statsRef.current.forEach((stat) => {
        const target = parseFloat(stat.getAttribute("data-target"));
        const suffix = stat.getAttribute("data-suffix") || "";
        
        gsap.to(stat, {
          innerHTML: target,
          duration: 2.5,
          delay: 1.2,
          ease: "power3.out",
          snap: { innerHTML: 1 },
          onUpdate: function () {
            stat.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
          },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen pt-32 pb-0 lg:pt-40 overflow-hidden bg-background text-body flex flex-col justify-between selection:bg-primary selection:text-white"
    >
      {/* CSS for Seamless Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-wrapper {
          display: flex;
          width: 200%; 
          will-change: transform;
          animation: seamless-marquee 35s linear infinite;
        }
        .pause-on-hover:hover .marquee-wrapper {
          animation-play-state: paused;
        }
        @keyframes seamless-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT: TYPOGRAPHY --- */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-20 relative">
            
            {/* <div ref={addToFade} className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                Operator-Led Capital
              </p>
            </div> */}
            
            <h1 className="text-5xl sm:text-6xl lg:text-[88px] font-bold leading-[1.05] tracking-tight mb-8 text-heading">
              <div className="overflow-hidden pb-2">
                <div ref={addToHeadline} className="block">Investing behind</div>
              </div>
              <div className="overflow-hidden pb-2">
                <div ref={addToHeadline} className="block text-muted">Founders who build</div>
              </div>
              <div className="overflow-hidden pb-2 relative">
                <div ref={addToHeadline} className="block text-primary">
                  a Better World.
                </div>
              </div>
            </h1>

            <p ref={addToFade} className="text-lg md:text-xl text-body max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              We provide the capital, strategic network, and operational blueprint to help visionary founders scale from zero to global dominance.
            </p>

            <div ref={addToFade} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/pitch"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary text-white text-[15px] font-bold rounded-full transition-all hover:bg-primary-hover hover:shadow-lg active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Pitch Your Startup
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-surface text-heading text-[15px] font-semibold rounded-full border border-border hover:border-border-strong transition-all duration-300 active:scale-95 shadow-sm"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>

          {/* --- RIGHT: CODE-DRIVEN SVG VISUAL --- */}
          <div 
            className="hidden lg:flex lg:col-span-5 relative h-[600px] items-center justify-center perspective-[1000px] z-10"
          >
            <div 
              ref={graphicRef} 
              className="relative w-full max-w-[550px] aspect-square flex items-center justify-center transform-style-3d"
            >
              {/* Pure SVG Animated Network Graphic */}
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full overflow-visible drop-shadow-2xl"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle glowing gradients for nodes */}
                  <radialGradient id="nodeGlow" cx="0%" cy="0%" r="100%">
                    <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0.4" />
                  </radialGradient>
                  
                  <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--text-muted)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* --- CONNECTING LINES --- */}
                <g stroke="url(#lineGlow)" strokeWidth="1.5" strokeLinecap="round">
                  {/* Center to Inner Orbit */}
                  <path ref={addToLines} d="M200 200 L120 140" />
                  <path ref={addToLines} d="M200 200 L280 120" />
                  <path ref={addToLines} d="M200 200 L140 280" />
                  <path ref={addToLines} d="M200 200 L290 260" />
                  
                  {/* Inner to Outer Orbit */}
                  <path ref={addToLines} d="M120 140 L60 80" />
                  <path ref={addToLines} d="M280 120 L350 150" />
                  <path ref={addToLines} d="M140 280 L90 340" />
                  <path ref={addToLines} d="M290 260 L340 320" />
                  
                  {/* Cross Connections */}
                  <path ref={addToLines} d="M120 140 L280 120" />
                  <path ref={addToLines} d="M280 120 L290 260" />
                  <path ref={addToLines} d="M290 260 L140 280" />
                  <path ref={addToLines} d="M140 280 L120 140" />
                </g>

                {/* --- ORBITAL RINGS (Subtle structural guides) --- */}
                <circle cx="200" cy="200" r="100" stroke="var(--border-strong)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                <circle cx="200" cy="200" r="170" stroke="var(--border-strong)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />

                {/* --- ANIMATING RADAR RING --- */}
                <circle cx="200" cy="200" r="40" className="radar-ring" stroke="var(--brand-primary)" strokeWidth="1" fill="none" />

                {/* --- NODES --- */}
                <g fill="url(#nodeGlow)">
                  {/* Outer Nodes */}
                  <circle ref={addToNodes} cx="60" cy="80" r="6" />
                  <circle ref={addToNodes} cx="350" cy="150" r="8" />
                  <circle ref={addToNodes} cx="90" cy="340" r="5" />
                  <circle ref={addToNodes} cx="340" cy="320" r="7" />
                  
                  {/* Inner Nodes */}
                  <circle ref={addToNodes} cx="120" cy="140" r="12" />
                  <circle ref={addToNodes} cx="280" cy="120" r="10" />
                  <circle ref={addToNodes} cx="140" cy="280" r="14" />
                  <circle ref={addToNodes} cx="290" cy="260" r="11" />
                  
                  {/* Center Hub Node (The VC) */}
                  <circle ref={addToNodes} cx="200" cy="200" r="24" fill="var(--brand-primary)" />
                  <circle ref={addToNodes} cx="200" cy="200" r="8" fill="var(--color-surface)" />
                </g>
              </svg>

            </div>
          </div>
        </div>

        {/* --- ARCHITECTURAL STATS GRID --- */}
        <div className="stat-group mt-16 lg:mt-24 border-t border-b border-border w-full grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {[
            { label: "Capital Raised", value: "10", suffix: "B+", desc: "from 100+ LPs" },
            { label: "Jobs Created", value: "100", suffix: "k+", desc: "worldwide" },
            { label: "Customers Served", value: "250", suffix: "M", desc: "globally" },
            { label: "Micro-Entrepreneurs", value: "1", suffix: "M+", desc: "supported" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col p-8 lg:p-10 transition-colors hover:bg-surface/50 cursor-default">
              <div className="flex items-baseline gap-1 mb-2">
                <span 
                  ref={addToStats} 
                  data-target={stat.value} 
                  data-suffix={stat.suffix}
                  className="text-5xl lg:text-6xl font-bold text-heading tracking-tight tabular-nums"
                >
                  0{stat.suffix}
                </span>
              </div>
              <p className="text-sm font-bold text-heading uppercase tracking-wide">{stat.label}</p>
              <p className="text-sm text-muted mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- FLAWLESS ENDLESS MARQUEE --- */}
      <div className="w-full border-b border-border bg-surface py-8 relative overflow-hidden pause-on-hover">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="marquee-wrapper">
          <div className="flex items-center justify-around w-1/2 flex-shrink-0 px-8">
            {portfolioCompanies.map((company, index) => (
              <div key={`set1-${company.id}-${index}`} className="flex items-center justify-center w-32 h-14 transition-transform hover:scale-105 cursor-pointer">
                <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-around w-1/2 flex-shrink-0 px-8">
            {portfolioCompanies.map((company, index) => (
              <div key={`set2-${company.id}-${index}`} className="flex items-center justify-center w-32 h-14 transition-transform hover:scale-105 cursor-pointer">
                <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}