import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./EstateCard.css";

export default function EstateCard({ estate, index = 0 }) {
  const isPromo = estate.isPromo;
  const isNew = estate.isNew;

  return (
    <motion.div
      className={`estate-card${isPromo ? " estate-card--promo" : ""}${isNew ? " estate-card--new" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
    >
      {(isPromo || isNew) && (
        <div className="estate-card__badge">
          {isNew ? "🆕 New" : "🎉 Promo"}
        </div>
      )}

      <div className="estate-card__body">
        <p className="estate-card__state">{estate.state} State</p>
        <h3 className="estate-card__name">{estate.name}</h3>
        <p className="estate-card__location">📍 {estate.location}</p>
        <p className="estate-card__price">{estate.priceLabel}</p>
        {estate.promoDetails && (
          <p className="estate-card__promo-detail">✅ {estate.promoDetails}</p>
        )}
        {estate.landmarks && estate.landmarks.length > 0 && (
          <ul className="estate-card__landmarks">
            {estate.landmarks.slice(0, 2).map((lm, i) => (
              <li key={i}>🏫 {lm}</li>
            ))}
          </ul>
        )}
        <p className="estate-card__desc">{estate.description}</p>
      </div>

      <div className="estate-card__footer">
        <Link to={`/estates/${estate.slug}`} className="estate-card__btn">
          View Details
        </Link>
        <a
          href={`https://wa.me/2347047172000?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(estate.name)}`}
          target="_blank"
          rel="noreferrer"
          className="estate-card__wa"
        >
          Enquire
        </a>
      </div>
    </motion.div>
  );
}
