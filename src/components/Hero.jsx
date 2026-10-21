import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  Play, 
  MessageCircle, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('meta');

  const previews = {
    meta: {
      platform: 'Meta Ads Manager (Facebook & Instagram)',
      color: 'from-blue-600 to-cyan-500',
      badge: 'Active & Scaling',
      campaign: 'E-Com Scale & Dynamic Retargeting',
      roas: '5.8x ROAS',
      spend: '$3,420.00',
      revenue: '$19,836.00',
      ctr: '4.12%',
      cpc: '$0.34',
      objective: 'High-Value Conversions',
      summary: 'Precision lookalike audiences & reel carousel ads targeting ready-to-buy shoppers.'
    },
    tiktok: {
      platform: 'TikTok Ads Manager',
      color: 'from-fuchsia-600 to-rose-500',
      badge: 'Viral Hook Campaign',
      campaign: 'High-CTR UGC Video Ad Blast',
      roas: '6.4x ROAS',
      spend: '$2,150.00',
      revenue: '$13,760.00',
      ctr: '5.85%',
      cpc: '$0.22',
      objective: 'Instant Checkout Purchases',
      summary: 'High-energy creator hook videos engineered to stop the scroll in under 1.5 seconds.'
    },
    whatsapp: {
      platform: 'Click-To-WhatsApp Sponsored Funnel',
      color: 'from-emerald-500 to-teal-400',
      badge: 'Instant Lead Closing',
      campaign: 'Direct Inbound WhatsApp Buyers',
      roas: '8.2x ROAS',
      spend: '$1,800.00',
      revenue: '$14,760.00',
      ctr: '6.30%',
      cpc: '$0.18',
      objective: 'Qualified Conversations & Bookings',
      summary: 'Direct sponsored ads that immediately land prospects in your WhatsApp chat with pre-filled buyer questions.'
    }
  };

  const current = previews[activeTab];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background ambient gradient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 text-xs sm:text-sm font-medium text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Accepting New Clients • Facebook, Instagram, TikTok & WhatsApp</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Stop Wasting Ad Spend. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Drive Predictable Sales & Leads
              </span> <br />
              With Sponsored Ads.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hi, I'm <strong className="text-white font-semibold">Funmilayo Dorcas</strong>. I engineer high-converting paid ad campaigns on <strong className="text-cyan-300 font-medium">Facebook</strong>, <strong className="text-pink-400 font-medium">Instagram</strong>, <strong className="text-fuchsia-400 font-medium">TikTok</strong>, and turn prospects into paying clients right inside <strong className="text-emerald-400 font-medium">WhatsApp</strong>.
            </p>

            {/* Quick bullet guarantees */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Pixel, CAPI & Lead Tracking Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Scroll-Stopping Video Hooks & Copy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct WhatsApp Funnel Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Weekly Transparent ROAS Reporting</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Claim Your Free Ad Strategy Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/?text=Hi%20Funmilayo,%20I'd%20like%20to%20discuss%20running%20sponsored%20ads%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl font-semibold text-base bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">4.8x+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">Average Client ROAS</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">$750K+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">Ad Spend Managed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">60K+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">Direct Leads & Chats</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Ad Campaign Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-7 overflow-hidden">
                
                {/* Header of dashboard preview */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-slate-400 font-mono ml-2">Live Campaign Monitor</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Scaling Live
                  </span>
                </div>

                {/* Tab Switcher for Platforms */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/80 rounded-xl my-5 border border-slate-800 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('meta')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      activeTab === 'meta'
                        ? 'bg-blue-600 text-white font-semibold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Meta (FB & IG)
                  </button>
                  <button
                    onClick={() => setActiveTab('tiktok')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      activeTab === 'tiktok'
                        ? 'bg-fuchsia-600 text-white font-semibold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    TikTok Ads
                  </button>
                  <button
                    onClick={() => setActiveTab('whatsapp')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      activeTab === 'whatsapp'
                        ? 'bg-emerald-600 text-white font-semibold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    WhatsApp Ads
                  </button>
                </div>

                {/* Active Campaign Card */}
                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 mb-5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{current.platform}</span>
                    <span className="text-cyan-400 font-semibold">{current.badge}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{current.campaign}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{current.summary}</p>
                </div>

                {/* High-Impact Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900 border border-slate-700/50">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Return On Ad Spend
                    </span>
                    <div className="text-2xl font-black text-emerald-400 mt-1">{current.roas}</div>
                    <span className="text-[10px] text-slate-400">Net Profit Generated</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900 border border-slate-700/50">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-cyan-400" /> Total Revenue
                    </span>
                    <div className="text-2xl font-black text-white mt-1">{current.revenue}</div>
                    <span className="text-[10px] text-slate-400">From {current.spend} Spend</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Click-Through Rate (CTR)</span>
                    <span className="text-xs font-bold text-cyan-400">{current.ctr}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Cost Per Click (Avg)</span>
                    <span className="text-xs font-bold text-emerald-400">{current.cpc}</span>
                  </div>
                </div>

                {/* Bottom Callout in Preview */}
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">Ready to replicate these numbers for your business?</span>
                  </div>
                  <a href="#contact" className="text-cyan-400 font-bold hover:underline shrink-0 ml-2">
                    Start Now →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
