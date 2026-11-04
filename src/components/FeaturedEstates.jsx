import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Gift, 
  CheckCircle, 
  Eye, 
  Calendar,
  MessageCircle,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function FeaturedEstates({ onSelectEstate, onBookInspection }) {
  // Prime estates to feature
  const featured = ALL_ESTATES.filter((e) => 
    [
      'joys-court-garden', 
      'queen-estate', 
      'favours-court-phase-2', 
      'honor-estate-phase-2', 
      'danabid-farmland-akanran', 
      'victory-estate-phase-3'
    ].includes(e.id)
  );

  return (
    <section id="featured" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HAND-PICKED PRIME PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Estates & Prime Corridors
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl">
              Verified titles, 100% dry topography, direct highway and institutional proximities with instant physical allocation.
            </p>
          </div>

          <a
            href="#all-estates"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm"
          >
            <span>Explore All 16 Properties</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((estate) => (
            <div
              key={estate.id}
              className="group rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image & Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={estate.image}
                  alt={estate.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  {estate.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-black bg-blue-600 text-white flex items-center gap-1 shadow">
                      <span>{estate.badge}</span>
                    </span>
                  )}

                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-950/90 text-white border border-slate-700">
                    {estate.state}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] text-slate-300 block font-medium">Starting Price</span>
                    <span className="text-2xl font-black text-cyan-300">
                      {estate.priceFormatted}
                    </span>
                  </div>
                  {estate.acrePriceFormatted && (
                    <span className="text-[11px] text-amber-300 bg-slate-950/90 px-2 py-0.5 rounded border border-amber-500/20">
                      Acres Available
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {estate.name}
                  </h3>
                  
                  <div className="flex items-start gap-1.5 text-xs text-slate-300 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{estate.location}</span>
                  </div>

                  {/* Highlights Box */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="font-bold text-cyan-400 block mb-1">Key Landmark:</span>
                    <p className="line-clamp-2 text-slate-300">
                      {estate.promoDetails || (estate.landmarks && estate.landmarks[0])}
                    </p>
                  </div>

                  {/* Facilities summary */}
                  {estate.facilities && (
                    <div className="mt-3 text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-300">Includes: </span>
                      <span>Gated Entrance, Security CCTV, Good Roads, Street Lights & Electricity</span>
                    </div>
                  )}

                  {estate.endorsement && (
                    <div className="mt-2 text-[11px] text-amber-300 font-semibold">
                      ⭐ {estate.endorsement}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectEstate(estate.id)}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Specifications</span>
                    </button>
                    <button
                      onClick={() => onBookInspection(estate.name)}
                      className="py-2.5 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Free Inspect</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
