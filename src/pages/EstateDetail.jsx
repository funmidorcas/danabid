import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { estates, contacts } from "../data/estates";
import "./EstateDetail.css";

export default function EstateDetail() {
  const { slug } = useParams();
  const estate = estates.find((e) => e.slug === slug);

  if (!estate) {
    return (
      <main className="page page--not-found">
        <h1>Estate not found</h1>
        <Link to="/estates" className="btn btn--dark">← Back to Estates</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-inner">
        <motion.div
          className="estate-detail"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/estates" className="detail-back">← All Estates</Link>

          <div className="detail-header">
            {(estate.isNew || estate.isPromo) && (
              <span className="detail-badge">
                {estate.isNew ? "🆕 New Estate" : "🎉 Promo Active"}
              </span>
            )}
            <h1 className="detail-name">{estate.name}</h1>
            <p className="detail-location">📍 {estate.location}</p>
            <p className="detail-price">{estate.priceLabel}</p>
          </div>

          {estate.promoDetails && (
            <div className="detail-promo-box">
              <strong>Promo:</strong> {estate.promoDetails}
            </div>
          )}

          <p className="detail-desc">{estate.description}</p>

          {estate.landmarks && estate.landmarks.length > 0 && (
            <div className="detail-section">
              <h2>Landmarks</h2>
              <ul>
                {estate.landmarks.map((lm, i) => <li key={i}>🏫 {lm}</li>)}
              </ul>
            </div>
          )}

          {estate.goodFor && (
            <div className="detail-section">
              <h2>Good For</h2>
              <div className="detail-tags">
                {estate.goodFor.map((g, i) => <span key={i} className="tag">{g}</span>)}
              </div>
            </div>
          )}

          {estate.landUseOptions && (
            <div className="detail-section">
              <h2>Land Use Options</h2>
              <ul>
                {estate.landUseOptions.map((o, i) => <li key={i}>✅ {o}</li>)}
              </ul>
            </div>
          )}

          {estate.farmingPackages && (
            <div className="detail-section">
              <h2>Farming Packages</h2>
              <div className="detail-tags">
                {estate.farmingPackages.map((f, i) => <span key={i} className="tag">{f}</span>)}
              </div>
            </div>
          )}

          {estate.whatYouGet && (
            <div className="detail-section">
              <h2>What You Get</h2>
              <ul>
                {estate.whatYouGet.map((w, i) => <li key={i}>🎁 {w}</li>)}
              </ul>
            </div>
          )}

          {estate.facilities && estate.facilities.length > 0 && (
            <div className="detail-section">
              <h2>Estate Facilities</h2>
              <div className="detail-facilities">
                {estate.facilities.map((f, i) => (
                  <div key={i} className="facility-item">
                    <span>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="detail-cta">
            <h2>Interested? Contact Us</h2>
            <div className="detail-cta__actions">
              <a href={`tel:${contacts.phone1}`} className="btn btn--dark">
                📞 {contacts.phone1}
              </a>
              <a href={`tel:${contacts.phone2}`} className="btn btn--dark">
                📞 {contacts.phone2}
              </a>
              <a
                href={`https://wa.me/${contacts.whatsapp1}?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(estate.name)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn--wa"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
