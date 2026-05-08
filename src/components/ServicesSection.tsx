import { Leaf, Truck, HandHeart, ShieldCheck } from "lucide-react";

const services = [
  { icon: Leaf, title: "Organic Food Supply", desc: "From farm soil to your table — pure, traceable, and chemical-free." },
  { icon: Truck, title: "Fresh Weekly Delivery", desc: "Harvested on Saturday, delivered every Sunday — peak freshness, always." },
  { icon: HandHeart, title: "Farmer Support Initiative", desc: "Empowering 350+ farmers with fair, direct trade and dignity." },
  { icon: ShieldCheck, title: "No Chemicals · No Preservatives", desc: "Naturally grown, naturally preserved — the way food should be." },
];

export function ServicesSection() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-2xl text-primary">What We Do</span>
          <h2 className="mt-1 font-display text-4xl font-bold text-earth md:text-5xl">Real food. Real impact.</h2>
          <p className="mt-3 text-muted-foreground">A living food system that honours soil, farmer, and you.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-card transition-all hover:-translate-y-2 hover:shadow-soft"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-earth">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}