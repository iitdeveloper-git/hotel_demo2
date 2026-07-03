import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/hotel-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post ? { title: post.title, description: post.text } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden bg-green pt-32 text-white">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-green via-green/55 to-charcoal/20" />
        <div className="luxury-container relative flex min-h-[58vh] flex-col justify-end pb-12">
          <p className="eyebrow">{post.tag}</p>
          <h1 className="heading-xl max-w-5xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76">{post.text}</p>
        </div>
      </section>
      <article className="section-y bg-ivory">
        <div className="luxury-container max-w-3xl">
          {[
            "Luxury travel decisions begin with clarity: guests want to know what the property offers, how the experience flows, and whether the hotel understands the emotional purpose of the trip.",
            "At Hotel B Anand, the answer is shaped through architecture, cuisine, wellness, events, and a concierge model designed for families, couples, corporate hosts, and international travellers.",
            "This guide is written for practical planning as much as inspiration, with direct booking, guest comfort, local culture, and high-touch service at the centre."
          ].map((paragraph) => <p key={paragraph} className="mb-6 text-xl leading-10 text-charcoal/75">{paragraph}</p>)}
        </div>
      </article>
    </main>
  );
}
