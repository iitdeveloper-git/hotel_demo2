"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { hotel, navItems } from "@/lib/hotel-data";
import { cn } from "@/lib/utils";
import { BookingModal } from "./booking-modal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_8px_24px_rgba(35,66,52,0.08)]">
      <div className="hidden bg-green py-2 text-xs font-semibold text-white/85 md:block">
        <div className="luxury-container flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" />{hotel.phone}</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" />{hotel.email}</span>
            <span className="hidden items-center gap-2 lg:flex"><MapPin className="h-3.5 w-3.5 text-gold" />{hotel.shortAddress}</span>
          </div>
          <div className="flex items-center gap-2">
            {["f", "x", "in", "ig"].map((item) => (
              <span key={item} className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-[10px] uppercase text-gold">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <nav className={cn("luxury-container flex items-center justify-between bg-white transition-all", scrolled ? "py-3" : "py-4")}>
        <Link href="/" className="flex items-center gap-3" aria-label="Hotel B Anand home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-green font-heading text-xl text-gold">B</span>
          <span>
            <span className="block font-heading text-2xl leading-none text-green">Hotel B Anand</span>
            <span className="font-devanagari text-xs text-gold">होटल बी आनंद</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.slice(0, 8).map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-charcoal/75 transition hover:bg-ivory hover:text-green">
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setBookingOpen(true)}
          className="hidden rounded-full bg-green px-6 py-3 text-sm font-bold text-white transition hover:bg-gold lg:inline-flex"
        >
          Book Now
        </button>

        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-green/10 bg-white p-4 shadow-soft lg:hidden">
          <div className="luxury-container grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-ivory px-4 py-3 font-semibold text-green">
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => {
                setOpen(false);
                setBookingOpen(true);
              }}
              className="mt-2 rounded-xl bg-green px-4 py-3 text-center font-bold text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      ) : null}

      <ScrollProgress />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </header>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed left-0 top-0 h-1 bg-gold transition-[width]" style={{ width: `${width}%` }} />;
}
