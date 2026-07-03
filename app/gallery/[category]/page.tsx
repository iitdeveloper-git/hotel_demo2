import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { SectionHeader } from "@/components/section-header";
import { gallery, galleryCategories } from "@/lib/hotel-data";

export function generateStaticParams() {
  return galleryCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: routeCategory } = await params;
  const category = galleryCategories.find((item) => item.slug === routeCategory);
  return category ? { title: `${category.title} Gallery`, description: category.intro } : {};
}

export default async function GalleryCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: routeCategory } = await params;
  const category = galleryCategories.find((item) => item.slug === routeCategory);
  if (!category) notFound();
  return (
    <main>
      <section className="relative min-h-[68vh] overflow-hidden bg-green pt-32 text-white">
        <Image src={category.image} alt={category.title} fill sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-green to-charcoal/20" />
        <div className="luxury-container relative flex min-h-[56vh] flex-col justify-end pb-12">
          <p className="eyebrow">Gallery</p>
          <h1 className="heading-xl">{category.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76">{category.intro}</p>
        </div>
      </section>
      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Highlights" title="What guests can inspect" />
          <div className="mb-12 grid gap-4 md:grid-cols-4">{category.highlights.map((item) => <div key={item} className="rounded-[22px] bg-white p-5 text-center font-bold text-green shadow-soft">{item}</div>)}</div>
          <GalleryLightbox images={gallery} />
        </div>
      </section>
    </main>
  );
}
