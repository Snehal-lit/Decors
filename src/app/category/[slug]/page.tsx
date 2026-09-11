import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/sanity/client";
import { ProductData } from "@/types/product";

async function getCategory(slug: string) {
  return await client.fetch(`*[_type == "category" && slug.current == $slug][0]{
    _id,
    title
  }`, { slug });
}

async function getProductsByCategory(slug: string) {
  return await client.fetch(`*[_type == "product" && category->slug.current == $slug]{
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    price,
    priceDisplay,
    description,
    materials,
    image
  }`, { slug });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: categorySlug } = await params;
  const category = await getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const sanityProducts = await getProductsByCategory(categorySlug);
  
  // Map sanity products to ProductData format required by ProductGrid
  const categoryProducts: ProductData[] = sanityProducts.map((p: any) => ({
    id: p._id,
    name: p.name,
    category: p.category,
    price: p.priceDisplay || p.price || "Upon Request",
    desc: p.description || "",
    materials: p.materials || "",
    image: p.image ? urlFor(p.image).width(600).height(800).url() : ""
  }));

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-[#f4f0e7]">
        <ProductGrid products={categoryProducts} categoryTitle={category.title} />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "category" && defined(slug.current)].slug.current`);
  return slugs
    .filter((slug: any) => typeof slug === 'string')
    .map((slug: string) => ({ slug }));
}
