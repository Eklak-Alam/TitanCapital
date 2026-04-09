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
  authors: [{ name: "Titan Capital" }],
  creator: "Titan Capital",
  publisher: "Titan Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // OpenGraph for LinkedIn & Facebook
  openGraph: {
    title: "Titan Capital | Backing Unstoppable Founders",
    description: "Partnering with India's most ambitious founders to build profitable, scalable Indicorns.",
    url: "https://titancapital.vc", // Replace with actual URL
    siteName: "Titan Capital",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "Titan Capital Branding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Titan Capital | Seed-Stage Venture Capital",
    description: "We back founders who create a better world.",
    creator: "@TitanCapitalVC",
    images: ["/og-image.png"], 
  },
  // Favicons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-body font-sans selection:bg-primary selection:text-white">
        {/* Everything inside SmoothScroll gets the buttery Lenis feel */}
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}