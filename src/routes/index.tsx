import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CertStrip } from "@/components/CertStrip";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <CertStrip />
      <AboutSection />
      <ServicesSection />
      <FeaturedProducts />
      
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-earth md:text-4xl">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-earth">Call Us</h3>
              <p className="mt-2 text-muted-foreground">6363702882 / 6363001944</p>
            </div>
            
            <div className="flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-earth">Email Us</h3>
              <p className="mt-2 text-muted-foreground">Nowaystoxic100@gmail.com</p>
            </div>
            
            <div className="flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-earth">Visit Us</h3>
              <p className="mt-2 text-muted-foreground">Kuduvanahalli village, Kolar – 563101</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}
