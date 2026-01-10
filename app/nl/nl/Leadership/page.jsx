'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const leaders = [
  {
    id: 1,
    name: 'Apostle Kingsley Lawend',
    role: 'Hoofd Pastor, New Creation Life Church International',
    image: assets.Apostle2,
    isLocalAsset: false,
    bio: 'Apostle Kingsley Lawend is de hoofd pastor van New Creation Life Church International. Op 13-jarige leeftijd geroepen door God, wijdde hij zijn leven aan de dienst van God na een levensveranderende ontmoeting met de Heilige Geest. Geboren in Lagos, Nigeria, verhuisde hij in zijn vroege twintigern naar Nederland, waar God hem strategisch plaatste voor training, bediening en voorbereiding voor wereldwijde bediening. Hij is een dynamische prediker en leraar van het Woord, een begaafde en gezalfde psalmist, aanbiddingsleider, songwriter en opname-artiest. Zijn passie voor God en liefde voor mensen zijn zichtbaar in zijn levensstijl en bediening, met een sterke wens om een verse beweging van God en de manifestatie van de Heilige Geest te zien zoals in het boek Handelingen.',
    expertise: [
      'Bijbelse prediking & onderwijs',
      'Profetische & apostolische bediening',
      'Aanbiddingsleiderschap & psalmgezang'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'apostlekingsleylawend@nclm.org'
    },
    quote: "Mijn hartwens is om deze generatie in de kracht van God en het zichtbare werk van de Heilige Geest te zien wandelen, net zoals in het boek Handelingen.",
    achievements: [
      'Oprichter van New Creation Life Church International in 2010',
      'Registratie en oprichting van de stichting in 2012',
      'Diende wereldwijd als prediker, leraar en aanbiddingsminister'
    ]
  },

  {
    id: 2,
    name: 'Pastor Marlien Lawend',
    role: 'Assistent Pastor, Gewijde Minister',
    image: assets.PastorMarlien1,
    isLocalAsset: false,
    bio: 'Pastor Marlien Lawend is een gewijde dienares van het evangelie van Jezus Christus en dient trouw naast haar man, Apostle Kingsley Lawend, in New Creation Life Church International. Ze draagt een diepe passie voor God, mensen en het werk van de bediening en weerspiegelt de liefde van Christus in haar leven en dienst. Met een sterke inzet voor geestelijke groei, navolging en pastorale zorg, bedient ze met genade, wijsheid en nederigheid en raakt levens door onderwijs, gebed en mededogende leiding.',
    expertise: [
      'Pastorale zorg & discipelschap',
      'Leiderschap vrouwenbediening',
      'Onderwijs & counseling'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastormarlienlawend@nclm.org'
    },
    quote: 'Een leven dat overgegeven is aan God wordt een vat waardoor Zijn liefde, genezing en doel zichtbaar worden.',
    achievements: [
      'Gewijde dienares van het evangelie van Jezus Christus',
      'Samenwerker in het leiderschap van New Creation Life Church International',
      'Actief betrokken bij onderwijs, discipelschap en pastorale bediening'
    ]
  },

  {
    id: 3,
    name: 'Pastor Charles Adakole',
    role: 'Resident Pastor, Abuja Kerk',
    image: assets.PastorCharles1,
    isLocalAsset: false,
    bio: 'Pastor Charles Adakole dient als resident pastor van de Abuja Kerk en brengt een sterke pastorale genade met zich mee, met een duidelijke opdracht om een levendige, Woord-centrische en door de Geest geleide kerkgemeenschap te bouwen. Hij zet zich in voor gezaghebbend bijbels onderwijs, discipelschap en praktisch christelijk leven, en helpt gelovigen groeien in geloof, doel en geestelijke volwassenheid.',
    expertise: [
      'Bijbels onderwijs & discipelschap',
      'Pastoraal leiderschap',
      'Kerkgroei & gemeenschapsopbouw'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastorcharles@nclm.org'
    },
    quote: 'Een gezonde kerk is gebouwd op het Woord, gedragen door liefde en versterkt door de Geest.',
    achievements: [
      'Leidt en overziet de gemeente van de Abuja Kerk',
      'Toegewijd aan discipelschap en geestelijke groei van leden',
      'Speelt een sleutelrol in het versterken van kerkstructuur en gemeenschapsimpact'
    ]
  },

  {
    id: 4,
    name: 'Minister Shenn Damon',
    role: 'Minister, Nederland Kerk',
    image: assets.Apostle3,
    isLocalAsset: false,
    bio: 'Minister Shenn Damon dient in het leiderschap van de Nederland Kerk en ondersteunt trouw de visie van New Creation Life Church International. Ze bedient met toewijding, nederigheid en een sterke inzet voor het Woord van God, en levert een bijdrage aan de geestelijke groei, discipelschap en versterking van de kerkelijke gemeenschap.',
    expertise: [
      'Onderwijs & discipelschap',
      'Kerkadministratie & ondersteunende bediening',
      'Gebed & voorbede'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'ministersheandamon@nclm.org'
    },
    quote: 'Trouw dienst in Gods huis brengt blijvende vrucht voort in de levens van Zijn mensen.',
    achievements: [
      'Dient in het leiderschap van de Nederland Kerk',
      'Actief betrokken bij discipelschap en kerkgroei',
      'Ondersteunt de visie en missie van New Creation Life Church International'
    ]
  },

  {
    id: 5,
    name: 'Minister Victor Gonzalez',
    role: 'Pastor, Venezuela Kerk',
    image: assets.Apostle3,
    isLocalAsset: false,
    bio: 'Minister Victor Gonzalez dient als pastor van de Venezuela Kerk en bevordert trouw de visie van New Creation Life Church International binnen zijn regio. Hij is een toegewijde dienaar van God met een hart voor pastoraal leiderschap, discipelschap en het opbouwen van een sterke, op Christus gerichte kerkelijke gemeenschap.',
    expertise: [
      'Pastoraal leiderschap',
      'Onderwijs & discipelschap',
      'Kerkgroei & gemeenschapsontwikkeling'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'ministervictor@nclm.org'
    },
    quote: 'Wanneer het Woord van God met geloof wordt geleefd en onderwezen, worden levens veranderd en gemeenschappen getransformeerd.',
    achievements: [
      'Leidt en overziet de gemeente van de Venezuela Kerk',
      'Toegewijd aan discipelschap en geestelijke volwassenheid van gelovigen',
      'Speelt een sleutelrol in het vergroten van de impact van de kerk binnen de regio'
    ]
  },
];

const departments = [
  {
    name: 'Aanbidding & Creatieve Kunsten',
    icon: 'https://img.icons8.com/plasticine/100/apple-music.png',
    description: 'Creëren van krachtige aanbiddingservaringen die levens transformeren',
    team: 45
  },
  {
    name: 'Kinderen & Gezin Bediening',
    icon: 'https://img.icons8.com/bubbles/100/family.png',
    description: 'Opbouwen van sterke geestelijke fundamenten voor de volgende generatie',
    team: 32
  },
  {
    name: 'Gemeenschapsbereik',
    icon: 'https://img.icons8.com/plasticine/100/conference-call.png',
    description: 'Onze gemeenschap dienen met de liefde van Christus',
    team: 28
  },
  {
    name: 'Discipelschap & Groei',
    icon: 'https://img.icons8.com/clouds/100/training.png',
    description: 'Gelovigen toerusten om te groeien in geloof en volwassenheid',
    team: 24
  },
  {
    name: 'Media & Communicatie',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-media-new-media-flaticons-lineal-color-flat-icons-3.png',
    description: 'Het evangelie verspreiden via digitale platforms',
    team: 18
  },
  {
    name: 'Gebed & Voorbede',
    icon: 'https://img.icons8.com/doodle/100/pray.png',
    description: 'Een huis van gebed bouwen voor alle naties',
    team: 36
  }
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* HERO SECTIE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-950 to-orange-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-bold tracking-wider uppercase bg-white/20 backdrop-blur px-5 py-2 rounded-full">
              Ontmoet ons leiderschapsteam
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Leiders opleiden die
              <span className="block">Naties transformeren</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Ons leiderschapsteam zet zich in om godvruchtige leiders op te leiden, toe te rusten en vrij te geven die een blijvende impact zullen hebben voor het Koninkrijk van God over de hele aarde.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">25+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Jaren Dienst</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">50+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Gestichte kerken</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">30+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Bereikte naties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">1000+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Opgeleide leiders</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEIDERSCHAP TEAM GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Ons pastorale leiderschap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ervaren, gezalfde en gepassioneerde leiders die toegewijd zijn aan het hoeden van Gods volk en het bevorderen van Zijn koninkrijk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all">
                {/* Afbeelding */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Use next/image with 'fill' so the image is optimized and responsive */}
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      <a href={leader.social.twitter} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href={leader.social.linkedin} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={`mailto:${leader.social.email}`} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Inhoud */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-red-600 font-semibold mb-3 uppercase tracking-wide">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {leader.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {leader.expertise.slice(0, 2).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="text-red-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Volledig profiel bekijken
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINISTERIE AFDELINGEN */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Ministerie Afdelingen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Onze toegewijde teams werken samen om de Grote Opdracht te vervullen en onze gemeenschap met uitmuntendheid te dienen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <img src={dept.icon} alt={dept.name} className="w-20 h-20 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{dept.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span className="font-semibold">{dept.team} Teamleden</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPROEP TOT ACTIE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4">
              Sluit je vandaag bij ons aan
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Ben je gepassioneerd om God en Zijn volk te dienen? We zijn altijd op zoek naar begaafde, geroepen en toegewijde personen om ons ministerie te versterken.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Bezoek vandaag nog een vestiging
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                Vrijwilliger worden
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LEIDER DETAIL MODAL - SCROLLBAAR & GEPOSITIONEERD ONDER DE NAVBAR */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedLeader(null)}
          >
            {/* Scrollbare container */}
            <div className="fixed inset-0 overflow-y-auto pt-[50px]">
              <div className="min-h-[calc(100vh-50px)] flex items-start justify-center p-4 py-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl my-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="relative h-72 bg-gradient-to-br from-red-600 to-orange-600">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                    </div>
                    <button
                      onClick={() => setSelectedLeader(null)}
                      className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full flex items-center justify-center transition z-10"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <div className="relative h-full flex items-end p-8">
                      <div className="flex items-end gap-6">
                        <div className="relative w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden flex-shrink-0">
                          {/* Modal avatar using next/image fill */}
                          <Image
                            src={selectedLeader.image}
                            alt={selectedLeader.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="pb-2">
                          <h2 className="text-3xl font-black text-white mb-1">{selectedLeader.name}</h2>
                          <p className="text-lg text-white/90 font-semibold">{selectedLeader.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inhoud */}
                  <div className="p-8">
                    {/* Quote */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl mb-8 border-l-4 border-red-600">
                      <svg className="w-8 h-8 text-red-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-xl text-gray-700 italic font-medium">{selectedLeader.quote}</p>
                    </div>

                    {/* Over */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Over</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedLeader.bio}</p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertisegebieden</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedLeader.expertise.map((skill, i) => (
                          <span key={i} className="px-5 py-2 bg-red-50 text-red-600 font-semibold rounded-full border border-red-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Prestaties */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Belangrijkste prestaties</h3>
                      <ul className="space-y-3">
                        {selectedLeader.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                      <a href={selectedLeader.social.twitter} className="flex-1 min-w-[150px] bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition text-center">
                        Volgen op Twitter
                      </a>
                      <a href={selectedLeader.social.linkedin} className="flex-1 min-w-[150px] bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition text-center">
                        Verbinden op LinkedIn
                      </a>
                      <a href={`mailto:${selectedLeader.social.email}`} className="flex-1 min-w-[150px] bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition text-center">
                        E-mail sturen
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}