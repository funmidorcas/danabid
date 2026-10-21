import React from 'react';
import { TrendingUp, DollarSign, Star, CheckCircle, ArrowUpRight, MessageSquareQuote } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: 'E-Commerce Fashion & Apparel Brand',
      badge: 'TikTok & Instagram Ads',
      badgeColor: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
      period: '35 Days Campaign',
      spend: '$3,850',
      revenue: '$26,180',
      roas: '6.8x ROAS',
      summary: 'Replaced static image ads with hook-optimized TikTok UGC videos & Instagram Story swipe-up offers. Scaled daily orders from 6/day to 42/day.',
      metrics: [
        { label: 'CPA Reduction', value: '-44%' },
        { label: 'New Customers', value: '490+' },
        { label: 'Hook 3s Retention', value: '68%' }
      ]
    },
    {
      title: 'High-Ticket Real Estate & Property Advisory',
      badge: 'Facebook & WhatsApp Funnel',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      period: '21 Days Campaign',
      spend: '$1,400',
      revenue: '$62,000 Deal Volume',
      roas: '11.4x ROI',
      summary: 'Built Click-To-WhatsApp ads that pre-qualified property buyers with an instant automated greeting questionnaire before human inspection booking.',
      metrics: [
        { label: 'WhatsApp Inquiries', value: '184 Leads' },
        { label: 'Cost Per Lead', value: '$7.60' },
        { label: 'Deals Closed', value: '4 Sales' }
      ]
    },
    {
      title: 'Skincare & Organic Beauty Retailer',
      badge: 'Meta Ads Retargeting & Catalog',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      period: '60 Days Scaling',
      spend: '$5,200',
      revenue: '$33,800',
      roas: '6.5x ROAS',
      summary: 'Configured Meta Conversions API (CAPI) to bypass iOS 14+ tracking loss. Deployed dynamic carousel retargeting for abandoned carts and bundle upsells.',
      metrics: [
        { label: 'Abandoned Cart Recov.', value: '28.4%' },
        { label: 'CTR Improvement', value: '+180%' },
        { label: 'Repeat Buyers', value: '34%' }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Funmilayo completely turned our ads around. We were burning money on boosted Facebook posts with zero sales. In our first 30 days with her, our WhatsApp inbox was overflowing with real buyers!",
      author: "Adewale O.",
      role: "Managing Director, Apex Luxury Properties",
      platform: "Facebook & WhatsApp Funnel"
    },
    {
      quote: "The TikTok video creatives and angles Funmilayo scripted for our brand brought our cost per purchase down by over 40%. She doesn't just run ads; she understands what makes people buy.",
      author: "Sarah K.",
      role: "Founder, GlowCraft Skincare",
      platform: "TikTok & Instagram Ads"
    },
    {
      quote: "Extremely professional, transparent weekly reporting, and always proactive with new creative hooks. The 7x ROAS we achieved allowed us to expand inventory twice this quarter.",
      author: "Michael T.",
      role: "E-commerce Brand Owner",
      platform: "Meta Omnichannel Campaign"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Proven Client Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Campaigns. Real Numbers. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Measurable Bank Account Growth.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            No vanity metrics or fake screenshots. Here is a breakdown of how strategic paid ad distribution generates tangible revenue for my partners.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{c.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {c.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {c.summary}
                </p>

                {/* Main ROAS highlight box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Ad Spend</span>
                    <span className="text-lg font-bold text-white">{c.spend}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Revenue</span>
                    <span className="text-xl font-black text-emerald-400">{c.revenue}</span>
                  </div>
                  <div className="pl-3 border-l border-slate-800">
                    <span className="text-xs font-black text-cyan-400 bg-cyan-950/80 px-2 py-1 rounded border border-cyan-800/40">
                      {c.roas}
                    </span>
                  </div>
                </div>

                {/* Sub metrics */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800">
                  {c.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-950/40">
                      <div className="text-xs font-bold text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href="#contact"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between"
                >
                  <span>Replicate this funnel for my brand</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <MessageSquareQuote className="w-6 h-6 text-cyan-400" />
              What Clients Say About Working With Funmilayo
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 gap-1 mb-4">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/30">
                    {t.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
