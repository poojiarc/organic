import { createFileRoute } from "@tanstack/react-router";
import { ProductsGrid } from "@/components/ProductsGrid";
import { CertStrip } from "@/components/CertStrip";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop Organic Products — Organic Sogadu" },
      { name: "description", content: "Mango pulp, A2 ghee, millet premix, ragi papad and more — 100% organic, delivered fresh weekly." },
      { property: "og:title", content: "Shop Organic Products — Organic Sogadu" },
      { property: "og:description", content: "Soil-fresh produce, ghee, snacks and combos from 350+ farmers." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="bg-gradient-to-b from-secondary to-background py-16 text-center">
        <span className="font-script text-2xl text-primary">Shop the Harvest</span>
        <h1 className="mt-1 font-display text-5xl font-bold text-earth md:text-6xl">Our Organic Range</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground px-4">
          Tap any product to add it to your basket. Checkout sends your order straight to us on WhatsApp.
        </p>
      </section>
      <CertStrip />
      <ProductsGrid />
    </>
  );
}
