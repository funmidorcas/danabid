import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a gentle greeting bubble after 4 seconds to capture interested visitors
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/?text=Hi%20Funmilayo,%20I%20saw%20your%20portfolio%20website%20and%20I'm%20interested%20in%20running%20sponsored%20ads%20for%20my%20business.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip callout */}
      {showTooltip && (
        <div className="relative mb-3 bg-slate-900 border border-emerald-500/30 text-white p-3 rounded-2xl shadow-2xl max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-slate-800 rounded-full text-slate-400 hover:text-white flex items-center justify-center border border-slate-700"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 font-semibold text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Funmilayo Dorcas is online
          </div>
          <p className="text-slate-300">
            Have a quick question about Facebook, IG, TikTok or WhatsApp ads? Tap below to chat!
          </p>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Funmilayo"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center group hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
