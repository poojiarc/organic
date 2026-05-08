import { useEffect, useRef } from "react";
import { ArrowRight, Leaf } from "lucide-react";

const VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export function Hero() {
  const ref = useRef<HTMLVideoElement>(null);

  // smooth opacity loop with rAF (very subtle breathing fade)
  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const loop = (t: number) => {
      const el = ref.current;
      if (el) {
        const phase = ((t - start) / 6000) % 1;
        const o = 0.7 + 0.15 * Math.sin(phase * Math.PI * 2);
        el.style.opacity = o.toFixed(3);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollDown = () => {
    document.getElementById("must-try")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <video
        ref={ref}
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-cream">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur animate-fade-in">
          <Leaf className="h-3.5 w-3.5 text-accent" /> Farmers Brand · MARKETED BY : NOWAYS TOXIC
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight md:text-7xl animate-fade-up">
          Pure Organic Goodness <br />
          <span className="font-script text-accent text-5xl md:text-8xl">from Farmers to You</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-cream/85 md:text-lg animate-fade-up [animation-delay:120ms]">
          Empowering 350+ farmers and delivering fresh, chemical-free food directly to your home.
          Real food. Real impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:240ms]">
          <button
            onClick={scrollDown}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-soft transition hover:scale-105"
          >
            Shop Now
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <a
            href="#about"
            className="rounded-full border border-cream/40 px-7 py-3.5 font-semibold text-cream backdrop-blur transition hover:bg-cream/10"
          >
            Our Story
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-xs uppercase tracking-widest animate-fade-in [animation-delay:600ms]">
        Scroll · Soil-fresh awaits
      </div>
    </section>
  );
}