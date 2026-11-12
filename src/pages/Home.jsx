import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides, estates, contacts } from "../data/estates";
import EstateCard from "../components/EstateCard";
import "./Home.css";

const featured = estates.filter((e) => e.isPromo || e.isNew).slice(0, 6);
const stats = [
  { label: "Estates", value: "17+" },
  { label: "States", value: "3" },
  { label: "Happy Clients", value: "500+" },
  { label: "Years Experience", value: "10+" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              className="hero__text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero__headline">{heroSlides[slide].headline}</h1>
              <p className="hero__sub">{heroSlides[slide].sub}</p>
            </motion.div>
          </AnimatePresence>

          <div className="hero__actions">
            <Link to="/estates" className="btn btn--dark">Browse Estates</Link>
            <a
              href={`https://wa.me/${contacts.whatsapp1}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Slide dots */}
          <div className="hero__dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`hero__dot${i === slide ? " hero__dot--active" : ""}`}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-band">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stats-band__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className="stats-band__value">{s.value}</span>
            <span className="stats-band__label">{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* ── Promo / Featured Estates ── */}
      <section className="home-section">
        <div className="home-section__header">
          <h2>Current Promotions</h2>
          <Link to="/promo" className="home-section__link">See all →</Link>
        </div>
        <div className="estates-grid">
          {featured.map((e, i) => (
            <EstateCard key={e.id} estate={e} index={i} />
          ))}
        </div>
      </section>

      {/* ── Why Danabid ── */}
      <section className="why-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Danabid?
        </motion.h2>
        <div className="why-grid">
          {[
            { icon: "🔒", title: "Secure Titles", desc: "All our lands come with proper documentation and deed of agreement." },
            { icon: "✅", title: "Verified Land", desc: "No stories — every estate is fully verified and inspection-ready." },
            { icon: "💰", title: "Affordable Prices", desc: "Flexible payment options for every budget and investment size." },
            { icon: "📍", title: "Prime Locations", desc: "Strategically located in fast-developing corridors across Nigeria." },
          ].map((w, i) => (
            <motion.div
              key={i}
              className="why-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="why-card__icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <motion.div
          className="cta-banner__inner"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Secure Your Land?</h2>
          <p>Contact us today for inspection and allocation. No stress. No stories. Just results.</p>
          <div className="cta-banner__actions">
            <a href={`tel:${contacts.phone1}`} className="btn btn--dark">Call Now</a>
            <a
              href={`https://wa.me/${contacts.whatsapp1}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--gold"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
