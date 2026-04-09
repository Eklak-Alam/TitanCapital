"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

// --- Navigation Data ---
const navLinks = [
  { name: "HOME", href: "/" }, // Added Home Link
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "TEAM", href: "/team" },
  { name: "WINNERS FUND", href: "/winners-fund" },
  {
    name: "INVESTORS",
    href: "#",
    dropdown: [
      { name: "Partner Investors", href: "/partner-investors" },
      { name: "Co-Investors", href: "/co-investors" },
      { name: "Become an LP", href: "/lp-network" },
    ],
  },
  {
    name: "RESOURCES",
    href: "#",
    dropdown: [
      { name: "Blog", href: "/blog" },
      { name: "Press & Media", href: "/press" },
      { name: "Founder Playbook", href: "/playbook" },
    ],
  },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    // Solid white/surface background, flat bottom border, NO shadows.
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. LOGO */}
          <Link href="/" className="flex-shrink-0 mt-1">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={110} 
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* 2. DESKTOP LINKS */}
          <div className="hidden lg:flex items-center h-full space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative flex items-center h-full group" // Full height so mouse doesn't lose hover
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center text-[13px] font-semibold tracking-wide text-heading"
                >
                  <span className="relative">
                    {link.name}
                    {/* Animated bottom border on hover */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  
                  {link.dropdown && (
                    <motion.div
                      animate={{ rotate: hoveredLink === link.name ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="ml-1 w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                    </motion.div>
                  )}
                </Link>

                {/* DESKTOP DROPDOWN - Perfectly aligned flush with bottom of navbar */}
                {link.dropdown && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        // absolute top-full forces it perfectly below the h-20 navbar without overlap
                        className="absolute top-full left-0 w-60 bg-surface border-x border-b border-border shadow-none"
                      >
                        <div className="flex flex-col py-2">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="group/sub relative px-6 py-3 text-[14px] font-medium text-body hover:bg-background transition-colors duration-300"
                            >
                              {/* Premium hover interaction: Text slides right slightly and an arrow appears */}
                              <div className="flex items-center transform transition-transform duration-300 group-hover/sub:translate-x-2">
                                <span className="group-hover/sub:text-primary transition-colors">
                                  {subLink.name}
                                </span>
                                <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 text-primary transition-all duration-300 group-hover/sub:opacity-100 group-hover/sub:translate-x-0" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* 3. CTA BUTTON */}
          <div className="hidden lg:flex">
            <Link
              href="/pitch"
              className="px-7 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-full hover:bg-primary-hover transition-colors duration-300"
            >
              Pitch Us
            </Link>
          </div>

          {/* 4. CLEAN HAMBURGER MENU */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-heading focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {/* Smooth crossfade between Menu and X icon */}
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-surface overflow-y-auto border-t border-border"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.name ? null : link.name
                          )
                        }
                        className="flex items-center justify-between w-full text-[15px] font-semibold tracking-wide text-heading"
                      >
                        {link.name}
                        <motion.div
                          animate={{
                            rotate: mobileDropdown === link.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-muted" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {mobileDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col space-y-4 mt-4 pl-4 border-l border-border"
                          >
                            {link.dropdown.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className="text-[14px] font-medium text-body"
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-[15px] font-semibold tracking-wide text-heading"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  href="/pitch"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3.5 bg-primary text-white text-[15px] font-semibold rounded-full active:scale-95 transition-transform"
                >
                  Pitch Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}