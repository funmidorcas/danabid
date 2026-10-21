import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do I need a website to run ads, or can we send customers directly to WhatsApp?',
      a: 'You do NOT necessarily need an expensive website! For many service businesses, coaches, wholesalers, and local sellers, Click-To-WhatsApp sponsored ads actually convert significantly better than complex websites. Prospects click your ad and instantly open a chat with you on WhatsApp where you can answer questions, build trust, and close sales immediately.'
    },
    {
      q: 'Do you create the video hooks, ad graphics, and persuasive copy?',
      a: 'Yes, absolutely. High ROAS comes down to the ad creative and hook. I script scroll-stopping video concepts, design eye-catching feed & story creatives, and write direct-response psychological sales copy tailored to your target audience on Facebook, Instagram, and TikTok.'
    },
    {
      q: 'How much ad budget do I need to get started?',
      a: 'Most clients start with between $500 and $1,500/month in ad spend for initial testing and audience validation. Once we dial in your winning creatives and achieve a 4x+ ROAS, we aggressively scale up the budget to generate more profit.'
    },
    {
      q: 'How fast can we launch and start seeing results?',
      a: 'From our onboarding audit to creative production, pixel/CAPI tracking setup, and live launch typically takes 3 to 5 business days. Once ads go live, leads and WhatsApp inquiries often start arriving within the first 24 to 48 hours.'
    },
    {
      q: 'Who pays for the advertising spend on Meta & TikTok?',
      a: 'You pay Meta and TikTok directly through your own ad accounts with your business card or payment method. You retain 100% full ownership of your accounts, pixels, data, and ad assets at all times.'
    },
    {
      q: 'What happens after I submit my details on this website?',
      a: 'Your information is sent directly to my personal inbox (oladipupofunmilayodorcas@gmail.com). I will review your business model, prepare customized insights, and reach out to you via Email and WhatsApp within 24 hours to schedule our strategy session.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-900/50 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Everything you need to know about partnering with me on your paid ad campaigns.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
