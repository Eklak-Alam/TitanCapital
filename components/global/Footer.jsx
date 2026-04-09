"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="w-full bg-surface border-t border-border pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Top Section: Brand & Newsletter --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          <div className="lg:col-span-5 flex flex-col items-start">
            <Image 
              src="/logo.png" 
              alt="Titan Capital Logo" 
              width={140} 
              height={40} 
              className="mb-6 object-contain"
            />
            <p className="text-body text-base max-w-sm mb-8">
              Backing unstoppable founders building the next generation of Indicorns. 
              Operator-led capital for early-stage visionaries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-300">
                <X className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-300">
                <X className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-300">
                <X className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-6">Ecosystem</h4>
              <ul className="space-y-4">
                {footerLinks.ecosystem.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[14px] text-body hover:text-primary transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[14px] text-body hover:text-primary transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-6">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[14px] text-body hover:text-primary transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Giant Brand Text (The "SaaS" touch) --- */}
        {/* This creates a huge transparent "TITAN" text at the bottom */}
        <div className="relative py-10 select-none pointer-events-none overflow-hidden">
          <h2 className="text-[15vw] lg:text-[180px] font-black tracking-tighter text-border opacity-30 leading-none text-center uppercase">
            Titan Capital
          </h2>
        </div>

        {/* --- Bottom Bar: Legal & Copyright --- */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-muted font-medium">
            © {currentYear} Titan Capital. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-[12px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}