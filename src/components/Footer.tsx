import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-earth text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Organic Sogadu" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-lg font-bold">Organic Sogadu</div>
              <div className="text-[10px] uppercase tracking-widest text-cream/70">Farmers Brand</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            Nourishing Earth, Farmers, Poor and You. Real food. Real impact.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-base font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-base font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Organic Food Supply</li>
            <li>Fresh Weekly Delivery</li>
            <li>Farmer Support Initiative</li>
            <li>No Chemicals · No Preservatives</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-base font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 6363702882 / 6363001944</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> Nowaystoxic100@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Kuduvanahalli village, Kolar – 563101</li>
            <li>
              <a href="https://www.instagram.com/organic_sogadu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <Instagram className="h-4 w-4" /> @organic_sogadu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-sm text-cream/70">
        Made with <Heart className="inline h-4 w-4 fill-accent text-accent" /> by{" "}
        <a href="#" className="font-semibold text-accent hover:underline">StaffArc</a>
      </div>
    </footer>
  );
}