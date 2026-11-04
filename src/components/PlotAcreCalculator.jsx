import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  TrendingUp, 
  Calendar, 
  Gift, 
  HelpCircle,
  Sprout
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function PlotAcreCalculator({ onBookInspection }) {
  const [selectedEstateId, setSelectedEstateId] = useState(ALL_ESTATES[0].id);
  const [unitMode, setUnitMode] = useState('plots'); // 'plots' or 'acres'
  const [plotCount, setPlotCount] = useState(2);
  const [acreCount, setAcreCount] = useState(1);
  const [paymentPlan, setPaymentPlan] = useState('outright'); // 'outright', '3months', '6months'

  const selectedEstate = useMemo(() => {
    return ALL_ESTATES.find((e) => e.id === selectedEstateId) || ALL_ESTATES[0];
  }, [selectedEstateId]);

  // Calculations
  const calculatedPlots = unitMode === 'plots' ? plotCount : acreCount * 6;
  const totalSquareMeters = calculatedPlots * 600;

  // Price computation with special discounts (e.g. Favour's Court Epe buy 3+ at ₦2.0M, or Danabid Farmland ₦3M/acre)
  const totalBasePrice = useMemo(() => {
    if (selectedEstate.id === 'danabid-farmland-akanran') {
      if (unitMode === 'acres') {
        return acreCount * 3000000;
      } else {
        return plotCount * 500000;
      }
    }

    if (selectedEstate.id === 'favours-court-phase-2') {
      if (unitMode === 'plots' && plotCount >= 3) {
        return plotCount * 2000000; // Promo: buy 3+ at ₦2.0M per plot
      }
    }

    if (unitMode === 'plots') {
      return plotCount * selectedEstate.price;
    } else {
      const acreBase = selectedEstate.price * 6 * 0.95; // 5% bulk discount for whole acres
      return Math.round(acreBase * acreCount);
    }
  }, [selectedEstate, unitMode, plotCount, acreCount]);

  // Special Promo & Bonus calculations
  const promoBonus = useMemo(() => {
    if (selectedEstate.id === 'honor-estate-phase-2' || selectedEstate.id === 'honor-estate') {
      if (calculatedPlots >= 2 && calculatedPlots <= 4) {
        return {
          title: 'PROMO BONUS UNLOCKED! 🎁',
          detail: 'You qualify for an Extra HALF PLOT (300 sqm) completely FREE of charge!',
          extraPlots: 0.5
        };
      } else if (calculatedPlots >= 5) {
        return {
          title: 'MEGA PROMO BONUS UNLOCKED! 🎁🎉',
          detail: 'You qualify for an Extra 1 FULL PLOT (600 sqm) completely FREE of charge!',
          extraPlots: 1
        };
      }
    }

    if (selectedEstate.id === 'favours-court-phase-2' && unitMode === 'plots' && plotCount >= 3) {
      return {
        title: 'NEW YEAR BULK DISCOUNT APPLIED! 🔥',
        detail: 'Price reduced from ₦2.5M to ₦2.0M per plot because you selected 3 or more plots!',
        extraPlots: 0
      };
    }

    if (selectedEstate.id === 'danabid-farmland-akanran') {
      return {
        title: 'FREE CULTIVATION & PALM TREES INCLUDED! 🌾',
        detail: 'Instant physical land allocation with free deed of agreement and palm trees planting assistance.',
        extraPlots: 0
      };
    }

    if (selectedEstate.id === 'victory-estate-phase-3' || selectedEstate.id === 'daniels-court') {
      return {
        title: 'FREE CORNER PIECE ALLOCATION! 🌟',
        detail: 'Your reservation includes a prestigious FREE Corner Piece position while promo slots last!',
        extraPlots: 0
      };
    }

    return null;
  }, [selectedEstate, calculatedPlots, unitMode, plotCount]);

  // Payment Breakdown
  const paymentDetails = useMemo(() => {
    if (paymentPlan === 'outright') {
      return {
        initialDeposit: totalBasePrice,
        monthlySpread: 0,
        months: 0,
        note: 'Instant physical allocation & documentation processing'
      };
    } else if (paymentPlan === '3months') {
      const deposit = Math.round(totalBasePrice * 0.30);
      const balance = totalBasePrice - deposit;
      const monthly = Math.round(balance / 3);
      return {
        initialDeposit: deposit,
        monthlySpread: monthly,
        months: 3,
        note: '30% initial deposit with balance spread over 3 months'
      };
    } else {
      const deposit = Math.round(totalBasePrice * 0.25);
      const balance = totalBasePrice - deposit;
      const monthly = Math.round(balance / 6);
      return {
        initialDeposit: deposit,
        monthlySpread: monthly,
        months: 6,
        note: '25% initial commitment with flexible 6-month budget spread'
      };
    }
  }, [totalBasePrice, paymentPlan]);

  const formatNaira = (amount) => {
    return '₦' + Number(amount).toLocaleString('en-NG');
  };

  const getWhatsAppEstimateLink = () => {
    const text = encodeURIComponent(
      `Hello Danabid Homes! I calculated an investment for ${calculatedPlots} plot(s) (${unitMode === 'acres' ? `${acreCount} acre(s)` : `${plotCount} plot(s)`}) at ${selectedEstate.name} for ${formatNaira(totalBasePrice)} on ${paymentPlan.toUpperCase()} plan. ${promoBonus ? `Bonus: ${promoBonus.title}` : ''}. Please confirm availability and send payment details.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber1.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-bold mb-3">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>INTERACTIVE LAND & INVESTMENT ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Plots & Acres Investment Calculator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Calculate your acquisition budget, view installment breakdowns, and unlock promo incentives automatically.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Select Estate */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                1. Select Preferred Estate / Farmland
              </label>
              <select
                value={selectedEstateId}
                onChange={(e) => setSelectedEstateId(e.target.value)}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                {ALL_ESTATES.map((e) => (
                  <option key={e.id} value={e.id} className="bg-slate-900 text-white">
                    {e.name} ({e.location}) — {e.priceFormatted} {e.isRamadanPromo ? '⭐ [Promo]' : ''}
                  </option>
                ))}
              </select>
              <div className="flex items-center justify-between text-xs text-slate-400 mt-2 px-1">
                <span>Location: <strong className="text-slate-200">{selectedEstate.location}</strong></span>
                <span className="text-cyan-400 font-semibold">{selectedEstate.priceFormatted}</span>
              </div>
            </div>

            {/* Step 2: Choose Unit (Plots vs Acres) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Unit Type: Plots or Acres?
                </label>
                <span className="text-[11px] text-slate-400">
                  1 Acre = 6 Full Plots (~4,000 sqm)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setUnitMode('plots')}
                  className={`py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    unitMode === 'plots'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Buying in Plots (600 sqm)
                </button>
                <button
                  type="button"
                  onClick={() => setUnitMode('acres')}
                  className={`py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    unitMode === 'acres'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Buying in Acres (6+ Plots)
                </button>
              </div>
            </div>

            {/* Step 3: Quantity Selector */}
            {unitMode === 'plots' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Number of Plots:
                  </label>
                  <span className="text-lg font-black text-cyan-400">
                    {plotCount} {plotCount === 1 ? 'Plot' : 'Plots'} ({plotCount * 600} sqm)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPlotCount(num)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        plotCount === num
                          ? 'bg-blue-600 text-white shadow-lg scale-105'
                          : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {num} {num === 1 ? 'Plot' : 'Plots'}
                    </button>
                  ))}
                </div>

                {selectedEstate.id === 'favours-court-phase-2' && (
                  <p className="text-xs text-amber-300 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                    🎉 New Year Promo: Select 3 or more plots to unlock the discounted rate of ₦2,000,000 per plot!
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Number of Acres:
                  </label>
                  <span className="text-lg font-black text-amber-400">
                    {acreCount} {acreCount === 1 ? 'Acre' : 'Acres'} ({acreCount * 6} Plots / ~{acreCount * 4000} sqm)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 5, 10, 20].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setAcreCount(num)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        acreCount === num
                          ? 'bg-amber-500 text-slate-950 shadow-lg scale-105'
                          : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {num} {num === 1 ? 'Acre' : 'Acres'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Payment Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                3. Preferred Payment Structure
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentPlan('outright')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                    paymentPlan === 'outright'
                      ? 'bg-blue-950/60 border-blue-500 text-blue-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block font-bold text-sm text-white">Outright</span>
                  <span>Instant Allocation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentPlan('3months')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                    paymentPlan === '3months'
                      ? 'bg-blue-950/60 border-blue-500 text-blue-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block font-bold text-sm text-white">3 Months</span>
                  <span>30% Initial</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentPlan('6months')}
                  className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                    paymentPlan === '6months'
                      ? 'bg-blue-950/60 border-blue-500 text-blue-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block font-bold text-sm text-white">6 Months</span>
                  <span>25% Initial</span>
                </button>
              </div>
            </div>

          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border-2 border-blue-500/30 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Ambient card glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Estimated Investment Total
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {selectedEstate.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {unitMode === 'acres' ? `${acreCount} Acre(s) (${acreCount * 6} Plots)` : `${plotCount} Plot(s)`} • Approx {totalSquareMeters.toLocaleString()} sqm
              </p>
            </div>

            {/* Total Price Callout */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400 block font-medium">Total Cost</span>
              <div className="text-3xl sm:text-4xl font-black text-cyan-300 mt-1">
                {formatNaira(totalBasePrice)}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                {paymentPlan === 'outright' ? 'Outright payment (instant physical allocation)' : `${paymentPlan} spread plan`}
              </span>
            </div>

            {/* Payment Schedule breakdown */}
            {paymentPlan !== 'outright' && (
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Initial Deposit:</span>
                  <span className="text-sm font-bold text-white">
                    {formatNaira(paymentDetails.initialDeposit)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Monthly ({paymentDetails.months} mo):</span>
                  <span className="text-sm font-bold text-cyan-300">
                    {formatNaira(paymentDetails.monthlySpread)}
                  </span>
                </div>
              </div>
            )}

            {/* Promo / Bonus Alert Box */}
            {promoBonus && (
              <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-xs text-amber-200 animate-in fade-in">
                <div className="font-extrabold text-amber-300 flex items-center gap-1.5 mb-1">
                  <Gift className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{promoBonus.title}</span>
                </div>
                <p className="font-semibold">{promoBonus.detail}</p>
                {promoBonus.extraPlots > 0 && (
                  <div className="mt-2 text-white font-bold bg-amber-600/30 px-2 py-1 rounded inline-block">
                    Total Plots Allocated: {calculatedPlots + promoBonus.extraPlots} Plots!
                  </div>
                )}
              </div>
            )}

            {/* Included Guarantees */}
            <div className="space-y-2 border-t border-slate-800 pt-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Immediate Physical Corner Pegging & Survey Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Genuine Documentation (Deed of Assignment & Receipt)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Guaranteed Zero Omo-Onile Harassment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppEstimateLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Calculation on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onBookInspection(selectedEstate.name)}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Book Site Inspection for This Plot</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
