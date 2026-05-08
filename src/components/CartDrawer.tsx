import { useState } from "react";
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";

const WHATSAPP_NUMBER = "916363702882";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const checkout = () => {
    if (!name || !phone || !address || items.length === 0) return;
    setSubmitting(true);
    const lines = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name}${i.variant ? " (" + i.variant + ")" : ""} × ${i.qty} = ₹${i.price * i.qty}`
      )
      .join("%0A");
    const msg =
      `*New Order — Organic Sogadu*%0A%0A` +
      `${lines}%0A%0A` +
      `*Total: ₹${total}*%0A%0A` +
      `*Customer Details*%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Address: ${address}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitting(false);
    clear();
    setOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-earth/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-soft transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="font-display text-xl font-semibold">Your Basket</h3>
          <button onClick={() => setOpen(false)} aria-label="Close cart" className="rounded-full p-2 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">Your basket is empty.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.id} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                  <div className="flex-1">
                    <div className="font-medium">{i.name}</div>
                    {i.variant && <div className="text-xs text-muted-foreground">{i.variant}</div>}
                    <div className="mt-1 text-sm text-primary">₹{i.price}</div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-secondary px-2 py-1">
                    <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-6 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <button onClick={() => remove(i.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="space-y-3 border-t bg-muted/40 p-5">
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" inputMode="tel" className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery Address" rows={2} className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <button
              onClick={checkout}
              disabled={submitting || !name || !phone || !address}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-semibold text-primary-foreground transition hover:scale-[1.01] disabled:opacity-50"
            >
              <MessageCircle className="h-4 w-4" /> Place Order via WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}