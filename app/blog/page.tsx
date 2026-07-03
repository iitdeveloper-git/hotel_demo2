import type { Metadata } from "next";
import { EditorialCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { blogPosts } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Hotel B Anand luxury hospitality blog covering weddings, hotel stays, wellness breaks, dining, and Greater Noida travel."
};

export default function BlogPage() {
  return (
    <main className="pt-32">
      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Blog" title="Luxury hospitality insights" hindi="लक्ज़री यात्रा ब्लॉग" text="Intent-based content created for guests, search engines, AI answers, and voice search discovery." />
          <div className="grid gap-5 lg:grid-cols-3">{blogPosts.map((post) => <EditorialCard key={post.slug} item={post} href={`/blog/${post.slug}`} />)}</div>
        </div>
      </section>
    </main>
  );
}
