"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BedDouble, CalendarDays, CheckCircle2, KeyRound, Mail, User2, Users, X } from "lucide-react";
import { hotel, rooms } from "@/lib/hotel-data";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  // Form states
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [selectedRoom, setSelectedRoom] = useState(rooms[0].title);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [specialRequest, setSpecialRequest] = useState("");

  const activeRoomData = rooms.find(r => r.title === selectedRoom) || rooms[0];
  const roomPriceNum = parseInt(activeRoomData.price.replace(/[^\d]/g, ""), 10);

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const daysCount = calculateDays();
  const totalPrice = roomPriceNum * daysCount;

  const handleNext = () => {
    if (step === 1) {
      if (authMode === "login" && (!email || !password)) {
        alert("Please enter both email and password.");
        return;
      }
      if (authMode === "register" && (!name || !email || !phone || !password)) {
        alert("Please fill in all registration fields.");
        return;
      }
    }
    if (step === 2) {
      if (!checkIn || !checkOut) {
        alert("Please select check-in and check-out dates.");
        return;
      }
    }
    if (step === 3) {
      if (!name && authMode === "login") {
        alert("Please enter guest name.");
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleFinalConfirm = () => {
    const message = `🙏 नमस्ते Hotel B Anand!
मैंने वेबसाइट से एक कमरा बुक किया है। बुकिंग विवरण इस प्रकार है:

👤 अतिथि का नाम: ${name || email.split("@")[0]}
📱 पंजीकृत मोबाइल: ${phone || "N/A"}
📧 पंजीकृत ईमेल: ${email}
🛏️ कमरा प्रकार: ${selectedRoom}
📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}
☀️ कुल दिन: ${daysCount} दिन
👥 कुल मेहमान: ${guests}
💰 कुल भुगतान: ₹${totalPrice.toLocaleString()} (${activeRoomData.price} / रात)
✍️ विशेष अनुरोध: ${specialRequest || "None"}

कृपया मेरी बुकिंग को कन्फर्म करें। धन्यवाद!`;

    window.open(`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    setStep(5);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setEmail("");
    setPhone("");
    setName("");
    setPassword("");
    setCheckIn("");
    setCheckOut("");
    setGuests("2");
    setSpecialRequest("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
            onClick={handleResetAndClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white p-6 shadow-glow md:p-10 z-10 text-charcoal border border-champagne"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-ivory text-charcoal hover:bg-gold hover:text-white transition duration-200"
              aria-label="Close booking modal"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-8 pr-8">
              <p className="eyebrow">Reservations</p>
              <h2 className="mt-2 font-heading text-4xl text-green">Hotel Booking Process</h2>
              <p className="mt-1 font-devanagari text-base text-gold">बुकिंग प्रक्रिया</p>
            </div>

            {/* Step Indicator */}
            {step <= 4 && (
              <div className="mb-8 grid grid-cols-4 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-charcoal/40">
                <div className={`pb-1 border-b-2 transition ${step >= 1 ? "border-green text-green" : "border-gray-200"}`}>1. Login</div>
                <div className={`pb-1 border-b-2 transition ${step >= 2 ? "border-green text-green" : "border-gray-200"}`}>2. Stay</div>
                <div className={`pb-1 border-b-2 transition ${step >= 3 ? "border-green text-green" : "border-gray-200"}`}>3. Details</div>
                <div className={`pb-1 border-b-2 transition ${step >= 4 ? "border-green text-green" : "border-gray-200"}`}>4. Confirm</div>
              </div>
            )}

            {/* Step 1: Login / Register */}
            {step === 1 && (
              <div className="mx-auto max-w-md">
                <div className="mb-6 flex justify-center gap-4 border-b border-champagne pb-3">
                  <button
                    onClick={() => setAuthMode("login")}
                    className={`text-base font-bold transition ${authMode === "login" ? "text-green border-b-2 border-green pb-1" : "text-charcoal/40"}`}
                    type="button"
                  >
                    Sign In / लॉगिन
                  </button>
                  <button
                    onClick={() => setAuthMode("register")}
                    className={`text-base font-bold transition ${authMode === "register" ? "text-green border-b-2 border-green pb-1" : "text-charcoal/40"}`}
                    type="button"
                  >
                    Register / नया खाता
                  </button>
                </div>

                <div className="space-y-4">
                  {authMode === "register" && (
                    <label className="block">
                      <span className="block text-xs font-bold mb-1 text-charcoal/80">Full Name</span>
                      <div className="relative">
                        <User2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                        <input
                          type="text"
                          placeholder="Rahul Sharma"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none text-sm"
                        />
                      </div>
                    </label>
                  )}

                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80">Email Address</span>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none text-sm"
                      />
                    </div>
                  </label>

                  {authMode === "register" && (
                    <label className="block">
                      <span className="block text-xs font-bold mb-1 text-charcoal/80">Mobile Number</span>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gold">+91</span>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          value={phone}
                          maxLength={10}
                          onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                          className="w-full pl-14 pr-4 py-2.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none text-sm"
                        />
                      </div>
                    </label>
                  )}

                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80">Password</span>
                    <div className="relative">
                      <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none text-sm"
                      />
                    </div>
                  </label>

                  <button
                    onClick={handleNext}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green py-3 text-sm font-bold text-white transition hover:bg-gold"
                    type="button"
                  >
                    {authMode === "login" ? "Login & Proceed" : "Register & Proceed"} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Room Selection & Stay Dates */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80"><BedDouble className="inline h-3.5 w-3.5 mr-1 text-gold" /> Select Room</span>
                    <select
                      value={selectedRoom}
                      onChange={e => setSelectedRoom(e.target.value)}
                      className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm font-bold text-green outline-none focus:border-gold"
                    >
                      {rooms.map(room => (
                        <option key={room.title} value={room.title}>{room.title} ({room.price})</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80"><Users className="inline h-3.5 w-3.5 mr-1 text-gold" /> Total Guests</span>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm outline-none focus:border-gold"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80"><CalendarDays className="inline h-3.5 w-3.5 mr-1 text-gold" /> Check-in Date</span>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={e => setCheckIn(e.target.value)}
                      className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm outline-none focus:border-gold"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80"><CalendarDays className="inline h-3.5 w-3.5 mr-1 text-gold" /> Check-out Date</span>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={e => setCheckOut(e.target.value)}
                      className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm outline-none focus:border-gold"
                    />
                  </label>
                </div>

                {/* Room Preview */}
                <div className="rounded-xl border border-champagne bg-ivory p-4 flex gap-4 items-center">
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-charcoal">
                    <Image src={activeRoomData.image} alt={activeRoomData.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-green">{activeRoomData.title}</h3>
                    <p className="text-xs text-charcoal/70 line-clamp-2">{activeRoomData.details}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button onClick={handleBack} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-champagne py-3 text-sm font-bold text-charcoal/60 transition hover:bg-ivory" type="button">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button onClick={handleNext} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-3 text-sm font-bold text-white transition hover:bg-gold" type="button">
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Guest Information */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80">Guest Name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Rahul Sharma"
                      className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm outline-none focus:border-gold"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-xs font-bold mb-1 text-charcoal/80">Contact Phone</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="9876543210"
                      className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm outline-none focus:border-gold"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="block text-xs font-bold mb-1 text-charcoal/80">Special Requests</span>
                  <textarea
                    rows={3}
                    value={specialRequest}
                    onChange={e => setSpecialRequest(e.target.value)}
                    placeholder="Examples: early check-in, ground floor room..."
                    className="w-full p-3 rounded-xl border border-champagne bg-ivory text-sm outline-none focus:border-gold resize-none"
                  />
                </label>

                <div className="flex gap-4 pt-2">
                  <button onClick={handleBack} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-champagne py-3 text-sm font-bold text-charcoal/60 transition hover:bg-ivory" type="button">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button onClick={handleNext} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-3 text-sm font-bold text-white transition hover:bg-gold" type="button">
                    Review Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Booking Summary */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="rounded-xl border border-champagne bg-ivory p-5 space-y-3 text-sm">
                  <h3 className="text-lg font-bold text-green pb-1.5 border-b border-champagne/55">Booking Summary</h3>
                  
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Guest</span>
                      <span className="font-bold">{name || email.split("@")[0]}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Contact</span>
                      <span className="font-semibold text-xs">{phone ? `+91 ${phone}` : "N/A"} / {email}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Room Type</span>
                      <span className="font-bold text-green">{selectedRoom}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Guests</span>
                      <span className="font-bold">{guests} Guests</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Check-in</span>
                      <span className="font-bold">{checkIn}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Check-out</span>
                      <span className="font-bold">{checkOut}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-champagne/55 flex justify-between items-center">
                    <div>
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Fare</span>
                      <span className="text-xs font-semibold">{activeRoomData.price} × {daysCount} Days</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-charcoal/50 font-bold uppercase">Total Price</span>
                      <span className="text-2xl font-bold text-gold">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button onClick={handleBack} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-champagne py-3 text-sm font-bold text-charcoal/60 transition hover:bg-ivory" type="button">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button onClick={handleFinalConfirm} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-3 text-sm font-bold text-white transition hover:bg-gold" type="button">
                    Confirm & WhatsApp Book <CheckCircle2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Success Landing */}
            {step === 5 && (
              <div className="text-center py-6 space-y-4 max-w-sm mx-auto">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green/10 text-green">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-heading text-3xl text-green">Ticket Generated!</h3>
                <p className="font-devanagari text-lg text-gold">सफलतापूर्वक भेज दिया गया</p>
                <p className="text-xs leading-5 text-charcoal/70">
                  Your booking request was forwarded to WhatsApp. Our support officer will message you back instantly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetAndClose}
                    className="rounded-full bg-green px-6 py-2.5 text-sm font-bold text-white transition hover:bg-gold"
                    type="button"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
