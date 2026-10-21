import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onSelectBudget }) {
  const [budget, setBudget] = useState(1000);
  const [avgTicket, setAvgTicket] = useState(85);

  // Estimations based on proven paid ad benchmarks (FB/IG/TikTok/WhatsApp)
  const estimatedClicks = Math.round(budget / 0.28);
  const estimatedImpressions = Math.round(budget * 115);
  const estimatedLeads = Math.round(estimatedClicks * 0.085);
  const estimatedSales = Math.max(1, Math.round(estimatedLeads * 0.16));
  const estimatedRevenue = Math.round(estimatedSales * avgTicket);
  const estimatedRoas = (estimatedRevenue / budget).toFixed(1);
  const netProfit = Math.max(0, estimatedRevenue - budget);

  const handleApplyToForm = () => {
    if (onSelectBudget) {
      onSelectBudget(`$${budget.toLocaleString()}/mo`);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-slate-900/60 relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Forecasting
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your <span className="text-cyan-400">Campaign ROI</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Slide to adjust your planned monthly ad budget and average customer order value to see your potential returns with optimized campaigns.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Ad Budget Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">
                    Monthly Ad Budget ($ USD)
                  </label>
                  <span className="text-xl font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/40">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$300 (Starter)</span>
                  <span>$5,000 (Growth)</span>
                  <span>$10,000+ (Scale)</span>
                </div>
              </div>

              {/* Average Sale Value / Order Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">
                    Average Customer Value ($ USD)
                  </label>
                  <span className="text-xl font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-800/40">
                    ${avgTicket.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$20 (E-com impulse)</span>
                  <span>$150 (Mid-tier)</span>
                  <span>$500 (High-Ticket/Service)</span>
                </div>
              </div>

              {/* Benchmarks Included */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span>Targeted Ad Impressions:</span>
                  <span className="font-semibold text-slate-200">~{estimatedImpressions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>High-Intent Website/Chat Clicks:</span>
                  <span className="font-semibold text-slate-200">~{estimatedClicks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>WhatsApp Inquiries & Qualified Leads:</span>
                  <span className="font-semibold text-cyan-400 font-mono">~{estimatedLeads.toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Results Output Column */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-inner flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Projected Performance
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <TrendingUp className="w-3.5 h-3.5" /> {estimatedRoas}x Target ROAS
                  </span>
                </div>

                <div className="my-6 space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Estimated Gross Revenue</span>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      ${estimatedRevenue.toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Est. Closed Customers</span>
                      <span className="text-xl font-bold text-cyan-400">~{estimatedSales} Buyers</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Projected Net Profit</span>
                      <span className="text-xl font-bold text-emerald-400">+${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Lock In This Strategy For My Brand</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-slate-500 text-center mt-2">
                  *Projections calculated based on average performance data across active client campaigns.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
