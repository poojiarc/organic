import { ShieldCheck, BadgeCheck, Leaf, Truck, Sprout, HandHeart } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "FSSAI · 11225320000333" },
  { icon: BadgeCheck, text: "MSME · UDYAM-KR-19-0025101" },
  { icon: Leaf, text: "100% Organic" },
  { icon: Sprout, text: "No Chemicals · No Preservatives" },
  { icon: Truck, text: "Delivered Fresh Every Sunday" },
  { icon: HandHeart, text: "Supporting 350+ Farmers" },
];

export function CertStrip() {
  const list = [...items, ...items];
  return (
    <div className="overflow-hidden border-y bg-primary/95 py-4 text-primary-foreground">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
        {list.map((it, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium">
            <it.icon className="h-5 w-5 text-accent" />
            <span>{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}