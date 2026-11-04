import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, MapPin, CheckCircle2, MessageCircle, Calendar, Zap, Sparkles } from 'lucide-react';
import { RAMADAN_PROMOS, COMPANY_INFO } from '../data/estatesData';

export default function PromosPage() {
  const getWhatsAppPromoUrl = (promo) => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! I want to claim the PROMO on ${promo.name} (${promo.promoHighlight}). Please send me full documents and inspection arrangements.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-bold mb-2">
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            <span>SEASONAL & RAMADAN PROMO OFFERS</span>
          </div>
          <h1 className="text-[20px] font-bold text-gray-900">
            Exclusive Land Promotions & Bonus Plot Allocations
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            “Ramadan is a season of blessings, let’s help you own a property with ease.” Enjoy reduced rates, free corner pieces, and extra complimentary plots.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RAMADAN_PROMOS.map((promo) => (
            <div
              key={promo.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img src={promo.image} alt={promo.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-emerald-700 text-white text-[11px] font-bold">
                    {promo.tag}
                  </span>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white text-gray-900 text-[11px] font-bold border border-gray-200">
                    {promo.state}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-[18px] font-bold text-gray-900">{promo.name}</h2>
                      <div className="flex items-center gap-1 text-[12px] text-gray-600 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{promo.location}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[11px] text-gray-400 line-through block">{promo.originalPriceFormatted}</span>
                      <span className="text-[18px] font-black text-emerald-700">{promo.priceFormatted}</span>
                    </div>
                  </div>

                  {/* Promo Highlights Box */}
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-[13px] text-amber-900">
                    <div className="font-bold flex items-center gap-1 mb-0.5 text-amber-800">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Promotion Incentive:</span>
                    </div>
                    <p className="leading-snug">{promo.promoHighlight}</p>
                  </div>

                  {promo.landmarks && (
                    <div className="text-[12px] text-gray-600">
                      <strong>Landmark:</strong> {promo.landmarks}
                    </div>
                  )}

                  {promo.endorsement && (
                    <div className="text-[12px] text-emerald-800 font-semibold">
                      ⭐ {promo.endorsement}
                    </div>
                  )}

                  {/* Bullet features */}
                  <div className="space-y-1 pt-1 border-t border-gray-100">
                    {promo.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[12px] text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppPromoUrl(promo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Claim Promo on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Inspection Notice */}
        <div className="mt-8 p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px]">
          <div>
            <span className="font-bold text-gray-900 block">Want to inspect these promo estates in person?</span>
            <span className="text-gray-600">Free transport leaves every Thursday & Saturday from Prymetyme Plaza, Aleshinloye Ibadan.</span>
          </div>
          <Link
            to="/inspection"
            className="px-3.5 py-1.5 rounded-md bg-emerald-700 text-white font-bold text-[12px] shrink-0"
          >
            Reserve Seat
          </Link>
        </div>

      </div>
    </div>
  );
}
