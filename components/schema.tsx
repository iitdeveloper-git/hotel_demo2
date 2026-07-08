import { faqs, hotel, rooms } from "@/lib/hotel-data";

export function Schema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: hotel.name,
      alternateName: hotel.hindiName,
      url: hotel.baseUrl,
      telephone: hotel.phone,
      email: hotel.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Aonla - Shahabad Road, Behta Janu",
        addressLocality: "Aonla",
        addressRegion: "Uttar Pradesh",
        postalCode: "243301",
        addressCountry: "IN"
      },
      geo: { "@type": "GeoCoordinates", latitude: hotel.coordinates.lat, longitude: hotel.coordinates.lng },
      priceRange: "₹₹",
      amenityFeature: ["Pure Vegetarian Restaurant", "Premium Suites", "Luxury Rooms", "Air Conditioning", "Free Parking"].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      containsPlace: rooms.map((room) => ({ "@type": "HotelRoom", name: room.title, bed: "Double bed", occupancy: "2 adults" }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } }))
    }
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
