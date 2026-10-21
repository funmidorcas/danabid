import React from 'react';
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './BrandIcons';

export default function Platforms() {
  const platforms = [
    {
      id: 'facebook',
      name: 'Facebook Ads',
      tagline: 'Precision Audience & Lookalike Dominance',
      icon: FacebookIcon,
      gradient: 'from-blue-600 to-indigo-600',
      borderGlow: 'hover:border-blue-500/50 hover:shadow-blue-500/20',
      badge: 'Meta Ads Manager',
      features: [
        'Custom Audience & 1%-5% Lookalike Modeling',
        'Meta Conversions API (CAPI) & Pixel Setup',
        'High-Converting Native Instant Lead Forms',
        'Dynamic Product Catalog Retargeting Funnels',
        'A/B Split-Testing on Headlines & Hooks'
      ],
      idealFor: 'E-commerce stores, Real Estate, B2B services, and local brick-and-mortar brands looking for scale.',
      typicalMetric: '3.5x - 6.2x ROAS'
    },
    {
      id: 'instagram',
      name: 'Instagram Ads',
      tagline: 'Aesthetic Visual Storytelling & Reels Creative',
      icon: InstagramIcon,
      gradient: 'from-pink-600 via-rose-500 to-amber-500',
      borderGlow: 'hover:border-pink-500/50 hover:shadow-pink-500/20',
      badge: 'Visual Engagement',
      features: [
        'Scroll-Stopping 9:16 Vertical Reels Ads',
        'High-CTR Carousel Slides with Compelling Hooks',
        'Influencer Whitelisting & Creator Collabs',
        'Interactive Story Polls & Direct Swipe Funnels',
        'Warm Audience Retargeting & Cart Recovery'
      ],
      idealFor: 'Fashion, Beauty, Lifestyle, Luxury Goods, Courses, and high-visual consumer products.',
      typicalMetric: '4.8x - 7.5x ROAS'
    },
    {
      id: 'tiktok',
      name: 'TikTok Ads',
      tagline: 'High-Energy UGC & Viral Sound Creative',
      icon: TikTokIcon,
      gradient: 'from-fuchsia-600 via-purple-600 to-cyan-500',
      borderGlow: 'hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/20',
      badge: 'Viral Growth Engine',
      features: [
        'Hook Testing in First 1.5 Seconds for 70%+ Retention',
        'UGC (User-Generated Content) Style Video Ads',
        'Spark Ads to Boost Organic Viral Momentum',
        'Trending Sound & Pop-Culture Angle Hijacking',
        'Rapid Scaling on High-Intent Algorithmic Reach'
      ],
      idealFor: 'Impulse buy e-commerce, trending consumer tech, apps, and brands targeting 18-35 age groups.',
      typicalMetric: '5.2x - 8.9x ROAS'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Ads & Funnels',
      tagline: 'Direct-to-Chat High-Conversion Closers',
      icon: WhatsAppIcon,
      gradient: 'from-emerald-500 to-teal-500',
      borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
      badge: 'Instant Sales Channel',
      features: [
        'Click-to-WhatsApp Ads Directly from FB & IG',
        'Pre-Populated Greeting Messages for Instant Action',
        'Automated Welcome & Lead Qualification Flows',
        'Direct 1-on-1 Objection Handling & Rapid Closing',
        'Zero Funnel Friction & 90%+ Message Open Rates'
      ],
      idealFor: 'Coaches, Consultants, Wholesalers, High-Ticket Services, and African/Global businesses where WhatsApp is king.',
      typicalMetric: '6.0x - 12x ROAS'
    }
  ];

  return (
    <section id="platforms" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Where We Dominate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Multi-Channel Paid Advertising <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Built For Maximum Conversion
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Instead of relying on luck or random boosts, I build custom-tailored ad ecosystems designed to capture attention and convert strangers into paying customers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl ${p.borderGlow}`}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} p-3.5 flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {p.badge}
                    </span>
                    <div className="text-xs text-emerald-400 font-bold mt-1.5">
                      Avg: {p.typicalMetric}
                    </div>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-medium text-cyan-400/90 mt-1 mb-4">
                  {p.tagline}
                </p>

                {/* Features list */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                  {p.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                  <strong className="text-slate-300 shrink-0">Best suited for:</strong>
                  <span>{p.idealFor}</span>
                </div>

                {/* Action link */}
                <div className="mt-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Request a custom {p.name} campaign plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Omnichannel Funnel Banner */}
        <div className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">The Secret: Omnichannel Ad Stacking</h4>
              <p className="text-sm text-slate-300 mt-0.5">
                Catch audience on TikTok & Instagram Reels, retarget them on Facebook, and close them instantly on WhatsApp.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shrink-0 shadow-lg shadow-cyan-500/20"
          >
            Build My Omnichannel Funnel
          </a>
        </div>

      </div>
    </section>
  );
}
