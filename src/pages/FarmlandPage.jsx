import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, MapPin, CheckCircle2, Phone, MessageCircle, Globe, Calendar, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/estatesData';

export default function FarmlandPage() {
  const whatsappAkanran = `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${encodeURIComponent(
    "Hello Danabid Homes! I want to subscribe for Danabid Farmland in Akanran, Ibadan (₦500k Plot / ₦3M Acre with Free Cultivation & Palm Trees). Please send payment details and inspection dates."
  )}`;

  const whatsappUKDiaspora = `https://wa.me/447404851234?text=${encodeURIComponent(
    "Hello Yinka TNT! I am an investor inquiring about Danabid Farmland Akanran, Ibadan (₦500k Plot / ₦3M Acre). Please share documentation and diaspora payment guidelines."
  )}`;

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-bold mb-2">
            <Sprout className="w-3.5 h-3.5 text-emerald-700" />
            <span>AGRICULTURAL WEALTH & FOOD SECURITY</span>
          </div>
          <h1 className="text-[20px] font-bold text-gray-900">
            Danabid Farmland & Agricultural Acres — Akanran, Ibadan
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            “Where Land Grows Money Before It Grows in Value.” Secure fertile arable land with free cultivation support and complimentary palm trees.
          </p>
        </div>

        {/* 2-Column Farmland Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Main Showcase (7 cols) */}
          <div className="md:col-span-7 border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-xs space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Flagship Agricultural Hub
                </span>
                <span className="text-[11px] font-bold text-gray-700">Instant Allocation ✅</span>
              </div>

              <h2 className="text-[18px] font-bold text-gray-900">Danabid Farmland — Akanran</h2>
              <div className="flex items-center gap-1.5 text-[12px] text-gray-600 mt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>15 Minutes from Ilaji Hotel & Sports Resort (Fast-Developing Area)</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <div>
                <span className="text-[11px] font-bold uppercase text-gray-500 block">1 Single Plot</span>
                <span className="text-[18px] font-extrabold text-gray-900">₦500,000</span>
                <span className="text-[11px] text-gray-600 block">600 Square Meters</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-gray-500 block">1 Full Acre (6 Plots)</span>
                <span className="text-[18px] font-extrabold text-emerald-700">₦3,000,000</span>
                <span className="text-[11px] text-gray-600 block">Approx. 4,000 sqm</span>
              </div>
            </div>

            {/* What you get */}
            <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-[13px] space-y-1.5">
              <span className="font-bold text-emerald-900 block">What You Get With Each Allocation:</span>
              <div className="flex items-center gap-2 text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Instant Land Allocation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Free Deed of Agreement</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Free Cultivation & Palm Trees</span>
              </div>
            </div>

            {/* Land use options & crops */}
            <div className="space-y-2 text-[13px]">
              <span className="font-bold text-gray-900 block">Crops & Farming Uses:</span>
              <p className="text-gray-600">
                Suitable for Irrigation Farming, Crop Farming (Yam, Cassava, Maize, Tomatoes, Peppers, Plantain), 
                Animal Farming (Poultry, Piggery, Goat), and Land Banking for future residential housing.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={whatsappAkanran}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Subscribe on WhatsApp</span>
              </a>
              <Link
                to="/inspection"
                className="py-2.5 px-3 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-800 text-[13px] font-semibold text-center"
              >
                Book Inspection
              </Link>
            </div>
          </div>

          {/* Side Column: Phase 2 & Contacts (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Phase 2 Card */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-xs space-y-3">
              <span className="text-[11px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded inline-block">
                Phase 2 Expansion
              </span>
              <h3 className="text-[16px] font-bold text-gray-900">
                Danabid Estate & Farm Land Phase 2
              </h3>
              <p className="text-[12px] text-gray-600">
                Ayegun - Olomi Road, Olode Ibadan (just 3 minutes drive from the main road).
              </p>
              <p className="text-[13px] text-gray-700 leading-normal">
                Triple advantage: Residential Living, Farmland, and Land Banking. Includes full estate facilities: perimeter fencing, security post, good road network, street lights, and drainage.
              </p>
              <Link
                to="/inspection"
                className="inline-block text-[13px] font-bold text-emerald-700 hover:underline"
              >
                Book Phase 2 Inspection →
              </Link>
            </div>

            {/* Diaspora & Dedicated Contacts */}
            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-[13px] space-y-2.5">
              <h3 className="text-[15px] font-bold text-gray-900">Farmland Coordinators</h3>
              
              <div className="space-y-1 text-gray-700">
                <span className="font-semibold block text-gray-900">Nigeria Farmland Desk:</span>
                <a href="tel:+2347044433316" className="block text-emerald-700 hover:underline font-medium">+234 704 443 3316</a>
                <a href="tel:+2347047172000" className="block text-emerald-700 hover:underline font-medium">+234 704 717 2000</a>
              </div>

              <div className="pt-2 border-t border-gray-200 space-y-1 text-gray-700">
                <span className="font-semibold block text-gray-900">UK / Diaspora Desk (Yinka TNT):</span>
                <a href={whatsappUKDiaspora} className="text-emerald-700 hover:underline font-medium flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>+44 7404 851234</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
