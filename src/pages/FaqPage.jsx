import React, { useState } from 'react';
import { ChevronDown, BookOpen, Layers } from 'lucide-react';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How many plots make 1 Acre, and what are the standard plot dimensions?',
      a: 'In Nigerian real estate, 1 Acre equals exactly 6 Standard Plots (approximately 4,000 square meters). A standard residential plot measures 600 square meters (approx. 60ft x 120ft or 18m x 36m), while some urban layouts measure 500 square meters. When you acquire 1 Acre from Danabid Homes, you receive all 6 contiguous plots with a single unified survey plan.'
    },
    {
      q: 'What title documents will I receive upon completing payment?',
      a: 'Upon completion of payment, you receive: (1) Official Receipt of Payment, (2) Contract of Sale / Allocation Letter, (3) Registered Perimeter & Plot Survey Plan bearing your name and specific beacon coordinates, (4) Executed Deed of Assignment drafted by our legal counsel conveying total ownership to you.'
    },
    {
      q: 'Are the site inspections genuinely 100% free?',
      a: 'Yes, completely free! Every Thursday and Saturday at 10:00 AM and 1:00 PM, executive Danabid transport vehicles depart from our office at Prymetyme Plaza, Aleshinloye Ibadan. You are not charged a single kobo for fuel or transport, and there is zero obligation to purchase on the spot.'
    },
    {
      q: 'What are the current promotion offers available?',
      a: 'Current offers include: (1) Honor Estate in Ido-Eleyele-Ologuneru, Ibadan at ₦700,000 per plot — Buy 2 to 4 plots and get an Extra Half Plot FREE; Buy 5+ plots and get an Extra 1 Full Plot FREE! (2) Daniel’s Court in Isawo Agric, Ikorodu, Lagos at ₦5 Million with a FREE Corner Piece! (3) Victory Estate Phase 3 in Alabata Moniya at ₦1.2 Million with a FREE Corner Piece! (4) Favour\'s Court Phase 2 in Ketu Epe at ₦2.5 Million (buy 3+ at ₦2.0M/plot).'
    },
    {
      q: 'Can I purchase agricultural land in acres for crop or animal farming?',
      a: 'Yes! We have Danabid Farmland located in Akanran, Ibadan (15 minutes from Ilaji Hotel & Resort). We sell from individual plots (₦500k) up to full acres (₦3M) and multiple acres (5, 10, 20, 50+ acres) with complimentary cultivation support and free palm trees.'
    },
    {
      q: 'Can Nigerians in the Diaspora purchase without traveling back home?',
      a: 'Yes. We frequently work with clients living in the UK, US, Canada, and Europe. We provide live HD video walk-through tours via WhatsApp or Zoom, share coordinate verification for independent surveyor checks, provide corporate account details, and send hard-copy executed deeds and surveys via DHL or to your appointed representative.'
    },
    {
      q: 'Do you offer flexible installment payment plans?',
      a: 'Yes. You can initiate allocation with an initial deposit (typically 25% to 30%) and spread the remaining balance over 3 to 6 months with convenient and transparent terms.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>INVESTOR GUIDE & FAQS</span>
          </div>
          <h1 className="text-[20px] font-bold text-gray-900">
            Frequently Asked Questions & Land Buying Guide
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            Learn about land metrics, documentation verification, and the purchase process at Danabid Homes.
          </p>
        </div>

        {/* Land Metrics Infobox */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-center">
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50">
            <span className="text-[11px] font-bold uppercase text-gray-500 block">1 Standard Plot</span>
            <span className="text-[18px] font-extrabold text-gray-900">600 sqm</span>
            <span className="text-[12px] text-gray-500 block">60ft × 120ft (Residential)</span>
          </div>

          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50">
            <span className="text-[11px] font-bold uppercase text-gray-500 block">1 Full Acre</span>
            <span className="text-[18px] font-extrabold text-emerald-700">6 Plots</span>
            <span className="text-[12px] text-gray-500 block">Approx. 4,000 sqm (Bulk)</span>
          </div>

          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50">
            <span className="text-[11px] font-bold uppercase text-gray-500 block">1 Hectare</span>
            <span className="text-[18px] font-extrabold text-gray-900">15 Plots</span>
            <span className="text-[12px] text-gray-500 block">10,000 sqm (2.47 Acres)</span>
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[14px] font-bold text-gray-900">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
