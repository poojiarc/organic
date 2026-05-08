import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShoppingCart, Home, Info, Leaf, Image, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/products", label: "Products", icon: Leaf },
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen: setCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Organic Sogadu logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-earth">Organic Sogadu</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Farmers Brand</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              <l.icon className="h-4 w-4" /> {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCart(true)}
            aria-label="Open cart"
            className="relative rounded-full bg-secondary p-2.5 text-earth transition hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/products"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-105 md:inline-flex"
          >
            Order Now
          </Link>
          <button
            className="rounded-md p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="flex flex-col p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
              >
                <l.icon className="h-4 w-4" /> {l.label}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}