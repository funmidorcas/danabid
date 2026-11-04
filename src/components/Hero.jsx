import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  PhoneCall, 
  Calendar,
  Gift,
  Building,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/estatesData';

export default function Hero({ onSearch, onBookInspection }) {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({ state: selectedState, type: selectedType });
    const target = document.getElementById('all-estates');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Cool subtle radial background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-bold text-white tracking-wide">THIS NEW MONTH: Own Your Dream Home & Farmland</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-cyan-300 font-semibold">Lagos • Ibadan • Ogun State</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.16]">
            Where Smart Investors Find Peace of Mind. <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
              Buy Verified Land in Plots & Acres.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            From prime residential communities in <strong className="text-white">Ketu Epe, Moniya & Fiditi</strong> to high-yield agricultural acres in <strong className="text-white">Akanran & Isara</strong>. Instant allocation, zero stories, and 100% genuine legal documentation.
          </p>

          {/* Key Hot Deals Ticker */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 p-2 px-4 rounded-2xl bg-blue-900/20 border border-blue-500/30 text-blue-200 text-xs sm:text-sm">
            <Gift className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300">Live Promotions:</span>
            <span>Honor Estate ₦700k (Bonus Plots) • Queen Estate ₦2.5M • Danabid Farmland ₦500k/plot • Favour's Court Epe ₦2.5M</span>
            <a href="#ramadan-promo" className="text-cyan-300 font-bold hover:underline ml-1">
              View All Offers →
            </a>
          </div>
        </div>

        {/* Interactive Search Bar Widget */}
        <div className="mt-10 max-w-4xl mx-auto">
          <form 
            onSubmit={handleSearchSubmit}
            className="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-blue-900/50 shadow-2xl backdrop-blur-xl grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
          >
            {/* State Filter */}
            <div className="sm:col-span-4 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Preferred Location
              </label>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="bg-transparent text-white text-sm font-semibold w-full focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-slate-900 text-white">All Locations</option>
                  <option value="Oyo State" className="bg-slate-900 text-white">Ibadan & Fiditi (Oyo State)</option>
                  <option value="Lagos State" className="bg-slate-900 text-white">Epe & Ikorodu (Lagos State)</option>
                  <option value="Ogun State" className="bg-slate-900 text-white">Isara & Mowe (Ogun State)</option>
                </select>
              </div>
            </div>

            {/* Land Category Filter */}
            <div className="sm:col-span-4 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Property Category
              </label>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-transparent text-white text-sm font-semibold w-full focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-slate-900 text-white">All Land Types</option>
                  <option value="Residential" className="bg-slate-900 text-white">Residential Estates</option>
                  <option value="Farmland" className="bg-slate-900 text-white">Agricultural Farmland & Acres</option>
                  <option value="Promo" className="bg-slate-900 text-white">Discounted Promo Deals</option>
                  <option value="Commercial" className="bg-slate-900 text-white">Commercial Plots</option>
                </select>
              </div>
            </div>

            {/* Search Submit */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-950 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Properties</span>
              </button>
            </div>
          </form>

          {/* Quick Filter Tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Quick Links:</span>
            <a href="#farmland-spotlight" className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors">
              🌾 Danabid Farmland (Akanran ₦500k)
            </a>
            <a href="#featured" className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-800 transition-colors">
              🏛️ Joy's Court (Fiditi Expressway)
            </a>
            <a href="#all-estates" className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 transition-colors">
              🏰 Queen Estate Isara (₦2.5M)
            </a>
            <a href="#ramadan-promo" className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 transition-colors">
              🌙 Honor Estate Ido (₦700k)
            </a>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">16+</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Verified Prime Estates</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Epe, Moniya, Fiditi & Isara</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">100% Free</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Weekly Inspection Buses</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Thursdays & Saturdays</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">Plots & Acres</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Residential & Agriculture</div>
            <div className="text-[11px] text-slate-400 mt-0.5">From 500sqm to 50+ Acres</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Zero Wahala</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Instant Physical Allocation</div>
            <div className="text-[11px] text-slate-400 mt-0.5">No Omo-Onile Harassment</div>
          </div>
        </div>

      </div>
    </section>
  );
}
