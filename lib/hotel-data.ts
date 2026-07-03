import {
  Award,
  Bath,
  BedDouble,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Car,
  ChefHat,
  Dumbbell,
  Gem,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Martini,
  MessageCircle,
  Mountain,
  PartyPopper,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Waves,
  Wifi
} from "lucide-react";

export const hotel = {
  name: "Hotel B Anand",
  hindiName: "होटल बी आनंद",
  tagline: "Royal Indian luxury with a modern soul",
  hindiTagline: "आधुनिक आत्मा के साथ शाही भारतीय लक्ज़री",
  phone: "+91-7302755534",
  whatsapp: "917302755534",
  email: "reservations@hotelbanand.com",
  address: "Hotel B Anand, Greater Noida, Uttar Pradesh 201310, India",
  shortAddress: "Greater Noida, Uttar Pradesh",
  coordinates: { lat: 28.4744, lng: 77.504 },
  baseUrl: "https://hotelbanand.com"
};

export const navItems = [
  { label: "Home", hi: "होम", href: "/" },
  { label: "About", hi: "परिचय", href: "/about" },
  { label: "Rooms & Suites", hi: "कमरे", href: "/rooms-suites" },
  { label: "Luxury Villas", hi: "विला", href: "/luxury-villas" },
  { label: "Dining", hi: "भोजन", href: "/dining" },
  { label: "Spa", hi: "स्पा", href: "/spa-wellness" },
  { label: "Wedding", hi: "विवाह", href: "/wedding" },
  { label: "Gallery", hi: "गैलरी", href: "/gallery" },
  { label: "Offers", hi: "ऑफर", href: "/offers" },
  { label: "Contact", hi: "संपर्क", href: "/contact" }
];

export const images = {
  hero: "/lobby-reception-royal.png",
  palace: "/luxury-lobby-chandelier.png",
  lobby: "/modern-hotel-lounge.png",
  suite: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85",
  bath: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1800&q=85",
  villa: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85",
  thali: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1800&q=85",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85",
  banquet: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85",
  meeting: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85",
  bar: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1800&q=85",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1800&q=85",
  courtyard: "/front-desk-warm.png",
  reception: "/modern-reception.png",
  attraction: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
};

export const rooms = [
  {
    title: "Maharaja Signature Suite",
    hi: "महाराजा सिग्नेचर सुइट",
    price: "₹38,000",
    image: images.suite,
    size: "780 sq ft",
    details: "Hand-carved screens, a marble bath, a private dining alcove, and quiet butler service create a residence-like stay.",
    hiDetails: "हस्तनिर्मित जालियां, मार्बल बाथ, निजी डाइनिंग और शांत बटलर सेवा इसे राजसी निवास जैसा बनाते हैं।",
    amenities: ["Butler service", "Marble bath", "City palace view", "Evening turndown"]
  },
  {
    title: "Anand Club Room",
    hi: "आनंद क्लब कमरा",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1800&q=85",
    size: "420 sq ft",
    details: "A polished room for calm business trips and short leisure stays, with club lounge access and a deep work desk.",
    hiDetails: "क्लब लाउंज, आरामदायक कार्य डेस्क और शांत वातावरण के साथ बिजनेस और अवकाश दोनों के लिए आदर्श।",
    amenities: ["Club lounge", "Rain shower", "Smart controls", "High speed Wi-Fi"]
  },
  {
    title: "Royal Courtyard Room",
    hi: "रॉयल कोर्टयार्ड कमरा",
    price: "₹22,000",
    image: images.courtyard,
    size: "510 sq ft",
    details: "Warm wood, brass lamps, garden-facing windows, and a restful palette inspired by old Rajasthan havelis.",
    hiDetails: "लकड़ी, ब्रास लैंप, गार्डन व्यू और राजस्थानी हवेली से प्रेरित रंगों वाला शांत कमरा।",
    amenities: ["Courtyard view", "Luxury linen", "Mini bar", "Yoga mat"]
  }
];

export const villas = [
  {
    title: "Raj Mahal Pool Villa",
    hi: "राज महल पूल विला",
    image: images.villa,
    price: "₹92,000",
    text: "A private pool, two bedrooms, hosted dining, and a sunken courtyard for families, dignitaries, and wedding hosts."
  },
  {
    title: "Champagne Garden Villa",
    hi: "शैम्पेन गार्डन विला",
    image: images.pool,
    price: "₹74,000",
    text: "A serene indoor-outdoor villa with a garden deck, spa bath, and chef-curated breakfast served in privacy."
  }
];

export const experiences = [
  { title: "Fine Dining", hi: "शाही भोजन", icon: Utensils, image: images.dining, text: "Regional Indian recipes, global technique, and candlelit service across signature restaurants." },
  { title: "Spa & Wellness", hi: "आराम एवं वेलनेस", icon: Sparkles, image: images.spa, text: "Ayurvedic rituals, sound healing, yoga, steam, and wellness consultations." },
  { title: "Wedding Destination", hi: "शाही विवाह स्थल", icon: Heart, image: images.wedding, text: "Palace-inspired ceremonies, floral ateliers, bespoke menus, and guest logistics." },
  { title: "Banquet Halls", hi: "बैंक्वेट हॉल", icon: PartyPopper, image: images.banquet, text: "Grand ballrooms and intimate salons for birthdays, engagements, and luxury launches." },
  { title: "Meetings", hi: "मीटिंग्स", icon: BriefcaseBusiness, image: images.meeting, text: "Hybrid-ready boardrooms with discreet service, executive menus, and breakout gardens." },
  { title: "Curated Journeys", hi: "विशेष अनुभव", icon: Landmark, image: images.attraction, text: "Private city walks, lake cruises, craft visits, and chef-led market mornings." }
];

export const diningVenues = [
  {
    title: "Anand Royal Thali",
    hi: "आनंद रॉयल थाली",
    image: images.thali,
    text: "A refined Indian dining room serving Rajasthani, Gujarati, and North Indian thalis with seasonal sweets, fresh breads, and warm table service.",
    timing: "Lunch 12:30 PM - 3:30 PM",
    highlights: ["Royal thali", "Vegetarian options", "Family dining"]
  },
  {
    title: "Sheesh Mahal Restaurant",
    hi: "शीश महल रेस्टोरेंट",
    image: images.dining,
    text: "An elegant all-day restaurant for breakfast, dinner buffets, chef specials, and candlelit a la carte meals inspired by Indian hospitality.",
    timing: "7:00 AM - 11:00 PM",
    highlights: ["Breakfast buffet", "A la carte", "Chef specials"]
  },
  {
    title: "Mehfil Lounge & Bar",
    hi: "महफ़िल लाउंज और बार",
    image: images.bar,
    text: "A relaxed evening lounge for mocktails, cocktails, premium snacks, soft music, and after-dinner conversations in a warm brass-and-wood setting.",
    timing: "4:00 PM - 12:00 AM",
    highlights: ["Signature drinks", "Small plates", "Evening lounge"]
  },
  {
    title: "Private Courtyard Dining",
    hi: "निजी कोर्टयार्ड डाइनिंग",
    image: images.courtyard,
    text: "A romantic private dining setup for anniversaries, proposals, family celebrations, and intimate dinners under soft courtyard lighting.",
    timing: "On request",
    highlights: ["Private setup", "Celebration menus", "Candlelight dinner"]
  }
];

export const awards = [
  "Best New Luxury Heritage Hotel 2026",
  "India Design Excellence Shortlist",
  "Top Wedding Venue in Rajasthan",
  "Guest Choice 4.9/5"
];

export const reviews = [
  { name: "Aarav Mehta", role: "Luxury Travel Curator", text: "Hotel B Anand feels deeply Indian without becoming ornamental. The service has grace, timing, and real warmth.", rating: 5 },
  { name: "Naina Kapoor", role: "Bride", text: "Our wedding flowed beautifully from mehendi to reception. Every guest felt personally hosted.", rating: 5 },
  { name: "Daniel Roy", role: "CEO Retreat Host", text: "The meeting spaces were precise, but the evenings around the courtyard made the retreat memorable.", rating: 5 }
];

export const offers = [
  { title: "Royal Weekend", hi: "रॉयल वीकेंड", image: images.palace, price: "from ₹34,000", text: "Breakfast, airport transfer, spa credit, and late checkout." },
  { title: "Wedding Preview Stay", hi: "विवाह प्रीव्यू स्टे", image: images.wedding, price: "from ₹52,000", text: "Venue walk, menu tasting, floral consultation, and suite stay." },
  { title: "Wellness Reset", hi: "वेलनेस रीसेट", image: images.spa, price: "from ₹46,000", text: "Two nights, yoga, spa therapy, sattvic dining, and sleep ritual." }
];

export const gallery = [
  images.hero,
  images.palace,
  images.lobby,
  images.suite,
  images.bath,
  images.villa,
  images.pool,
  images.dining,
  images.thali,
  images.spa,
  images.wedding,
  images.banquet,
  images.meeting,
  images.bar,
  images.courtyard
];

export const galleryCategories = [
  { title: "Rooms & Suites", slug: "rooms-suites", image: images.suite, intro: "Editorial room photography with beds, baths, balconies, and crafted details.", highlights: ["Marble baths", "Palace views", "Brass details", "Suite dining"] },
  { title: "Wedding", slug: "wedding", image: images.wedding, intro: "Ceremonies, mandaps, receptions, mehendi lawns, and bridal suites.", highlights: ["Mandap", "Floral atelier", "Reception", "Portraits"] },
  { title: "Dining", slug: "dining", image: images.dining, intro: "Signature restaurants, private thalis, chef tables, and terrace cocktails.", highlights: ["Chef table", "Indian menus", "Wine room", "Bar"] },
  { title: "Wellness", slug: "wellness", image: images.spa, intro: "Spa suites, yoga courtyards, steam rooms, and recovery lounges.", highlights: ["Ayurveda", "Yoga", "Steam", "Rituals"] }
];

export const attractions = [
  { title: "City Palace", distance: "12 min", icon: Landmark, text: "Private guide access to royal courtyards, museums, and lake viewpoints." },
  { title: "Lake Pichola Cruise", distance: "15 min", icon: Waves, text: "Sunset boat experience with refreshments and hosted transfers." },
  { title: "Aravalli Trail", distance: "35 min", icon: Mountain, text: "Gentle guided walks, photography stops, and picnic breakfast." },
  { title: "Airport", distance: "32 min", icon: Plane, text: "Luxury sedan, premium SUV, and group transfers on request." }
];

export const faqs = [
  { q: "Is Hotel B Anand a luxury hotel in Udaipur?", hiQ: "क्या होटल बी आनंद उदयपुर में लक्ज़री होटल है?", a: "Yes. Hotel B Anand is designed as a premium Indian luxury hotel with suites, villas, fine dining, spa, weddings, banquet halls, meeting spaces, concierge, and private transfers.", hiA: "हाँ। होटल बी आनंद सुइट्स, विला, शाही भोजन, स्पा, विवाह, बैंक्वेट, मीटिंग स्पेस और निजी ट्रांसफर वाला प्रीमियम भारतीय लक्ज़री होटल है।" },
  { q: "Can I book weddings and banquets?", hiQ: "क्या विवाह और बैंक्वेट बुक हो सकते हैं?", a: "Yes. The hotel hosts destination weddings, receptions, engagements, corporate galas, and private celebrations with planning support.", hiA: "हाँ। होटल डेस्टिनेशन वेडिंग, रिसेप्शन, सगाई, कॉर्पोरेट गाला और निजी समारोहों की योजना में सहयोग करता है।" },
  { q: "Are rooms and villas available with breakfast?", hiQ: "क्या कमरों और विला में नाश्ता शामिल है?", a: "Most direct booking packages include breakfast. Seasonal offers may include spa credit, airport transfer, dinner, or late checkout.", hiA: "अधिकांश डायरेक्ट बुकिंग पैकेज में नाश्ता शामिल है। मौसमी ऑफर में स्पा क्रेडिट, एयरपोर्ट ट्रांसफर, डिनर या लेट चेकआउट भी हो सकता है।" },
  { q: "Does the hotel support corporate meetings?", hiQ: "क्या होटल कॉर्पोरेट मीटिंग्स के लिए उपयुक्त है?", a: "Yes. Boardrooms, hybrid-ready meeting halls, breakout lawns, high-speed Wi-Fi, and executive dining are available.", hiA: "हाँ। बोर्डरूम, हाइब्रिड मीटिंग हॉल, ब्रेकआउट लॉन, हाई-स्पीड वाई-फाई और एग्जीक्यूटिव डाइनिंग उपलब्ध हैं।" }
];

export const blogPosts = [
  { title: "How to Plan a Royal Udaipur Wedding", slug: "royal-udaipur-wedding", tag: "Wedding", image: images.wedding, text: "A practical guide to mandap timing, guest flow, menus, rooms, and photography light." },
  { title: "The New Language of Indian Luxury Hotels", slug: "indian-luxury-hotels", tag: "Hospitality", image: images.lobby, text: "Why modern guests value quiet design, local craft, wellness, and intuitive service." },
  { title: "A Two-Day Wellness Stay in Rajasthan", slug: "wellness-stay-rajasthan", tag: "Wellness", image: images.spa, text: "Yoga, Ayurvedic therapies, sattvic dining, and slow mornings in a luxury setting." }
];

export const pageContent = {
  about: { title: "A Modern Palace of Warm Indian Hospitality", hi: "आधुनिक महल जैसा गर्मजोशी भरा भारतीय आतिथ्य", eyebrow: "About", image: images.palace, intro: "Hotel B Anand brings together royal Indian architecture, precise contemporary comfort, and service that feels personal from the first greeting.", points: ["Curved arches and marble textures", "Signature suites and pool villas", "Fine dining and Indian regional cuisine", "Spa, yoga, and wellness rituals", "Destination wedding and business event expertise"] },
  "rooms-suites": { title: "Luxury Rooms & Suites", hi: "लक्ज़री कमरे और सुइट्स", eyebrow: "Stay", image: images.suite, intro: "Every room is designed around rest, privacy, craft, and elegant technology that supports the stay without stealing attention.", points: ["Premium bedding", "Marble bathrooms", "High speed Wi-Fi", "Availability-ready booking engine", "Virtual tour ready galleries"] },
  "luxury-villas": { title: "Private Luxury Villas", hi: "निजी लक्ज़री विला", eyebrow: "Villas", image: images.villa, intro: "Pool villas for families, wedding hosts, and long-stay guests who want space, privacy, and dedicated hosting.", points: ["Private pool", "Hosted dining", "Butler service", "Garden decks", "Multi-room layouts"] },
  dining: { title: "Fine Dining with an Indian Soul", hi: "भारतीय आत्मा के साथ शाही भोजन", eyebrow: "Dining", image: images.dining, intro: "Signature menus move from royal thalis to global tasting plates, with chef-hosted evenings, terrace cocktails, and private dining.", points: ["Royal thali", "Chef table", "Private dining", "Bar and lounge", "Vegetarian tasting menus"] },
  "spa-wellness": { title: "Spa & Wellness Rituals", hi: "आराम एवं वेलनेस रिचुअल्स", eyebrow: "Wellness", image: images.spa, intro: "A calm wellness floor with Ayurveda, massage, yoga, breathwork, steam, and sleep rituals tailored to each guest.", points: ["Ayurvedic therapies", "Yoga courtyard", "Steam and jacuzzi", "Sound healing", "Couples rituals"] },
  wedding: { title: "A Royal Wedding Destination", hi: "शाही विवाह स्थल", eyebrow: "Wedding", image: images.wedding, intro: "Host mehendi, haldi, sangeet, pheras, reception, and farewell brunch in one seamless luxury destination.", points: ["Mandap design", "Floral atelier", "Guest stays", "Menu tasting", "Bridal suite"] },
  banquet: { title: "Banquet Halls for Grand Celebrations", hi: "भव्य समारोहों के लिए बैंक्वेट हॉल", eyebrow: "Banquet", image: images.banquet, intro: "Flexible halls and salons for milestone birthdays, engagements, launches, family functions, and gala dinners.", points: ["Grand ballroom", "Private salons", "Stage and lighting", "Custom menus", "Valet and transfers"] },
  meetings: { title: "Meetings with Resort-Level Ease", hi: "रिसॉर्ट जैसी सहजता के साथ मीटिंग्स", eyebrow: "Meetings", image: images.meeting, intro: "A refined corporate address for board meetings, leadership retreats, investor sessions, and hybrid conferences.", points: ["Boardrooms", "Hybrid AV", "Breakout lawns", "Executive menus", "Dedicated event manager"] },
  offers: { title: "Luxury Offers & Packages", hi: "लक्ज़री ऑफर और पैकेज", eyebrow: "Offers", image: images.pool, intro: "Seasonal stay offers for wellness, weddings, weekends, family breaks, and corporate retreats.", points: ["Direct booking benefits", "Breakfast packages", "Spa credits", "Airport transfers", "Flexible upgrades"] },
  experiences: { title: "Curated Luxury Experiences", hi: "विशेष लक्ज़री अनुभव", eyebrow: "Experiences", image: images.attraction, intro: "Private journeys through craft, cuisine, heritage, lakes, wellness, and celebration.", points: ["Lake cruises", "Craft walks", "Chef markets", "Temple mornings", "Photography tours"] },
  "nearby-attractions": { title: "Nearby Attractions", hi: "नज़दीकी आकर्षण", eyebrow: "Location", image: images.attraction, intro: "Explore Udaipur with private transfers, thoughtful timings, and hosted experiences shaped around comfort.", points: ["City Palace", "Lake Pichola", "Aravalli trails", "Craft bazaars", "Airport transfers"] },
  faq: { title: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न", eyebrow: "FAQ", image: images.lobby, intro: "Helpful answers for rooms, weddings, dining, corporate events, transfers, and direct booking.", points: ["Booking", "Weddings", "Rooms", "Dining", "Meetings"] },
  contact: { title: "Reserve Your Stay", hi: "अपना प्रवास बुक करें", eyebrow: "Contact", image: images.hero, intro: "Speak with our reservations desk for stays, weddings, villas, events, dining, spa, and curated itineraries.", points: [hotel.phone, hotel.email, hotel.address, "WhatsApp concierge", "Google Maps ready"] },
  "book-now": { title: "Book Your Stay", hi: "अपना प्रवास बुक करें", eyebrow: "Reservations", image: images.suite, intro: "Choose dates, guests, rooms, preferences, and concierge requests. The form is ready for booking engine and payment integration.", points: ["Availability ready", "Payment ready", "Room preferences", "WhatsApp support", "Secure enquiry flow"] }
};

export const policyPages = {
  privacy: { title: "Privacy Policy", hi: "गोपनीयता नीति", intro: "Hotel B Anand protects guest information with discretion and care.", sections: ["We collect details required for reservations, personalization, security, and legal compliance.", "Guest preferences may be used to improve service and can be updated on request.", "Payments are intended to be processed by secure PCI-compliant providers."] },
  terms: { title: "Terms", hi: "नियम और शर्तें", intro: "These terms make direct booking, stays, events, and packages transparent.", sections: ["Rates vary by dates, availability, inclusions, taxes, and package rules.", "Guests must provide accurate booking details and valid identification.", "Weddings, villas, groups, and long stays may require deposits or separate agreements."] }
};

export const amenityIcons = [Wifi, BedDouble, Bath, Car, CalendarDays, ChefHat, Leaf, Dumbbell, ShieldCheck, MessageCircle, Gem, Camera, Award, Star, Martini, MapPin];
