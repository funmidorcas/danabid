import React from 'react';
import { 
  Sprout, 
  TreePine, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  DollarSign, 
  Layers, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/estatesData';

export default function DanabidFarmlandSpotlight({ onBookInspection }) {
  const whatsappAkanran = `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${encodeURIComponent(
    "Hello Danabid Homes! I want to subscribe for Danabid Farmland in Akanran, Ibadan (1 Plot ₦500k / 1 Acre ₦3M with Free Cultivation & Palm Trees). Please send payment details and inspection dates."
  )}`;

  const whatsappUKDiaspora = `https://wa.me/447404851234?text=${encodeURIComponent(
    "Hello Yinka TNT! I am an investor inquiring about Danabid Farmland Akanran, Ibadan (₦500k Plot / ₦3M Acre). Please share documentation and diaspora payment guidelines."
  )}`;

  return (
    <section id="farmland-spotlight" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>AGRICULTURAL WEALTH & FOOD SECURITY INITIATIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Danabid Farmland & Agricultural Acres
          </h2>

          <p className="mt-4 text-lg sm:text-xl font-bold text-amber-300">
            “Where Land Grows Money Before It Grows in Value”
          </p>
          <p className="text-sm text-slate-300 mt-1 font-medium">
            Secure Your Land. Cultivate Wealth.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Showcase: Akanran Farmland (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900 border-2 border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div>
              {/* Badge & Landmark */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider">
                  Flagship Agricultural Hub
                </span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Instant Allocation ✅
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Danabid Farmland — Akanran, Ibadan
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15 Minutes from Ilaji Hotel & Sports Resort (Fast-Developing Area)</span>
              </div>

              {/* Price Banner */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs text-slate-400 uppercase font-bold block">1 Single Plot</span>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">₦500,000</div>
                  <span className="text-[11px] text-emerald-400 font-semibold">600 Square Meters</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-xs text-emerald-300 uppercase font-bold block">1 Full Acre (6 Plots)</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">₦3,000,000</div>
                  <span className="text-[11px] text-amber-200 font-semibold">Approx. 4,000 sqm</span>
                </div>
              </div>

              {/* What You Get Box */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Complimentary Investor Benefits:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant Land Allocation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Deed of Agreement</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Cultivation & Palm Trees</span>
                  </div>
                </div>
              </div>

              {/* Crop & Farming Packages */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Crops & Produce Supported:
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {['Palm Trees', 'Yam', 'Cassava', 'Maize', 'Tomatoes & Peppers', 'Exotic Fruits', 'Poultry & Animal Farming', 'Land Banking'].map((crop, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-medium">
                      🌾 {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs & Contacts */}
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappAkanran}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Subscribe on WhatsApp (₦500k / ₦3M)</span>
                </a>

                <button
                  onClick={() => onBookInspection('Danabid Farmland (Akanran)')}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Free Site Visit</span>
                </button>
              </div>

              {/* Dedicated Contacts Line */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex flex-wrap items-center justify-between gap-2">
                <span className="text-slate-400">Direct Farmland Coordinator:</span>
                <div className="flex items-center gap-3 font-semibold text-emerald-400">
                  <a href="tel:+2347044433316" className="hover:underline">Danabid: +234 704 443 3316</a>
                  <span className="text-slate-600">•</span>
                  <a href={whatsappUKDiaspora} className="text-amber-300 hover:underline flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Yinka TNT (UK): +44 7404 851234</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary Showcase: Phase 2 (Ayegun-Olomi Road, Olode Ibadan - 5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold">
                  Phase 2 Expansion
                </span>
                <span className="text-xs font-bold text-slate-300">
                  3 Mins from Main Road
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Danabid Estate & Farm Land Phase 2
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-xs mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Ayegun - Olomi Road, Olode, Ibadan</span>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-blue-400 font-bold block mb-1">Triple Advantage:</span>
                <div className="flex gap-2">
                  <span className="bg-slate-900 px-2 py-0.5 rounded text-white font-medium">Residential</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded text-white font-medium">Farmland</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded text-white font-medium">Land Banking</span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Just 3 minutes drive off the paved main road. Positioned for clients who want fertile agricultural land today that will transform into prime high-value residential housing over the next 3 to 5 years.
              </p>

              {/* 10 Estate Facilities */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Full Estate Facilities Included:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Gated Entrance & Post</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Perimeter Fencing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Surveillance CCTV</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Good Road Network</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Street Lights & Drainage</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Electricity Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Parks & Green Playgrounds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Event Spaces & Shopping</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <button
                onClick={() => onBookInspection('Danabid Farmland Phase 2 (Ayegun-Olomi)')}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Inspection for Phase 2</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
