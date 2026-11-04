import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle, 
  MessageCircle, 
  Send,
  Building2,
  Car
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function InspectionModal({ isOpen, onClose, selectedEstateName = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    estate: selectedEstateName || ALL_ESTATES[0].name,
    inspectionDay: 'Saturday Morning (10:00 AM)',
    pickupPoint: 'Danabid Office: Prymetyme Plaza, Aleshinloye Ibadan',
    attendees: '1 Person',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync when prop changes
  React.useEffect(() => {
    if (selectedEstateName) {
      setFormData((prev) => ({ ...prev, estate: selectedEstateName }));
    }
  }, [selectedEstateName]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `*SITE INSPECTION RESERVATION - DANABID HOMES*\n` +
      `👤 Name: ${formData.fullName}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏡 Preferred Estate: ${formData.estate}\n` +
      `📅 Slot: ${formData.inspectionDay}\n` +
      `🚗 Departure: ${formData.pickupPoint}\n` +
      `👥 Attendees: ${formData.attendees}\n` +
      `${formData.notes ? `📝 Unit Preference: ${formData.notes}\n` : ''}` +
      `Please confirm my reservation.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Book Free Site Inspection</h3>
              <p className="text-xs text-slate-400">Every Thursday & Saturday • Zero Charge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Inspection Slot Pre-Booked!</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                Thank you <strong className="text-white">{formData.fullName}</strong>. Our logistics officer will call you to confirm departure arrangements.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Estate:</span>
                  <span className="font-semibold text-cyan-300">{formData.estate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Inspection Slot:</span>
                  <span className="font-semibold text-white">{formData.inspectionDay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Pickup:</span>
                  <span className="font-semibold text-slate-300 truncate max-w-[200px]">{formData.pickupPoint}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp Instantly</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-2.5 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Estate to Inspect *
                </label>
                <select
                  value={formData.estate}
                  onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                  required
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  {ALL_ESTATES.map((e) => (
                    <option key={e.id} value={e.name} className="bg-slate-900 text-white">
                      {e.name} — {e.location} ({e.priceFormatted})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08012345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Inspection Slot
                  </label>
                  <select
                    value={formData.inspectionDay}
                    onChange={(e) => setFormData({ ...formData, inspectionDay: e.target.value })}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Saturday Morning (10:00 AM)">This Saturday (10:00 AM)</option>
                    <option value="Saturday Afternoon (1:00 PM)">This Saturday (1:00 PM)</option>
                    <option value="Thursday Morning (10:00 AM)">This Thursday (10:00 AM)</option>
                    <option value="Thursday Afternoon (1:00 PM)">This Thursday (1:00 PM)</option>
                    <option value="Custom Weekday">Custom VIP Weekday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Pickup Location
                  </label>
                  <select
                    value={formData.pickupPoint}
                    onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Danabid Office: Prymetyme Plaza, Aleshinloye Ibadan">Danabid Office: Aleshinloye, Ibadan</option>
                    <option value="Meet Directly at Site">Meet Directly at Site</option>
                    <option value="Lagos Meeting Point">Lagos Meeting Point</option>
                    <option value="Virtual Live Video Tour">Virtual Live Tour (Diaspora)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Plot / Acre Preference
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 plot residential or 2 acres farmland"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Reserve Free Seat</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No payment required • Departures from Aleshinloye, Ibadan
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
