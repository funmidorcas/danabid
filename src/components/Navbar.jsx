import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calendar, Menu, X } from 'lucide-react';
import DanabidLogo from './DanabidLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Estates', path: '/estates' },
    { name: 'Promo', path: '/promos' },
    { name: 'Farmland', path: '/farmland' },
    { name: 'Free Inspection', path: '/inspection' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <DanabidLogo className="h-9 sm:h-10" />
          </Link>

          {/* Desktop NavList (Flex layout, NO hamburger on big screen) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] font-medium text-gray-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-1 ${
                    isActive
                      ? 'text-emerald-700 font-bold border-b-2 border-emerald-600'
                      : 'hover:text-emerald-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/inspection"
              className="px-3.5 py-2 rounded-lg text-[13px] font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Inspection</span>
            </Link>
          </div>

          {/* Mobile Menu Button (ONLY on small screen) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/inspection"
              className="px-2.5 py-1.5 rounded-md text-[12px] font-bold bg-emerald-700 text-white"
            >
              Inspect
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md border border-gray-200 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-gray-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu (ONLY on mobile) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 animate-in fade-in duration-150">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-[14px] font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  to="/inspection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-lg text-center font-bold text-[13px] bg-emerald-700 text-white"
                >
                  Book Free Site Inspection
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
