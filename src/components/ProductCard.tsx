import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import { useCart, type CartItem } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { items, add, setQty } = useCart();
  const [variantIdx, setVariantIdx] = useState(0);

  const variant = product.variants?.[variantIdx];
  const price = variant?.price ?? product.price;
  const id = product.variants ? `${product.id}-${variant?.label}` : product.id;
  const inCart = items.find((i) => i.id === id);
  const noPrice = !price;

  const handleAdd = () => {
    if (noPrice) return;
    const item: Omit<CartItem, "qty"> = {
      id,
      name: product.name,
      variant: variant?.label ?? product.unit,
      price: price!,
    };
    add(item);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-3 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-secondary text-6xl">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition group-hover:scale-110"
          />
        ) : (
          <span aria-hidden className="transition group-hover:scale-110">{product.emoji ?? "🌿"}</span>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold text-earth">{product.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.desc}</p>

      {product.variants && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.variants.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setVariantIdx(i)}
              className={`rounded-full border px-2.5 py-1 text-xs transition ${
                variantIdx === i ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between gap-2">
        <div>
          {price ? (
            <div className="font-display text-xl font-bold text-primary">₹{price}</div>
          ) : (
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Enquire price</div>
          )}
          {!product.variants && product.unit && (
            <div className="text-xs text-muted-foreground">{product.unit}</div>
          )}
        </div>

        {inCart ? (
          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1.5 text-primary">
            <button onClick={() => setQty(id, inCart.qty - 1)} aria-label="Decrease"><Minus className="h-4 w-4" /></button>
            <span className="w-6 text-center text-sm font-bold">{inCart.qty}</span>
            <button onClick={() => setQty(id, inCart.qty + 1)} aria-label="Increase"><Plus className="h-4 w-4" /></button>
            <Check className="ml-1 h-3.5 w-3.5" />
          </div>
        ) : noPrice ? (
          <button
            onClick={() => add({ id, name: product.name, variant: product.unit, price: 0 })}
            className="rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Add to enquiry
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition hover:scale-105"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}