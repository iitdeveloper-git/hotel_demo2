"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export function GalleryLightbox({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="masonry">
        {images.map((image, index) => (
          <button key={image} onClick={() => setActive(image)} className="group relative w-full overflow-hidden rounded-[24px] bg-champagne text-left shadow-soft">
            <Image src={image} alt={`Hotel B Anand gallery image ${index + 1}`} width={900} height={index % 3 === 0 ? 1100 : 740} className="h-auto w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
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
