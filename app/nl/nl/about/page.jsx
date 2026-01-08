'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const HomeLayoutExact = () => {
  return (
    <div className="bg-white text-black">

      {/* WELCOME */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src={assets.UNAWARE}
          alt="Kerk hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Over Ons</h1>
            <p className="mt-3 text-gray-200 max-w-2xl">
              We horen graag van u — gebedsverzoeken, getuigenissen, vrijwilligerswerk of algemene vragen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
          Welkom bij NCLM
        </span>

        <h1 className="text-5xl font-extrabold mt-4 mb-3">
          WELKOM THUIS!
        </h1>

        <p className="text-gray-600 max-w-xl mb-12">
          Een levendige, dynamische, multi-etnische en niet-confessionele bediening.
          <br />
          Uw reis naar echt leven en doel begint hier.
        </p>

        {/* Editorial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Over Ons',
              img: '/about.jpg',
              subtitle: 'Wie wij zijn & wat wij geloven',
            },
            {
              title: 'Verbind met Ons',
              img: '/connect.jpg',
              subtitle: 'Word deel van de familie',
            },
            {
              title: 'Vieringen',
              img: '/celebrate.jpg',
              subtitle: 'Ervaar Gods aanwezigheid',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative h-[320px] rounded-xl overflow-hidden group"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-6 left-6">
                <span className="text-white text-xs uppercase tracking-wide">
                  {item.subtitle}
                </span>
                <h3 className="text-white text-xl font-bold mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-black text-white py-24 text-center px-6">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          New Creation Life Ministries International
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          WIJ VORMEN GODDELIJKE LEIDERS
          <br />
          <span className="text-red-600">
            KLAAR OM VOOR CHRISTUS TE LEVEN.
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Het bereiken van de verlorenen, het toerusten van de geredden en het
          uitzenden van leiders naar hun door God gegeven opdrachten voor het
          lichaam van Christus.
        </p>

        <button className="mt-10 px-8 py-3 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition">
          SLUIT JE AAN BIJ DE REVOLUTIE
        </button>
      </section>

      {/* VISIT NCLM */}
      <section className="bg-black pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white text-sm uppercase tracking-widest mb-6">
            Bezoek NCLM
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              'USA',
              'NEDERLAND',
              'NIGERIA',
              'VENEZUELA',
              'Online bekijken',
            ].map((item, i) => (
              <div
                key={i}
                className="relative h-40 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/locations/${item}.jpg`}
                  alt={item}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Wie Wij Zijn
          </span>

          <h2 className="text-4xl font-extrabold mt-4">
            GEEN KERK,
            <br />
            <span className="text-red-600">MAAR EEN REVOLUTIE</span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            New Creation Life Ministries International is een eindtijdbeweging
            die is opgedragen om de kracht van Gods Woord te tonen door
            getransformeerde levens. Wij geloven dat het geloven en gehoorzamen
            van Zijn Woord leidt tot de ontdekking van echt leven en hoop voor de
            eeuwigheid.
          </p>

          <button className="mt-8 px-6 py-3 border rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
            MEER INFORMATIE
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="h-48 bg-gray-200 rounded-xl" />
          <div className="h-48 bg-gray-200 rounded-xl" />
        </div>
      </section>

      {/* GIVING */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-red-50 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold">
              Geef aan New Creation Life Ministries
            </h3>
            <p className="text-gray-600 mt-2">
              Uw vrijgevigheid stelt ons in staat levens te bereiken,
              bestemmingen te transformeren en het evangelie van Jezus Christus
              vooruit te brengen.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 bg-black text-white rounded-full text-[13px] font-semibold">
              GEEF NU
            </button>
            <button className="px-6 py-3 border rounded-full border-black text-sm font-semibold">
              ONDERSTEUN ONS PROJECT
            </button>
          </div>
        </div>
      </section>

      {/* MAILING LIST */}
      <section className="bg-red-700 mt-24 py-20 px-6 text-white text-center">
        <h3 className="text-sm uppercase tracking-widest mb-4">
          Word Lid van Onze Mailinglijst
        </h3>

        <p className="text-sm text-red-100 mb-8 max-w-xl mx-auto">
          Ontvang bemoedigende, geloofsopbouwende updates en bedieningscontent
          van New Creation Life Ministries International.
        </p>

        <form className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="E-mailadres"
            className="w-full px-4 py-3 rounded text-black outline-none"
          />
          <button className="w-full py-3 bg-white text-red-700 font-semibold rounded">
            Verzenden
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomeLayoutExact;
