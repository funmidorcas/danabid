import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Globe, 
  Sparkles,
  Building,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, ALL_ESTATES } from '../data/estatesData';

export default function ContactSection() {
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    estate: ALL_ESTATES[0].name,
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! My name is ${inquiry.name} (${inquiry.phone}).\nI am inquiring about: ${inquiry.estate}.\nMessage: ${inquiry.message || 'Please send me the price brochure, payment plans, and inspection schedule.'}`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  const getEmailMailto = () => {
    const subject = encodeURIComponent(`Property Inquiry: ${inquiry.estate} - ${inquiry.name}`);
    const body = encodeURIComponent(
      `Name: ${inquiry.name}\nPhone: ${inquiry.phone}\nEstate: ${inquiry.estate}\n\nMessage:\n${inquiry.message}`
    );
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900/90 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>OFFICIAL CONTACT & INSPECTION DESK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect With Danabid Homes & Properties
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Visit our corporate office at Prymetyme Plaza in Aleshinloye Ibadan, call our active inspection hotlines, or chat directly with our client support on WhatsApp.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office & Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Head Office Address</h3>
                <div className="mt-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white block font-semibold mb-0.5">Prymetyme Plaza</strong>
                    <span>Plot 3 Block VIII, Oba Aleshinloye Phase 11, Jericho, Frin Rd, Aleshinloye Ibadan, Oyo State, Nigeria.</span>
                  </div>
                </div>
              </div>

              {/* Official Sales Hotlines */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Official Call & Inspection Hotlines
                </h4>
                <div className="space-y-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone1}`}
                    className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 flex items-center justify-between text-xs sm:text-sm text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">Hotline 1</span>
                        <span>07047172000</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg">
                      Call Now
                    </span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone2}`}
                    className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between text-xs sm:text-sm text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">Hotline 2</span>
                        <span>07047002023</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg">
                      Call Now
                    </span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone3}`}
                    className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 flex items-center justify-between text-xs sm:text-sm text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">Hotline 3</span>
                        <span>09047797352</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                      Call Now
                    </span>
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Official Corporate Email
                </h4>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 flex items-center gap-3 text-xs sm:text-sm text-slate-200 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Email Address</span>
                    <span className="text-cyan-300 break-all">{COMPANY_INFO.email}</span>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Official Social Media
                </h4>
                <a 
                  href={COMPANY_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300 hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>Follow <strong className="text-white">{COMPANY_INFO.socialMedia.handle}</strong></span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Quick Hours */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Office Hours: Monday – Saturday (8:30 AM – 5:30 PM). Free bus inspections every Thursday & Saturday.</span>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            {sent ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/40 shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Transmitted!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{inquiry.name}</strong>. A Danabid property consultant will contact you via phone/WhatsApp promptly with layout plans, title copies, and inspection details.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <a
                    href={getEmailMailto()}
                    className="py-3 px-5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email App</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-xl font-bold text-white">Send A Direct Property Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Inquire about plot availability, promo pricing, or request a verified title document review.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Adeleke"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 08031234567"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. client@gmail.com"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Estate of Interest
                    </label>
                    <select
                      value={inquiry.estate}
                      onChange={(e) => setInquiry({ ...inquiry, estate: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      {ALL_ESTATES.map((e) => (
                        <option key={e.id} value={e.name} className="bg-slate-900 text-white">
                          {e.name} ({e.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Requirements / Plot Count / Farmland Acres
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you need: e.g. 2 plots for residential building, 5 acres of Danabid Farmland, or inquiry on the Ramadan promo..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-950 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Online Inquiry</span>
                  </button>

                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl font-semibold text-sm bg-slate-900 border border-blue-500/40 text-blue-400 hover:bg-slate-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
