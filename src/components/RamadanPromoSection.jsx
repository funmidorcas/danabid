import React from 'react';
import { 
  Moon, 
  Gift, 
  Sparkles, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  Award,
  Zap
} from 'lucide-react';
import { RAMADAN_PROMOS, COMPANY_INFO } from '../data/estatesData';

export default function RamadanPromoSection({ onSelectEstate, onBookInspection }) {
  const getWhatsAppLink = (estateName, promoOffer) => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! I want to claim the PROMO OFFER on ${estateName} (${promoOffer}). Please send me full layout documents and book my free inspection seat.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="ramadan-promo" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold mb-4">
            <Moon className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>SPECIAL PROMOTION OFFERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ramadan & Seasonal Promotions. <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-cyan-300 bg-clip-text text-transparent">
              Own Genuine Land With Total Ease.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Enjoy exclusive seasonal discounts, free corner piece allocations, and bonus land plots across Ketu Epe, Moniya, Ikorodu, and Ido Ibadan.
          </p>
        </div>

        {/* 4 Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RAMADAN_PROMOS.map((promo) => (
            <div
              key={promo.id}
              className="group relative rounded-3xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-400/60 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Image & Badges */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Promo Badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md flex items-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>{promo.tag}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-950/80 text-cyan-300 border border-blue-500/30 backdrop-blur-md">
                    {promo.state}
                  </span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-slate-300 block font-medium">Promo Rate</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-300">
                      {promo.priceFormatted}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 line-through bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                    {promo.originalPriceFormatted}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {promo.name}
                  </h3>

                  <div className="flex items-start gap-1.5 text-xs text-slate-300 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{promo.location}</span>
                  </div>

                  {/* Highlight Deal Box */}
                  <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                    <div className="font-bold text-amber-300 flex items-center gap-1 mb-1">
                      <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>Promo Incentive:</span>
                    </div>
                    <p className="font-medium leading-relaxed">{promo.promoHighlight}</p>
                  </div>

                  {/* Landmark */}
                  <div className="mt-2.5 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Landmark:</strong> {promo.landmarks}
                  </div>

                  {promo.endorsement && (
                    <div className="mt-2 text-[11px] text-amber-300 font-semibold">
                      ⭐ {promo.endorsement}
                    </div>
                  )}
                </div>

                {/* Features list */}
                <div className="space-y-1 border-t border-slate-800 pt-3">
                  {promo.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-2 space-y-2">
                  <a
                    href={getWhatsAppLink(promo.name, promo.promoHighlight)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Claim on WhatsApp</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectEstate(promo.id)}
                      className="py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 text-center transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={onBookInspection}
                      className="py-2 px-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-bold text-amber-300 text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Free Inspection Transport Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Inspection Departures Every Thursday & Saturday!</span>
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Free executive transport departing directly from Prymetyme Plaza, Oba Aleshinloye, Jericho Road, Ibadan. Walk the land before paying a kobo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onBookInspection}
              className="py-3 px-6 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Inspection Seat</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone1}`}
              className="py-3 px-5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              07047172000
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
