import React, { useState } from 'react';
import { Sparkles, Phone, ArrowRight, X, Moon, Gift } from 'lucide-react';
import { COMPANY_INFO } from '../data/estatesData';

export default function RamadanBanner({ onBookInspection }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-amber-950 to-emerald-950 text-white border-b border-amber-500/30 px-3 py-2.5 sm:px-4 text-xs sm:text-sm font-medium relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left message with Ramadan badge */}
        <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold shrink-0 text-[11px] sm:text-xs">
            <Moon className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>RAMADAN PROMO</span>
          </span>
          <p className="text-slate-200 truncate">
            <span className="font-semibold text-amber-200">Blessings of Homeownership:</span>{' '}
            Honor Estate from <span className="font-bold text-white">₦700,000</span> (Bonus plots) • Victory Phase 3 at <span className="font-bold text-white">₦1.2M</span> (Free Corner Piece)
          </p>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#ramadan-promo"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
          >
            <Gift className="w-3.5 h-3.5" />
            <span>View Offers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
