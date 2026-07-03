import Link from "next/link";
import { LuxuryButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6 pt-24 text-center">
      <div className="max-w-2xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-heading text-7xl text-green">This palace corridor is quiet.</h1>
        <p className="mt-3 font-devanagari text-2xl text-gold">यह पेज उपलब्ध नहीं है</p>
        <p className="mt-6 text-lg leading-8 text-charcoal/70">The page may have moved, but the concierge can guide you back to rooms, dining, weddings, offers, or reservations.</p>
        <div className="mt-8 flex justify-center gap-3">
          <LuxuryButton href="/">Return Home</LuxuryButton>
          <Link className="rounded-full border border-gold px-6 py-3 font-bold text-green" href="/contact">Contact Concierge</Link>
        </div>
      </div>
    </main>
  );
}
