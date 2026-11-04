import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, MessageCircle, CheckCircle, Clock } from 'lucide-react';
import { COMPANY_INFO, ALL_ESTATES } from '../data/estatesData';

export default function ContactPage() {
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
      `Hello Danabid Homes! My name is ${inquiry.name} (${inquiry.phone}).\nI am inquiring about: ${inquiry.estate}.\nMessage: ${inquiry.message || 'Please send me the brochure, payment options, and inspection schedule.'}`
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
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5 mb-8">
          <h1 className="text-[20px] font-bold text-gray-900">
            Contact Danabid Homes & Properties
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            Visit our corporate office at Prymetyme Plaza in Aleshinloye Ibadan, call our active inspection hotlines, or chat directly on WhatsApp.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="md:col-span-5 border border-gray-200 rounded-xl p-5 bg-gray-50 space-y-4">
            <div>
              <h2 className="text-[16px] font-bold text-gray-900">Corporate Head Office</h2>
              <div className="flex items-start gap-2.5 mt-2 text-[13px] text-gray-700">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold">Prymetyme Plaza</strong>
                  <span>Plot 3 Block VIII, Oba Aleshinloye Phase 11, Jericho, Frin Rd, Aleshinloye Ibadan, Oyo State, Nigeria.</span>
                </div>
              </div>
            </div>

            {/* Hotlines */}
            <div>
              <h3 className="text-[13px] font-bold uppercase text-gray-500 mb-1.5">Official Hotlines</h3>
              <div className="space-y-1.5 text-[13px]">
                <a href={`tel:${COMPANY_INFO.phone1}`} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-200 hover:border-emerald-600 text-gray-900 font-medium">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>07047172000 (Hotline 1)</span>
                </a>
                <a href={`tel:${COMPANY_INFO.phone2}`} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-200 hover:border-emerald-600 text-gray-900 font-medium">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>07047002023 (Hotline 2)</span>
                </a>
                <a href={`tel:${COMPANY_INFO.phone3}`} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-200 hover:border-emerald-600 text-gray-900 font-medium">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>09047797352 (Hotline 3)</span>
                </a>
              </div>
            </div>

            {/* Email & Social */}
            <div className="space-y-2 text-[13px] text-gray-700 pt-1 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-700 hover:underline break-all font-medium">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Instagram: <strong>{COMPANY_INFO.socialMedia.handle}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>Mon – Sat: 8:30 AM – 5:30 PM</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="md:col-span-7 border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-xs">
            {sent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-gray-900">Inquiry Received!</h3>
                <p className="text-[14px] text-gray-600 max-w-sm mx-auto">
                  Thank you, <strong>{inquiry.name}</strong>. A Danabid property consultant will reach out via call/WhatsApp promptly with documents and inspection arrangements.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <a
                    href={getEmailMailto()}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-gray-300 text-gray-700 text-[13px] font-medium"
                  >
                    <span>Send Email Copy</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <h3 className="text-[16px] font-bold text-gray-900">Send A Direct Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
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
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="client@gmail.com"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                      Estate of Interest
                    </label>
                    <select
                      value={inquiry.estate}
                      onChange={(e) => setInquiry({ ...inquiry, estate: e.target.value })}
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                    >
                      {ALL_ESTATES.map((e) => (
                        <option key={e.id} value={e.name}>
                          {e.name} ({e.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                    Your Requirements (Plots, Acres, Inquiries)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify number of plots/acres, desired payment plan, or inspection date..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Online Inquiry</span>
                  </button>
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 border border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-bold text-[13px] rounded-lg flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
