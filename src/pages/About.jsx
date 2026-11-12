import { motion } from "framer-motion";
import "./About.css";

const values = [
  { icon: "🤝", title: "Trust", desc: "We build lasting relationships through transparency and honesty in every transaction." },
  { icon: "🏡", title: "Integrity", desc: "Every piece of land we sell is verified, documented, and inspection-ready." },
  { icon: "📈", title: "Growth", desc: "We help everyday Nigerians build wealth through strategic land ownership." },
  { icon: "⚡", title: "Excellence", desc: "From inspection to allocation — we simplify your real estate journey." },
];

export default function About() {
  return (
    <main className="page">
      <div className="page-hero">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          About Danabid Homes
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
          Turning everyday people into proud landlords since 2015.
        </motion.p>
      </div>

      <div className="page-inner">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Who We Are</h2>
            <p>
              Danabid Homes and Properties Limited is a reputable Nigerian real estate company
              dedicated to helping individuals and investors acquire genuine, affordable land
              across Nigeria's fastest-growing corridors.
            </p>
            <p>
              With a portfolio spanning Ibadan, Lagos, Ogun and beyond, we provide verified
              plots in prime locations — from residential estates to farmlands — all backed by
              proper documentation and instant allocation.
            </p>
            <p>
              Our mission is simple: <strong>Secure · Affordable · Verified.</strong> No stress.
              No stories. Just results.
            </p>

            <h2 style={{ marginTop: "32px" }}>Our Office</h2>
            <p>
              Prymetyme Plaza, Plot 3 Block VIII,<br />
              Oba Aleshinloye Phase II, Jericho,<br />
              Frin Rd, Aleshinloye, Ibadan, Oyo State
            </p>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="value-card__icon">{v.icon}</span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tagline wall */}
        <div className="tagline-section">
          <h2>Our Promise</h2>
          <div className="taglines">
            {[
              "From inspection to allocation — Danabid simplifies your real estate journey.",
              "Stop dreaming. Start owning. Danabid makes it possible.",
              "Where value meets vision — Danabid Homes & Properties.",
              "Danabid Homes & Properties — Turning everyday people into proud landlords.",
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                className="tagline"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                "{t}"
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
