import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ShieldCheck, 
  Layers, 
  Calendar, 
  ArrowRight, 
  Gift, 
  Sprout, 
  CheckCircle2,
} from 'lucide-react';
import { ALL_ESTATES, COMPANY_INFO } from '../data/estatesData';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  // Top 3 spotlight estates for clean home page
  const spotlights = ALL_ESTATES.filter((e) =>
    ['joys-court-garden', 'queen-estate', 'danabid-farmland-akanran'].includes(e.id)
  );

  return (
    <div className="bg-white text-gray-900">

      {/* 1. Hero Section */}
      <section className="border-b border-gray-100 py-10 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-semibold mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Danabid Homes &amp; Properties • Lagos, Ibadan &amp; Ogun</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[20px] sm:text-[24px] font-bold text-gray-900 tracking-tight max-w-2xl mx-auto"
          >
            Where Smart Investors Find Peace of Mind: Verified Land in Plots &amp; Acres
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-[14px] text-gray-600 max-w-xl mx-auto leading-relaxed"
          >
            Buy genuine, verified land in Lagos, Ibadan, and Ogun State with instant physical
            allocation, zero omo-onile issues, and free weekly site inspections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/estates"
              className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] flex items-center gap-1.5 transition-colors"
            >
              Explore Estates
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/promos"
              className="px-5 py-2.5 rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-[13px] flex items-center gap-1.5 transition-colors"
            >
              <Gift className="w-3.5 h-3.5" />
              View Promos
            </Link>
            <Link
              to="/inspection"
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold text-[13px] flex items-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Free Inspection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Promotion Notice Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px]">
          <div className="flex items-center gap-2 text-gray-800">
            <Gift className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Active Promotions:</strong> Honor Estate from ₦700k (Bonus Plots) • Daniel's Court ₦5M • Victory Phase 3 ₦1.2M
            </span>
          </div>
          <Link to="/promos" className="font-bold text-emerald-700 hover:underline shrink-0">
            View All Promos →
          </Link>
        </div>
      </section>

      {/* 3. Featured Estate Cards with Framer Motion */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[18px] font-bold text-gray-900">Featured Opportunities</h2>
            <p className="text-[14px] text-gray-600 mt-0.5">
              Explore our top prime estates with verified titles and dry topography.
            </p>
          </div>
          <Link
            to="/estates"
            className="text-[13px] font-bold text-emerald-700 hover:underline flex items-center gap-1"
          >
            <span>View All 16 Estates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {spotlights.map((estate, i) => (
            <motion.div
              key={estate.id}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img src={estate.image} alt={estate.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/90 text-gray-900 text-[11px] font-bold border border-gray-200">
                    {estate.state}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-[15px] font-bold text-gray-900">{estate.name}</h3>
                  <div className="flex items-start gap-1 text-[12px] text-gray-600">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{estate.location}</span>
                  </div>
                  <p className="text-[13px] text-gray-600 line-clamp-2 leading-normal">
                    {estate.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-gray-100 flex items-center justify-between mt-3">
                <div>
                  <span className="text-[11px] text-gray-500 block">Outright Price</span>
                  <span className="text-[16px] font-extrabold text-emerald-700">{estate.priceFormatted}</span>
                </div>
                <Link
                  to="/estates"
                  className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-800 text-[12px] font-semibold"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Danabid Farmland Quick Feature */}
      <section className="bg-gray-50 border-y border-gray-200 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2 max-w-xl">
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Agribusiness &amp; Investment
              </span>
              <h2 className="text-[18px] font-bold text-gray-900">
                Danabid Farmland — Akanran, Ibadan
              </h2>
              <p className="text-[14px] text-gray-600">
                "Where Land Grows Money Before It Grows in Value." 15 minutes from Ilaji Hotel &amp; Resort.
                Plots at ₦500k and full acres at ₦3M with instant allocation and free cultivation support.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/farmland"
                className="px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] flex items-center gap-1.5"
              >
                <Sprout className="w-4 h-4" />
                <span>Explore Farmland</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Key Trust Metrics & Inspection Callout */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <ShieldCheck className="w-6 h-6 text-emerald-700 mx-auto" />,
              title: 'Zero Omo-Onile Issues',
              desc: '100% legally cleared land with registered surveys and deeds.',
            },
            {
              icon: <Calendar className="w-6 h-6 text-emerald-700 mx-auto" />,
              title: 'Free Weekly Inspections',
              desc: 'Free inspection rides depart every Thursday & Saturday from Aleshinloye Ibadan.',
            },
            {
              icon: <Layers className="w-6 h-6 text-emerald-700 mx-auto" />,
              title: 'Plots & Full Acres',
              desc: 'From 500sqm residential plots to 50+ acres for commercial agriculture.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              className="p-4 rounded-xl border border-gray-200 bg-white space-y-1"
            >
              {item.icon}
              <h3 className="text-[15px] font-bold text-gray-900">{item.title}</h3>
              <p className="text-[13px] text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Inspection Banner */}
        <motion.div
          className="mt-8 p-6 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-[16px] font-bold text-gray-900">Reserve a Seat on Our Free Inspection Bus</h3>
            <p className="text-[14px] text-gray-600 mt-0.5">
              Departing every Thursday &amp; Saturday at 10:00 AM from Prymetyme Plaza, Aleshinloye, Ibadan.
            </p>
          </div>
          <Link
            to="/inspection"
            className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] shrink-0"
          >
            Book Free Inspection Seat
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
