import { PRODUCTS, type Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const CATEGORIES: { key: Product["category"]; title: string; subtitle: string }[] = [
  { key: "must-try", title: "🔥 Must-Try Favourites", subtitle: "The classics our customers reorder again and again." },
  { key: "combo", title: "🧺 Family Combos", subtitle: "A complete pantry refresh in one bundle." },
  { key: "by-products", title: "🍯 Organic By-Products", subtitle: "Pantry essentials, lovingly made." },
  { key: "chips", title: "🥬 Vegetable Chips", subtitle: "Crunchy, guilt-free snacking." },
  { key: "fruits", title: "🍈 Organic Fruits", subtitle: "Tree-ripened, soil-fresh fruits." },
  { key: "vegetables", title: "🥕 Organic Vegetables", subtitle: "Field-fresh vegetables, free of chemicals." },
];

export function ProductsGrid() {
  return (
    <div id="must-try" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      {CATEGORIES.map((cat) => {
        const list = PRODUCTS.filter((p) => p.category === cat.key);
        if (!list.length) return null;
        return (
          <section key={cat.key} className="mb-16">
            <div className="mb-6 text-center md:text-left">
              <h2 className="font-display text-3xl font-bold text-earth md:text-4xl">{cat.title}</h2>
              <p className="mt-1 text-muted-foreground">{cat.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}