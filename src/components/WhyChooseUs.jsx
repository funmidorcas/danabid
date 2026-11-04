import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Layers, 
  FileCheck2, 
  Car, 
  Building2, 
  TrendingUp, 
  Users,
  CheckCircle2,
  Lock,
  Sparkles
} from 'lucide-react';
import DanabidLogo from './DanabidLogo';
import { COMPANY_INFO } from '../data/estatesData';

export default function WhyChooseUs({ onBookInspection }) {
  const pillars = [
    {
      icon: ShieldCheck,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      title: 'Zero Omo-Onile Harassment',
      description: 'We guarantee 100% peace of mind. Every square meter sold by Danabid is completely legally acquired with unencumbered lineage and zero land-grabber interference.'
    },
    {
      icon: FileCheck2,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      title: 'Verified Title Documents',
      description: 'Complete documentation provided: Registered Surveys, Deeds of Assignment, Layout Plans, and C of O / Gazette alignments for maximum legal validity.'
    },
    {
      icon: Layers,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      title: 'Plots & Large Acres Capacity',
      description: 'Whether you want a single 600sqm residential plot for a home or 50+ acres for large commercial farming or warehousing, Danabid accommodates your scale.'
    },
    {
      icon: TrendingUp,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      title: 'High-Yield Growth Corridors',
      description: 'Our estates are hand-picked along massive infrastructure: Moniya Railway Terminal, Epe Airport corridor, Fiditi expressway, and Mowe express.'
    },
    {
      icon: Car,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      title: '100% Free Executive Inspections',
      description: 'We believe you must see what you buy. We organize free inspection buses every Thursday and Saturday with zero pressure and zero commitment.'
    },
    {
      icon: Building2,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      title: 'Physical Office in Aleshinloye Ibadan',
      description: 'Walk into our physical corporate office at Prymetyme Plaza, Oba Aleshinloye, Jericho Road, Ibadan. Full transparency and accountable management.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Brand Logo */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-4">
            <DanabidLogo className="h-12 sm:h-14" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>THE DANABID HOMES ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Hundreds of Land Buyers & Investors Trust Danabid
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Where smart investors find peace of mind. Danabid Homes stands out for verified integrity, prompt allocation, and solid legal assurance.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${pillar.bgColor} border flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Diaspora & Trust Quote Box */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Are you buying from the Diaspora (UK, US, Canada, Europe)?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              We provide virtual video inspections, GPS boundary validation, power of attorney documentation, and secure direct allocation for Nigerians living abroad. Contact our UK desk: <strong className="text-cyan-300">+44 7404 851234 (Yinka TNT)</strong>.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onBookInspection}
              className="py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg cursor-pointer transition-colors"
            >
              Book Diaspora Virtual Tour
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
