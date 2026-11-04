import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, X, Sparkles, Gift } from 'lucide-react';
import { COMPANY_INFO } from '../data/estatesData';

export default function FloatingActionButtons() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getWhatsAppLink = (number, text) => {
    return `https://wa.me/${number.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      
      {/* Expanded Quick Options Menu */}
      {menuOpen && (
        <div className="p-3.5 bg-white border border-gray-300 rounded-2xl shadow-xl space-y-2 mb-1 w-64 animate-in fade-in slide-in-from-bottom-2 text-[13px]">
          <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 font-bold text-gray-900">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Danabid Quick Contact</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1 rounded text-gray-400 hover:text-black cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* WhatsApp Main */}
          <a
            href={getWhatsAppLink(COMPANY_INFO.whatsappNumber1, "Hello Danabid Homes! I want to inquire about available land in plots/acres.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <div>
              <span className="block font-semibold">WhatsApp Desk</span>
              <span className="text-[11px] text-emerald-700">07047172000</span>
            </div>
          </a>

          {/* WhatsApp Promo */}
          <a
            href={getWhatsAppLink(COMPANY_INFO.whatsappNumber2, "Hello Danabid Homes! I want to claim the promotion offers.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-medium transition-colors"
          >
            <Gift className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <span className="block font-semibold">Promos & Farmland</span>
              <span className="text-[11px] text-amber-700">07047002023</span>
            </div>
          </a>

          {/* Call Grid */}
          <div className="pt-1 grid grid-cols-2 gap-1 text-center text-[12px]">
            <a
              href={`tel:${COMPANY_INFO.phone1}`}
              className="py-1.5 px-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold flex items-center justify-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-700" />
              <span>Call Line 1</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone3}`}
              className="py-1.5 px-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold flex items-center justify-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-700" />
              <span>Call Line 2</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-12 h-12 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
        aria-label="Contact Danabid"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </button>

    </div>
  );
}
