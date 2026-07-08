"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./reveal";

export function GalleryLightbox({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <Reveal key={index} delay={(index % 4) * 0.08}>
            <button 
              onClick={() => setActive(image)} 
              className="group relative w-full aspect-[4/3] overflow-hidden rounded-[24px] bg-champagne text-left shadow-soft transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
            >
              <Image src={image} alt={`Hotel B Anand gallery image ${index + 1}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/95 text-green px-4 py-2.5 rounded-full text-xs font-bold shadow-soft transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View / देखें 🔍
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[110] grid place-items-center bg-charcoal/90 p-5" onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-charcoal" aria-label="Close gallery"><X className="h-5 w-5" /></button>
          <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-[28px]" onClick={(event) => event.stopPropagation()}>
            <Image src={active} alt="Selected Hotel B Anand gallery image" fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
