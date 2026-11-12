import { useState } from "react";
import { motion } from "framer-motion";
import EstateCard from "../components/EstateCard";
import { estates } from "../data/estates";
import "./Estates.css";

const residential = estates.filter((e) => e.category === "residential");

const stateFilters = ["All", ...Array.from(new Set(residential.map((e) => e.state))).sort()];

export default function Estates() {
  const [activeState, setActiveState] = useState("All");

  const filtered = activeState === "All"
    ? residential
    : residential.filter((e) => e.state === activeState);

  return (
    <main className="page">
      <div className="page-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Estates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Explore all available land plots across Nigeria's fastest-growing corridors.
        </motion.p>
      </div>

      {/* State filter tabs */}
      <div className="page-inner">
        <div className="filter-tabs">
          {stateFilters.map((s) => (
            <button
              key={s}
              className={`filter-tab${activeState === s ? " filter-tab--active" : ""}`}
              onClick={() => setActiveState(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="estates-grid">
          {filtered.map((e, i) => (
            <EstateCard key={e.id} estate={e} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
