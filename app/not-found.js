"use client";

import Link from "next/link";
import { MoveLeft, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="w-full h-[90vh] flex items-center justify-center bg-background px-6 pt-20">
      <div className="max-w-4xl w-full border border-border bg-surface p-8 md:p-16 relative overflow-hidden">
        
        {/* Decorative background "404" ghost text */}
        <div className="absolute top-0 right-0 text-[20vw] font-black text-border opacity-20 translate-x-1/4 -translate-y-1/4 pointer-events-none select-none">
          404
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="text-primary font-bold tracking-[0.3em] text-[12px] uppercase mb-4 block">
            Error Code: 404
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-heading tracking-tighter leading-none mb-8">
            Lost in the <br /> Ecosystem.
          </h1>
          
          <p className="text-body text-lg max-w-md mb-12 leading-relaxed">
            The page you are looking for has been moved, deleted, or never existed in our portfolio. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Button: Back to Safety */}
            <Link 
              href="/" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-[13px] font-bold tracking-widest uppercase hover:bg-primary-hover transition-all duration-300"
            >
              <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return Home
            </Link>

            {/* Secondary Button: Get Help */}
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-3 px-8 py-4 border border-border text-heading text-[13px] font-bold tracking-widest uppercase hover:bg-background transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </motion.div>

        {/* Sharp corner accent */}
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary"></div>
      </div>
    </section>
  );
}