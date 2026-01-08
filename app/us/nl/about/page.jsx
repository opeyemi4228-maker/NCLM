'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const values = [
  {
    icon: 'https://img.icons8.com/plasticine/100/book.png',
    title: 'Gevaar voor het Woord',
    description: 'We geloven dat de Bijbel het geïnspireerde, onfeilbare Woord van God is en de uiteindelijke autoriteit voor geloof en praktijk.',
    verse: 'Psalm 119:105'
  },
  {
    icon: 'https://img.icons8.com/doodle/48/fire-element--v1.png',
    title: 'Door de Geest Bekrachtigd',
    description: 'We zoeken de volheid en kracht van de Heilige Geest in elk aspect van ons werk en persoonlijk leven.',
    verse: 'Handelingen 1:8'
  },
  {
    icon: 'https://img.icons8.com/bubbles/100/earth-planet.png',
    title: 'Koninkrijksgericht',
    description: 'We zijn toegewijd aan het bevorderen van Gods Koninkrijk op aarde door discipelschap, evangelisatie en transformatie.',
    verse: 'Mattheüs 6:33'
  },
  {
    icon: 'https://img.icons8.com/clouds/100/filled-like.png',
    title: 'Liefde Gedreven',
    description: 'We tonen Christus\' liefde door authentieke relaties, barmhartige dienst en opofferende geven.',
    verse: '1 Johannes 4:19'
  },
  {
    icon: 'https://img.icons8.com/hands/100/pray.png',
    title: 'Afhankelijk van Gebed',
    description: 'We erkennen dat niets van eeuwige waarde gebeurt zonder vurige, volhardende gebed.',
    verse: '1 Thessalonicenzen 5:17'
  },
  {
    icon: 'https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/100/external-star-rated-users-for-seo-works-isolated-on-a-white-background-seo-fresh-tal-revivo.png',
    title: 'Gericht op Uitmuntendheid',
    description: 'We streven naar uitmuntendheid in alles wat we doen als een offer van aanbidding aan God die het beste voor ons gaf.',
    verse: 'Kolossenzen 3:23'
  }
];

const beliefs = [
  {
    title: 'De Schrift',
    content: 'We geloven dat de Bijbel het verbaal geïnspireerde en onfeilbare woord van God is, de basis en grond voor het vaststellen van alle waarheid.',
    verse: '2 Timoteüs 3:16, 2 Petrus 1:20-21'
  },
  {
    title: 'God',
    content: 'We geloven dat er slechts één God is, bestaande in drie Personen: God de Vader, God de Zoon en God de Heilige Geest. Ieder is een onderscheiden Persoon, maar zij zijn allen van één wezen. Zij hebben dezelfde natuur, volmaaktheid en eigenschappen en zijn waardig om aanbeden te worden in de schoonheid van heiligheid en totale gehoorzaamheid.',
    verse: 'Genesis 1:1-3,26; Mattheüs 3:16-17; Efeziërs 4:5-6'
  },
  {
    title: 'Jezus Christus',
    content: 'We geloven in de godheid van de Here Jezus Christus, dat Hij God en ook mens is. We geloven dat Hij de gezochte Zoon van God is, geboren uit de maagd Maria door de Heilige Geest; dat Hij lichamelijk op deze aarde heeft gewandeld, voor ons aan het kruis van Calvarië gestorven is, begraven werd, op de derde dag opstond en is opgevaren naar de hemel om bij de Vader te zijn.',
    verse: 'Johannes 1:1-4, Johannes 10:30, Hebreeën 1:1-5'
  },
  {
    title: 'Heilige Geest',
    content: 'We geloven dat de Heilige Geest de derde Persoon in de Godheid is. Hij bestaat naast de Vader en de Zoon. De Heilige Geest was en is nog steeds de kracht van God in de schepping, de belangrijkste overtuiger van zonde, de voornaamste agent in de wedergeboorte van de menselijke ziel en de Trooster van de gelovige. De Heilige Geest is verantwoordelijk voor de kerk – het Lichaam van Christus. Daarnaast is Hij de enige Gever van geestelijke gaven aan de gelovige.',
    verse: 'Johannes 16:1-13; Mattheüs 3:11; Handelingen 5:3-4; 1 Korintiërs 12:1-11; Efeziërs 1:13-14'
  },
  {
    title: 'De Mens',
    content: 'We geloven dat de mens Gods directe schepping is - lichaam, ziel en geest. De mens werd geschapen naar het beeld en de gelijkenis van God. Daarom is de mens op geen enkele manier het resultaat van evolutie. Adams zonde en val resulteerden in de val van de schepping en het menselijk ras, zowel geestelijk als fysiek.',
    verse: 'Genesis 1:26-27; Romeinen 3:10, 5:12, 8:18-23'
  },
  {
    title: 'Salvatie',
    content: 'We geloven dat redding alleen bereikt kan worden door oprechte bekering en geloof in het reinigende bloed van Jezus. Dat allen die door geloof accepteren, belijden en geloven in Jezus Christus als Verlosser, opnieuw geboren worden door de Heilige Geest en zo kinderen van God worden. Zaligmaking omvat verlossing, wedergeboorte, heiliging en verheerlijking.',
    verse: 'Lucas 24:47; Johannes 17:16-22; Handelingen 3:19; Romeinen 10:9-10, 5:7-11; Kolossenzen 1:13-14, 21-22'
  },
  {
    title: 'Nieuwe Mens',
    content: 'We geloven dat iedereen die oprecht opnieuw geboren is, niet langer een zondaar is, maar de gerechtigheid van God in Christus Jezus. Dat door geloof de gelovige het nieuwe leven van heiligheid en gerechtigheid voor God kan leven.',
    verse: '2 Korintiërs 5:17; Galaten 2:20; Romeinen 3:22, 4:25, 6:6, 8:10'
  },
  {
    title: 'Doop met de Heilige Geest',
    content: 'We geloven in de doop en de inwoning van de Heilige Geest, dat wanneer een persoon de Heilige Geest ontvangt, hij goddelijke kracht en bekwaamheid ontvangt voor het christelijke leven, bediening en getuigenis.',
    verse: 'Handelingen 1:8, 2:4, 4:5-12'
  },
  {
    title: 'Genezing',
    content: 'We geloven dat het verlossingswerk van Christus aan het kruis goddelijke genezing biedt voor lichaam, ziel en geest. Dat goddelijke genezing in de naam van Jezus Christus bereikbaar is door geloof in Zijn naam.',
    verse: 'Handelingen 3:16, Handelingen 9:32-35, 1 Petrus 2:24'
  },
  {
    title: 'Welvaart',
    content: 'We geloven in de voorspoed van de Kerk en de heiligen. We geloven dat het Gods wil is dat Zijn kinderen rijk en welvarend zijn in alle gebieden van hun leven, inclusief financieel.',
    verse: 'Deuteronomium 8:18; Mattheüs 19:29; Marcus 10:30; Efeziërs 1:3; 2 Petrus 1:3; 3 Johannes 1:2'
  },
  {
    title: 'Huwelijk',
    content: 'We geloven in de heiligheid van het huwelijk, dat de vereniging van het huwelijk eervol is en alleen tussen een man en een vrouw volgens de Bijbel; in overeenstemming met de goddelijke instelling in de Hof van Eden.',
    verse: 'Genesis 2:21-25, Genesis 5:2, Mattheüs 19:4-6'
  },
  {
    title: 'De Wederkomst',
    content: 'We geloven in de tweede komst van Christus en de opname van de Kerk. Dat onze Here Jezus Christus uit de hemel zal neerdalen met het geluid van trompetten of aartsengelen om Zijn bruid - de kerk, de heiligen - te nemen om met Hem te heersen.',
    verse: 'Mattheüs 29:30, 1 Thessalonicenzen 4:16-17'
  },
  {
    title: 'Gods Laatste Oordeel',
    content: 'We geloven in de uiteindelijke opstanding van zowel de behoudenen als de onbekeerden, de eersten tot eeuwig leven en de laatsten tot eeuwig oordeel. We geloven dat iedereen die Jezus Christus accepteert als Heer en Verlosser en in het geloof volhardt tot het einde, zalig zal worden, en dat iedereen die het geschenk van redding weigert, het oordeel van God zal ondervinden.',
    verse: '1 Korintiërs 15:12-23, Openbaring 20:11-15'
  }
];

const timeline = [
  {
    year: '2012',
    title: 'Het Begin',
    description: 'New Creation Life Ministries werd geboren met een visie om goddelijke leiders op te voeden en levens te transformeren door het Evangelie.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop'
  },
  {
    year: '2012',
    title: 'Eerste Kerkplant',
    description: 'De bediening breidde zich uit met de oprichting van onze eerste kerkplant, wat het begin markeerde van onze wereldwijde reikwijdte.',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop'
  },
  {
    year: '2020',
    title: 'Internationale Uitbreiding',
    description: 'Opgericht in meerdere landen waaronder de VS, Nederland, Nigeria en Venezuela.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'
  },
  {
    year: '2021',
    title: 'Leiderschapsinstituut',
    description: 'Opgericht ons Leadership Training Institute om de volgende generatie koninkrijksleiders toe te rusten en te versterken.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
  },
  {
    year: '2025',
    title: 'Wereldwijde Impact',
    description: 'Nu actief in 30+ landen met 50+ gestichte kerken en duizenden levens getransformeerd door de kracht van God.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
  },
  {
    year: '2026',
    title: 'Digitale Bediening',
    description: 'Aangepast en gegroeid tijdens wereldwijde uitdagingen door onze digitale outreach en online ministerieplatforms uit te breiden.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop'
  },
];

const stats = [
  { number: '25+', label: 'Jaren Dienst' },
  { number: '4+', label: 'Gestichte kerken' },
  { number: '10+', label: 'Bereikte naties' },
  { number: '10K+', label: 'Levens Getransformeerd' },
  { number: '1K+', label: 'Leiders Opgeleid' },
  { number: '5+', label: 'Wekelijkse Programma\'s' }
];

export default function AboutUsPage() {
  const [selectedBelief, setSelectedBelief] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop"
            alt="New Creation Life Ministries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full lg:mt-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-yellow-500 bg-red-400/10 backdrop-blur px-5 py-2 rounded-full border border-yellow-400/20">
              Over New Creation Life Ministries
            </span>
            
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-black leading-tight mb-6 text-white">
              GEEN KERK,
              <span className="block text-yellow-500">MAAR EEN GEMEENSCHAP</span>
            </h1>
            
            <p className="text-[18px] text-gray-200 leading-relaxed mb-6">
              NCLM International heeft een goddelijke opdracht om goddelijke leiders en heiligen op te voeden die volledig toegewijd zijn aan het Evangelie van Jezus Christus.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
                Ons Verhaal
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                Wat We Geloven
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll om te ontdekken</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-white/80 mb-4 block">
              Onze Missie
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-5xl mx-auto mb-8">
              DE VERLORENEN BEREIKEN, DE GEREDEN UITRUSTEN, LEIDERS VRIJLATEN
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Onze missie is de wereld te bereiken met Gods liefde door Zijn onverdunde en compromisloze Woord, de heiligen te positioneren voor de overvloedige beweging van de Heilige Geest in deze laatste dagen, en leiders toe te rusten en vrij te laten in hun Godgegeven roepingen voor het Lichaam van Christus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-red-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
              Ons Verhaal
            </span>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Een Visie Geboren Uit
              <span className="block text-red-600">Een Goddelijke Ontmoeting</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                New Creation Life Ministries International is een levendige, dynamische, multi-etnische en niet-denominatiegebonden bediening met een goddelijke opdracht om goddelijke leiders en heiligen op te voeden die bereid zijn hun leven te geven voor het Evangelie van onze Here en Verlosser, Jezus Christus.
              </p>
              <p>
                Ook bekend als NCLM, staat de bediening als een eindtijdrevolutie die zich inzet om de verloren te bereiken, de geredde toe te rusten en leiders vrij te laten in hun God-bepaalde roepingen voor het Lichaam van Christus. We geloven in de kracht van Gods Woord om levens te veranderen en benadrukken de praktische toepassing ervan in wie wij zijn en wat wij geroepen zijn te doen.
              </p>
              <p>
                We begrijpen dat geloven en gehoorzamen aan Gods Woord leidt tot de ontdekking van het ware leven en eeuwige hoop. Onze inzet is om te dienen voor bestemming—gelovigen te helpen via Gods Woord alles te worden wat God voor hen heeft bedoeld en Zijn aard te weerspiegelen in elk aspect van leven, gezin en gemeenschap.
              </p>
            </div>

            <button className="mt-8 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
              Lees het volledige verhaal
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
                  alt="Bediening"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop"
                  alt="Gemeenschap"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
                  alt="Aanbidding"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop"
                  alt="Onderwijs"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
              Wat Ons Aandrijft
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dit zijn de niet-onderhandelbare principes die elke beslissing leiden, elk ministerie vormen en definiëren wie we zijn als beweging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all"
              >
                {typeof value.icon === 'string' && value.icon.startsWith('http') ? (
                  <img src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
                ) : (
                  <div className="text-5xl mb-4">{value.icon}</div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                <div className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                  {value.verse}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
            Geloofsbelijdenis
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Waar We In Geloven
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Onze overtuigingen zijn geworteld in de tijdloze waarheid van Gods Woord en het historische christelijke geloof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedBelief(belief)}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{belief.title}</h3>
                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{belief.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
            Download Volledige Geloofsbelijdenis
          </button>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
              Onze Reis
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Een Erfenis van Impact
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Van bescheiden begin tot wereldwijde impact—zie hoe God gewerkt heeft door New Creation Life Ministries.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900" />
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Doe mee met de revolutie
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Je bent gemaakt voor meer dan een gewoon bestaan. Ontdek je roeping, omarm je bestemming en maak een eeuwige impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Bezoek ons deze zondag
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                Neem contact met ons op
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BELIEF DETAIL MODAL */}
      <AnimatePresence>
        {selectedBelief && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedBelief(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black text-gray-900">{selectedBelief.title}</h3>
                <button
                  onClick={() => setSelectedBelief(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedBelief.content}</p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-2">
                  Lees meer in onze volledige verklaring
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}