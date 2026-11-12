import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { estates, contacts } from "../data/estates";
import "./Farmland.css";

const farmlands = estates.filter((e) => e.category === "farmland");

export default function Farmland() {
  return (
    <main className="page">
      <div className="page-hero">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Danabid Farmland
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
          "Where Land Grows Money Before It Grows in Value"
        </motion.p>
      </div>

      <div className="page-inner">
        {farmlands.map((farm, idx) => (
          <motion.div
            key={farm.id}
            className="farmland-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="farmland-card__header">
              <h2>{farm.name}</h2>
              <span className="farmland-price">{farm.priceLabel}</span>
            </div>
            <p className="farmland-location">📍 {farm.location}</p>

            {farm.landmarks && farm.landmarks.length > 0 && (
              <ul className="farmland-landmarks">
                {farm.landmarks.map((lm, i) => <li key={i}>🏕️ {lm}</li>)}
              </ul>
            )}

            <p className="farmland-desc">{farm.description}</p>

            {farm.whatYouGet && (
              <div className="farmland-section">
                <h3>What You Get</h3>
                <ul>
                  {farm.whatYouGet.map((w, i) => <li key={i}>🎁 {w}</li>)}
                </ul>
              </div>
            )}

            {farm.landUseOptions && (
              <div className="farmland-section">
                <h3>Land Use Options</h3>
                <div className="farmland-tags">
                  {farm.landUseOptions.map((o, i) => <span key={i} className="tag">{o}</span>)}
                </div>
              </div>
            )}

            {farm.farmingPackages && (
              <div className="farmland-section">
                <h3>Farming Packages</h3>
                <div className="farmland-tags">
                  {farm.farmingPackages.map((f, i) => <span key={i} className="tag">{f}</span>)}
                </div>
              </div>
            )}

            {farm.facilities && (
              <div className="farmland-section">
                <h3>Estate Facilities</h3>
                <div className="farmland-facilities">
                  {farm.facilities.map((f, i) => (
                    <div key={i} className="facility-item">
                      <span>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="farmland-cta">
              <a href={`tel:${contacts.phone1}`} className="btn btn--dark">📞 Call Now</a>
              <a
                href={`https://wa.me/${contacts.whatsapp1}?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(farm.name)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn--wa"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        ))}

        {/* Farmland contacts */}
        <motion.div
          className="farmland-contacts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Farmland Dedicated Contacts</h3>
          <div className="farmland-contacts__grid">
            <a href="tel:+2347044433316" className="contact-pill">📞 Danabid: +234 704 443 3316</a>
            <a href="tel:+2347047172000" className="contact-pill">📞 Danabid: +234 704 717 2000</a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
