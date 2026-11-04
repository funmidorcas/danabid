import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ShieldCheck, ArrowUp } from 'lucide-react';
import DanabidLogo from './DanabidLogo';
import { COMPANY_INFO } from '../data/estatesData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 text-[14px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <DanabidLogo className="h-9" />
            
            <p className="text-[14px] text-gray-600 leading-normal max-w-sm">
              Danabid Homes & Properties — Where smart investors find peace of mind. We sell genuine land in plots and acres across Lagos, Ibadan, and Ogun State with instant physical allocation.
            </p>

            <div className="p-3 rounded-lg bg-white border border-gray-200 text-[13px] text-gray-700 space-y-1">
              <span className="font-bold text-gray-900 block">Verified Ownership</span>
              <p className="text-[12px] text-gray-600">
                100% dry land with registered surveys, deeds of assignment, and zero omo-onile issues.
              </p>
            </div>
          </div>

          {/* Quick links (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="text-[15px] font-bold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-[14px]">
              <li><Link to="/" className="text-gray-700 hover:text-emerald-700">Home</Link></li>
              <li><Link to="/estates" className="text-gray-700 hover:text-emerald-700">All Estates</Link></li>
              <li><Link to="/promos" className="text-gray-700 hover:text-emerald-700">Promotions</Link></li>
              <li><Link to="/farmland" className="text-gray-700 hover:text-emerald-700">Danabid Farmland</Link></li>
              <li><Link to="/calculator" className="text-gray-700 hover:text-emerald-700">Plots & Acres Calculator</Link></li>
              <li><Link to="/inspection" className="text-gray-700 hover:text-emerald-700">Book Free Inspection</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-emerald-700">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-700 hover:text-emerald-700">FAQ & Land Guide</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-emerald-700">Contact & Office</Link></li>
            </ul>
          </div>

          {/* Estates sample (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="text-[15px] font-bold text-gray-900">
              Featured Estates
            </h3>
            <ul className="space-y-2 text-[13px] text-gray-600">
              <li>
                <span className="font-semibold text-gray-900 block">Joy’s Court & Garden (₦1.2M)</span>
                <span>Fiditi, Oyo-Ibadan Expressway</span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 block">Queen Estate (₦2.5M / ₦4M)</span>
                <span>Isara, Lagos-Ibadan Expressway</span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 block">Danabid Farmland (₦500k / ₦3M)</span>
                <span>Akanran, Ibadan (15 mins from Ilaji)</span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 block">Honor Estate Phase 2 (₦700k)</span>
                <span>Ido, Ologuneru-Eleyele Rd, Ibadan</span>
              </li>
              <li>
                <span className="font-semibold text-gray-900 block">Favour's Court Phase 2 (₦2.5M)</span>
                <span>Ketu Epe, Lagos State</span>
              </li>
            </ul>
          </div>

          {/* Office contact (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-[15px] font-bold text-gray-900">
              Head Office & Hotlines
            </h3>
            <div className="space-y-2 text-[13px] text-gray-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone1}`} className="block hover:underline">{COMPANY_INFO.phone1}</a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="block hover:underline">{COMPANY_INFO.phone2}</a>
                  <a href={`tel:${COMPANY_INFO.phone3}`} className="block hover:underline">{COMPANY_INFO.phone3}</a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline break-all">{COMPANY_INFO.email}</a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{COMPANY_INFO.socialMedia.handle}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-gray-500">
          <p>© {new Date().getFullYear()} Danabid Homes and Properties Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-black">Contact Office</Link>
            <button
              onClick={scrollToTop}
              className="text-gray-600 hover:text-black flex items-center gap-1 cursor-pointer"
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
