import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.category === "must-try").slice(0, 4);

  return (
    <section id="must-try" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-bold text-earth md:text-4xl">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">Handpicked soil-fresh goodness from our farmers.</p>
          </div>
          <Link
            to="/products"
            className="group flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
          >
            View All Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-soft transition hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
