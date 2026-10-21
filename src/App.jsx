import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import RoiCalculator from './components/RoiCalculator';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [selectedBudget, setSelectedBudget] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
        
        {/* Ad Platforms & Core Capabilities */}
        <Platforms />

        {/* Interactive ROI & Lead Estimation Calculator */}
        <RoiCalculator onSelectBudget={(b) => setSelectedBudget(b)} />

        {/* Case Studies, Proof & Reviews */}
        <CaseStudies />

        {/* 4-Step Strategic Execution Process */}
        <Process />

        {/* Lead Capture Form sending to oladipupofunmilayodorcas@gmail.com */}
        <ContactForm initialBudget={selectedBudget} />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
