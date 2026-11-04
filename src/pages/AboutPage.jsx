import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck2, Layers, TrendingUp, Car, Building2, Quote, CheckCircle2 } from 'lucide-react';
import { BRAND_QUOTES, COMPANY_INFO } from '../data/estatesData';
import DanabidLogo from '../components/DanabidLogo';

export default function AboutPage() {
  const pillars = [
    {
      title: 'Zero Omo-Onile Harassment',
      description: 'We guarantee 100% peace of mind. Every square meter sold by Danabid is completely legally acquired with unencumbered lineage and zero land-grabber interference.'
    },
    {
      title: 'Verified Title Documents',
      description: 'Complete legal documentation provided: Registered Surveys, Deeds of Assignment, Layout Plans, and C of O / Gazette alignments for maximum legal validity.'
    },
    {
      title: 'Plots & Large Acres Capacity',
      description: 'Whether you want a single 600sqm residential plot for a home or 50+ acres for large commercial farming or warehousing, Danabid accommodates your scale.'
    },
    {
      title: 'High-Yield Growth Corridors',
      description: 'Our estates are hand-picked along massive federal and state infrastructure: Moniya Railway Terminal, Epe Airport corridor, Fiditi expressway, and Mowe express.'
    },
    {
      title: '100% Free Executive Inspections',
      description: 'We believe you must see what you buy. We organize free inspection buses every Thursday and Saturday with zero pressure and zero commitment.'
    },
    {
      title: 'Physical Office in Aleshinloye Ibadan',
      description: 'Walk into our physical corporate office at Prymetyme Plaza, Oba Aleshinloye, Jericho Road, Ibadan. Full transparency and accountable management.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5">
          <div className="flex items-center gap-3 mb-2">
            <DanabidLogo className="h-8" showSubtitle={false} />
            <span className="text-[12px] font-bold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
              Corporate Profile
            </span>
          </div>
          <h1 className="text-[20px] font-bold text-gray-900">
            About Danabid Homes & Properties Limited
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            “Where smart investors find peace of mind. Secure your plot today. Build tomorrow with confidence.”
          </p>
        </div>

        {/* 6 Core Pillars */}
        <div className="space-y-4">
          <h2 className="text-[18px] font-bold text-gray-900">Our Six Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-1.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <h3 className="text-[15px] font-bold text-gray-900">{pillar.title}</h3>
                <p className="text-[13px] text-gray-600 leading-normal">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The 10 Brand Mottos Grid */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h2 className="text-[18px] font-bold text-gray-900">The Danabid Creed & Investor Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {BRAND_QUOTES.map((item) => (
              <div key={item.id} className="p-3.5 rounded-lg border border-gray-200 bg-white flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                    {item.tagline}
                  </span>
                  <p className="text-[13px] text-gray-800 font-medium leading-snug">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diaspora Assurance Box */}
        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-[16px] font-bold text-gray-900">Are you investing from the Diaspora?</h3>
            <p className="text-[13px] text-gray-600">
              We provide virtual video tours, coordinate verification, legal representation, and secure corporate bank accounts for investors in the UK, US, Canada, and Europe.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] shrink-0"
          >
            Contact Diaspora Desk
          </Link>
        </div>

      </div>
    </div>
  );
}
