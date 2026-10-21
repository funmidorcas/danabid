import React from 'react';
import { Search, PenTool, Rocket, BarChart3, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Deep Audit & Competitive Strategy',
      desc: 'I analyze your existing ads, website funnel, competitors, and customer psychology to uncover untapped revenue leaks and define your winning positioning.',
      icon: Search,
      deliverables: ['Competitor Ad Library Breakdown', 'Customer Avatar & Objection Mapping', 'Custom Campaign Blueprint']
    },
    {
      num: '02',
      title: 'High-Converting Creative & Copy',
      desc: 'Ads fail when they look like boring ads. I develop hook-heavy video concepts for TikTok/Reels, scroll-stopping graphic carousels, and punchy direct-response copy.',
      icon: PenTool,
      deliverables: ['First-3-Seconds Video Hooks', 'Story & Feed Carousel Designs', 'Persuasive Direct Ad Copy']
    },
    {
      num: '03',
      title: 'Tracking, CAPI & Staged Launch',
      desc: 'I configure Meta Conversions API (CAPI), TikTok Pixel, and WhatsApp automated routing. Then, we launch with tight budget controls to validate winning audiences.',
      icon: Rocket,
      deliverables: ['Flawless Pixel & Event Setup', 'Direct WhatsApp Click Routing', 'Controlled A/B Audience Testing']
    },
    {
      num: '04',
      title: 'Aggressive Scaling & ROI Optimization',
      desc: 'Once winning ad sets and creatives emerge, we systematically scale budgets vertically and horizontally while continuously pruning underperforming ad spend.',
      icon: BarChart3,
      deliverables: ['Weekly Transparent Performance Calls', 'Lookalike & Retargeting Expansion', 'Continuous Creative Refresh']
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Systematic Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Turn Your Ad Spend Into <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Consistent, Compounding Profit
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A battle-tested 4-step framework engineered to remove the guesswork from paid advertising.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-800 group-hover:text-cyan-500/40 transition-colors font-mono">
                      {s.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {s.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
