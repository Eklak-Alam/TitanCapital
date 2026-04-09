"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const linkGroupsRef = useRef([]);
  const giantTextRef = useRef(null);
  const bottomBarRef = useRef(null);

  const addToLinkGroups = (el) => {
    if (el && !linkGroupsRef.current.includes(el)) linkGroupsRef.current.push(el);
  };

  const footerLinks = {
    ecosystem: [
      { name: "Portfolio", href: "/portfolio" },
      { name: "Indicorns", href: "/indicorns" },
      { name: "Winners Fund", href: "/winners-fund" },
      { name: "Partner Investors", href: "/investors" },
    ],
    company: [
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
      { name: "Pitch Us", href: "/pitch" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Press & Media", href: "/press" },
      { name: "Founder Playbook", href: "/playbook" },
      { name: "Newsletters", href: "/newsletter" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(leftColumnRef.current, { opacity: 0, y: 40 });
      gsap.set(linkGroupsRef.current, { opacity: 0, y: 30 });
      gsap.set(giantTextRef.current, { yPercent: 30, opacity: 0, scale: 0.95 });
      gsap.set(bottomBarRef.current, { opacity: 0 });

      // Main Footer Reveal Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // Triggers when the footer enters the viewport
          toggleActions: "play none none reverse",
        },
      });

      tl.to(leftColumnRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        linkGroupsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.6" // Overlap with the left column
      )
      // Reveal the giant text
      .to(
        giantTextRef.current,
        {
          yPercent: 0,
          opacity: 1, 
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
        },
        "-=0.8"
      )
      .to(
        bottomBarRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );

      // Subtle Parallax effect on scroll for the giant text
      gsap.to(giantTextRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full bg-surface border-t border-border pt-20 lg:pt-32 overflow-hidden flex flex-col justify-between">
      
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-10">
        
        {/* --- TOP SECTION: Brand & Links --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pb-10">
          
          {/* Left: Brand Details */}
          <div ref={leftColumnRef} className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105 active:scale-95">
              <Image 
                src="/logo.png" 
                alt="Titan Capital Logo" 
                width={160} 
                height={45} 
                className="object-contain"
              />
            </Link>
            
            <p className="text-body text-base lg:text-lg max-w-sm mb-10 leading-relaxed font-medium">
              Backing unstoppable founders building the next generation of Indicorns. 
              Operator-led capital for early-stage visionaries.
            </p>
            
            {/* Premium Social Icons */}
            <div className="flex gap-4">
              {[X, X, X, X].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-muted hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,35,106,0.15)]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Link Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
            
            <div ref={addToLinkGroups}>
              <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Ecosystem
              </h4>
              <ul className="space-y-4">
                {footerLinks.ecosystem.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[15px] font-medium text-body hover:text-heading transition-colors flex items-center group">
                      <span className="relative overflow-hidden">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-muted opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-primary transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div ref={addToLinkGroups}>
              <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[15px] font-medium text-body hover:text-heading transition-colors flex items-center group">
                      <span className="relative overflow-hidden">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-muted opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-primary transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div ref={addToLinkGroups} className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Resources
              </h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[15px] font-medium text-body hover:text-heading transition-colors flex items-center group">
                      <span className="relative overflow-hidden">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-muted opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-primary transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* --- MIDDLE SECTION: Giant Dynamic Text --- */}
      {/* Centered, no blue hover, with substantial padding all around */}
      <div className="w-full relative py-16 md:py-24 px-6 md:px-12 select-none overflow-hidden flex items-center justify-center">
        <h2 
          ref={giantTextRef}
          className="text-[clamp(3rem,12vw,14rem)] font-black tracking-tighter leading-[0.8] text-center uppercase whitespace-nowrap text-heading transition-transform duration-500 ease-out hover:scale-[1.02]"
        >
          Titan Capital
        </h2>
      </div>

      {/* --- BOTTOM BAR: Legal & Copyright --- */}
      <div ref={bottomBarRef} className="w-full border-t border-border bg-background py-6 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-[13px] text-muted font-semibold tracking-wide">
            © {currentYear} Titan Capital. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
      
    </footer>
  );
}