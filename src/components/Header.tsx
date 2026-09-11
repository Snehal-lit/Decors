"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#f7f5f0]/85 backdrop-blur-md border-b border-brand-border/40">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          {/* Brand Left / Monogram */}
          <Link className="flex items-center gap-3 group" href="/">
            <span className="font-serif-display text-2xl md:text-3xl font-normal tracking-[0.22em] text-brand-charcoal uppercase group-hover:opacity-75 transition-opacity">
              SIRI
            </span>
            <span className="hidden sm:inline-block h-3 w-[1px] bg-brand-taupe/40"></span>
            <span className="hidden sm:inline-block text-[10px] tracking-widest-xl uppercase text-brand-muted font-medium">
              Event & Wedding Decor
            </span>
          </Link>
          
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            <Link
              className="text-[11px] uppercase tracking-luxury text-brand-charcoal/80 hover:text-brand-charcoal transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-charcoal hover:after:w-full after:transition-all"
              href="/"
            >
              Index
            </Link>
            <Link
              className="text-[11px] uppercase tracking-luxury text-brand-charcoal/80 hover:text-brand-charcoal transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-charcoal hover:after:w-full after:transition-all"
              href="/#categories"
            >
              Departments
            </Link>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleCart}
              className="relative flex items-center justify-center p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
              aria-label="Open Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-brand-charcoal text-brand-stone text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button
              aria-label="Toggle Navigation"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span
                className={`w-6 h-[1.5px] bg-brand-charcoal transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                id="menu-line-1"
              ></span>
              <span
                className={`w-4 h-[1.5px] bg-brand-charcoal self-end transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1 w-6" : ""}`}
                id="menu-line-2"
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        <div
          className={`md:hidden fixed inset-x-0 top-[80px] bg-brand-stone/98 border-b border-brand-border px-8 py-10 shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-6 text-left">
            <span className="text-[10px] tracking-widest-xl uppercase text-brand-taupe">
              Navigation
            </span>
            <Link
              className="font-serif-display text-3xl text-brand-charcoal hover:italic"
              href="/"
              onClick={toggleMobileMenu}
            >
              Index
            </Link>
            <Link
              className="font-serif-display text-3xl text-brand-charcoal hover:italic"
              href="/#categories"
              onClick={toggleMobileMenu}
            >
              Departments
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
