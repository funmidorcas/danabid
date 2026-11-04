import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  CheckCircle2, 
  FileCheck, 
  Layers, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Share2, 
  Gift 
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function PropertyModal({ estateId, onClose, onBookInspection }) {
  const estate = ALL_ESTATES.find((e) => e.id === estateId);
  const [activeImage, setActiveImage] = useState(0);

  if (!estate) return null;

  const images = estate.gallery || [estate.image];

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! I am reviewing ${estate.name} in ${estate.location} (${estate.priceFormatted}). Please share the official subscription form and schedule my free physical inspection.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  const facilitiesList = estate.facilities || estate.amenities || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-gray-100 text-gray-800">
                {estate.state}
              </span>
              {estate.isRamadanPromo && (
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                  Promo Active
                </span>
              )}
            </div>
            <h2 className="text-[18px] font-bold text-gray-900 mt-1">
              {estate.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 text-[14px]">
          
          {/* Main Visual */}
          <div className="space-y-2">
            <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={images[activeImage]}
                alt={estate.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/95 p-2.5 rounded-lg border border-gray-200 text-[13px]">
                <div>
                  <span className="text-[11px] text-gray-500 block">Outright Plot Price</span>
                  <span className="text-[18px] font-black text-emerald-700">
                    {estate.priceFormatted}
                  </span>
                </div>
                {estate.commercialPriceFormatted && (
                  <div className="text-right">
                    <span className="text-[11px] text-gray-500 block">Commercial</span>
                    <span className="font-bold text-gray-900">{estate.commercialPriceFormatted}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer ${
                      activeImage === i ? 'border-emerald-600' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location Bar */}
          <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2 text-[13px]">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase block">Exact Location</span>
              <span className="font-semibold text-gray-900">{estate.location}</span>
            </div>
          </div>

          {/* Promo Highlight */}
          {estate.promoDetails && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[13px] text-amber-900">
              <strong className="block text-amber-800 font-bold mb-0.5">Special Promo Incentive:</strong>
              <p>{estate.promoDetails}</p>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-[14px] font-bold text-gray-900 uppercase tracking-wider mb-1">
              Estate Overview
            </h3>
            <p className="text-[14px] text-gray-700 leading-normal">
              {estate.description}
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[13px]">
            <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50">
              <span className="text-[11px] text-gray-500 block uppercase font-bold">Title</span>
              <span className="font-semibold text-gray-900 line-clamp-2">{estate.title || 'Registered Survey & Deed'}</span>
            </div>
            <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50">
              <span className="text-[11px] text-gray-500 block uppercase font-bold">Topography</span>
              <span className="font-semibold text-emerald-700">{estate.topography || '100% Dry Table Land'}</span>
            </div>
            <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50">
              <span className="text-[11px] text-gray-500 block uppercase font-bold">Plot Size</span>
              <span className="font-semibold text-gray-900">{estate.plotSize || '600 sqm & Acres'}</span>
            </div>
          </div>

          {/* Facilities */}
          {facilitiesList.length > 0 && (
            <div>
              <h3 className="text-[14px] font-bold text-gray-900 uppercase tracking-wider mb-2">
                Estate Facilities Included
              </h3>
              <div className="grid grid-cols-2 gap-1.5 text-[12px] text-gray-700">
                {facilitiesList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer CTAs */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between gap-3 sticky bottom-0 z-10">
          <button
            onClick={() => {
              onClose();
              onBookInspection();
            }}
            className="py-2.5 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-[13px] font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-gray-700" />
            <span>Book Free Inspection</span>
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[13px] font-bold flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
}
