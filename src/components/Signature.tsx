import Image from "next/image";
import Link from "next/link";

export default function Signature() {
  return (
    <section className="relative min-h-[600px] md:min-h-[750px] w-full flex items-center justify-center text-center px-6 overflow-hidden bg-brand-pure text-brand-stone">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Signature Collection Ambience"
          className="w-full h-full object-cover object-center opacity-40 filter contrast-125 scale-105"
          src="https://lh3.googleusercontent.com/aida/AEtjO1U1XCVp22j9TPhx1tALnEYaxuujOuZpmzYj-9RlEjTrtEMYs7mMuqZ56bIcN-_3kueBFU3DELAx0zihqFi2qG5ODBE3rV5BQx1fy41x8KZN3Xx0rzRhfymDkYzyOaqEjhonnYFtTdfyBIBFn6t-H6gKT-7UUxCMOhW8Vua4AVsgiCuxCDJCODsIVZ9SLtDSb-hnl7OAV7xj4KysezcKUjNKY1E-ndfbi6GDDNjjDWeaHSHg3TYmm-NPEg"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-pure via-brand-pure/50 to-brand-pure/80"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto py-20 flex flex-col items-center">
        <span className="text-[10px] md:text-xs font-semibold tracking-widest-xl uppercase text-brand-gold mb-6 border border-brand-gold/40 px-4 py-1.5 rounded-full">
          Curator&apos;s Special Commission
        </span>
        <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight leading-[0.95] mb-8">
          Objects With Presence.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-brand-stone/80 max-w-xl font-light leading-relaxed mb-10">
          In a world of ephemeral digital noise, we curate artifacts that demand
          stillness. Tactile heirlooms crafted to anchor the spaces you inhabit
          and the silhouettes you wear.
        </p>
        <Link
          className="inline-flex items-center gap-3 bg-brand-stone text-brand-charcoal px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-brand-gold transition-colors duration-300"
          href="#contact"
        >
          <span>Request The Physical Lookbook Folio</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
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
