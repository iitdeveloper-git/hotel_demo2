import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { MotionProvider } from "@/components/motion-provider";
import { Schema } from "@/components/schema";
import { hotel } from "@/lib/hotel-data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "500", "700"], variable: "--font-devanagari", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(hotel.baseUrl),
  title: {
    default: "Hotel B Anand | Luxury Hotel in Aonla, Bareilly",
    template: "%s | Hotel B Anand"
  },
  description: "Hotel B Anand is a modern luxury hotel in Aonla, Bareilly, near Khatu Shyam Ji Manona Dham. We offer premium AC rooms, luxury suites, pure-veg dining, and warm hospitality.",
  keywords: ["Hotel B Anand", "luxury hotel in Aonla", "hotel in Aonla", "hotel near Manona Dham", "luxury hotel Bareilly"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hotel B Anand | Royal Indian Luxury",
    description: "Experience premium Indian hospitality with modern amenities, luxury suites, pure-veg dining, and peaceful stays near Manona Dham.",
    url: hotel.baseUrl,
    siteName: "Hotel B Anand",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hotel B Anand luxury hotel" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel B Anand",
    description: "Royal Indian luxury with a modern soul."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${inter.variable} ${devanagari.variable}`}>
      <body>
        <Schema />
        <MotionProvider>
          <div className="noise" />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
