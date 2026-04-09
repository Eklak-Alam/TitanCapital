import { Suspense } from "react"; // <-- 1. Import Suspense
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
  // ... (keep your existing metadata exactly as it is)
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
        <SmoothScroll>
          
          {/* 2. Wrap Navbar in Suspense */}
          <Suspense fallback={<div className="h-16 w-full"></div>}>
            <Navbar />
          </Suspense>

          <main className="flex-grow">
            {children}
          </main>

          {/* 3. Wrap Footer in Suspense (just in case it also uses searchParams) */}
          <Suspense fallback={<div className="h-20 w-full"></div>}>
            <Footer />
          </Suspense>

        </SmoothScroll>
      </body>
    </html>
  );
}