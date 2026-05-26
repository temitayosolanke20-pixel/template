import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Full-screen hero with headline + CTAs */}
      <Hero />

      {/* Shop by category grid */}
      <FeaturedCollections />

      {/* New arrivals product grid */}
      <ProductGrid />

      {/* Customer reviews / testimonials */}
      <Testimonials />

      {/* Email newsletter signup */}
      <Newsletter />
    </main>
  );
}
