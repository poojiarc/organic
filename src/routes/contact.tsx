import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "916363702882";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.message) {
      toast.error("Please fill in Name, Mobile and Message.");
      return;
    }

    const text = `*New Inquiry — Organic Sogadu*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email || "N/A"}\n📞 *Mobile:* ${formData.mobile}\n💬 *Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <>
      <section className="bg-gradient-to-b from-secondary to-background py-16 text-center">
        <span className="font-script text-2xl text-primary">Say Hello</span>
        <h1 className="mt-1 font-display text-5xl font-bold text-earth md:text-6xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-xl px-4 text-muted-foreground">
          Questions, bulk orders, or partnership inquiries? We're a phone call away.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 md:grid-cols-2">
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
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
                  {c.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                </div>
              </a>
            ))}
          </div>
          
          <div className="rounded-3xl border bg-primary/5 p-8 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-earth">Place Order Directly</h3>
            <p className="mt-2 text-muted-foreground">The fastest way to get your soil-fresh goodness is via WhatsApp.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Organic%20Sogadu%2C%20I%27d%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-6 w-6" /> Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl border bg-card p-8 shadow-card md:p-10">
          <h3 className="font-display text-3xl font-bold text-earth">Send a Message</h3>
          <p className="mt-2 text-muted-foreground">Fill out the form below and we'll chat on WhatsApp.</p>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-input bg-background py-6"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email ID (Optional)</label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl border-input bg-background py-6"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="mobile" className="text-sm font-medium text-foreground">Mobile Number</label>
              <Input
                id="mobile"
                type="tel"
                placeholder="9876543210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="rounded-xl border-input bg-background py-6"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
              <Textarea
                id="message"
                placeholder="What are you looking for?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl border-input bg-background p-4"
              />
            </div>
            
            <Button type="submit" className="w-full rounded-xl py-7 text-lg font-bold shadow-soft transition hover:scale-[1.01]">
              <Send className="mr-2 h-5 w-5" /> Send to WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
