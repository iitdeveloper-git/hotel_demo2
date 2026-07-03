"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/hotel-data";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-4xl divide-y divide-champagne overflow-hidden rounded-[28px] bg-white shadow-soft">
      {faqs.map((faq, index) => (
        <div key={faq.q}>
          <button className="flex w-full items-center justify-between gap-4 p-6 text-left" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>
              <span className="block font-heading text-2xl text-green">{faq.q}</span>
              <span className="font-devanagari text-sm text-gold">{faq.hiQ}</span>
            </span>
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-gold transition", open === index && "rotate-180")} />
          </button>
          {open === index ? (
            <div className="px-6 pb-6 text-charcoal/70">
              <p>{faq.a}</p>
              <p className="mt-2 font-devanagari">{faq.hiA}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
