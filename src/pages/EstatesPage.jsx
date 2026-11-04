import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Search, 
  ArrowUpDown, 
  Eye, 
  Calendar, 
  MessageCircle, 
  FileCheck, 
  Gift, 
  CheckCircle2 
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';
import PropertyModal from '../components/PropertyModal';

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
  }),
};

export default function EstatesPage() {
  const [searchParams] = useSearchParams();
  const initialParamState = searchParams.get('state') || 'all';
  const initialParamType = searchParams.get('type') || 'all';

  const [selectedState, setSelectedState] = useState(initialParamState);
  const [selectedCategory, setSelectedCategory] = useState(initialParamType);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedEstateId, setSelectedEstateId] = useState(null);

  const filteredEstates = useMemo(() => {
    return ALL_ESTATES.filter((estate) => {
      if (selectedState !== 'all' && estate.state !== selectedState) return false;
      if (selectedCategory === 'Residential' && !estate.type.includes('Residential')) return false;
      if (selectedCategory === 'Farmland' && !estate.type.includes('Farmland')) return false;
      if (selectedCategory === 'Promo' && !estate.isRamadanPromo) return false;
      if (selectedCategory === 'Commercial' && !estate.type.includes('Commercial')) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = estate.name.toLowerCase().includes(query);
        const matchLocation = estate.location.toLowerCase().includes(query);
        const matchState = estate.state.toLowerCase().includes(query);
        const matchLandmarks = estate.landmarks?.some((l) => l.toLowerCase().includes(query));
        if (!matchName && !matchLocation && !matchState && !matchLandmarks) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'promo') return (b.isRamadanPromo ? 1 : 0) - (a.isRamadanPromo ? 1 : 0);
      return 0;
    });
  }, [selectedState, selectedCategory, searchQuery, sortBy]);

  const getWhatsAppInquiry = (estate) => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! I would like more information and inspection dates for: ${estate.name} in ${estate.location} (${estate.priceFormatted}).`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-5 mb-6">
          <h1 className="text-[20px] font-bold text-gray-900">
            Available Land & Estates Portfolio
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            Browse our full catalog of 16 verified estates across Lagos, Ibadan, Fiditi, Isara, and Mowe. Plots and acres available.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by estate, city (e.g. Moniya, Epe, Isara, Fiditi, Akanran, Ikorodu)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="sm:col-span-4 flex items-center gap-1.5">
              <ArrowUpDown className="w-4 h-4 text-gray-500 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2 px-2.5 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600 cursor-pointer"
              >
                <option value="default">Sort: Default</option>
                <option value="promo">Sort: Promo First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200 text-[12px]">
            <span className="font-semibold text-gray-700">Filter Location:</span>
            {['all', 'Oyo State', 'Lagos State', 'Ogun State'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedState === st
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {st === 'all' ? 'All Locations' : st}
              </button>
            ))}

            <span className="font-semibold text-gray-700 ml-2">Type:</span>
            {['all', 'Residential', 'Farmland', 'Promo'].map((tp) => (
              <button
                key={tp}
                onClick={() => setSelectedCategory(tp)}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedCategory === tp
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tp === 'all' ? 'All Types' : tp}
              </button>
            ))}
          </div>
        </div>

        {/* Estates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          animate="visible"
        >
          {filteredEstates.map((estate, i) => (
            <motion.div
              key={estate.id}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 8px 28px 0 rgba(0,0,0,0.09)' }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img src={estate.image} alt={estate.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <span className="px-2 py-0.5 rounded bg-white/95 text-gray-900 text-[11px] font-bold border border-gray-200">
                      {estate.state}
                    </span>
                    {estate.isRamadanPromo && (
                      <span className="px-2 py-0.5 rounded bg-amber-500 text-white text-[10px] font-bold">
                        Promo Active
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-[16px] font-bold text-gray-900">{estate.name}</h3>
                  <div className="flex items-start gap-1 text-[12px] text-gray-600">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{estate.location}</span>
                  </div>

                  <p className="text-[13px] text-gray-600 line-clamp-2">
                    {estate.promoDetails || estate.description}
                  </p>

                  <div className="pt-1 text-[12px] text-gray-500">
                    <strong>Title:</strong> {estate.title || 'Registered Survey & Deed'}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-gray-100 space-y-2">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[11px] text-gray-500 block">Outright Price</span>
                    <span className="text-[16px] font-extrabold text-emerald-700">{estate.priceFormatted}</span>
                  </div>
                  {estate.commercialPriceFormatted && (
                    <span className="text-[11px] font-semibold text-gray-700">
                      Comm: {estate.commercialPriceFormatted}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setSelectedEstateId(estate.id)}
                    className="py-1.5 px-2 rounded border border-gray-300 hover:bg-gray-50 text-[12px] font-semibold text-gray-800 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <a
                    href={getWhatsAppInquiry(estate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-2 rounded bg-emerald-700 hover:bg-emerald-800 text-white text-[12px] font-bold flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Property Modal */}
      {selectedEstateId && (
        <PropertyModal
          estateId={selectedEstateId}
          onClose={() => setSelectedEstateId(null)}
          onBookInspection={() => {
            setSelectedEstateId(null);
            window.location.href = '/inspection';
          }}
        />
      )}
    </div>
  );
}
