"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BedDouble, CalendarDays, CheckCircle2, KeyRound, Mail, User2, Users } from "lucide-react";
import { hotel, rooms } from "@/lib/hotel-data";

export default function BookNowPage() {
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

  return (
    <main className="min-h-screen bg-ivory text-charcoal py-24 px-4">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-6 shadow-glow md:p-12">
        
        {/* Back Link to Home */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-green hover:text-gold transition">
            <ArrowLeft className="h-4 w-4" /> Back to Home Page
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow">Reservations</p>
          <h1 className="mt-3 font-heading text-5xl text-green">Room Booking Process</h1>
          <p className="mt-2 font-devanagari text-lg text-gold">होटल बुकिंग प्रक्रिया</p>
        </div>

        {/* Step Indicator */}
        {step <= 4 && (
          <div className="mb-12 grid grid-cols-4 gap-2 text-center text-xs font-bold uppercase tracking-wider text-charcoal/40">
            <div className={`pb-2 border-b-4 transition ${step >= 1 ? "border-green text-green" : "border-gray-200"}`}>1. Auth / Login</div>
            <div className={`pb-2 border-b-4 transition ${step >= 2 ? "border-green text-green" : "border-gray-200"}`}>2. Dates & Room</div>
            <div className={`pb-2 border-b-4 transition ${step >= 3 ? "border-green text-green" : "border-gray-200"}`}>3. Guest Info</div>
            <div className={`pb-2 border-b-4 transition ${step >= 4 ? "border-green text-green" : "border-gray-200"}`}>4. Confirmation</div>
          </div>
        )}

        {/* Step 1: Login / Register */}
        {step === 1 && (
          <div className="mx-auto max-w-md">
            <div className="mb-8 flex justify-center gap-4 border-b border-champagne pb-4">
              <button 
                onClick={() => setAuthMode("login")} 
                className={`text-lg font-bold transition ${authMode === "login" ? "text-green border-b-2 border-green pb-2" : "text-charcoal/40"}`}
              >
                Sign In / लॉगिन
              </button>
              <button 
                onClick={() => setAuthMode("register")} 
                className={`text-lg font-bold transition ${authMode === "register" ? "text-green border-b-2 border-green pb-2" : "text-charcoal/40"}`}
              >
                Register / नया खाता
              </button>
            </div>

            <div className="space-y-4">
              {authMode === "register" && (
                <label className="block">
                  <span className="block text-sm font-bold mb-1 text-charcoal/80">Full Name / पूरा नाम</span>
                  <div className="relative">
                    <User2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                    <input 
                      type="text" 
                      placeholder="Rahul Sharma" 
                      value={name} 
                      onChange={e => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none"
                    />
                  </div>
                </label>
              )}

              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80">Email Address / ईमेल</span>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none"
                  />
                </div>
              </label>

              {authMode === "register" && (
                <label className="block">
                  <span className="block text-sm font-bold mb-1 text-charcoal/80">Mobile Number / मोबाइल नंबर</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gold">+91</span>
                    <input 
                      type="tel" 
                      placeholder="9876543210" 
                      value={phone} 
                      maxLength={10}
                      onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none"
                    />
                  </div>
                </label>
              )}

              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80">Password / पासवर्ड</span>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-champagne bg-ivory focus:border-gold outline-none"
                  />
                </div>
              </label>

              <button 
                onClick={handleNext} 
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green py-4 font-bold text-white transition hover:bg-gold"
              >
                {authMode === "login" ? "Login & Proceed" : "Register & Proceed"} <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Room Selection & Stay Dates */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80"><BedDouble className="inline h-4 w-4 mr-1 text-gold" /> Select Room / कमरा चुनें</span>
                <select 
                  value={selectedRoom} 
                  onChange={e => setSelectedRoom(e.target.value)}
                  className="w-full p-4 rounded-xl border border-champagne bg-ivory font-bold text-green outline-none focus:border-gold"
                >
                  {rooms.map(room => (
                    <option key={room.title} value={room.title}>{room.title} ({room.price}/night)</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80"><Users className="inline h-4 w-4 mr-1 text-gold" /> Total Guests / मेहमान संख्या</span>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  value={guests} 
                  onChange={e => setGuests(e.target.value)}
                  className="w-full p-4 rounded-xl border border-champagne bg-ivory outline-none focus:border-gold"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80"><CalendarDays className="inline h-4 w-4 mr-1 text-gold" /> Check-in Date / आगमन तिथि</span>
                <input 
                  type="date" 
                  value={checkIn} 
                  onChange={e => setCheckIn(e.target.value)}
                  className="w-full p-4 rounded-xl border border-champagne bg-ivory outline-none focus:border-gold"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80"><CalendarDays className="inline h-4 w-4 mr-1 text-gold" /> Check-out Date / प्रस्थान तिथि</span>
                <input 
                  type="date" 
                  value={checkOut} 
                  min={checkIn}
                  onChange={e => setCheckOut(e.target.value)}
                  className="w-full p-4 rounded-xl border border-champagne bg-ivory outline-none focus:border-gold"
                />
              </label>
            </div>

            {/* Room Preview Card */}
            <div className="rounded-2xl border border-champagne bg-ivory p-5 flex flex-col md:flex-row gap-5 items-center">
              <div className="relative h-32 w-full md:w-48 overflow-hidden rounded-xl bg-charcoal">
                <Image src={activeRoomData.image} alt={activeRoomData.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green">{activeRoomData.title}</h3>
                <p className="text-sm font-semibold text-gold mb-2">{activeRoomData.hi}</p>
                <p className="text-sm text-charcoal/70">{activeRoomData.details}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleBack} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-champagne py-4 font-bold text-charcoal/60 transition hover:bg-ivory">
                <ArrowLeft className="h-5 w-5" /> Back
              </button>
              <button onClick={handleNext} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-4 font-bold text-white transition hover:bg-gold">
                Continue <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Guest Information */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80">Primary Guest Name / अतिथि नाम</span>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  placeholder="Rahul Sharma"
                  className="w-full p-4 rounded-xl border border-champagne bg-ivory outline-none focus:border-gold"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-bold mb-1 text-charcoal/80">Contact Phone / संपर्क नंबर</span>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="9876543210"
                  className="w-full p-4 rounded-xl border border-champagne bg-ivory outline-none focus:border-gold"
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-sm font-bold mb-1 text-charcoal/80">Special Requests / विशेष अनुरोध</span>
              <textarea 
                rows={4}
                value={specialRequest} 
                onChange={e => setSpecialRequest(e.target.value)}
                placeholder="Examples: early check-in, pure veg dinner arrangement, ground floor room..."
                className="w-full p-4 rounded-xl border border-champagne bg-ivory outline-none focus:border-gold resize-none"
              />
            </label>

            <div className="flex gap-4">
              <button onClick={handleBack} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-champagne py-4 font-bold text-charcoal/60 transition hover:bg-ivory">
                <ArrowLeft className="h-5 w-5" /> Back
              </button>
              <button onClick={handleNext} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-4 font-bold text-white transition hover:bg-gold">
                Review Details <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Booking Summary & Final Confirmation */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-champagne bg-ivory p-6 space-y-4">
              <h3 className="text-2xl font-bold text-green pb-2 border-b border-champagne/55">Booking Summary / बुकिंग सारांश</h3>
              
              <div className="grid gap-4 sm:grid-cols-2 text-sm">
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Guest Name</span>
                  <span className="text-base font-bold">{name || email.split("@")[0]}</span>
                </div>
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Contact Info</span>
                  <span className="text-base font-semibold">{phone ? `+91 ${phone}` : "N/A"} / {email}</span>
                </div>
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Room Selected</span>
                  <span className="text-base font-bold text-green">{selectedRoom}</span>
                </div>
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Guests Count</span>
                  <span className="text-base font-bold">{guests} Guests</span>
                </div>
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Check-in</span>
                  <span className="text-base font-bold">{checkIn}</span>
                </div>
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Check-out</span>
                  <span className="text-base font-bold">{checkOut}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-champagne/55 flex justify-between items-center">
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase">Fare Breakdown</span>
                  <span className="text-sm font-semibold">{activeRoomData.price} × {daysCount} Days</span>
                </div>
                <div className="text-right">
                  <span className="block text-charcoal/50 font-bold uppercase">Total Price</span>
                  <span className="text-3xl font-bold text-gold">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gold/10 p-4 border border-gold/20 text-sm text-gold-dark font-medium">
              💡 <strong>Note:</strong> Clicking confirm will compose a structured WhatsApp reservation ticket to complete authentication and secure payment options directly.
            </div>

            <div className="flex gap-4">
              <button onClick={handleBack} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-champagne py-4 font-bold text-charcoal/60 transition hover:bg-ivory">
                <ArrowLeft className="h-5 w-5" /> Back
              </button>
              <button onClick={handleFinalConfirm} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-4 font-bold text-white transition hover:bg-gold">
                Confirm & WhatsApp Book <CheckCircle2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Success Landing */}
        {step === 5 && (
          <div className="text-center py-12 space-y-6 max-w-md mx-auto">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-green/10 text-green">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h2 className="font-heading text-4xl text-green">Ticket Generated!</h2>
            <p className="font-devanagari text-xl text-gold">टिकट सफलतापूर्वक भेज दिया गया है</p>
            <p className="text-sm leading-6 text-charcoal/70">
              We have forwarded your booking summary to WhatsApp. Our front desk officer will call or reply instantly with your confirmation receipt and digital payment link.
            </p>
            <div className="pt-6">
              <Link href="/" className="inline-flex rounded-full bg-green px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold">
                Return to Homepage
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
