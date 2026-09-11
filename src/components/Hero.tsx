import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-4 md:px-12 lg:px-24 overflow-hidden"
      id="hero"
    >
      {/* Subtle Background Image Crop with soft chiaroscuro overlay (IMAGE_6) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 md:opacity-25 mix-blend-multiply overflow-hidden">
        <Image
          alt="Event Decor Showroom Background"
          className="w-full h-full object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
          src="/images/event/hero_event_decor_1789108104750.jpg"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0]/80 via-transparent to-[#f7f5f0]"></div>
      </div>
      
      {/* Top Metadata Eyebrows - Simplified */}
      <div className="relative z-10 max-w-[1720px] w-full mx-auto flex flex-wrap items-center justify-between pt-6 border-t border-brand-border/60 text-brand-muted text-[11px] md:text-xs tracking-widest-xl uppercase">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
          <span>Digital Catalog</span>
        </div>

      </div>

      {/* Centerpiece Typography: Clean, Oversized Serif Luxury */}
      <div className="relative z-10 max-w-[1720px] w-full mx-auto my-auto py-12 flex flex-col justify-center items-center text-center">
        {/* Clean Typography Heading */}
        <div className="relative w-full overflow-hidden select-none mb-4">
          <h1 className="font-serif-display text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-none tracking-tighter text-brand-charcoal">
            SIRI DECOR <br className="hidden md:block" />
            <span className="italic font-light text-brand-charcoal/90">STORE.</span>
          </h1>
        </div>
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-taupe mt-4">
          Marriage Garlands · Return Gifts · Wall Decor
        </p>
      </div>

      {/* Hero Bottom Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-[1720px] w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs tracking-luxury uppercase text-brand-charcoal">
        <Link
          className="group inline-flex items-center gap-3 text-xs tracking-widest-xl uppercase hover:text-brand-gold transition-colors py-2"
          href="#categories"
        >
          <span className="relative overflow-hidden inline-block">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              Explore Catalog
            </span>
            <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-brand-charcoal font-medium">
              View Categories
            </span>
          </span>
          <svg
            className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
