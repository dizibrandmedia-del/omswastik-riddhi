"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/project";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`header-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "scrolled shadow-md" : "bg-primary-dark/80 md:bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[68px] sm:h-[76px] md:h-[80px]">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Om Swastik Buildhomes Pvt. Ltd."
              width={180}
              height={50}
              className="h-7 sm:h-8 md:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium tracking-[0.06em] uppercase text-white/90 hover:text-gold transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="btn-primary text-[12px] py-2.5 px-5"
            >
              Enquire Now
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="btn-primary text-[11px] px-3 sm:px-4 py-2 sm:py-2.5 font-semibold"
            >
              Enquire
            </a>
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-x-0 top-[68px] sm:top-[76px] bg-primary-dark/98 backdrop-blur-xl border-b border-gold/20 shadow-2xl transition-all duration-300 z-40 ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gold text-lg font-medium py-3 border-b border-white/10 transition-colors"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.3rem",
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center py-3 text-sm flex items-center justify-center gap-2"
            >
              Enquire Now
              <ArrowRight size={15} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
