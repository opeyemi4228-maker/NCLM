"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";
import { assets } from "@/assets/assets";

/*
ContactPage.jsx
- Two CTA buttons: Prayer Request and Testimony (open respective modal forms)
- Hero, contact details, Google Map embed, responsive layout
- Tailwind CSS utility classes
- Replace map src, images, and contact details with your real data
*/

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState(null); // "prayer" | "testimony" | null
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submitForm(e) {
    e.preventDefault();
    console.log("Submit", { type: activeForm, ...formData, createdAt: new Date().toISOString() });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setActiveForm(null);
    alert("Thank you — your submission has been received.");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src={assets.UNAWARE}
          alt="Church hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Contact & Connect</h1>
            <p className="mt-3 text-gray-200 max-w-2xl">
              We’d love to hear from you — prayer requests, testimonies, volunteering, or general enquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="py-12 px-6 md:px-20 bg-[#ffffff] text-black">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold">How can we serve you?</h2>
          <p className="text-gray-800 mt-2">Choose an option below and fill the short form.</p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setActiveForm("prayer")}
              className="px-8 py-3 rounded-lg font-semibold shadow"
              style={{ backgroundColor: "#1A237E", color: "white" }}
            >
              Prayer Request
            </button>

            <button
              onClick={() => setActiveForm("testimony")}
              className="px-8 py-3 rounded-lg font-semibold shadow"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              Share Testimony
            </button>

            <button
              href="/programs"
              className="px-6 py-3 rounded-lg font-semibold border border-white/10"
            >
              View Programs & Events
            </button>
          </div>
        </motion.div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-12 px-6 md:px-20 bg-slate-100 text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4">
            <div className="flex items-start gap-3">
              <FiMapPin size={28} className="text-purple-600" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-800">6th Avenue Danglo Avenue, Gwarinpa, Abuja, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone size={28} className="text-purple-600" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-800">+234 814 000 0000</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiMail size={28} className="text-purple-600" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-800">contact@yourchurch.org</p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2">
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <div className="w-full h-[320px] rounded-lg overflow-hidden border border-white/10">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  title="Church location - Abuja"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6000000000005!2d7.404170215334208!3d9.067810992522477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a3d3d7c7f37%3A0x1234567890abcdef!2sGwarinpa%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODAL FORMS */}
      <AnimatePresence>
        {activeForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-2xl w-full max-w-xl p-6 relative"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
            >
              <button className="absolute top-4 right-4" onClick={() => setActiveForm(null)}>
                <FiX />
              </button>

              <h3 className="text-2xl font-bold mb-1">{activeForm === "prayer" ? "Prayer Request" : "Share a Testimony"}</h3>
              <p className="text-gray-600 mb-4">
                {activeForm === "prayer"
                  ? "Send us your prayer request. Our prayer team will stand with you in prayer."
                  : "Share your testimony — we celebrate what God has done!"}
              </p>

              <form onSubmit={submitForm} className="flex flex-col gap-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="p-3 border rounded"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  type="email"
                  className="p-3 border rounded"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="p-3 border rounded"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={activeForm === "prayer" ? "Your prayer request..." : "Your testimony..."}
                  className="p-3 border rounded h-36 resize-none"
                  required
                />

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-md font-semibold"
                    style={{ backgroundColor: activeForm === "prayer" ? "#1A237E" : "#6A1B9A", color: "white" }}
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    className="flex-1 py-3 rounded-md border border-white/10"
                    onClick={() => {
                      setActiveForm(null);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
