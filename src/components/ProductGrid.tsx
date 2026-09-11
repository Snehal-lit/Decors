"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ProductData } from "@/data/products";

interface ProductGridProps {
  products: ProductData[];
  categoryTitle: string;
}

export default function ProductGrid({ products, categoryTitle }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const { addToCart } = useCart();

  const openProductModal = (product: ProductData) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (e: React.MouseEvent, product: ProductData) => {
    e.stopPropagation();
    addToCart(product);
    if (selectedProduct) closeProductModal();
  };

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-[#f4f0e7] min-h-screen">
        <div className="max-w-[1720px] mx-auto">
          {/* Minimal Section Header */}
          <div className="mb-16 md:mb-24 flex items-end justify-between border-b border-brand-border/60 pb-8">
            <div>
              <span className="text-[11px] font-medium tracking-widest-xl uppercase text-brand-taupe block mb-3">
                Department
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-brand-charcoal">
                {categoryTitle}
              </h2>
            </div>
            <span className="hidden md:block text-xs uppercase tracking-luxury text-brand-muted">
              {products.length} Specimens Available
            </span>
          </div>

          {products.length === 0 ? (
            <div className="py-32 text-center text-brand-taupe font-serif-display italic text-2xl">
              No specimens currently available in this department.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-brand-stone border border-brand-border/80 p-6 group cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-brand-charcoal/30"
                  onClick={() => openProductModal(product)}
                >
                  <div>
                    <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-6 relative">
                      <Image
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.98]"
                        src={product.image}
                        width={600}
                        height={800}
                      />
                    </div>
                    <h5 className="font-serif-display text-2xl text-brand-charcoal group-hover:italic transition-all leading-tight">
                      {product.name}
                    </h5>
                  </div>
                  <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between text-[11px] tracking-luxury uppercase">
                    <span className="font-medium text-brand-charcoal">
                      {typeof product.price === "number" ? `₹${product.price.toLocaleString()}` : product.price}
                    </span>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="text-brand-muted group-hover:text-brand-charcoal transition-colors underline decoration-brand-taupe/40 underline-offset-4"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 modal-backdrop bg-brand-charcoal/80 backdrop-blur-sm transition-opacity duration-300"
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
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center"
                  src={selectedProduct.image}
                  width={800}
                  height={1000}
                />
              </div>
              <div className="md:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] tracking-widest-xl uppercase text-brand-taupe block mb-2">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-4xl text-brand-charcoal mb-4">
                    {selectedProduct.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-brand-border mb-6"></div>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-xs mb-8">
                    <div>
                      <span className="text-[10px] text-brand-taupe uppercase tracking-widest block mb-1">
                        Materials
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {selectedProduct.materials}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-taupe uppercase tracking-widest block mb-1">
                        Price
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {typeof selectedProduct.price === "number" ? `₹${selectedProduct.price.toLocaleString()}` : selectedProduct.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 md:pt-6 border-t border-brand-border/60 sticky bottom-0 bg-brand-stone z-10 pb-4 md:pb-0 mt-4">
                  <button
                    className="w-full text-center bg-brand-charcoal text-brand-stone py-4 text-[11px] tracking-widest uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-colors flex items-center justify-center gap-3"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
