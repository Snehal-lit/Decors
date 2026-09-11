export default function Story() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-brand-stone" id="story">
      <div className="max-w-[1720px] mx-auto">
        {/* Eyebrow & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-medium tracking-widest-xl uppercase text-brand-taupe block mb-4">
              04 / Provenance & Manifesto
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-brand-charcoal leading-[1.08]">
              More than products. <br />
              <span className="italic font-normal">A point of view.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            <p className="text-lg md:text-xl text-brand-charcoal font-serif-display italic">
              “We founded Siri Fashion Store on the premise that an interior and a
              wardrobe should converse with the same dialect: quiet materiality,
              honest seams, and unhurried elegance.”
            </p>
            <p>
              Operating between our design laboratory and our network of family-run
              artisan guilds, each edition begins not with an aesthetic sketch, but
              with the raw mineral or botanical specimen. Whether selecting
              cold-drawn unpolished brass from Moradabad, vegetable-tanned hides
              from Tuscany, or loom-woven raw silks from Kashmir, we let material
              properties dictate the geometry.
            </p>
          </div>
        </div>
        {/* Visual 3-Pillar Editorial Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-brand-border/80">
          {/* Pillar 1 */}
          <div className="p-8 bg-brand-warm border border-brand-border">
            <span className="font-serif-display text-3xl text-brand-taupe block mb-6">
              I.
            </span>
            <h4 className="font-serif-display text-2xl text-brand-charcoal mb-3">
              Architectural Honesty
            </h4>
            <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-light">
              Every fold, dart, mortise, and joint is laid bare. We never apply
              synthetic coatings or faux veneers to conceal the organic soul of our
              materials.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="p-8 bg-brand-warm border border-brand-border">
            <span className="font-serif-display text-3xl text-brand-taupe block mb-6">
              II.
            </span>
            <h4 className="font-serif-display text-2xl text-brand-charcoal mb-3">
              Master Guild Craftsmanship
            </h4>
            <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-light">
              Produced in micro-batches under fair artisanal patronage. Each
              garment and furniture artifact bears the mark of the hand that shaped
              it.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="p-8 bg-brand-warm border border-brand-border">
            <span className="font-serif-display text-3xl text-brand-taupe block mb-6">
              III.
            </span>
            <h4 className="font-serif-display text-2xl text-brand-charcoal mb-3">
              Permanent Longevity
            </h4>
            <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-light">
              Crafted to outlive generational cycles. Our patinas evolve with sun
              exposure, ambient moisture, and continuous gentle human stewardship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
