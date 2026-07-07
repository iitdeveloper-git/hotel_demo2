import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { hotel, navItems } from "@/lib/hotel-data";

export function Footer() {
  return (
    <footer className="bg-brown text-ivory">
      <div className="luxury-container py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.7fr_.7fr_.9fr]">
          <div>
            <p className="font-heading text-4xl">Hotel B Anand</p>
            <p className="mt-1 font-devanagari text-lg text-champagne">होटल बी आनंद</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">Modern luxury rooms, celebrations, dining, and warm hospitality in Greater Noida.</p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a key={index} className="icon-button border-white/20 bg-white/10 text-white" href="#" aria-label="Social profile">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-title">Explore</p>
            <div className="mt-4 grid gap-3">
              {navItems.slice(1, 8).map((item) => <Link key={item.href} className="footer-link" href={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="footer-title">Guests</p>
            <div className="mt-4 grid gap-3">
              {["/book-now", "/faq", "/privacy-policy", "/terms", "/blog"].map((href) => (
                <Link key={href} className="footer-link" href={href}>{href.replace("/", "").replace("-", " ") || "Home"}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <div className="mt-4 grid gap-4 text-sm text-white/72">
              <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold" />{hotel.address}</p>
              <a className="flex gap-3" href={`tel:${hotel.phone}`}><Phone className="h-5 w-5 text-gold" />{hotel.phone}</a>
              <a className="flex gap-3" href={`mailto:${hotel.email}`}><Mail className="h-5 w-5 text-gold" />{hotel.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Hotel B Anand. All rights reserved.</p>
          <p>
            IIT-Developer dwara banaya hai{" "}
            <a className="font-bold text-gold hover:text-white" href="https://iitdeveloper.com" target="_blank" rel="noreferrer">
              IIT-Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
