import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import farmField from "@/assets/gallery/farmer-field.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Organic Sogadu — The True Essence of Food" },
      { name: "description", content: "Sogadu means the true essence. Meet the team behind the farmers brand: Noways Toxic — bridging soil and table." },
      { property: "og:title", content: "About Organic Sogadu" },
      { property: "og:description", content: "Honoring the hands that till the soil. Real food. Real impact." },
      { property: "og:image", content: farmField },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img src={farmField} alt="A farmer in his field" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-cream">
          <span className="font-script text-3xl text-accent">Our Story</span>
          <h1 className="mt-1 font-display text-5xl font-bold md:text-6xl">About Organic Sogadu</h1>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
    </>
  );
}
