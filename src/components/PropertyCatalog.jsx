import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  Sparkles, 
  ArrowUpDown, 
  MessageCircle, 
  Eye, 
  Calendar,
  Layers,
  CheckCircle2,
  FileCheck,
  Gift
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function PropertyCatalog({ 
  onSelectEstate, 
  onBookInspection, 
  filterState = 'all', 
  filterType = 'all' 
}) {
  const [selectedState, setSelectedState] = useState(filterState);
  const [selectedCategory, setSelectedCategory] = useState(filterType);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // React to prop changes if search was triggered from Hero
  React.useEffect(() => {
    if (filterState !== 'all') setSelectedState(filterState);
    if (filterType !== 'all') setSelectedCategory(filterType);
  }, [filterState, filterType]);

  const filteredEstates = useMemo(() => {
    return ALL_ESTATES.filter((estate) => {
      // State filter
      if (selectedState !== 'all' && estate.state !== selectedState) {
        return false;
      }
      // Category filter
      if (selectedCategory === 'Residential' && !estate.type.includes('Residential')) {
        return false;
      }
      if (selectedCategory === 'Farmland' && !estate.type.includes('Farmland')) {
        return false;
      }
      if (selectedCategory === 'Promo' && !estate.isRamadanPromo) {
        return false;
      }
      if (selectedCategory === 'Commercial' && !estate.type.includes('Commercial')) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = estate.name.toLowerCase().includes(query);
        const matchLocation = estate.location.toLowerCase().includes(query);
        const matchState = estate.state.toLowerCase().includes(query);
        const matchLandmarks = estate.landmarks?.some((l) => l.toLowerCase().includes(query));
        if (!matchName && !matchLocation && !matchState && !matchLandmarks) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'promo') return (b.isRamadanPromo ? 1 : 0) - (a.isRamadanPromo ? 1 : 0);
      return 0; // default order
    });
  }, [selectedState, selectedCategory, searchQuery, sortBy]);

  const statesCount = useMemo(() => {
    return {
      all: ALL_ESTATES.length,
      oyo: ALL_ESTATES.filter((e) => e.state === 'Oyo State').length,
      lagos: ALL_ESTATES.filter((e) => e.state === 'Lagos State').length,
      ogun: ALL_ESTATES.filter((e) => e.state === 'Ogun State').length,
    };
  }, []);

  const getWhatsAppInquiry = (estate) => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! I would like to get more information, pricing, and book an inspection for: ${estate.name} located at ${estate.location} (${estate.priceFormatted}).`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="all-estates" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>OFFICIAL PROPERTY PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore All Available Lands & Estates
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Plots and acres available across Lagos, Ibadan, Fiditi, Isara, and Mowe. Filter by state, category, or search your preferred landmark.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 font-bold">
              Showing {filteredEstates.length} of {ALL_ESTATES.length} Properties
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg space-y-4 mb-8">
          
          {/* Top Row: Search and Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search estate by name, location (e.g. Fiditi, Isara, Moniya, Epe, Akanran, Ikorodu)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="sm:col-span-4 flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="default">Sort: Default Order</option>
                <option value="promo">Sort: Promotions First</option>
                <option value="price-low">Sort: Price (Low to High)</option>
                <option value="price-high">Sort: Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: State & Category Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
            {/* State filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs no-scrollbar">
              <button
                onClick={() => setSelectedState('all')}
                className={`py-1.5 px-3 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedState === 'all'
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                All Locations ({statesCount.all})
              </button>
              <button
                onClick={() => setSelectedState('Oyo State')}
                className={`py-1.5 px-3 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedState === 'Oyo State'
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                Ibadan & Fiditi ({statesCount.oyo})
              </button>
              <button
                onClick={() => setSelectedState('Lagos State')}
                className={`py-1.5 px-3 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedState === 'Lagos State'
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                Lagos State ({statesCount.lagos})
              </button>
              <button
                onClick={() => setSelectedState('Ogun State')}
                className={`py-1.5 px-3 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedState === 'Ogun State'
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                Ogun State ({statesCount.ogun})
              </button>
            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs no-scrollbar">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`py-1.5 px-2.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'all' ? 'bg-slate-700 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('Residential')}
                className={`py-1.5 px-2.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'Residential' ? 'bg-slate-700 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setSelectedCategory('Farmland')}
                className={`py-1.5 px-2.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'Farmland' ? 'bg-emerald-600 text-white font-bold' : 'text-emerald-400 hover:text-emerald-300'
                }`}
              >
                Farmland & Acres 🌾
              </button>
              <button
                onClick={() => setSelectedCategory('Promo')}
                className={`py-1.5 px-2.5 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'Promo' ? 'bg-amber-500 text-slate-950 shadow' : 'text-amber-400 hover:text-amber-300'
                }`}
              >
                Promotions 🔥
              </button>
            </div>
          </div>

        </div>

        {/* Estates Grid */}
        {filteredEstates.length === 0 ? (
          <div className="text-center py-16 rounded-3xl bg-slate-900/50 border border-slate-800">
            <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No properties matched your search filters</h3>
            <p className="text-sm text-slate-400 mt-1">Try resetting your filters or search keywords.</p>
            <button
              onClick={() => {
                setSelectedState('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEstates.map((estate) => (
              <div
                key={estate.id}
                className="group rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Image & Badges */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={estate.image}
                    alt={estate.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      {estate.isRamadanPromo && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-500 text-slate-950 shadow flex items-center gap-1">
                          <Gift className="w-3 h-3" />
                          <span>PROMO ACTIVE</span>
                        </span>
                      )}
                      {estate.isNewAlert && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-rose-500 text-white shadow flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>NEW LAUNCH</span>
                        </span>
                      )}
                      {!estate.isRamadanPromo && !estate.isNewAlert && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-900/90 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                          {estate.badge || estate.type}
                        </span>
                      )}
                    </div>

                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-950/90 text-white border border-slate-700 backdrop-blur-md">
                      {estate.state}
                    </span>
                  </div>

                  {/* Price Banner on Bottom of Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] text-slate-300 block font-medium">Outright Price</span>
                      <span className="text-xl sm:text-2xl font-black text-cyan-300">
                        {estate.priceFormatted}
                      </span>
                      {estate.commercialPriceFormatted && (
                        <span className="text-[10px] block font-bold text-amber-300">
                          Comm: {estate.commercialPriceFormatted}
                        </span>
                      )}
                    </div>

                    {estate.acrePriceFormatted && (
                      <span className="text-[10px] sm:text-[11px] text-amber-300 bg-slate-950/90 px-2 py-0.5 rounded-md border border-amber-500/30">
                        Acres Available
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {estate.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs text-slate-300 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{estate.location}</span>
                    </div>

                    {/* Highlights */}
                    {estate.promoDetails && (
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                        <span className="text-cyan-400 font-semibold block text-[11px] mb-0.5">
                          {estate.isRamadanPromo ? 'Promotion Details:' : 'Key Highlight:'}
                        </span>
                        <p className="line-clamp-2">{estate.promoDetails}</p>
                      </div>
                    )}

                    {/* Neighborhood Landmark */}
                    {estate.landmarks && estate.landmarks.length > 0 && (
                      <div className="mt-2.5 text-xs text-slate-400">
                        <span className="text-slate-300 font-semibold">Landmark: </span>
                        <span className="line-clamp-1">{estate.landmarks[0]}</span>
                      </div>
                    )}

                    {/* Title status */}
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <FileCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{estate.title || 'Registered Survey & Deed'}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectEstate(estate.id)}
                        className="py-2.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Specifications</span>
                      </button>

                      <button
                        onClick={onBookInspection}
                        className="py-2.5 px-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Free Inspect</span>
                      </button>
                    </div>

                    <a
                      href={getWhatsAppInquiry(estate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
