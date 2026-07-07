"use client";

import { useState } from "react";
import { X, Award, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const awardDetails = [
  {
    title: "Closest Premium Hotel to Manona Dham",
    hi: "मनोना धाम के सबसे नजदीक प्रीमियम होटल",
    icon: ShieldCheck,
    description: "Located just 2.5 km from Shree Khatu Shyam Ji Manona Dham on the main Aonla-Shahabad Road. Our hotel is the closest modern lodging facility, providing pilgrims with absolute peace of mind, secure parking for tourist buses, and swift access to daily temple Darshans.",
    hiDescription: "मुख्य आंवला-शाहाबाद रोड पर श्री खाटू श्याम जी मनोना धाम से मात्र 2.5 किमी की दूरी पर स्थित। हमारा होटल श्रद्धालुओं के लिए सुरक्षित पार्किंग, दैनिक दर्शन तक त्वरित पहुंच और आरामदायक विश्राम की सर्वोत्तम व्यवस्था प्रदान करता है।"
  },
  {
    title: "Top Rated Banquet Hall in Aonla",
    hi: "आंवला का सर्वश्रेष्ठ बैंक्वेट और विवाह लॉन",
    icon: Award,
    description: "Our expansive green lawns and premium decorated banquet venues are top-rated in Aonla, Bareilly. We offer comprehensive services for marriages, rings, receptions, and birthday events with beautiful lighting, stages, sound systems, and guest hosting.",
    hiDescription: "हमारे विस्तृत हरे-भरे विवाह लॉन और सजाए गए बैंक्वेट आंवला क्षेत्र में सर्वश्रेष्ठ स्थान रखते हैं। हम शादियों, अंगूठियों, रिसेप्शन और जन्मदिन के कार्यक्रमों के लिए फूलों की सजावट, प्रकाश व्यवस्था, साउंड सिस्टम और मेहमानों के रुकने की उत्तम व्यवस्था प्रदान करते हैं।"
  },
  {
    title: "100% Pure Vegetarian In-House Kitchen",
    hi: "100% शुद्ध शाकाहारी रसोइया",
    icon: CheckCircle2,
    description: "We serve delicious, freshly cooked 100% pure vegetarian North Indian and traditional dishes. Our kitchen adheres to the highest standards of hygiene and shuddh food preparation, making it the perfect choice for families and pilgrim groups visiting the Dham.",
    hiDescription: "हम अत्यंत स्वादिष्ट, ताज़ा बने 100% शुद्ध शाकाहारी उत्तर भारतीय और पारंपरिक व्यंजन परोसते हैं। हमारी रसोई स्वच्छता और पवित्र भोजन तैयार करने के उच्चतम मानकों का पालन करती है, जो धाम आने वाले श्रद्धालुओं के परिवारों के लिए एक आदर्श विकल्प है।"
  },
  {
    title: "Guest Choice Award 4.8/5",
    hi: "अतिथियों की पहली पसंद - रेटिंग 4.8/5",
    icon: Star,
    description: "Highly rated on Google and travel platforms for our warm hospitality, prompt room service, absolute room cleanliness, and courteous staff behavior. We strive to make every traveler's journey near Manona Dham comfortable and memorable.",
    hiDescription: "गर्मजोशी से भरे स्वागत, त्वरित कक्ष सेवा, कमरों की बेदाग सफाई और विनम्र व्यवहार के लिए गूगल और अन्य ट्रैवल प्लेटफॉर्म्स पर अतिथियों द्वारा सर्वोच्च रेटिंग दी गई है। हम हर यात्री के प्रवास को यादगार बनाने का निरंतर प्रयास करते हैं।"
  }
];

export function AwardCards() {
  const [activeItem, setActiveItem] = useState<typeof awardDetails[0] | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {awardDetails.map((item, index) => {
          const IconComp = item.icon;
          return (
            <button
              key={index}
              onClick={() => setActiveItem(item)}
              className="group flex flex-col items-center justify-between text-center rounded-[24px] bg-white p-6 shadow-soft border border-champagne/35 transition duration-300 hover:-translate-y-1 hover:shadow-glow h-full w-full"
              type="button"
            >
              <div className="flex flex-col items-center w-full">
                <div className="mb-4 inline-block rounded-full bg-gold/10 p-3 text-gold transition group-hover:bg-gold group-hover:text-white duration-300">
                  <IconComp className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-green leading-snug">{item.title}</h3>
                <p className="font-devanagari text-xs text-gold font-bold mt-2">{item.hi}</p>
              </div>
              <span className="mt-4 text-xs font-semibold text-charcoal/40 group-hover:text-green transition duration-300">
                Read More / जानें ➔
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-[28px] bg-white p-6 shadow-glow z-10 text-charcoal border border-champagne"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-ivory text-charcoal hover:bg-gold hover:text-white transition duration-200"
                aria-label="Close details modal"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center text-center mt-4">
                <div className="mb-4 inline-block rounded-full bg-gold/10 p-3.5 text-gold">
                  <activeItem.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-green leading-snug">{activeItem.title}</h3>
                <p className="font-devanagari text-sm font-bold text-gold mt-1 mb-6">{activeItem.hi}</p>
                
                <div className="border-t border-champagne/45 pt-5 space-y-4 text-left">
                  <div>
                    <p className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">Details</p>
                    <p className="mt-1 text-sm leading-6 text-charcoal font-semibold">{activeItem.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">विवरण</p>
                    <p className="mt-1 font-devanagari text-sm leading-6 text-charcoal font-bold">{activeItem.hiDescription}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
