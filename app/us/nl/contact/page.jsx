'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";
import { assets } from "@/assets/assets";

export const dynamic = 'force-dynamic';

/*
ContactPage.jsx
- Twee CTA-knoppen: Gebedsverzoek en Getuigenis Delen (openen bijbehorende modale formulieren)
- Hero, contactgegevens, Google Maps embed, responsieve lay-out
- Tailwind CSS utility classes
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
    alert("Dank je — je inzending is ontvangen.");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src={assets.UNAWARE}
          alt="Kerk hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Contact & Connect
            </h1>
            <p className="mt-3 text-gray-200 max-w-2xl">
              We horen graag van je — gebedsverzoeken, getuigenissen,
              vrijwilligersmogelijkheden of algemene vragen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACTIES */}
      <section className="py-12 px-6 md:px-20 bg-white text-black">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold">Hoe kunnen we u van dienst zijn?</h2>
          <p className="text-gray-800 mt-2">
            Kies hieronder een optie en vul het korte formulier in.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setActiveForm("prayer")}
              className="px-8 py-3 rounded-lg font-semibold shadow"
              style={{ backgroundColor: "#1A237E", color: "white" }}
            >
              Gebedsverzoek
            </button>

            <button
              onClick={() => setActiveForm("testimony")}
              className="px-8 py-3 rounded-lg font-semibold shadow"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              Deel Getuigenis
            </button>

            <button
              href="/programs"
              className="px-6 py-3 rounded-lg font-semibold border border-black/10"
            >
              Programma's & Evenementen bekijken
            </button>
          </div>
        </motion.div>
      </section>

      {/* CONTACTGEGEVENS */}
      <section className="py-12 px-6 md:px-20 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4">
            
            {/* Hoofdkerk - Houston, TX */}
            <div className="flex items-start gap-3">
              <FiMapPin size={28} className="text-red-600" />
              <div>
                <h4 className="font-semibold">Hoofdlocatie - Houston, TX</h4>
                <p className="text-gray-800">
                  Church Street 1234<br />
                  Houston, TX 77002<br />
                  Verenigde Staten
                </p>
              </div>
            </div>

            {/* Florida Vestiging */}
            <div className="flex items-start gap-3">
              <FiMapPin size={28} className="text-red-600" />
              <div>
                <h4 className="font-semibold">Florida Vestiging</h4>
                <p className="text-gray-800">
                  Davie Boulevard 3201<br />
                  Fort Lauderdale, FL 33312<br />
                  Verenigde Staten
                </p>
              </div>
            </div>

            {/* Telefoon */}
            <div className="flex items-start gap-3">
              <FiPhone size={28} className="text-red-600" />
              <div>
                <h4 className="font-semibold">Telefoon</h4>
                <p className="text-gray-800">+1 (312) 714-0794</p>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start gap-3">
              <FiMail size={28} className="text-red-600" />
              <div>
                <h4 className="font-semibold">E-mail</h4>
                <p className="text-gray-800">contact@yourchurch.org</p>
              </div>
            </div>

          </motion.div>

          {/* Google Map */}
          <div className="md:col-span-2">
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <div className="w-full h-[320px] rounded-lg overflow-hidden border border-black/10">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  title="Kerklocaties - VS"
                  src="https://www.google.com/maps?q=3201+Davie+Boulevard,+Fort+Lauderdale,+FL+33312&output=embed"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODALE FORMULIEREN */}
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
              <button className="absolute top-4 right-4" onClick={() => setActiveForm(null)} aria-label="Sluiten">
                <FiX />
              </button>

              <h3 className="text-2xl font-bold mb-1">
                {activeForm === "prayer" ? "Gebedsverzoek" : "Deel Getuigenis"}
              </h3>
              <p className="text-gray-600 mb-4">
                {activeForm === "prayer"
                  ? "Stuur ons uw gebedsverzoek. Ons gebedsteam zal met u meebidden."
                  : "Deel uw getuigenis — we vieren wat God heeft gedaan!"}
              </p>

              <form onSubmit={submitForm} className="flex flex-col gap-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Volledige naam"
                  className="p-3 border rounded"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mailadres"
                  type="email"
                  className="p-3 border rounded"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefoon (optioneel)"
                  className="p-3 border rounded"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={activeForm === "prayer" ? "Uw gebedsverzoek..." : "Uw getuigenis..."}
                  className="p-3 border rounded h-36 resize-none"
                  required
                />

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-md font-semibold"
                    style={{ backgroundColor: activeForm === "prayer" ? "#1A237E" : "#6A1B9A", color: "white" }}
                  >
                    Verzenden
                  </button>

                  <button
                    type="button"
                    className="flex-1 py-3 rounded-md border border-black/10"
                    onClick={() => {
                      setActiveForm(null);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                  >
                    Annuleren
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