import { Link } from "@tanstack/react-router";
import {
  Instagram, Phone, Mail, MapPin, Heart,
  Home, Info, ShoppingBasket, Image as ImageIcon, MessageCircle,
  Truck, CalendarCheck, HandHeart, Leaf,
} from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();
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
            <li><Link to="/" className="flex items-center gap-2 hover:text-accent"><Home className="h-4 w-4" /> Home</Link></li>
            <li><Link to="/about" className="flex items-center gap-2 hover:text-accent"><Info className="h-4 w-4" /> About</Link></li>
            <li><Link to="/products" className="flex items-center gap-2 hover:text-accent"><ShoppingBasket className="h-4 w-4" /> Products</Link></li>
            <li><Link to="/gallery" className="flex items-center gap-2 hover:text-accent"><ImageIcon className="h-4 w-4" /> Gallery</Link></li>
            <li><Link to="/contact" className="flex items-center gap-2 hover:text-accent"><MessageCircle className="h-4 w-4" /> Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-base font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Organic Food Supply</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4" /> Fresh Weekly Delivery</li>
            <li className="flex items-center gap-2"><HandHeart className="h-4 w-4" /> Farmer Support Initiative</li>
            <li className="flex items-center gap-2"><CalendarCheck className="h-4 w-4" /> No Chemicals · No Preservatives</li>
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
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-5 text-center text-xs text-cream/70 md:px-6">
          <p>© {year} Organic Sogadu. All rights reserved.</p>
          <div className="flex items-center justify-center gap-1">
            Made with <Heart className="inline h-4 w-4 mx-1 fill-red-500 text-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-400 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}