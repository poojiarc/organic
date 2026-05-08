import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CertStrip } from "@/components/CertStrip";
import { ProductsGrid } from "@/components/ProductsGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Organic Sogadu — Farmers Brand | Soil-Fresh Organic Food" },
      { name: "description", content: "100% organic, chemical-free food from 350+ farmers, delivered fresh every Sunday across Karnataka." },
      { property: "og:title", content: "Organic Sogadu — Farmers Brand" },
      { property: "og:description", content: "Real food. Real impact. Pure organic goodness from farmers to you." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <CertStrip />
      <AboutSection />
      <ServicesSection />
      <ProductsGrid />
    </>
  );
}
