import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { EditorialCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { gallery, galleryCategories } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore Hotel B Anand rooms, suites, dining, wellness, luxury amenities, and guest experience through our image gallery."
};

export default function GalleryPage() {
  return (
    <main className="pt-32">
      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Gallery" title="Luxury gallery by experience" hindi="लक्ज़री गैलरी" text="Rooms, suites, pure veg dining, spa, luxury amenities, and guest experience gallery." />
          <div className="mb-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{galleryCategories.map((item) => <EditorialCard key={item.slug} item={{ ...item, text: item.intro }} href={`/gallery/${item.slug}`} />)}</div>
          <GalleryLightbox images={gallery} />
        </div>
      </section>
    </main>
  );
}
