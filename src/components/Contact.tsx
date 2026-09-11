"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-brand-warm border-t border-brand-border"
      id="contact"
    >
      <div className="max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Brand Contact Invitation */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-medium tracking-widest-xl uppercase text-brand-taupe block mb-4">
              05 / Private Client Concierge
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-brand-charcoal font-light leading-[1.08] mb-6">
              Found something <br />
              <span className="italic">you love?</span>
            </h2>
            <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-8">
              Let’s bring it into your sanctuary. Whether you require custom
              bespoke sizing, architectural specification for an interior project,
              or private showroom viewing, our curatorial team is at your
              disposal.
            </p>
            <div className="space-y-4 text-xs tracking-luxury text-brand-charcoal">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal"></span>
                <span className="font-medium">Direct WhatsApp Concierge:</span>
                <Link
                  className="text-brand-muted hover:text-brand-charcoal underline"
                  href="https://wa.me/"
                  target="_blank"
                >
                  +91 (0) 98200 45812
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal"></span>
                <span className="font-medium">Studio Atelier:</span>
                <span className="text-brand-muted">
                  Colaba Arts District, Mumbai
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal"></span>
                <span className="font-medium">Hours:</span>
                <span className="text-brand-muted">
                  Mon — Sat, 11:00 — 19:00 IST
                </span>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Link
                className="inline-flex items-center gap-2 bg-transparent border border-brand-charcoal px-6 py-3 rounded-full text-[10px] uppercase tracking-luxury hover:bg-brand-charcoal hover:text-brand-stone transition-all duration-300"
                href="mailto:concierge@siri.design"
              >
                <span>Email Concierge</span>
              </Link>
              <Link
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-luxury hover:bg-[#1ebd5a] transition-all duration-300 shadow-sm"
                href="https://wa.me/"
                target="_blank"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.603 6.012L.357 24l6.103-1.603A12.015 12.015 0 0012.031 24c6.645 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm3.905 17.202c-.174.477-.954.912-1.358.954-.376.044-.881.087-2.601-.621-2.072-.853-3.417-2.981-3.518-3.112-.101-.13-.839-1.114-.839-2.128 0-1.014.535-1.506.723-1.724.188-.217.405-.275.549-.275.145 0 .289 0 .405.014.13.014.304-.058.477.362.188.463.636 1.549.694 1.665.058.116.101.26.014.434-.087.174-.13.275-.26.419-.13.145-.275.318-.39.434-.13.116-.275.246-.13.492.145.246.636 1.057 1.374 1.708.954.839 1.721 1.099 1.967 1.215.246.116.39.087.535-.072.145-.159.622-.724.795-.984.174-.26.347-.217.579-.13.231.087 1.446.68 1.692.81.246.13.405.188.463.304.058.116.058.68-.116 1.157z"></path>
                </svg>
                <span>Instant WhatsApp Inquiry</span>
              </Link>
            </div>
          </div>
          {/* Right: Editorial Inquiry Form */}
          <div className="lg:col-span-7 bg-brand-stone p-8 sm:p-12 border border-brand-border shadow-sm">
            <form className="space-y-6" onSubmit={handleInquirySubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-taupe mb-2">
                    Your Name *
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-brand-border py-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors"
                    placeholder="Elena Vance"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-taupe mb-2">
                    Direct Contact (Email or Phone) *
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-brand-border py-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors"
                    placeholder="elena@vance-atelier.com"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-taupe mb-2">
                    Subject Of Inquiry
                  </label>
                  <select className="w-full bg-transparent border-b border-brand-border py-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors text-brand-charcoal appearance-none">
                    <option>Calantha Draped Cashmere Coat (₹1,85,000)</option>
                    <option>Aura Sculpted Saddle Tote (₹78,000)</option>
                    <option>Siri Monolith Plinth Console (₹2,45,000)</option>
                    <option>Custom Architectural Commission</option>
                    <option>Showroom Private Appointment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-taupe mb-2">
                    Location / City
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-brand-border py-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors"
                    placeholder="Mumbai, New Delhi, London..."
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-taupe mb-2">
                  Notes, Specific Dimensions or Requirements
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-brand-border py-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors resize-none"
                  placeholder="Tell us about your project or sizing questions..."
                  rows={3}
                ></textarea>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <button
                  className="bg-brand-charcoal text-brand-stone px-8 py-4 text-xs uppercase tracking-luxury hover:bg-brand-gold hover:text-brand-charcoal transition-colors duration-300"
                  type="submit"
                >
                  Transmit Request To Curators
                </button>
                {submitted && (
                  <span
                    className="text-xs text-brand-taupe italic"
                    id="form-msg"
                  >
                    Received with appreciation.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
