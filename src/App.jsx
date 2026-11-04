import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';

// Multi-page Views
import HomePage from './pages/HomePage';
import EstatesPage from './pages/EstatesPage';
import PromosPage from './pages/PromosPage';
import FarmlandPage from './pages/FarmlandPage';
import InspectionPage from './pages/InspectionPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
        <ScrollToTop />
        
        {/* Navigation Bar with all navList on flex on desktop, hamburger only on small screen */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/estates" element={<EstatesPage />} />
            <Route path="/promos" element={<PromosPage />} />
            <Route path="/farmland" element={<FarmlandPage />} />
            <Route path="/inspection" element={<InspectionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Minimalist Light Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <FloatingActionButtons />
      </div>
    </BrowserRouter>
  );
}
