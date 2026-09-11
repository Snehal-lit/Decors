"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    let message = "Hello! I would like to purchase/inquire about the following items from my cart:\n\n";

    cartItems.forEach((item) => {
      const priceStr = typeof item.price === "number" ? `₹${item.price.toLocaleString()}` : item.price;
      message += `- ${item.quantity}x ${item.name} (${priceStr})\n`;
    });

    if (cartTotal > 0) {
      message += `\nEstimated Total: ₹${cartTotal.toLocaleString()} (excluding any 'Upon Request' items)\n`;
    }

    message += "\nPlease let me know the availability and next steps.";

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/919820045812?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-[100] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-brand-stone shadow-2xl z-[110] transform transition-transform duration-500 ease-in-out flex flex-col border-l border-brand-border/50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 border-b border-brand-border/60">
          <div>
            <span className="text-[10px] tracking-widest-xl uppercase text-brand-taupe block mb-1">
              Current Selection
            </span>
            <h2 className="font-serif-display text-2xl md:text-3xl text-brand-charcoal">
              Private Cart ({cartItems.length})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-brand-charcoal hover:opacity-60 transition-colors p-2 text-xl focus:outline-none"
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-taupe">
              <span className="font-serif-display italic text-2xl mb-4">Your selection is empty.</span>
              <p className="text-xs uppercase tracking-luxury text-brand-muted">Return to catalog to add pieces.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 sm:gap-6 group">
                  <div className="w-20 sm:w-24 h-28 sm:h-32 bg-brand-warm relative flex-shrink-0 border border-brand-border/40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center absolute inset-0"
                      width={100}
                      height={130}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif-display text-xl text-brand-charcoal leading-tight pr-4 group-hover:italic transition-all">
                          {item.name}
                        </h4>
                      </div>
                      <span className="text-[10px] tracking-widest-xl uppercase text-brand-taupe block mt-2">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="flex items-end justify-between mt-4">
                      <div className="flex items-center border border-brand-border/60 bg-brand-stone">
                        <button
                          className="w-8 h-8 flex items-center justify-center text-brand-charcoal hover:bg-brand-warm transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-[11px] font-medium text-brand-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          className="w-8 h-8 flex items-center justify-center text-brand-charcoal hover:bg-brand-warm transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-brand-charcoal block mb-1">
                          {typeof item.price === "number" ? `₹${item.price.toLocaleString()}` : item.price}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[9px] uppercase tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors underline decoration-brand-taupe/40 underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-brand-border/60 p-4 sm:p-6 md:p-8 bg-brand-warm">
            <div className="flex justify-between items-end mb-4 sm:mb-6">
              <span className="text-[11px] tracking-widest-xl uppercase text-brand-muted">Subtotal</span>
              <span className="text-xl font-medium text-brand-charcoal">
                ₹{cartTotal.toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#128C7E] hover:bg-[#075E54] text-brand-stone py-4 flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
