"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Your actual data
const portfolioCompanies = [
  { id: 1, name: "Done", logo: "/companylogo/done.png" },
  { id: 2, name: "Elevate Now", logo: "/companylogo/elevatenow.png" },
  { id: 3, name: "For Real", logo: "/companylogo/forreal.png" },
  { id: 4, name: "Peeko", logo: "/companylogo/peeko.png" },
  { id: 5, name: "Ridev", logo: "/companylogo/ridev.png" },
  { id: 6, name: "Done", logo: "/companylogo/done.png" },
  { id: 7, name: "Elevate Now", logo: "/companylogo/elevatenow.png" },
  { id: 8, name: "For Real", logo: "/companylogo/forreal.png" },
  { id: 9, name: "Peeko", logo: "/companylogo/peeko.png" },
  { id: 10, name: "Ridev", logo: "/companylogo/ridev.png" },
];

export default function Hero() {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative w-full pt-36 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-background">
      
      {/* This style block forces the Swiper animation to be perfectly linear. 
        Added .ticker-swiper class to target it specifically.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ticker-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: MAIN TYPOGRAPHY & CTA --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7"
          >
            <motion.p variants={itemVariants} className="text-primary font-bold tracking-widest text-sm uppercase mb-6">
              Operator-led early stage capital
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-[44px] leading-tight md:text-7xl lg:text-[72px] xl:text-[80px] font-bold text-heading md:leading-[1.05] tracking-tight mb-8">
              Investing behind Founders who create <br className="hidden md:block" />
              <span className="text-primary relative inline-block">
                a Better World
                {/* Subtle accent underline */}
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-primary/20 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 md:mt-12 mb-8 md:mb-16">
              <Link
                href="/pitch"
                className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-white text-[15px] font-semibold rounded-full hover:bg-primary-hover transition-colors duration-300 shadow-[0_0_20px_rgba(0,35,106,0.2)] hover:shadow-[0_0_25px_rgba(0,35,106,0.3)]"
              >
                Pitch Us
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto group flex justify-center items-center gap-2 px-8 py-4 bg-surface text-heading text-[15px] font-semibold rounded-full border border-border hover:border-primary transition-colors duration-300"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: HERO ILLUSTRATION --- */}
          {/* FIX 1: hidden on mobile (hidden md:flex) and shifted up by 24px (-translate-y-6) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex md:col-span-5 relative h-full items-center justify-center w-full -translate-y-6 lg:-translate-y-8"
          >
            <img 
              src="/heroimg3.png" 
              alt="Titan Capital Impact Illustration" 
              className="max-h-[500px] max-w-full object-contain drop-shadow-2xl" 
            />
          </motion.div>
        </div>

        {/* --- REDESIGNED PROMINENT STATS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border flex flex-col items-center justify-center text-center"
        >
          <div className="text-center mb-10 md:mb-16 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-heading tracking-tight mb-3">Redefining Venture Impact</h2>
            <p className="text-body text-sm md:text-base">Our portfolio has built a worldwide footprint, creating unprecedented value across consumer internet, D2C, SaaS, and Fintech.</p>
          </div>

          <div className="w-full bg-surface rounded-2xl md:rounded-3xl border border-border p-6 md:p-10 lg:p-14">
            {/* FIX 2: Optimized Grid for Mobile. Tighter gaps on mobile, smaller padding, scaled text */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-10 md:gap-y-12">
              
              {/* Prominent Stat 1 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border">
                <span className="text-[10px] md:text-xs font-semibold text-muted tracking-widest uppercase">Raised Over</span>
                <div className="flex items-baseline gap-1 mt-1 md:mt-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading tabular-nums">10</span>
                  <span className="text-sm sm:text-lg md:text-xl font-medium text-heading">Billion</span>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted mt-1 md:mt-2">from 100+ investors</span>
              </div>

              {/* Prominent Stat 2 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border">
                <span className="text-[10px] md:text-xs font-semibold text-muted tracking-widest uppercase">Employed</span>
                <div className="flex items-baseline gap-1 mt-1 md:mt-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading tabular-nums">100k</span>
                  <span className="text-sm sm:text-lg md:text-xl font-medium text-heading">+</span>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted mt-1 md:mt-2">People worldwide</span>
              </div>

              {/* Prominent Stat 3 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border">
                <span className="text-[10px] md:text-xs font-semibold text-muted tracking-widest uppercase">Served Over</span>
                <div className="flex items-baseline gap-1 mt-1 md:mt-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading tabular-nums">250</span>
                  <span className="text-sm sm:text-lg md:text-xl font-medium text-heading">Million</span>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted mt-1 md:mt-2">Customers globally</span>
              </div>

              {/* Prominent Stat 4 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border">
                <span className="text-[10px] md:text-xs font-semibold text-muted tracking-widest uppercase">Supported</span>
                <div className="flex items-baseline gap-1 mt-1 md:mt-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading tabular-nums">1</span>
                  <span className="text-sm sm:text-lg md:text-xl font-medium text-heading">Million</span>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted mt-1 md:mt-2">Micro-entrepreneurs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- SWIPER.JS LOGO MARQUEE Structure --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border py-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 md:mb-12 text-center">
            <h3 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary">Recent Investments</h3>
            <p className="text-heading text-xl md:text-2xl font-bold mt-2">Backing 200+ global industry leaders</p>
        </div>

        {/* Endless Swiper Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks to fade edges smoothly */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* FIX 3: allowTouchMove={false} prevents manual swiping from breaking the linear loop calculation */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            speed={3500} // Smooth, steady speed
            allowTouchMove={false} // Crucial for stopping the "stutter/restart" bug
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            breakpoints={{
              640: { spaceBetween: 40 },
              768: { spaceBetween: 60 },
              1024: { spaceBetween: 80 },
            }}
            className="flex items-center ticker-swiper"
          >
            {portfolioCompanies.map((company, index) => (
              <SwiperSlide key={`${company.id}-${index}`} style={{ width: "auto" }}>
                <div className="flex items-center justify-center w-28 md:w-36 h-16 md:h-20 bg-surface rounded-xl border border-border shadow-sm p-3 md:p-4 cursor-pointer hover:shadow-md transition-shadow duration-300">
                  <img
                    src={company.logo} 
                    alt={company.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}