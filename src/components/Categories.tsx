"use client";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-12 lg:px-24 bg-brand-stone border-t border-brand-border/40" id="categories">
      <div className="max-w-[1720px] mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-medium tracking-widest-xl uppercase text-brand-taupe block mb-3">
            01 / Catalog
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-brand-charcoal">
            Browse by Department
          </h2>
        </div>
        
        {/* Categories Grid - Luxury Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Category 1: Garlands */}
          <Link
            href="/category/garlands"
            className="group block border border-brand-border/80 overflow-hidden bg-brand-stone transition-all duration-500 hover:border-brand-charcoal/30"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
              <Image
                alt="Marriage Garlands"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/event/garland_1_1789108119606.jpg"
                width={800}
                height={1000}
              />
            </div>
            <div className="p-6 text-center border-t border-brand-border/60">
              <h3 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                Marriage Garlands
              </h3>
              <span className="text-[10px] tracking-luxury uppercase text-brand-muted mt-2 block group-hover:text-brand-charcoal transition-colors">
                View Collection →
              </span>
            </div>
          </Link>

          {/* Category 2: Return Gifts */}
          <Link
            href="/category/gifts"
            className="group block border border-brand-border/80 overflow-hidden bg-brand-stone transition-all duration-500 hover:border-brand-charcoal/30"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
              <Image
                alt="Return Gifts"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/event/gift_1_1789108161624.jpg"
                width={800}
                height={1000}
              />
            </div>
            <div className="p-6 text-center border-t border-brand-border/60">
              <h3 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                Return Gifts
              </h3>
              <span className="text-[10px] tracking-luxury uppercase text-brand-muted mt-2 block group-hover:text-brand-charcoal transition-colors">
                View Collection →
              </span>
            </div>
          </Link>

          {/* Category 3: Wall Decor */}
          <Link
            href="/category/wall-decor"
            className="group block border border-brand-border/80 overflow-hidden bg-brand-stone transition-all duration-500 hover:border-brand-charcoal/30"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
              <Image
                alt="Wall & Venue Decorations"
                className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/event/wall_2_1789108225816.jpg"
                width={800}
                height={1000}
              />
            </div>
            <div className="p-6 text-center border-t border-brand-border/60">
              <h3 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                Wall Decorations
              </h3>
              <span className="text-[10px] tracking-luxury uppercase text-brand-muted mt-2 block group-hover:text-brand-charcoal transition-colors">
                View Collection →
              </span>
            </div>
          </Link>

          {/* Category 4: Props */}
          <Link
            href="/category/props"
            className="group block border border-brand-border/80 overflow-hidden bg-brand-stone transition-all duration-500 hover:border-brand-charcoal/30"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
              <Image
                alt="Props & Centerpieces"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/event/prop_1_1789108502153.jpg"
                width={800}
                height={1000}
              />
            </div>
            <div className="p-6 text-center border-t border-brand-border/60">
              <h3 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                Props & Centerpieces
              </h3>
              <span className="text-[10px] tracking-luxury uppercase text-brand-muted mt-2 block group-hover:text-brand-charcoal transition-colors">
                View Collection →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
