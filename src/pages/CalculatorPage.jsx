import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, MessageCircle, Calendar, Gift } from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

export default function CalculatorPage() {
  const [selectedEstateId, setSelectedEstateId] = useState(ALL_ESTATES[0].id);
  const [unitMode, setUnitMode] = useState('plots'); // 'plots' or 'acres'
  const [plotCount, setPlotCount] = useState(2);
  const [acreCount, setAcreCount] = useState(1);
  const [paymentPlan, setPaymentPlan] = useState('outright'); // 'outright', '3months', '6months'

  const selectedEstate = useMemo(() => {
    return ALL_ESTATES.find((e) => e.id === selectedEstateId) || ALL_ESTATES[0];
  }, [selectedEstateId]);

  const calculatedPlots = unitMode === 'plots' ? plotCount : acreCount * 6;
  const totalSquareMeters = calculatedPlots * 600;

  // Price calculations with specific discounts
  const totalBasePrice = useMemo(() => {
    if (selectedEstate.id === 'danabid-farmland-akanran') {
      if (unitMode === 'acres') return acreCount * 3000000;
      return plotCount * 500000;
    }

    if (selectedEstate.id === 'favours-court-phase-2') {
      if (unitMode === 'plots' && plotCount >= 3) {
        return plotCount * 2000000; // Promo: buy 3+ at ₦2.0M/plot
      }
    }

    if (unitMode === 'plots') {
      return plotCount * selectedEstate.price;
    } else {
      const acreBase = selectedEstate.price * 6 * 0.95; // 5% bulk discount for whole acres
      return Math.round(acreBase * acreCount);
    }
  }, [selectedEstate, unitMode, plotCount, acreCount]);

  // Promo Bonuses
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
        title: 'NEW YEAR PROMO RATE APPLIED! 🔥',
        detail: 'Price reduced from ₦2.5M to ₦2.0M per plot because you selected 3 or more plots!',
        extraPlots: 0
      };
    }

    if (selectedEstate.id === 'danabid-farmland-akanran') {
      return {
        title: 'FREE CULTIVATION & PALM TREES INCLUDED! 🌾',
        detail: 'Instant land allocation with free deed of agreement and palm trees cultivation.',
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
        months: 0
      };
    } else if (paymentPlan === '3months') {
      const deposit = Math.round(totalBasePrice * 0.30);
      const balance = totalBasePrice - deposit;
      const monthly = Math.round(balance / 3);
      return { initialDeposit: deposit, monthlySpread: monthly, months: 3 };
    } else {
      const deposit = Math.round(totalBasePrice * 0.25);
      const balance = totalBasePrice - deposit;
      const monthly = Math.round(balance / 6);
      return { initialDeposit: deposit, monthlySpread: monthly, months: 6 };
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
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>ESTIMATOR TOOL</span>
          </div>
          <h1 className="text-[20px] font-bold text-gray-900">
            Plots & Acres Land Investment Calculator
          </h1>
          <p className="text-[14px] text-gray-600 mt-1">
            Calculate your acquisition budget, view 3-month and 6-month installment schedules, and automatically apply promo bonus plots.
          </p>
        </div>

        {/* 2-Column Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Controls (7 cols) */}
          <div className="md:col-span-7 border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-xs space-y-4">
            {/* Estate select */}
            <div>
              <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                1. Select Estate / Farmland
              </label>
              <select
                value={selectedEstateId}
                onChange={(e) => setSelectedEstateId(e.target.value)}
                className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-emerald-600 cursor-pointer"
              >
                {ALL_ESTATES.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name} ({e.location}) — {e.priceFormatted} {e.isRamadanPromo ? '⭐ [Promo]' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Units */}
            <div>
              <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                2. Select Unit: Plots or Acres?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUnitMode('plots')}
                  className={`py-2 rounded-lg text-[13px] font-bold border transition-colors cursor-pointer ${
                    unitMode === 'plots'
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Plots (600 sqm)
                </button>
                <button
                  type="button"
                  onClick={() => setUnitMode('acres')}
                  className={`py-2 rounded-lg text-[13px] font-bold border transition-colors cursor-pointer ${
                    unitMode === 'acres'
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Acres (6 Plots / ~4,000 sqm)
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                3. Choose Quantity ({unitMode === 'plots' ? 'Plots' : 'Acres'})
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(unitMode === 'plots' ? [1, 2, 3, 4, 5, 6, 8, 10] : [1, 2, 3, 5, 10]).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => (unitMode === 'plots' ? setPlotCount(num) : setAcreCount(num))}
                    className={`px-3 py-1.5 rounded-md text-[13px] font-bold border cursor-pointer ${
                      (unitMode === 'plots' ? plotCount : acreCount) === num
                        ? 'bg-emerald-700 text-white border-emerald-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {num} {unitMode === 'plots' ? (num === 1 ? 'Plot' : 'Plots') : (num === 1 ? 'Acre' : 'Acres')}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment plan */}
            <div>
              <label className="block text-[12px] font-bold uppercase text-gray-700 mb-1">
                4. Payment Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'outright', label: 'Outright', sub: 'Instant' },
                  { id: '3months', label: '3 Months', sub: '30% Deposit' },
                  { id: '6months', label: '6 Months', sub: '25% Deposit' }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPaymentPlan(p.id)}
                    className={`p-2 rounded-lg text-center border cursor-pointer ${
                      paymentPlan === p.id
                        ? 'bg-emerald-50 border-emerald-700 text-emerald-900 font-bold'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="block text-[13px]">{p.label}</span>
                    <span className="text-[11px] text-gray-500">{p.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary (5 cols) */}
          <div className="md:col-span-5 border border-gray-200 rounded-xl p-5 sm:p-6 bg-gray-50 shadow-xs space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase text-gray-500 block">Calculation Summary</span>
              <h2 className="text-[18px] font-bold text-gray-900 mt-0.5">{selectedEstate.name}</h2>
              <p className="text-[12px] text-gray-600">
                {unitMode === 'acres' ? `${acreCount} Acre(s) (${acreCount * 6} Plots)` : `${plotCount} Plot(s)`} • Approx {totalSquareMeters.toLocaleString()} sqm
              </p>
            </div>

            {/* Total Price */}
            <div className="p-3.5 rounded-lg bg-white border border-gray-200">
              <span className="text-[11px] text-gray-500 block font-medium">Total Cost:</span>
              <span className="text-[22px] font-black text-emerald-700 block mt-0.5">
                {formatNaira(totalBasePrice)}
              </span>
              <span className="text-[11px] text-gray-500">
                {paymentPlan === 'outright' ? 'Outright payment (instant physical allocation)' : `${paymentPlan} payment spread`}
              </span>
            </div>

            {/* Monthly spread if installment */}
            {paymentPlan !== 'outright' && (
              <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-white border border-gray-200 text-[12px]">
                <div>
                  <span className="text-gray-500 block">Initial Deposit:</span>
                  <span className="font-bold text-gray-900">{formatNaira(paymentDetails.initialDeposit)}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Monthly ({paymentDetails.months} mo):</span>
                  <span className="font-bold text-emerald-700">{formatNaira(paymentDetails.monthlySpread)}</span>
                </div>
              </div>
            )}

            {/* Promo bonus alert */}
            {promoBonus && (
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[12px] text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-amber-800">
                  <Gift className="w-3.5 h-3.5" />
                  <span>{promoBonus.title}</span>
                </span>
                <p>{promoBonus.detail}</p>
                {promoBonus.extraPlots > 0 && (
                  <span className="font-bold text-emerald-800 block">
                    Total Plots Allocated: {calculatedPlots + promoBonus.extraPlots} Plots!
                  </span>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppEstimateLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Calculation on WhatsApp</span>
              </a>

              <Link
                to="/inspection"
                className="w-full py-2 px-3 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold text-[13px] flex items-center justify-center gap-1.5 block text-center"
              >
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>Book Site Inspection</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
