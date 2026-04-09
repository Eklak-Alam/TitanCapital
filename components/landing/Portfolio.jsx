"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// --- Portfolio Data ---
const portfolioData = [
  {
    id: "ola",
    name: "Ola",
    logo: "/portfolio/logoola.png",
    image: "/portfolio/olabgimg.png",
    title: "India’s most popular Cab aggregator and ridesharing company",
    description: "Serving in 250+ cities across India, Australia, New Zealand, and the UK, the Ola app offers mobility solutions by connecting customers to drivers and a wide range of vehicles.",
    link: "/portfolio/ola"
  },
  {
    id: "urban-company",
    name: "Urban Company",
    logo: "/portfolio/logourbancompany.png", 
    image: "/portfolio/urbancompanybgimg.png",
    title: "Asia's largest tech-enabled home services marketplace",
    description: "Empowering millions of service professionals to deliver high-quality services at home like never before, transforming the gig economy.",
    link: "/portfolio/urban-company"
  },
  {
    id: "mamaearth",
    name: "Mamaearth",
    logo: "/portfolio/logomamaearth.png",
    image: "/portfolio/mamaearthbgimg.png",
    title: "Toxin-free, natural personal care brand for babies and adults",
    description: "Built on the promise of safe, certified, and toxin-free products. Mamaearth has become a household name for conscious consumers.",
    link: "/portfolio/mamaearth"
  },
  {
    id: "razorpay",
    name: "Razorpay",
    logo: "/portfolio/logorazorpay.png",
    image: "/portfolio/razorpaybgimg.png",
    title: "The premier payments solution for Indian businesses",
    description: "A comprehensive financial infrastructure platform that allows businesses to accept, process, and disburse payments with completely flat, seamless integrations.",
    link: "/portfolio/razorpay"
  },
  {
    id: "ofbusiness",
    name: "OfBusiness",
    logo: "/portfolio/logoofbuisness.png", 
    image: "/portfolio/ofbuisnessbgimg.png", 
    title: "Tech-enabled platform for B2B raw material procurement",
    description: "Facilitating raw material procurement and credit for SMEs, driving efficiency and scale in the manufacturing sector through deep technology.",
    link: "/portfolio/ofbusiness"
  },
  {
    id: "shadowfax",
    name: "Shadowfax",
    logo: "/portfolio/logoshadowfax.png",
    image: "/portfolio/shadowfaxbgimg.png",
    title: "India's largest crowdsourced delivery platform",
    description: "Empowering businesses with an agile, reliable, and scalable logistics network driven by cutting-edge technology.",
    link: "/portfolio/shadowfax"
  },
  {
    id: "credgenics",
    name: "Credgenics",
    logo: "/portfolio/logocredgenics.png",
    image: "/portfolio/credgenicsbgimg.png",
    title: "SaaS-based debt resolution platform for banks and NBFCs",
    description: "Revolutionizing debt collections through automation, intelligence, and legal tech to improve recovery rates fundamentally.",
    link: "/portfolio/credgenics"
  },
  {
    id: "giva",
    name: "Giva",
    logo: "/portfolio/logogiva.png",
    image: "/portfolio/givabgimg.png",
    title: "Premium silver jewelry brand making elegant designs accessible",
    description: "Crafting authentic, high-quality silver jewelry for the modern consumer with a focus on design and affordability.",
    link: "/portfolio/giva"
  }
];

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // --- 3 Second Autoplay Logic ---
  useEffect(() => {
    if (isPaused) return; 
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % portfolioData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeTab = portfolioData[activeIndex];

  return (
    <section 
      className="w-full py-20 lg:py-32 bg-background relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] sm:text-[12px] uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading tracking-tight leading-[1.1]">
              Industry-defining <br className="hidden md:block" />
              companies we back.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-[12px] sm:text-[13px] font-bold tracking-widest uppercase text-heading hover:text-primary transition-colors pb-1 border-b-2 border-transparent hover:border-primary"
          >
            Explore All 200+
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* --- Main Dashboard UI --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
          
          {/* LEFT: Logo Sidebar */}
          <div className="w-full lg:w-[30%] flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar snap-x snap-mandatory">
            {portfolioData.map((company, index) => {
              const isActive = activeIndex === index;
              
              return (
                <button
                  key={company.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true); 
                  }}
                  className="relative flex-shrink-0 lg:flex-shrink w-40 lg:w-full h-20 lg:h-24 px-6 flex items-center justify-center focus:outline-none snap-center group"
                >
                  {/* Enhanced, Ultra-Clean Light Background Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLogoBg"
                      // Added a very clean shadow and solid bright background to make it look premium
                      className="absolute inset-0 bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-border/80 z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                  
                  {/* Logo Container */}
                  <div className={`relative z-10 w-full h-full flex items-center justify-center transition-all duration-500 ${isActive ? "opacity-100 scale-105" : "opacity-100 scale-95 group-hover:opacity-80 group-hover:grayscale-0"}`}>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-[50%] max-w-[80%] object-contain drop-shadow-sm"
                    />
                  </div>
                  
                  {/* Active Primary Accent Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLogoLine"
                      className="absolute bottom-0 lg:bottom-auto lg:left-0 w-full lg:w-1 h-1 lg:h-full bg-primary z-20"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: Content Display area */}
          <div className="w-full lg:w-[70%] relative flex flex-col bg-surface border border-border shadow-[0_20px_50px_rgb(0,0,0,0.05)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full w-full"
              >
                
                {/* Image Section (Top half) */}
                <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden bg-black">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    src={activeTab.image}
                    alt={activeTab.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent"></div>
                  
                  {/* Pure Logo (No background/white box!) */}
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20">
                    <img
                      src={activeTab.logo}
                      alt={activeTab.name}
                      // Kept drop-shadow so it stands out against any image background without needing a box
                      className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>

                {/* Content Section (Tightened Layout) */}
                {/* Removed justify-between and flex-grow to eliminate excess empty space */}
                <div className="flex flex-col p-6 sm:p-8 lg:p-10 bg-surface">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-[1.2] mb-4">
                    {activeTab.title}
                  </h3>
                  
                  <p className="text-body text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-3xl">
                    {activeTab.description}
                  </p>
                  
                  {/* Premium Action Button (Moved directly below text) */}
                  <div className="pt-6 border-t border-border w-full">
                    <Link
                      href={activeTab.link}
                      className="group inline-flex items-center gap-4 text-[12px] sm:text-[13px] font-bold tracking-widest uppercase text-heading transition-colors"
                    >
                      <span className="group-hover:text-primary transition-colors duration-300">Read Case Study</span>
                      <div className="w-10 h-10 flex items-center justify-center bg-background border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
                
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}