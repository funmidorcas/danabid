import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Sparkles, 
  Loader2, 
  ShieldCheck,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm({ initialBudget }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: initialBudget || '$1,000 - $3,000 / month',
    platforms: ['Facebook & Instagram', 'WhatsApp Ads'],
    comments: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = 'oladipupofunmilayodorcas@gmail.com';

  const availablePlatforms = [
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
    'WhatsApp Direct Funnels',
    'Full Omnichannel Stack',
  ];

  const handlePlatformToggle = (plat) => {
    setFormData((prev) => {
      const exists = prev.platforms.includes(plat);
      if (exists) {
        return {
          ...prev,
          platforms: prev.platforms.filter((p) => p !== plat),
        };
      } else {
        return {
          ...prev,
          platforms: [...prev.platforms, plat],
        };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Send directly to oladipupofunmilayodorcas@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🔥 New Ad Client Lead: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Email Address': formData.email,
          'Phone / WhatsApp': formData.phone,
          'Selected Platforms': formData.platforms.join(', ') || 'Not specified',
          'Estimated Monthly Budget': formData.budget,
          'Project Comments & Goals': formData.comments,
          _honey: '', // honeypot
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setStatus('success');
        // Confetti celebration
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        'There was an issue delivering the message directly. You can send it directly to my email or reach out on WhatsApp below!'
      );
    }
  };

  // WhatsApp prefilled message helper
  const encodedWhatsappText = encodeURIComponent(
    `Hi Funmilayo Dorcas! I just submitted an inquiry on your website.\n\nName: ${formData.name || 'Interested Client'}\nPhone: ${formData.phone || ''}\nEmail: ${formData.email || ''}\nBudget: ${formData.budget}\nPlatforms: ${formData.platforms.join(', ')}\n\nGoal: ${formData.comments || 'I want to discuss running sponsored ads.'}`
  );

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Scale Your Business
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book Your Free <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Sponsored Ads Strategy Session
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Share your business details below. Your inquiry is delivered directly to my inbox at <strong className="text-cyan-300 font-semibold">{targetEmail}</strong>, and I will personally review your account within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 relative">

            {status === 'success' ? (
              /* Success Confirmation Box */
              <div className="text-center py-12 px-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Inquiry Sent Successfully!
                </h3>
                <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base mb-6">
                  Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your details have been sent directly to <strong className="text-white">{targetEmail}</strong>. I will review your goals and get back to you shortly.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs text-slate-400 space-y-1 mb-8">
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Platforms:</strong> {formData.platforms.join(', ')}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/?text=${encodedWhatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Want an instant response? Message me on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        budget: '$1,000 - $3,000 / month',
                        platforms: ['Facebook & Instagram', 'WhatsApp Ads'],
                        comments: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-6">

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{errorMessage}</p>
                      <p className="mt-1 text-xs">
                        Alternatively, you can email directly at{' '}
                        <a href={`mailto:${targetEmail}`} className="underline font-bold text-white">
                          {targetEmail}
                        </a>{' '}
                        or message on WhatsApp.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone / WhatsApp Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number / WhatsApp <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +1 (555) 000-0000 or WhatsApp number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  {/* Monthly Ad Budget */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Monthly Ad Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    >
                      <option value="Under $500 / month">Under $500 / month (Testing phase)</option>
                      <option value="$500 - $1,500 / month">$500 - $1,500 / month (Starter)</option>
                      <option value="$1,500 - $3,000 / month">$1,500 - $3,000 / month (Growth)</option>
                      <option value="$3,000 - $5,000 / month">$3,000 - $5,000 / month (Scale)</option>
                      <option value="$5,000+ / month">$5,000+ / month (Aggressive Dominance)</option>
                    </select>
                  </div>

                </div>

                {/* Platforms of interest */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                    Which platform(s) do you want to run sponsored ads on?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {availablePlatforms.map((plat) => {
                      const isSelected = formData.platforms.includes(plat);
                      return (
                        <button
                          key={plat}
                          type="button"
                          onClick={() => handlePlatformToggle(plat)}
                          className={`text-xs font-medium px-3.5 py-2 rounded-lg border transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-cyan-400 text-slate-950 font-bold' : 'border border-slate-700'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                          <span>{plat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Comments / Project details */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Comments & Business Goals <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="comments"
                    required
                    rows="4"
                    placeholder="Tell me about your product/service, what you've tried so far, your current revenue or target monthly sales..."
                    value={formData.comments}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button & Security Note */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-60 text-white shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Details to Funmilayo...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Details & Request Free Strategy Call</span>
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      100% Confidential. Your data is never shared.
                    </span>
                    <span>
                      Direct Email:{' '}
                      <a href={`mailto:${targetEmail}`} className="text-cyan-400 hover:underline">
                        {targetEmail}
                      </a>
                    </span>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
