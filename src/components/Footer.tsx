export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-stone py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-serif-display text-2xl md:text-3xl font-normal tracking-[0.22em] uppercase block mb-2 text-center md:text-left">
            SIRI
          </span>
          <p className="text-[10px] tracking-widest-xl uppercase text-brand-taupe text-center md:text-left">
            Indian Event & Wedding Decor
          </p>
        </div>
        <div className="flex items-center gap-8 text-[10px] tracking-widest uppercase text-brand-stone/60">
          <a href="#" className="hover:text-brand-stone transition-colors">Client Services</a>
          <a href="#" className="hover:text-brand-stone transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-stone transition-colors">Terms</a>
        </div>
      </div>
      <div className="max-w-[1720px] mx-auto mt-12 pt-8 border-t border-brand-stone/10 text-center text-[9px] tracking-widest uppercase text-brand-stone/40">
        &copy; {new Date().getFullYear()} Siri Decor. All rights reserved.
      </div>
    </footer>
  );
}
