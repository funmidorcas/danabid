import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  TrendingUp, 
  Train, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  MessageCircle,
  Shield,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/estatesData';

export default function NewEstateAlert({ onSelectEstate, onBookInspection }) {
  const whatsappPhase3 = `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${encodeURIComponent(
    "Hello Danabid Homes! I want to inspect and subscribe for Victory Estate Phase 3 in Alabata Moniya (₦1.2M Launch Promo + Free Corner Piece). Please share payment details and next inspection date."
  )}`;

  const whatsappPhase1 = `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${encodeURIComponent(
    "Hello Danabid Homes! I am interested in Victory Estate Phase 1 in Alabata Moniya (₦2 Million mature estate). Please share title documents and inspection schedule."
  )}`;

  return (
    <section id="new-estate" className="py-16 sm:py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MONIYA GROWTH CORRIDOR SPOTLIGHT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Victory Estate Series • Alabata Moniya, Ibadan
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Moniya is Ibadan's prime railway corridor, driven by the Lagos-Ibadan Train Terminal, Inland Dry Port, and Academic Institutions.
          </p>
        </div>

        {/* 2-Column Comparison for Victory Phase 3 & Phase 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Victory Phase 3 (NEW LAUNCH - 7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 border-2 border-blue-500/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
                <span>Launch Promo • ₦1.2M</span>
              </span>
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                FREE Corner Piece Included
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Victory Estate Phase 3
              </h3>
              <div className="flex items-center gap-2 text-slate-300 text-sm mt-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Opposite Imperial College, Alabata Moniya, Ibadan</span>
              </div>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Directly opposite Imperial College and within 5 minutes of the modern Lagos-Ibadan Standard Gauge Railway Terminal. Exceptional capital growth prospects projected to appreciate quickly.
              </p>

              {/* Key Location Highlights Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Opposite Imperial College</span>
                    <span className="text-slate-400">High student & academic demand</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
                  <Train className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">5 Mins to Train Terminal</span>
                    <span className="text-slate-400">Direct transit to Lagos and Ogun</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">₦1,200,000 Promo Rate</span>
                    <span className="text-slate-400">Plots & Acre allocations available</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
                  <Shield className="w-5 h-5 text-teal-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Registered Survey & Deed</span>
                    <span className="text-slate-400">Instant physical beacon pegging</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappPhase3}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-950 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Claim Phase 3 at ₦1.2M on WhatsApp</span>
              </a>
              <button
                onClick={onBookInspection}
                className="py-3 px-4 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Book Moniya Inspection</span>
              </button>
            </div>
          </div>

          {/* Victory Phase 1 (ESTABLISHED - 5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs">
                  Mature & Developing Phase
                </span>
                <span className="text-xl font-extrabold text-blue-400">
                  ₦2,000,000
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Victory Estate Phase 1
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-xs mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Alabata Moniya, Ibadan</span>
              </div>

              <p className="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                The benchmark property of our Moniya community. Several plot owners have commenced building duplexes and bungalows. Firm dry table land, cleared perimeter, ready for immediate construction.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Price: ₦2,000,000 per 600sqm plot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Acre options available for commercial/residential blocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Immediate physical beacon allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>10 mins drive to University of Ibadan axis</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 space-y-2">
              <a
                href={whatsappPhase1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Victory Phase 1 (₦2M)</span>
              </a>
              <button
                onClick={() => onSelectEstate('victory-estate-phase-1')}
                className="w-full py-2 px-3 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                View Full Specifications →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
