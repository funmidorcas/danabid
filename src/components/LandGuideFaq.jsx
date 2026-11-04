import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  FileText,
  Building
} from 'lucide-react';

export default function LandGuideFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How many plots make 1 Acre, and what are standard plot dimensions?',
      a: 'In Nigerian land measurements, 1 Acre consists of exactly 6 Standard Plots (approximately 4,000 square meters). A standard residential plot measures 600 square meters (approx. 60ft x 120ft or 18m x 36m), while some urban layouts measure 500 square meters. When you purchase 1 Acre from Danabid Homes, you receive all 6 contiguous plots with a single unified survey plan.'
    },
    {
      q: 'What title documents will I receive after buying land from Danabid?',
      a: 'Upon completion of payment, you receive: (1) Official Receipt of Payment, (2) Contract of Sale / Allocation Letter, (3) Registered Perimeter & Plot Survey Plan bearing your name and specific beacon coordinates, (4) Executed Deed of Assignment drafted by our legal counsel conveying total ownership to you.'
    },
    {
      q: 'Are the site inspections genuinely 100% free?',
      a: 'Yes, completely free! Every Thursday and Saturday at 10:00 AM and 1:00 PM, executive Danabid transport vehicles depart from our office at Prymetyme Plaza, Aleshinloye Ibadan. You are not charged a single kobo for fuel, transport, or inspection fees, and there is zero obligation to purchase on the spot.'
    },
    {
      q: 'What are the Ramadan Promo deals currently running?',
      a: 'Our current Ramadan Promo offers three unprecedented opportunities: (1) Honor Estate in Ido-Eleyele-Ologuneru, Ibadan at ₦700,000 per plot — Buy 2 to 4 plots and get an Extra Half Plot FREE; Buy 5+ plots and get an Extra 1 Full Plot FREE! (2) Daniel’s Court in Isawo Agric, Ikorodu, Lagos at ₦5 Million with a FREE Corner Piece! (3) Victory Estate Phase 3 in Alabata Moniya (opposite Imperial College & near Railway Terminal) at ₦1.2 Million with a FREE Corner Piece!'
    },
    {
      q: 'Can I buy farmland in acres for agribusiness or crop farming?',
      a: 'Yes! We have Danabid Farmland located in Ilaju, Ido Local Government Area, Oyo State. It boasts rich loamy arable soil, gentle topography, natural stream access, and motorable tractor tracks. We sell from individual plots (₦600k) up to 5, 10, 20, and 50+ acres for livestock, crop farming, or long-term agricultural land banking.'
    },
    {
      q: 'Can Nigerians in the Diaspora purchase without traveling back home?',
      a: 'Absolutely. A substantial portion of our investors live in the UK, United States, Canada, and Europe. We provide live HD video walk-through tours via WhatsApp or Zoom, share coordinate verification for independent surveyor checks, provide corporate account details, and send hard-copy executed deeds and surveys via secure DHL international courier or to your designated attorney in Nigeria.'
    },
    {
      q: 'Do you offer flexible installment payment plans?',
      a: 'Yes. You can initiate allocation with an initial deposit (typically 25% to 30%) and spread the remaining balance over 3 to 6 months with convenient zero-interest or transparent terms.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>INVESTOR GUIDE & FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Know Before Buying Land
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Understand land metrics, title verification, and how our purchase process protects your capital.
          </p>
        </div>

        {/* Quick Land Metrics Reference Infobox */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 uppercase">1 Standard Plot</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">600 sqm</div>
            <span className="text-[11px] text-slate-400">60ft × 120ft (Residential)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 uppercase">1 Full Acre</span>
            <div className="text-xl sm:text-2xl font-black text-amber-400 mt-1">6 Plots</div>
            <span className="text-[11px] text-slate-400">Approx. 4,000 sqm (Bulk)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 uppercase">1 Hectare</span>
            <div className="text-xl sm:text-2xl font-black text-teal-400 mt-1">15 Plots</div>
            <span className="text-[11px] text-slate-400">10,000 sqm (2.47 Acres)</span>
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
