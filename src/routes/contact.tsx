import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Organic Sogadu — Order Soil-Fresh Today" },
      { name: "description", content: "Call, email or visit Organic Sogadu in Kuduvanahalli, Kolar. Order direct via WhatsApp or Instagram." },
      { property: "og:title", content: "Contact Organic Sogadu" },
      { property: "og:description", content: "Get in touch with the farmers brand. We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-secondary to-background py-16 text-center">
        <span className="font-script text-2xl text-primary">Say Hello</span>
        <h1 className="mt-1 font-display text-5xl font-bold text-earth md:text-6xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-xl px-4 text-muted-foreground">
          Questions, bulk orders, or partnership inquiries? We're a phone call away.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 md:grid-cols-2">
        {[
          { icon: Phone, title: "Call Us", lines: ["6363702882", "6363001944"], href: "tel:+916363702882" },
          { icon: Mail, title: "Email", lines: ["Nowaystoxic100@gmail.com"], href: "mailto:Nowaystoxic100@gmail.com" },
          { icon: MapPin, title: "Visit", lines: ["Kuduvanahalli village,", "Kolar taluk, Karnataka – 563101"] },
          { icon: Instagram, title: "Instagram", lines: ["@organic_sogadu"], href: "https://www.instagram.com/organic_sogadu" },
        ].map((c) => (
          <a
            key={c.title}
            href={c.href ?? "#"}
            target={c.href?.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-3xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="rounded-2xl bg-primary/10 p-4 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <c.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-earth">{c.title}</div>
              {c.lines.map((l) => <div key={l} className="text-muted-foreground">{l}</div>)}
            </div>
          </a>
        ))}
      </div>

      <div className="mx-auto mb-16 max-w-6xl px-4">
        <a
          href="https://wa.me/916363702882?text=Hi%20Organic%20Sogadu%2C%20I%27d%20like%20to%20place%20an%20order."
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-3xl bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.01]"
        >
          <MessageCircle className="h-6 w-6" /> Order Now on WhatsApp
        </a>
      </div>
    </>
  );
}
