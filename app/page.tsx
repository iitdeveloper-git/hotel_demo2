import Image from "next/image";
import { Gem, Map, MapPin, Navigation, Play, Quote } from "lucide-react";
import { BookingCard } from "@/components/booking-card";
import { EditorialCard, ReviewCard, RoomCards } from "@/components/cards";
import { FAQAccordion } from "@/components/accordion";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { attractions, awards, blogPosts, experiences, gallery, hotel, images, offers, reviews, villas } from "@/lib/hotel-data";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-white">
        <Image src={images.hero} alt="Hotel B Anand modern luxury reception" fill priority sizes="100vw" className="object-cover opacity-82" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/18 to-charcoal/78" />
        <div className="luxury-container relative flex min-h-screen flex-col justify-end pb-10 pt-32">
          <Reveal>
            <p className="eyebrow mb-5">Hotel B Anand · Greater Noida</p>
            <h1 className="heading-xl max-w-6xl">Experience Royal Luxury</h1>
            <p className="mt-3 font-devanagari text-3xl text-champagne">शाही भारतीय लक्ज़री का अनुभव</p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/82">Modern comfort, warm hospitality, and elegant stays in Greater Noida.</p>
          </Reveal>
          <div className="mt-14">
            <BookingCard />
          </div>
        </div>
      </section>

      <section id="rooms" className="section-y bg-ivory">
        <div className="luxury-container">
          <Reveal>
            <div className="mb-8 grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <p className="eyebrow">Luxury Rooms</p>
                <h2 className="mt-4 heading-lg text-green">Rooms with warm light, soft beds, and quiet comfort</h2>
                <p className="mt-2 font-devanagari text-lg text-gold">लक्ज़री कमरे</p>
                <p className="mt-4 max-w-none text-base leading-7 text-charcoal/70">
                  The room photos show calm bedrooms, clean linen, wooden details, practical amenities, and a stay experience made for rest.
                </p>
              </div>
            </div>
          </Reveal>
          <RoomCards />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader eyebrow="Luxury Villas" title="Poolside and suite-style private stays" hindi="निजी लक्ज़री विला" text="Our villa collection focuses on pool views, plush bedrooms, private service, and relaxed space for families or celebration guests." />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {villas.map((villa, index) => <EditorialCard key={villa.title} item={villa} href="/luxury-villas" />)}
          </div>
        </div>
      </section>

      <section className="section-y bg-green text-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Signature Experiences" title="Experiences shown exactly as guests use them" hindi="विशेष अनुभव" text="Dining rooms, spa areas, wedding setups, banquet halls, meeting rooms, and local travel support are presented with clear, guest-friendly details." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group relative min-h-96 overflow-hidden rounded-[28px] bg-brown p-7 text-white shadow-soft">
                  <Image src={item.image} alt={`${item.title} at Hotel B Anand`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-55 transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green via-green/25 to-transparent" />
                  <div className="relative flex h-full min-h-80 flex-col justify-end">
                    <item.icon className="mb-5 h-8 w-8 text-gold" />
                    <h3 className="font-heading text-4xl">{item.title}</h3>
                    <p className="font-devanagari text-lg text-champagne">{item.hi}</p>
                    <p className="mt-3 text-sm leading-7 text-white/76">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-marble">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="grid gap-5 md:grid-cols-2">
            {[images.dining, images.thali].map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[28px] ${index === 0 ? "h-[520px]" : "h-[420px] md:mt-16"}`}>
                <Image src={image} alt="Fine dining at Hotel B Anand" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <Reveal>
            <SectionHeader eyebrow="Fine Dining" title="Restaurant dining and Indian thali service" hindi="शाही भोजन" text="The dining experience includes a polished restaurant setting, fresh Indian thalis, comfortable table service, chef specials, and private meal requests." />
            <div className="grid grid-cols-2 gap-3">
              {["Royal Thali", "Chef Table", "Private Dining", "Cocktail Bar"].map((item) => <span key={item} className="rounded-full bg-white px-5 py-4 text-center font-bold text-green shadow-soft">{item}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader eyebrow="Spa & Wellness" title="Rituals that return the body to quiet" hindi="आराम एवं वेलनेस" text="Ayurveda, massage, yoga, steam, breathwork, and sleep rituals are shaped around each guest's pace." />
          </Reveal>
          <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-soft">
            <Image src={images.spa} alt="Spa and wellness suite at Hotel B Anand" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Wedding Destination" title="Celebrate your wedding in royal style" hindi="शाही विवाह स्थल" align="center" text="From mehendi and haldi to sangeet, pheras, reception, and family stays, our team helps create a smooth and beautiful celebration." />
          <div className="relative min-h-[560px] overflow-hidden rounded-[32px] bg-green p-8 text-white shadow-soft">
            <Image src={images.wedding} alt="Luxury Indian wedding at Hotel B Anand" fill sizes="100vw" className="object-cover opacity-62" />
            <div className="absolute inset-0 bg-gradient-to-r from-green via-green/45 to-transparent" />
            <div className="relative flex min-h-[500px] max-w-xl flex-col justify-end">
              <Gem className="mb-5 h-10 w-10 text-gold" />
              <h3 className="font-heading text-6xl">Beautiful venues for mehendi, sangeet, pheras, reception, and family gatherings.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-champagne/45">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4 text-center">
            <div className="col-span-12">
              <p className="eyebrow">Awards</p>
              <h2 className="mt-4 heading-lg text-green">Trusted for comfort, service, and guest satisfaction</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">पुरस्कार</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal/70">
                Hotel B Anand is appreciated by guests for warm hospitality, comfortable stays, family celebrations, dining experiences, and attentive service.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {awards.map((award) => <div key={award} className="rounded-[24px] bg-white p-6 text-center font-bold text-green shadow-soft">{award}</div>)}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Guest Testimonials" title="Trusted by guests who notice detail" hindi="अतिथि अनुभव" align="center" />
          <div className="grid gap-5 lg:grid-cols-3">{reviews.map((review) => <ReviewCard key={review.name} {...review} />)}</div>
          <div className="mt-8 grid gap-5 rounded-[28px] bg-green p-5 text-white shadow-soft lg:grid-cols-[.42fr_1fr] lg:items-center">
            <div className="grid aspect-video place-items-center rounded-[22px] bg-white/10"><Play className="h-12 w-12 fill-gold text-gold" /></div>
            <div className="p-3"><Quote className="mb-4 h-8 w-8 text-gold" /><p className="text-2xl font-light leading-10">Google Reviews, video testimonials, and Instagram feed blocks are UI-ready for API integration.</p></div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-4 heading-lg text-green">A glimpse of Hotel B Anand</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">गैलरी</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal/70">
                View our rooms, restaurant, banquet spaces, wedding setup, spa areas, and hotel ambience before planning your stay or celebration.
              </p>
            </div>
          </div>
          <GalleryLightbox images={gallery.slice(0, 10)} />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow="Nearby Attractions" title="Greater Noida, curated with comfort" hindi="नज़दीकी आकर्षण" text="Plan local transfers, business visits, shopping, dining, and nearby attractions with simple guidance from the hotel team." />
            <div className="grid gap-3">{attractions.map((item) => <div key={item.title} className="flex gap-4 rounded-[22px] bg-ivory p-5 shadow-soft"><item.icon className="h-6 w-6 shrink-0 text-gold" /><div><h3 className="font-bold text-green">{item.title} · {item.distance}</h3><p className="mt-1 text-sm text-charcoal/64">{item.text}</p></div></div>)}</div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-green p-8 text-white shadow-soft">
            <div className="absolute inset-6 rounded-[28px] bg-white/8" />
            <div className="absolute inset-10 rounded-[24px] border border-white/15" />
            <Map className="absolute right-8 top-8 h-10 w-10 text-gold" />
            <div className="absolute left-[15%] top-[22%] h-20 w-20 rounded-full border border-gold/40" />
            <div className="absolute left-[58%] top-[28%] h-28 w-28 rounded-full border border-white/15" />
            <div className="absolute left-[35%] top-[58%] h-24 w-24 rounded-full border border-gold/25" />
            <div className="absolute left-[24%] top-[36%] flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-green shadow-soft">
              <MapPin className="h-4 w-4 text-gold" />
              Hotel B Anand
            </div>
            <div className="absolute right-[18%] top-[48%] flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-white shadow-glow">
              <Navigation className="h-4 w-4" />
              Greater Noida
            </div>
            <div className="absolute left-[18%] top-[24%] h-4 w-4 rounded-full bg-gold shadow-glow" />
            <div className="absolute left-[58%] top-[36%] h-4 w-4 rounded-full bg-white" />
            <div className="absolute left-[42%] top-[66%] h-4 w-4 rounded-full bg-gold shadow-glow" />
            <div className="absolute bottom-8 left-8 max-w-sm">
              <p className="eyebrow">Demo Map</p>
              <h3 className="mt-3 font-heading text-4xl">Hotel B Anand near Greater Noida</h3>
              <p className="mt-3 text-sm leading-6 text-white/72">A clean demo location card for routes, local visits, events, and guest arrival planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container"><SectionHeader eyebrow="FAQ" title="Questions before arrival" hindi="अक्सर पूछे जाने वाले प्रश्न" align="center" /><FAQAccordion /></div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <p className="eyebrow">Offers</p>
              <h2 className="mt-4 heading-lg text-green">Stay packages for every occasion</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">विशेष ऑफर</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal/70">
                Choose from weekend stays, wedding preview visits, wellness breaks, and family-friendly packages with thoughtful inclusions.
              </p>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">{offers.map((offer) => <EditorialCard key={offer.title} item={offer} href="/offers" />)}</div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <p className="eyebrow">Blog</p>
              <h2 className="mt-4 heading-lg text-green">Hotel stories, travel tips, and celebration guides</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">ब्लॉग</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal/70">
                Read helpful ideas for weddings, wellness stays, dining plans, Greater Noida visits, and comfortable hotel experiences.
              </p>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">{blogPosts.map((post) => <EditorialCard key={post.slug} item={{ ...post, title: post.title }} href={`/blog/${post.slug}`} />)}</div>
        </div>
      </section>

      <section className="bg-green py-20 text-white">
        <div className="luxury-container rounded-[32px] bg-white p-8 text-charcoal shadow-soft md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div><p className="eyebrow">Newsletter</p><h2 className="mt-4 font-heading text-5xl text-green">Receive private invitations, seasonal packages, and chef table releases.</h2><p className="mt-2 font-devanagari text-xl text-gold">विशेष निमंत्रण और ऑफर प्राप्त करें</p></div>
            <form className="flex flex-col gap-3 sm:flex-row"><input className="min-h-14 flex-1 rounded-full border border-champagne bg-ivory px-5 outline-none focus:border-gold" placeholder="Your email address" aria-label="Email address" /><button className="rounded-full bg-gold px-7 py-4 font-bold text-white transition hover:bg-green" type="submit">Subscribe</button></form>
          </div>
        </div>
      </section>

    </main>
  );
}
