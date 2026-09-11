import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";

// Define the valid categories based on the product data categories
const CATEGORY_TITLES: Record<string, string> = {
  garlands: "Marriage Garlands",
  gifts: "Return Gifts",
  "wall-decor": "Wall & Venue Decorations",
  props: "Props & Centerpieces",
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: categorySlug } = await params;
  const categoryTitle = CATEGORY_TITLES[categorySlug];

  if (!categoryTitle) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === categorySlug);

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-[#f4f0e7]">
        <ProductGrid products={categoryProducts} categoryTitle={categoryTitle} />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const categories = ["garlands", "gifts", "wall-decor", "props"];
  return categories.map((slug) => ({ slug }));
}
