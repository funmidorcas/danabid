import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_QUOTES } from '../data/estatesData';

export default function BrandQuotesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BRAND_QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = BRAND_QUOTES[activeIndex];

  return (
    <section className="py-16 sm:py-20 bg-slate-950/70 border-y border-slate-800/80 relative overflow-hidden">
      {/* Cool subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DANABID CREED & INVESTOR VISION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Words That Build Real Wealth
          </h2>
        </div>

        {/* Featured Quote Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
          <Quote className="w-12 h-12 text-blue-500/30 absolute top-6 left-6 -rotate-12" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-black tracking-widest uppercase">
              {current.tagline}
            </span>

            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed tracking-tight">
              “{current.quote}”
            </p>

            <div className="pt-2">
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest block">
                — {current.author}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="text-xs text-slate-400 font-medium">
              Insight <span className="text-blue-400 font-bold">{activeIndex + 1}</span> of {BRAND_QUOTES.length}
            </div>

            <div className="flex items-center gap-1.5">
              {BRAND_QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + BRAND_QUOTES.length) % BRAND_QUOTES.length)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % BRAND_QUOTES.length)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
