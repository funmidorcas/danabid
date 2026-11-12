import { useState } from "react";
import { motion } from "framer-motion";
import { contacts } from "../data/estates";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.location.href = `mailto:${contacts.email}?subject=${encodeURIComponent(form.subject || "Enquiry from Website")}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="page">
      <div className="page-hero">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Contact Us
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
          We're ready to help you secure your dream land. Reach out today.
        </motion.p>
      </div>

      <div className="page-inner">
        <div className="contact-grid">
          {/* Info panel */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get In Touch</h2>

            <div className="contact-info__item">
              <span className="contact-info__icon">📍</span>
              <div>
                <strong>Office Address</strong>
                <p>{contacts.address}</p>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon">📞</span>
              <div>
                <strong>Call / WhatsApp</strong>
                <a href={`tel:${contacts.phone1}`}>{contacts.phone1}</a>
                <a href={`tel:${contacts.phone2}`}>{contacts.phone2}</a>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon">📱</span>
              <div>
                <strong>Social Media</strong>
                <a href="https://instagram.com/danabidhomesandproperties" target="_blank" rel="noreferrer">
                  {contacts.social}
                </a>
              </div>
            </div>

            {/* WhatsApp buttons */}
            <div className="contact-wa-btns">
              <a
                href={`https://wa.me/${contacts.whatsapp1}?text=Hello%20Danabid%2C%20I%20want%20to%20enquire%20about%20your%20properties.`}
                target="_blank"
                rel="noreferrer"
                className="wa-btn"
              >
                💬 WhatsApp: {contacts.phone1}
              </a>
              <a
                href={`https://wa.me/${contacts.whatsapp2}?text=Hello%20Danabid%2C%20I%20want%20to%20enquire%20about%20your%20properties.`}
                target="_blank"
                rel="noreferrer"
                className="wa-btn"
              >
                💬 WhatsApp: {contacts.phone2}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="contact-form__success">
                <span>✅</span>
                <h3>Message sent!</h3>
                <p>Your email client has opened. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 ..." />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Enquiry about Victory Estate" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about the property you're interested in..."
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message ✉️
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
