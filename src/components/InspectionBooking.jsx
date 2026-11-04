import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  Send, 
  Sparkles, 
  Car, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function InspectionBooking({ initialEstate = '', onModalClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    estate: initialEstate || ALL_ESTATES[0].name,
    inspectionDay: 'Saturday Morning (10:00 AM)',
    pickupLocation: 'Danabid Office: Prymetyme Plaza, Aleshinloye Ibadan',
    attendees: '1 Person',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `*FREE SITE INSPECTION BOOKING - DANABID HOMES*\n` +
      `👤 Name: ${formData.fullName}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏡 Preferred Estate: ${formData.estate}\n` +
      `📅 Inspection Slot: ${formData.inspectionDay}\n` +
      `🚗 Departure / Pickup: ${formData.pickupLocation}\n` +
      `👥 Attendees: ${formData.attendees}\n` +
      `${formData.notes ? `📝 Note: ${formData.notes}\n` : ''}` +
      `Please confirm my seat reservation.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="inspection" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why Inspection Matters & Logistics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
              <Car className="w-4 h-4 text-blue-400" />
              <span>100% FREE WEEKLY SITE INSPECTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              See the Land Yourself Before Paying a Kobo.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Danabid Homes and Properties, transparency is our foundation. We provide <strong className="text-white">free executive inspection vehicles</strong> every Thursday and Saturday. Walk the grounds, see the beacons, inspect neighboring developments, and verify all titles.
            </p>

            {/* Inspection details cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white text-sm block">Standard Inspection Days</span>
                  <p className="text-slate-300 mt-0.5">Every Thursday & Saturday (10:00 AM & 1:00 PM).</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">Custom VIP weekday slots available upon advance request.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white text-sm block">Central Assembly / Pickup Point</span>
                  <p className="text-slate-300 mt-0.5">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white text-sm block">Direct Inspection Coordinators</span>
                  <div className="flex flex-wrap gap-2.5 mt-1 font-semibold text-blue-300">
                    <a href={`tel:${COMPANY_INFO.phone1}`} className="hover:underline">07047172000</a>
                    <span className="text-slate-600">•</span>
                    <a href={`tel:${COMPANY_INFO.phone2}`} className="hover:underline">07047002023</a>
                    <span className="text-slate-600">•</span>
                    <a href={`tel:${COMPANY_INFO.phone3}`} className="hover:underline">09047797352</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Free site visits carry zero obligation to buy. Your satisfaction is our priority.</span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inspection Slot Pre-Reserved!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our inspection team has received your request for <strong className="text-cyan-400">{formData.estate}</strong>.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-left max-w-md mx-auto space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Day/Time:</span>
                      <span className="font-semibold text-white">{formData.inspectionDay}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Departure:</span>
                      <span className="font-semibold text-slate-200">{formData.pickupLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Phone:</span>
                      <span className="font-semibold text-white">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm Now on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="py-3 px-5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Book Another Estate
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span>Schedule Your Free Site Inspection</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Departures from Prymetyme Plaza, Aleshinloye Ibadan. Free transport provided.
                    </p>
                  </div>

                  {/* Estate Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Select Estate / Farmland to Inspect *
                    </label>
                    <select
                      value={formData.estate}
                      onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                      required
                      className="w-full py-3 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      {ALL_ESTATES.map((est) => (
                        <option key={est.id} value={est.name} className="bg-slate-900 text-white">
                          {est.name} — {est.location} ({est.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chief Adebayo Adeleke"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 08012345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Inspection Day & Pickup */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Inspection Day
                      </label>
                      <select
                        value={formData.inspectionDay}
                        onChange={(e) => setFormData({ ...formData, inspectionDay: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="Saturday Morning (10:00 AM)">This Saturday Morning (10:00 AM)</option>
                        <option value="Saturday Afternoon (1:00 PM)">This Saturday Afternoon (1:00 PM)</option>
                        <option value="Thursday Morning (10:00 AM)">This Thursday Morning (10:00 AM)</option>
                        <option value="Thursday Afternoon (1:00 PM)">This Thursday Afternoon (1:00 PM)</option>
                        <option value="VIP Custom Weekday">VIP Custom Weekday (Contact Me)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Departure / Meeting Option
                      </label>
                      <select
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="Danabid Office: Prymetyme Plaza, Aleshinloye Ibadan">Danabid Office: Aleshinloye, Ibadan</option>
                        <option value="Meet Directly at Estate Site">Meet Directly at Estate Site</option>
                        <option value="Lagos Meeting Point">Lagos Meeting Point</option>
                        <option value="Virtual Live Video Tour (Diaspora)">Virtual Live Video Tour (Diaspora)</option>
                      </select>
                    </div>
                  </div>

                  {/* Attendees & Additional Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Number of Persons
                      </label>
                      <select
                        value={formData.attendees}
                        onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="Just Myself (1 Person)">Just Myself (1)</option>
                        <option value="2 Persons (With Spouse/Partner)">2 Persons</option>
                        <option value="3-5 Persons (Family/Investors)">3 - 5 Persons</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Interested Units (Plots or Acres?)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 plots for building or 5 acres farmland"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-950 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Reserve Free Inspection Ride</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Zero payment required. We will call you to confirm your seat.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
