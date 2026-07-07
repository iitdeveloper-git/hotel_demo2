"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/wedding-1.jpg",
    title: "Grand Palace Entry",
    hi: "शाही प्रवेश द्वार",
    text: "Devotees and guests are welcomed through our magnificent royal entrance gate.",
    hiText: "हमारे भव्य शाही प्रवेश द्वार से अतिथियों और श्रद्धालुओं का स्वागत किया जाता है।"
  },
  {
    image: "/hotel-1.jpg",
    title: "Luxury Bridal Suite",
    hi: "लक्जरी दुल्हन सुइट",
    text: "Attentive accommodations customized for wedding brides and premium guests.",
    hiText: "दुल्हन और विशिष्ट अतिथियों के लिए तैयार किए गए लक्जरी वातानुकूलित कमरे।"
  },
  {
    image: "/catering-3.jpg",
    title: "Royal Shahi Thali",
    hi: "शाही राजभोग थाली",
    text: "Experience the true taste of shuddh shakahari traditional North Indian feasts.",
    hiText: "पारंपरिक उत्तर भारतीय शुद्ध शाकाहारी भोजन और शाही थाली का आनंद लें।"
  },
  {
    image: "/wedding-3.jpg",
    title: "Rose Floral Night Stage",
    hi: "गुलाब मंडप और मंच",
    text: "Beautiful red rose hearts floral decorations for memorable wedding pheras.",
    hiText: "विवाह के फेरों और स्मृतियों को यादगार बनाने के लिए गुलाब के फूलों का सुंदर मंच।"
  },
  {
    image: "/hotel-2.jpg",
    title: "Attentive Room Stays",
    hi: "आरामदायक एसी रूम",
    text: "Clean, fresh, air-conditioned rooms designed to rest your spirit.",
    hiText: "लंबी यात्रा के बाद आराम करने के लिए तैयार किए गए स्वच्छ और ताज़ा एसी कमरे।"
  },
  {
    image: "/catering-4.jpg",
    title: "Pure Vegetarian Buffet",
    hi: "शुद्ध शाकाहारी केटरिंग",
    text: "Freshly prepared vegetarian catering for grand gatherings and pilgrim groups.",
    hiText: "सामूहिक धार्मिक आयोजनों और विवाह भोज के लिए ताज़ा तैयार शाकाहारी केटरिंग।"
  },
  {
    image: "/new-gallery-2.jpg",
    title: "Premium Bed Decor",
    hi: "विशेष कमरा सजावट",
    text: "Curated room interiors with fresh sheets for a comfortable peaceful night.",
    hiText: "शांत और आरामदायक रात बिताने के लिए विशेष रूप से सजाए गए सुंदर बेड।"
  },
  {
    image: "/wedding-2.jpg",
    title: "Grand Marriage Lawn",
    hi: "विशाल विवाह लॉन",
    text: "Celebrate sangeet, mehendi, and reception under beautifully lit open skies.",
    hiText: "खुले आसमान और रोशनी के बीच मेहंदी, संगीत और शादी के भव्य रिसेप्शन का आयोजन।"
  }
];

export function ExperienceSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      {/* 3D Perspective Card Slider */}
      <div className="relative h-[480px] w-full overflow-hidden flex items-center justify-center perspective-[1200px]">
        <AnimatePresence mode="popLayout">
          {slides.map((slide, i) => {
            // Calculate active cards relative position
            let offset = i - index;
            if (offset < -slides.length / 2) offset += slides.length;
            if (offset > slides.length / 2) offset -= slides.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <motion.div
                key={slide.title}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: offset * 35,
                  z: -200,
                  x: offset * 320
                }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.85,
                  rotateY: offset * 25,
                  z: isActive ? 0 : -150,
                  x: offset * 280,
                  zIndex: isActive ? 10 : 5
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: offset * -320
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[320px] sm:w-[420px] h-[380px] rounded-[32px] bg-white border border-champagne/45 shadow-glow overflow-hidden cursor-pointer"
                onClick={() => setIndex(i)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full h-[60%] overflow-hidden bg-charcoal">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                </div>
                <div className="p-5 flex flex-col justify-between h-[40%] bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-green leading-snug">{slide.title}</h3>
                    <p className="font-devanagari text-sm font-bold text-gold">{slide.hi}</p>
                  </div>
                  <div className="mt-2 border-t border-champagne/30 pt-2 text-left">
                    <p className="text-xs text-charcoal/70 line-clamp-2">{slide.text}</p>
                    <p className="font-devanagari text-[10px] text-charcoal/60 line-clamp-1 mt-1 font-bold">{slide.hiText}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-green shadow-soft border border-champagne hover:bg-gold hover:text-white transition duration-300"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-green shadow-soft border border-champagne hover:bg-gold hover:text-white transition duration-300"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
