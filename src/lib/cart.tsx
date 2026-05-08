import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  variant?: string;
  price: number;
  qty: number;
  image?: string;
  emoji?: string;
};

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<CartItem, "qty">) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add: CartCtx["add"] = (it) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === it.id);
      if (found) return prev.map((p) => (p.id === it.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...it, qty: 1 }];
    });
  };
  const setQty: CartCtx["setQty"] = (id, qty) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((p) => p.id !== id) : prev.map((p) => (p.id === id ? { ...p, qty } : p))
    );
  };
  const remove: CartCtx["remove"] = (id) => setItems((p) => p.filter((x) => x.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return (
    <Ctx.Provider value={{ items, open, setOpen, add, setQty, remove, clear, total, count }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}