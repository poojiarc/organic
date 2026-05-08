import { createFileRoute } from "@tanstack/react-router";
import handMango from "@/assets/gallery/hand-mango.jpg";
import mangoTree from "@/assets/gallery/mango-tree.jpg";
import mangoesBranch from "@/assets/gallery/mangoes-branch.jpg";
import farmersGroup from "@/assets/gallery/farmers-group.jpg";
import farmersSteps from "@/assets/gallery/farmers-steps.jpg";
import farmerCow from "@/assets/gallery/farmer-cow.jpg";
import farmerField from "@/assets/gallery/farmer-field.jpg";
import mangoCollage from "@/assets/gallery/mango-collage.jpg";
import cashews from "@/assets/gallery/cashews.jpg";
import mangoesTree from "@/assets/gallery/mangoes-tree.jpg";
import productsCollage from "@/assets/gallery/products-collage.jpg";
import mangoDessert from "@/assets/gallery/mango-dessert.jpg";
import honey from "@/assets/gallery/honey.jpg";
import cashewTree from "@/assets/gallery/cashew-tree.jpg";
import bookProducts from "@/assets/gallery/book-products.jpg";

const photos = [
  { src: handMango, label: "Soil-fresh, hand-picked" },
  { src: farmersGroup, label: "Helping 350+ farmers right now" },
  { src: mangoTree, label: "Sun-ripened mangoes" },
  { src: farmerCow, label: "A farmer & his companion" },
  { src: cashews, label: "Pure, chemical-free cashews" },
  { src: productsCollage, label: "Pantry essentials" },
  { src: mangoesBranch, label: "Fragrant from the branch" },
  { src: farmersSteps, label: "Community of farmers" },
  { src: honey, label: "Raw forest honey" },
  { src: mangoDessert, label: "Lost flavours, rediscovered" },
  { src: cashewTree, label: "Cashew fruit on the tree" },
  { src: farmerField, label: "Hard work in every harvest" },
  { src: mangoesTree, label: "Three of a kind" },
  { src: mangoCollage, label: "Organic Sogadu mangoes" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Faces & Harvest of Organic Sogadu" },
      { name: "description", content: "Glimpses of the farmers, fields and fruits behind every Organic Sogadu product." },
      { property: "og:title", content: "Gallery — Organic Sogadu" },
      { property: "og:description", content: "Faces, fields and harvests behind the farmers brand." },
      { property: "og:image", content: farmersGroup },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="bg-gradient-to-b from-secondary to-background py-16 text-center">
        <span className="font-script text-2xl text-primary">Faces · Fields · Harvest</span>
        <h1 className="mt-1 font-display text-5xl font-bold text-earth md:text-6xl">Our Gallery</h1>
      </section>

      <div className="mx-auto max-w-7xl columns-2 gap-4 px-4 pb-10 md:columns-3 lg:columns-4">
        {photos.map((p, i) => (
          <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-card transition hover:shadow-soft">
            <img src={p.src} alt={p.label} loading="lazy" className="w-full transition duration-500 hover:scale-105" />
            <figcaption className="bg-card px-3 py-2 text-xs text-muted-foreground">{p.label}</figcaption>
          </figure>
        ))}
      </div>

      <section className="mx-auto mb-16 max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-soft">
          <img src={bookProducts} alt="Book your organic products with us" className="aspect-[16/7] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-cream">
            <h2 className="font-display text-3xl font-bold md:text-5xl">Taste the Truth. Skip the Toxins.</h2>
            <p className="mt-2 max-w-2xl text-cream/85">Book your weekly basket of soil-fresh organic produce, today.</p>
          </div>
        </div>
      </section>
    </>
  );
}
