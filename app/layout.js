import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import SmoothScroll from "@/components/global/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// --- UPPER SEO METADATA ---
export const metadata = {
  title: {
    default: "Titan Capital | Backing Unstoppable Founders",
    template: "%s | Titan Capital"
  },
  description: "India's premier seed-stage venture capital firm. We partner with world-class entrepreneurs to build the next generation of Indicorns.",
  keywords: ["Venture Capital", "Seed Funding India", "Titan Capital", "Startup Investment", "Indicorns", "Kunal Bahl", "Rohit Bansal"],
  // ... rest of your metadata
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-body font-sans selection:bg-primary selection:text-white">
        
        {/* Wrap the ENTIRE SmoothScroll provider in Suspense */}
        <Suspense fallback={null}>
          <SmoothScroll>
            
            <Navbar />

            <main className="flex-grow">
              {children}
            </main>

            <Footer />

          </SmoothScroll>
        </Suspense>

      </body>
    </html>
  );
}