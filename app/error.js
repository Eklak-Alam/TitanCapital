"use client";

import { useEffect } from "react";
import { RefreshCcw, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an analytics provider like Sentry
    console.error(error);
  }, [error]);

  return (
    <section className="w-full h-[90vh] flex items-center justify-center bg-background px-6">
      <div className="max-w-4xl w-full border border-red-100 bg-surface p-8 md:p-16 relative overflow-hidden">
        
        {/* Red accent to indicate a system error */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <span className="text-red-500 font-bold tracking-[0.3em] text-[12px] uppercase mb-4 block">
            System Alert
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-heading tracking-tighter leading-none mb-8">
            Something <br /> went wrong.
          </h1>
          
          <p className="text-body text-lg max-w-md mb-12 leading-relaxed">
            A temporary connection issue or a system error occurred while processing your request. Our engineers have been notified.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Try Again Button */}
            <button
              onClick={() => reset()}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-heading text-white text-[13px] font-bold tracking-widest uppercase hover:bg-black transition-all duration-300"
            >
              <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </button>

            {/* Home Button */}
            <a 
              href="/" 
              className="flex items-center justify-center gap-3 px-8 py-4 border border-border text-heading text-[13px] font-bold tracking-widest uppercase hover:bg-background transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Return Home
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}