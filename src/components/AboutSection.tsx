import { Sprout, HandHeart, Truck, ShieldCheck } from "lucide-react";
import farmers from "@/assets/gallery/farmers-group.jpg";
import farmerCow from "@/assets/gallery/farmer-cow.jpg";

const features = [
  { icon: Sprout, title: "100% Organic", desc: "Grown in living soil — no chemicals, no preservatives." },
  { icon: HandHeart, title: "Farmer First", desc: "Direct trade with 350+ farmers. Fair price, real respect." },
  { icon: Truck, title: "Soil-Fresh Weekly", desc: "Harvested & delivered every Sunday across our region." },
  { icon: ShieldCheck, title: "Trusted Quality", desc: "FSSAI & MSME registered. Easy 2-day return on spoilage." },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={farmers} alt="Farmers we support" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
          <img src={farmerCow} alt="Farmer with cow" className="absolute -bottom-8 -right-4 hidden aspect-square w-48 rounded-2xl border-4 border-background object-cover shadow-soft md:block" />
        </div>
        <div>
          <span className="font-script text-2xl text-primary">Our Story</span>
          <h2 className="mt-1 font-display text-4xl font-bold text-earth md:text-5xl">
            Honoring the hands that feed us.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            <strong className="text-foreground">"Sogadu"</strong> means <em>the true essence</em>.
            That essence belongs in every bite. The Noways Toxic team works directly in the fields,
            bridging the gap between hardworking farmers and your dining table — no middlemen,
            no chemicals, just pure, earth-grown goodness.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Stop settling for store-bought. Start eating <strong className="text-primary">soil-fresh</strong>.
            Reclaim the lost flavours of your childhood — like the fragrance of a real mango that fills the room.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <f.icon className="h-6 w-6 text-primary" />
                <div className="mt-2 font-display text-base font-semibold text-earth">{f.title}</div>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6 rounded-2xl border bg-secondary/60 p-5">
            <div>
              <div className="font-display text-3xl font-bold text-primary">350+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Farmers Supported</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-bold text-primary">100%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Chemical-Free</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-bold text-primary">7</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Day Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}