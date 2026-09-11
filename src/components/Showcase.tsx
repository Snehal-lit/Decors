"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

type ProductId = "coat" | "tote" | "table" | "silk" | "bronze" | "lounge";

const PRODUCTS = {
  coat: {
    id: "coat",
    name: "Calantha Draped Cashmere Coat",
    category: "Atelier Tailoring",
    price: 185000,
    image: "https://lh3.googleusercontent.com/aida/AEtjO1UcXMHRnJUwG224u3pr07fW4X1qgvIZaxcb1iiJyBteJxhblO76TpEEwP_oTVWw9mOFL8hROA6aKAfjyS04LkCu9EKgCyACB0eFj9TFfUZJsAb-_cN78_XbC1cVX0JCbsaMyy9yDVkWRv-XJV5OD__Yq09qJjFjsxx27V0_jIXT4P2t1XBw4_31k-q9V4sGn6zIveFEXzorA2fc5ye1rIrCIRD9vTkAXp6T9s1fIAUxIFtNRAHG-WEUVg",
    desc: "Engineered with an architectural shoulder line and integrated dramatic scarf drape. Tailored from 850gsm raw unbleached Mongolian cashmere, left in its natural warm oat tint to highlight the rich natural fiber variance.",
    materials: "100% Raw Cashmere"
  },
  tote: {
    id: "tote",
    name: "Aura Sculpted Saddle Tote",
    category: "Leather Goods",
    price: 78000,
    image: "https://lh3.googleusercontent.com/aida/AEtjO1U6XsCjUArn8JCFahxgGdmrpVTrfbPhX_C4H7AHH5ulggHObPpFt8HJwpg1ph6OliEfyv6OB7h09k8fD3DiDy775APliARiEQSx3o5hbd49B_YdzC0KOLPvB4vODlT31Ao1tRKaKHzmTnzAUAP93P7QYacObj8qFKJONYNWU2vpQ7sV__fKvZc4XDk7fD1pKz8gKZx6IJw69omfHqPl-MAKHKI4-q0SV2qACwdYb9M93hHy_Vekx09aD74",
    desc: "Hand-blocked vegetable-tanned Italian bridle leather resting upon brushed chiseled brass gussets. Self-standing architectural silhouette that patinas with years of touch.",
    materials: "Bridle Leather / Brass"
  },
  table: {
    id: "table",
    name: "Siri Monolith Plinth Console",
    category: "Monolith Furniture",
    price: 245000,
    image: "https://lh3.googleusercontent.com/aida/AEtjO1U1XCVp22j9TPhx1tALnEYaxuujOuZpmzYj-9RlEjTrtEMYs7mMuqZ56bIcN-_3kueBFU3DELAx0zihqFi2qG5ODBE3rV5BQx1fy41x8KZN3Xx0rzRhfymDkYzyOaqEjhonnYFtTdfyBIBFn6t-H6gKT-7UUxCMOhW8Vua4AVsgiCuxCDJCODsIVZ9SLtDSb-hnl7OAV7xj4KysezcKUjNKY1E-ndfbi6GDDNjjDWeaHSHg3TYmm-NPEg",
    desc: "Carved from a single quarried block of porous Tivoli travertine. Balanced with an offset canted pedestal that plays with gravity and directional light.",
    materials: "Tivoli Travertine"
  },
  silk: {
    id: "silk",
    name: "Loomed Wild Silk Wrap",
    category: "Couture Tailoring",
    price: 34000,
    image: "https://lh3.googleusercontent.com/aida/AEtjO1UcXMHRnJUwG224u3pr07fW4X1qgvIZaxcb1iiJyBteJxhblO76TpEEwP_oTVWw9mOFL8hROA6aKAfjyS04LkCu9EKgCyACB0eFj9TFfUZJsAb-_cN78_XbC1cVX0JCbsaMyy9yDVkWRv-XJV5OD__Yq09qJjFjsxx27V0_jIXT4P2t1XBw4_31k-q9V4sGn6zIveFEXzorA2fc5ye1rIrCIRD9vTkAXp6T9s1fIAUxIFtNRAHG-WEUVg",
    desc: "Hand-spun Tussar wild silk with raw selvedge edging. Naturally insulating and subtly iridescent.",
    materials: "Tussar Silk"
  },
  bronze: {
    id: "bronze",
    name: "Brutalist Foundry Amphora",
    category: "Cast Bronzes",
    price: 92000,
    image: "https://lh3.googleusercontent.com/aida/AEtjO1U1XCVp22j9TPhx1tALnEYaxuujOuZpmzYj-9RlEjTrtEMYs7mMuqZ56bIcN-_3kueBFU3DELAx0zihqFi2qG5ODBE3rV5BQx1fy41x8KZN3Xx0rzRhfymDkYzyOaqEjhonnYFtTdfyBIBFn6t-H6gKT-7UUxCMOhW8Vua4AVsgiCuxCDJCODsIVZ9SLtDSb-hnl7OAV7xj4KysezcKUjNKY1E-ndfbi6GDDNjjDWeaHSHg3TYmm-NPEg",
    desc: "Sand-cast solid brass with acid-patinated ebony finish. Limited to an edition of 25 serialized castings.",
    materials: "Solid Brass"
  },
  lounge: {
    id: "lounge",
    name: "Verona Low Daybed",
    category: "Monolith Furniture",
    price: 310000,
    image: "https://lh3.googleusercontent.com/aida/AEtjO1U6XsCjUArn8JCFahxgGdmrpVTrfbPhX_C4H7AHH5ulggHObPpFt8HJwpg1ph6OliEfyv6OB7h09k8fD3DiDy775APliARiEQSx3o5hbd49B_YdzC0KOLPvB4vODlT31Ao1tRKaKHzmTnzAUAP93P7QYacObj8qFKJONYNWU2vpQ7sV__fKvZc4XDk7fD1pKz8gKZx6IJw69omfHqPl-MAKHKI4-q0SV2qACwdYb9M93hHy_Vekx09aD74",
    desc: "Heavyweight Belgian stonewashed flax resting on smoked oak runners. Low-profile Japanese proportion.",
    materials: "Oak / Linen"
  }
};

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductId | null>(null);
  
  const { addToCart } = useCart();

  const openProductModal = (id: ProductId) => {
    setSelectedProduct(id);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (e: React.MouseEvent, id: ProductId) => {
    e.stopPropagation(); // prevent modal opening if clicked directly
    addToCart(PRODUCTS[id]);
    if (selectedProduct) closeProductModal();
  };

  const activeProductData = selectedProduct ? PRODUCTS[selectedProduct] : null;

  return (
    <>
      <section
        className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-[#f4f0e7] border-y border-brand-border"
        id="showcase"
      >
        <div className="max-w-[1720px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
            <div>
              <span className="text-[11px] font-medium tracking-widest-xl uppercase text-brand-taupe block mb-3">
                03 / Catalog & Specimens
              </span>
              <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-light text-brand-charcoal">
                The Permanent Exhibition
              </h2>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <span className="text-xs uppercase tracking-luxury text-brand-muted">
                Filter:
              </span>
              <button
                className={`catalog-tab px-3 py-1 text-xs uppercase tracking-widest ${
                  activeFilter === "all"
                    ? "border-b-2 border-brand-charcoal text-brand-charcoal font-medium"
                    : "text-brand-muted hover:text-brand-charcoal"
                }`}
                onClick={() => setActiveFilter("all")}
              >
                All (06)
              </button>
              <button
                className={`catalog-tab px-3 py-1 text-xs uppercase tracking-widest ${
                  activeFilter === "apparel"
                    ? "border-b-2 border-brand-charcoal text-brand-charcoal font-medium"
                    : "text-brand-muted hover:text-brand-charcoal"
                }`}
                onClick={() => setActiveFilter("apparel")}
              >
                Apparel
              </button>
              <button
                className={`catalog-tab px-3 py-1 text-xs uppercase tracking-widest ${
                  activeFilter === "accessories"
                    ? "border-b-2 border-brand-charcoal text-brand-charcoal font-medium"
                    : "text-brand-muted hover:text-brand-charcoal"
                }`}
                onClick={() => setActiveFilter("accessories")}
              >
                Objects
              </button>
            </div>
          </div>

          {/* PRODUCT 01: HERO PRODUCT — FULL WIDTH DRAMA */}
          <div
            className="mb-24 lg:mb-36 bg-brand-stone border border-brand-border/90 group cursor-pointer"
            onClick={() => openProductModal("coat")}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 overflow-hidden relative min-h-[480px] lg:min-h-[680px]">
                <Image
                  alt={PRODUCTS.coat.name}
                  className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                  src={PRODUCTS.coat.image}
                  width={1200}
                  height={1200}
                />
                <div className="absolute top-6 left-6 bg-brand-stone/90 backdrop-blur-md px-4 py-1.5 text-[10px] tracking-widest uppercase font-medium">
                  Hero Piece · No. 001
                </div>
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-brand-stone">
                <div>
                  <div className="flex items-center justify-between text-xs tracking-widest-xl uppercase text-brand-taupe mb-4">
                    <span>{PRODUCTS.coat.category}</span>
                    <span>Autumn / Winter Series</span>
                  </div>
                  <h3 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal leading-[1.05] mb-6">
                    {PRODUCTS.coat.name}
                  </h3>
                  <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-8">
                    {PRODUCTS.coat.desc}
                  </p>
                  {/* Spec Details Grid */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-brand-border text-xs">
                    <div>
                      <span className="text-brand-taupe uppercase text-[10px] tracking-wider block">
                        Material
                      </span>
                      <span className="font-medium text-brand-charcoal">
                        {PRODUCTS.coat.materials}
                      </span>
                    </div>
                    <div>
                      <span className="text-brand-taupe uppercase text-[10px] tracking-wider block">
                        Origin
                      </span>
                      <span className="font-medium text-brand-charcoal">
                        Biella & Atelier Siri
                      </span>
                    </div>
                    <div>
                      <span className="text-brand-taupe uppercase text-[10px] tracking-wider block">
                        Dimensions
                      </span>
                      <span className="font-medium text-brand-charcoal">
                        Tailored to Client Form
                      </span>
                    </div>
                    <div>
                      <span className="text-brand-taupe uppercase text-[10px] tracking-wider block">
                        Price
                      </span>
                      <span className="font-medium text-brand-charcoal">
                        ₹{PRODUCTS.coat.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button 
                    onClick={(e) => handleAddToCart(e, "coat")}
                    className="inline-flex items-center justify-center gap-3 bg-brand-charcoal text-brand-stone px-8 py-4 text-xs uppercase tracking-luxury hover:bg-brand-gold hover:text-brand-charcoal transition-colors">
                    <span>Add to Cart</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </button>
                  <span className="text-xs text-brand-muted tracking-widest uppercase">
                    Made to Measure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ASYMMETRIC 2-COLUMN RHYTHM: PRODUCT 02 & 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 mb-24 lg:mb-36 items-stretch">
            {/* PRODUCT 02 */}
            <div
              className="md:col-span-7 bg-brand-stone border border-brand-border p-6 sm:p-10 flex flex-col justify-between group cursor-pointer"
              onClick={() => openProductModal("tote")}
            >
              <div className="overflow-hidden aspect-[4/5] relative mb-8 bg-brand-warm">
                <Image
                  alt={PRODUCTS.tote.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={PRODUCTS.tote.image}
                  width={800}
                  height={1000}
                />
                <div className="absolute bottom-4 left-4 bg-brand-charcoal text-brand-stone text-[9px] uppercase tracking-widest px-3 py-1">
                  Specimen 002
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif-display text-3xl sm:text-4xl text-brand-charcoal group-hover:italic transition-all">
                    {PRODUCTS.tote.name}
                  </h4>
                  <span className="font-sans font-medium text-sm text-brand-charcoal">
                    ₹{PRODUCTS.tote.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-brand-muted font-light mb-6">
                  {PRODUCTS.tote.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs uppercase tracking-luxury text-brand-charcoal">
                  <span>Cognac Raw Sienna</span>
                  <button 
                    onClick={(e) => handleAddToCart(e, "tote")}
                    className="group-hover:translate-x-2 transition-transform uppercase underline">
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCT 03 */}
            <div
              className="md:col-span-5 bg-brand-stone border border-brand-border p-6 sm:p-10 flex flex-col justify-between group cursor-pointer"
              onClick={() => openProductModal("table")}
            >
              <div className="overflow-hidden aspect-square relative mb-8 bg-brand-warm">
                <Image
                  alt={PRODUCTS.table.name}
                  className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={PRODUCTS.table.image}
                  width={800}
                  height={800}
                />
                <div className="absolute bottom-4 left-4 bg-brand-charcoal text-brand-stone text-[9px] uppercase tracking-widest px-3 py-1">
                  Specimen 003
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif-display text-3xl text-brand-charcoal group-hover:italic transition-all">
                    {PRODUCTS.table.name}
                  </h4>
                  <span className="font-sans font-medium text-sm text-brand-charcoal">
                    ₹{PRODUCTS.table.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-brand-muted font-light mb-6">
                  {PRODUCTS.table.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs uppercase tracking-luxury text-brand-charcoal">
                  <span>Honed Roman Stone</span>
                  <button 
                    onClick={(e) => handleAddToCart(e, "table")}
                    className="group-hover:translate-x-2 transition-transform uppercase underline">
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ASYMMETRIC 3-COLUMN RHYTHM: PRODUCTS 04, 05, 06 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PRODUCT 04 */}
            <div
              className="bg-brand-stone border border-brand-border p-6 group cursor-pointer flex flex-col justify-between"
              onClick={() => openProductModal("silk")}
            >
              <div>
                <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-6 relative">
                  <Image
                    alt={PRODUCTS.silk.name}
                    className="w-full h-full object-cover object-center filter sepia-[25%] group-hover:scale-105 transition-transform duration-700"
                    src={PRODUCTS.silk.image}
                    width={600}
                    height={800}
                  />
                  <span className="absolute top-3 left-3 bg-brand-stone/90 text-[9px] uppercase tracking-widest px-2.5 py-1">
                    No. 004
                  </span>
                </div>
                <h5 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                  {PRODUCTS.silk.name}
                </h5>
                <p className="text-xs text-brand-muted font-light mt-2 mb-4">
                  {PRODUCTS.silk.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs tracking-luxury">
                <span className="font-medium text-brand-charcoal">₹{PRODUCTS.silk.price.toLocaleString()}</span>
                <button 
                  onClick={(e) => handleAddToCart(e, "silk")}
                  className="text-brand-muted group-hover:text-brand-charcoal underline">
                  + Cart
                </button>
              </div>
            </div>

            {/* PRODUCT 05 */}
            <div
              className="bg-brand-stone border border-brand-border p-6 group cursor-pointer flex flex-col justify-between"
              onClick={() => openProductModal("bronze")}
            >
              <div>
                <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-6 relative">
                  <Image
                    alt={PRODUCTS.bronze.name}
                    className="w-full h-full object-cover object-right filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    src={PRODUCTS.bronze.image}
                    width={600}
                    height={800}
                  />
                  <span className="absolute top-3 left-3 bg-brand-stone/90 text-[9px] uppercase tracking-widest px-2.5 py-1">
                    No. 005
                  </span>
                </div>
                <h5 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                  {PRODUCTS.bronze.name}
                </h5>
                <p className="text-xs text-brand-muted font-light mt-2 mb-4">
                  {PRODUCTS.bronze.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs tracking-luxury">
                <span className="font-medium text-brand-charcoal">₹{PRODUCTS.bronze.price.toLocaleString()}</span>
                <button 
                  onClick={(e) => handleAddToCart(e, "bronze")}
                  className="text-brand-muted group-hover:text-brand-charcoal underline">
                  + Cart
                </button>
              </div>
            </div>

            {/* PRODUCT 06 */}
            <div
              className="bg-brand-stone border border-brand-border p-6 group cursor-pointer flex flex-col justify-between"
              onClick={() => openProductModal("lounge")}
            >
              <div>
                <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-6 relative">
                  <Image
                    alt={PRODUCTS.lounge.name}
                    className="w-full h-full object-cover object-center filter hue-rotate-15 group-hover:scale-105 transition-transform duration-700"
                    src={PRODUCTS.lounge.image}
                    width={600}
                    height={800}
                  />
                  <span className="absolute top-3 left-3 bg-brand-stone/90 text-[9px] uppercase tracking-widest px-2.5 py-1">
                    No. 006
                  </span>
                </div>
                <h5 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all">
                  {PRODUCTS.lounge.name}
                </h5>
                <p className="text-xs text-brand-muted font-light mt-2 mb-4">
                  {PRODUCTS.lounge.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs tracking-luxury">
                <span className="font-medium text-brand-charcoal">
                  ₹{PRODUCTS.lounge.price.toLocaleString()}
                </span>
                <button 
                  onClick={(e) => handleAddToCart(e, "lounge")}
                  className="text-brand-muted group-hover:text-brand-charcoal underline">
                  + Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PRODUCT DETAIL MODAL */}
      {selectedProduct && activeProductData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 modal-backdrop bg-brand-charcoal/60 transition-opacity duration-300"
          id="product-modal"
          onClick={closeProductModal}
        >
          <div
            className="relative bg-brand-stone max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-brand-border shadow-2xl p-6 sm:p-10 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close modal"
              className="absolute top-6 right-6 text-brand-charcoal hover:opacity-60 p-2 text-xl tracking-widest focus:outline-none"
              onClick={closeProductModal}
            >
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-2">
              <div className="md:col-span-6 bg-brand-warm border border-brand-border overflow-hidden aspect-[3/4] relative">
                <Image
                  alt={activeProductData.name}
                  className="w-full h-full object-cover object-center"
                  src={activeProductData.image}
                  width={800}
                  height={1000}
                />
                <div className="absolute top-4 left-4 bg-brand-stone/90 text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
                  Permanent Atelier Specimen
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] tracking-widest-xl uppercase text-brand-taupe block mb-2">
                    {activeProductData.category}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-4xl text-brand-charcoal mb-3">
                    {activeProductData.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-brand-border mb-6"></div>
                  <p className="text-sm text-brand-muted font-light leading-relaxed mb-6">
                    {activeProductData.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-xs mb-8">
                    <div>
                      <span className="text-[10px] text-brand-taupe uppercase tracking-widest block mb-1">
                        Materials
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {activeProductData.materials}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-taupe uppercase tracking-widest block mb-1">
                        Origin
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        Artisan Crafted
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-taupe uppercase tracking-widest block mb-1">
                        Availability
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        Made to Order
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-taupe uppercase tracking-widest block mb-1">
                        Price
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        ₹{activeProductData.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-brand-border pt-6">
                  <button
                    className="flex-1 text-center bg-brand-charcoal text-brand-stone py-4 text-xs tracking-widest uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => handleAddToCart(e, selectedProduct)}
                  >
                    <span>Add to Cart</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-brand-border text-brand-muted hover:text-brand-charcoal hover:border-brand-charcoal transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
