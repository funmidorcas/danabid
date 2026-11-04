import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, MessageCircle, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function InspectionPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    estate: ALL_ESTATES[0].name,
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
      `🚗 Departure: ${formData.pickupLocation}\n` +
      `👥 Attendees: ${formData.attendees}\n` +
      `${formData.notes ? `📝 Note: ${formData.notes}\n` : ''}` +
      `Please confirm my seat reservation.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-bold mb-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            <span>100% FREE WEEKLY SITE VISITS</span>
          </div>
          <h1 className="text-[20px] font-bold text-gray-900">
            Book a Free Site Inspection Ride
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            See the land yourself before paying a kobo. Free transport departs every Thursday and Saturday from our head office in Aleshinloye, Ibadan.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Details & Schedule (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 space-y-3">
              <h2 className="text-[16px] font-bold text-gray-900">Inspection Logistics</h2>

              <div className="space-y-3 text-[13px] text-gray-700">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Standard Days & Times:</strong>
                    <span>Every Thursday & Saturday (10:00 AM & 1:00 PM). VIP custom tours upon request.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Central Departure Point:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Inspection Dispatch Hotlines:</strong>
                    <div className="space-y-0.5 mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phone1}`} className="block text-emerald-700 hover:underline">{COMPANY_INFO.phone1}</a>
                      <a href={`tel:${COMPANY_INFO.phone2}`} className="block text-emerald-700 hover:underline">{COMPANY_INFO.phone2}</a>
                      <a href={`tel:${COMPANY_INFO.phone3}`} className="block text-emerald-700 hover:underline">{COMPANY_INFO.phone3}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-[13px] text-emerald-900 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>Free site visits carry zero obligation to buy. We believe in total transparency.</span>
            </div>
          </div>

          {/* Booking Form (7 cols) */}
          <div className="md:col-span-7 border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-xs">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-gray-900">Inspection Slot Pre-Reserved!</h3>
                <p className="text-[14px] text-gray-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our logistics officer will contact you shortly to confirm your seat reservation.
                </p>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-[13px] text-left max-w-sm mx-auto space-y-1">
                  <div><strong>Estate:</strong> {formData.estate}</div>
                  <div><strong>Slot:</strong> {formData.inspectionDay}</div>
                  <div><strong>Pickup:</strong> {formData.pickupLocation}</div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm on WhatsApp Instantly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <h3 className="text-[16px] font-bold text-gray-900">Reserve Your Inspection Seat</h3>

                <div>
                  <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                    Estate to Inspect *
                  </label>
                  <select
                    value={formData.estate}
                    onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                  >
                    {ALL_ESTATES.map((est) => (
                      <option key={est.id} value={est.name}>
                        {est.name} — {est.location} ({est.priceFormatted})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 08012345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Preferred Day
                    </label>
                    <select
                      value={formData.inspectionDay}
                      onChange={(e) => setFormData({ ...formData, inspectionDay: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Saturday Morning (10:00 AM)">This Saturday Morning (10:00 AM)</option>
                      <option value="Saturday Afternoon (1:00 PM)">This Saturday Afternoon (1:00 PM)</option>
                      <option value="Thursday Morning (10:00 AM)">This Thursday Morning (10:00 AM)</option>
                      <option value="Thursday Afternoon (1:00 PM)">This Thursday Afternoon (1:00 PM)</option>
                      <option value="VIP Custom Weekday">VIP Custom Weekday</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Departure Point
                    </label>
                    <select
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Danabid Office: Prymetyme Plaza, Aleshinloye Ibadan">Danabid Office: Aleshinloye Ibadan</option>
                      <option value="Meet Directly at Site">Meet Directly at Site</option>
                      <option value="Lagos Meeting Point">Lagos Meeting Point</option>
                      <option value="Virtual Tour (Diaspora)">Virtual Tour (Diaspora)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                    Units of Interest (Plots or Acres)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1 plot residential or 2 acres farmland"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Reserve Free Seat</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
