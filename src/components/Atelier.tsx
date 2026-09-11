import Image from "next/image";

export default function Atelier() {
  return (
    <section
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-brand-warm border-t border-brand-border"
      id="curation"
    >
      <div className="max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-medium tracking-widest-xl uppercase text-brand-taupe block mb-4">
              01 / Curated For Your Space & Wardrobe
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-brand-charcoal leading-[1.08] tracking-tight">
              Designed to be noticed. <br className="hidden sm:block" />
              <span className="italic font-normal">Made to belong.</span>
            </h2>
            <div className="w-16 h-[1px] bg-brand-charcoal mt-8 mb-8"></div>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed font-light">
              Every piece in the Siri catalog is an exercise in quiet restraint.
              We reject fast trends in favor of sculpted permanence — partnering
              directly with master stonemasons, Tuscan tanners, and bespoke
              tailors who understand that true luxury lives in tactile nuance,
              proportion, and enduring grace.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="font-serif-display text-3xl text-brand-charcoal">
                  100%
                </div>
                <div className="text-[10px] tracking-widest uppercase text-brand-muted">
                  Artisanal Provenance
                </div>
              </div>
              <div className="h-8 w-[1px] bg-brand-border"></div>
              <div>
                <div className="font-serif-display text-3xl text-brand-charcoal">
                  Limited
                </div>
                <div className="text-[10px] tracking-widest uppercase text-brand-muted">
                  Showroom Runs
                </div>
              </div>
            </div>
          </div>
          {/* Architectural Visual Composition with Editorial Framing (IMAGE_6) */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden bg-brand-stone border border-brand-border shadow-sm">
              <Image
                alt="Showroom Travertine Arch"
                className="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover object-center filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U1XCVp22j9TPhx1tALnEYaxuujOuZpmzYj-9RlEjTrtEMYs7mMuqZ56bIcN-_3kueBFU3DELAx0zihqFi2qG5ODBE3rV5BQx1fy41x8KZN3Xx0rzRhfymDkYzyOaqEjhonnYFtTdfyBIBFn6t-H6gKT-7UUxCMOhW8Vua4AVsgiCuxCDJCODsIVZ9SLtDSb-hnl7OAV7xj4KysezcKUjNKY1E-ndfbi6GDDNjjDWeaHSHg3TYmm-NPEg"
                width={1200}
                height={800}
              />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent text-white flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-warm/80">
                    Spatial Concept
                  </span>
                  <h4 className="font-serif-display text-2xl sm:text-3xl font-light">
                    The Travertine Pavilion
                  </h4>
                </div>
                <span className="text-xs uppercase tracking-widest text-brand-gold">
                  Private View
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
