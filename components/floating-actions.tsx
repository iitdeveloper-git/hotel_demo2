"use client";

import { MessageCircle, Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function FloatingActions() {
  return (
    <>
      <a
        className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-blue-600 p-4 text-white shadow-glow transition hover:scale-105 hover:bg-blue-700"
        href="tel:+917302755534"
        aria-label="Call Hotel B Anand"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green p-4 text-white shadow-glow transition hover:scale-105 hover:bg-gold"
        href={`https://wa.me/${hotel.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </>
  );
}
