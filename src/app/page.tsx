import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f0e7] min-h-screen">
        <Hero />
        <Categories />
      </main>
      <Footer />
    </>
  );
}
