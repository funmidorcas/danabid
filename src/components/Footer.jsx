import { Link } from "react-router-dom";
import { contacts } from "../data/estates";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.png" alt="Danabid Homes Logo" className="footer__logo" onError={(e) => { e.target.src = "/logo.svg"; }} />
          <p className="footer__tagline">
            Secure · Affordable · Verified
          </p>
          <p className="footer__social">
            Follow us: <a href="https://instagram.com/danabidhomesandproperties" target="_blank" rel="noreferrer">{contacts.social}</a>
          </p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/estates">Estates</Link>
          <Link to="/promo">Promo</Link>
          <Link to="/farmland">Farmland</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>{contacts.address}</p>
          <a href={`tel:${contacts.phone1}`}>{contacts.phone1}</a>
          <a href={`tel:${contacts.phone2}`}>{contacts.phone2}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} Danabid Homes and Properties Limited. All rights reserved.</p>
      </div>

      {/* Fixed WhatsApp back-to-top */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  );
}
