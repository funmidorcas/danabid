import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Estates", to: "/estates" },
  { label: "Promo", to: "/promo" },
  { label: "Farmland", to: "/farmland" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/logo.svg" alt="Danabid Homes Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Danabid<span>Homes</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/2347047172000"
          target="_blank"
          rel="noreferrer"
          className="navbar__cta"
        >
          Chat Us
        </a>

        {/* Hamburger (mobile only) */}
        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer${menuOpen ? " navbar__drawer--open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              "navbar__drawer-link" + (isActive ? " navbar__drawer-link--active" : "")
            }
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href="https://wa.me/2347047172000"
          target="_blank"
          rel="noreferrer"
          className="navbar__drawer-cta"
        >
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
