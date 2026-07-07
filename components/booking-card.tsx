"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Clock, Users, BedDouble, Search } from "lucide-react";

import { hotel } from "@/lib/hotel-data";

const schema = z.object({
  checkIn: z.string().min(1),
  checkOut: z.string().min(1),
  bookingTime: z.string().min(1),
  guests: z.string().min(1),
  rooms: z.string().min(1)
});

type BookingValues = z.infer<typeof schema>;

export function BookingCard({ compact = false }: { compact?: boolean }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const toDateInput = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const defaultTime = `${String(today.getHours()).padStart(2, "0")}:${String(Math.ceil(today.getMinutes() / 5) * 5).padStart(2, "0")}`.replace(":60", ":55");

  const { register, handleSubmit } = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: { checkIn: toDateInput(today), checkOut: toDateInput(tomorrow), bookingTime: defaultTime, guests: "2", rooms: "1" }
  });

  function onSubmit(values: BookingValues) {
    const message = `🙏 नमस्ते Hotel B Anand! मुझे कमरा/हॉल बुक करना है। विवरण इस प्रकार है:
📅 Check-in: ${values.checkIn}
📅 Check-out: ${values.checkOut}
⏰ Time: ${values.bookingTime}
👥 Guests: ${values.guests}
🛏️ Rooms: ${values.rooms}

कृपया बुकिंग उपलब्धता और रेट्स की जानकारी साझा करें।`;
    window.open(`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="compact-card rounded-[18px] p-3 text-charcoal">
      <div className={`grid gap-2 ${compact ? "md:grid-cols-2" : "lg:grid-cols-[1fr_1fr_.85fr_.7fr_.7fr_130px]"}`}>
        <label className="booking-field">
          <span><CalendarDays className="h-4 w-4" /> Check-in</span>
          <input type="date" min={toDateInput(today)} aria-label="Check-in date" {...register("checkIn")} />
        </label>
        <label className="booking-field">
          <span><CalendarDays className="h-4 w-4" /> Check-out</span>
          <input type="date" min={toDateInput(today)} aria-label="Check-out date" {...register("checkOut")} />
        </label>
        <label className="booking-field">
          <span><Clock className="h-4 w-4" /> Time</span>
          <input type="time" aria-label="Booking time" {...register("bookingTime")} />
        </label>
        <label className="booking-field">
          <span><Users className="h-4 w-4" /> Guests</span>
          <input type="number" min="1" aria-label="Guests" {...register("guests")} />
        </label>
        <label className="booking-field">
          <span><BedDouble className="h-4 w-4" /> Rooms</span>
          <input type="number" min="1" aria-label="Rooms" {...register("rooms")} />
        </label>
        <button type="submit" className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-green px-5 text-sm font-bold text-white transition hover:bg-gold">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </form>
  );
}
