import React from 'react';
import { Mail, MessageCircle, ArrowUp, Sparkles, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const targetEmail = 'oladipupofunmilayodorcas@gmail.com';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/25">
                <span className="text-xl tracking-tighter">FD</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white block">Funmilayo Dorcas</span>
                <span className="text-xs text-cyan-400">Digital Marketer & Paid Ads Strategist</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Helping businesses build predictable customer acquisition machines through performance-driven ads on Facebook, Instagram, TikTok & direct WhatsApp funnels.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${targetEmail}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                title={`Email: ${targetEmail}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/?text=Hi%20Funmilayo,%20I'm%20interested%20in%20scaling%20my%20business%20with%20ads."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#platforms" className="hover:text-cyan-400 transition-colors">
                  Platforms & Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-cyan-400 transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Ad ROI Calculator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-400 transition-colors">
                  The 4-Step Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Reach</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block">Personal Email:</span>
                  <a
                    href={`mailto:${targetEmail}`}
                    className="font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {targetEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block">WhatsApp Priority Chat:</span>
                  <a
                    href="https://wa.me/?text=Hi%20Funmilayo,%20I'm%20ready%20to%20run%20ads."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    Click to Open WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2 mt-4">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDA & Complete Client Confidentiality Guaranteed.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Funmilayo Dorcas. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with React.js & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
