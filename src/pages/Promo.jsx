import { motion } from "framer-motion";
import EstateCard from "../components/EstateCard";
import { estates } from "../data/estates";
import "./Estates.css";
import "./Promo.css";

const promoEstates = estates.filter((e) => e.isPromo || e.isNew);

export default function Promo() {
  return (
    <main className="page">
      <div className="page-hero">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Active Promotions
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
          Limited-time offers on our finest estates — don't miss out!
        </motion.p>
      </div>

      <div className="page-inner">
        {/* Ramadan Promo Banner */}
        <motion.div
          className="promo-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2>🌙 Ramadan Promo</h2>
            <p>Ramadan is a season of blessings — let's help you own a property with ease.</p>
          </div>
          <ul>
            <li><strong>Honor Estate, Ibadan</strong> — ₦700,000 | Bonus plots on bulk purchases</li>
            <li><strong>Daniel's Court, Ikorodu</strong> — ₦5M | FREE Corner Piece</li>
            <li><strong>Victory Estate Phase 3, Ibadan</strong> — ₦1.2M | FREE Corner Piece</li>
          </ul>
        </motion.div>

        <div className="estates-grid">
          {promoEstates.map((e, i) => (
            <EstateCard key={e.id} estate={e} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
