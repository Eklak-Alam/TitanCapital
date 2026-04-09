"use client";

import { motion } from "framer-motion";

export default function Indicorns() {
  return (
    <section className="w-full py-12 lg:py-24 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* --- LEFT CONTENT: Clean Typography --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight mb-6 lg:mb-8">
              Indicorns
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-heading font-medium leading-relaxed">
                <span className="text-primary font-bold">Indicorns</span> are India’s most successful startups that not only have achieved profitability but have also crossed the <span className="font-bold border-b-2 border-primary/20 text-primary">₹100 crore</span> revenue mark as of FY 2023.
              </p>

              <p className="text-base md:text-lg text-body leading-relaxed opacity-90">
                Each of these companies has been founded within the last 15 years and stands out for its remarkable growth and impact. This list also includes startups that are unfunded, acquired, or publicly listed, representing the best of Indian innovation and entrepreneurial excellence.
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT: Pure Floating Image --- */}
          {/* Removed all padding, borders, and background containers */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] lg:max-w-full h-auto">
              <img
                src="/indiancorn.png" 
                alt="Indicorns Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}