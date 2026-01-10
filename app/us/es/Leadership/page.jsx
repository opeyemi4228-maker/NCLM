'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// NOTA: importa assets como exportación por defecto (ajusta si tu archivo usa exportaciones nombradas)
import { assets } from '@/assets/assets';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const leaders = [
  {
    id: 1,
    name: 'Apóstol Kingsley Lawend',
    role: 'Pastor Principal, New Creation Life Church International',
    image: assets.Apostle2,
    isLocalAsset: false,
    bio: 'El Apóstol Kingsley Lawend es el Pastor Principal de New Creation Life Church International. Llamado por Dios a la edad de 13 años, dedicó su vida al servicio de Dios tras un encuentro transformador con el Espíritu Santo. Nacido en Lagos, Nigeria, se trasladó a los Países Bajos en sus veintitantos, donde Dios lo preparó estratégicamente para formación, servicio y ministerio global. Es un predicador y maestro dinámico, un salmista ungido, líder de adoración, compositor y artista de grabación. Su pasión por Dios y amor por las personas se reflejan en su estilo de vida y ministerio, con un profundo deseo de ver un avivamiento y la manifestación del Espíritu Santo como en el libro de los Hechos.',
    expertise: [
      'Enseñanza y predicación bíblica',
      'Ministerio profético y apostólico',
      'Liderazgo de adoración y salmodia'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'apostlekingsleylawend@nclm.org'
    },
    quote: 'Mi mayor deseo es que esta generación camine en el poder de Dios y en la obra manifiesta del Espíritu Santo, tal como en el libro de los Hechos.',
    achievements: [
      'Fundó New Creation Life Church International en 2010',
      'Registró y estableció el ministerio en 2012',
      'Sirve globalmente como predicador, maestro y ministro de adoración'
    ]
  },

  {
    id: 2,
    name: 'Pastora Marlien Lawend',
    role: 'Pastora Asociada, Ministra Ordenada',
    image: assets.PastorMarlien1,
    isLocalAsset: false,
    bio: 'La Pastora Marlien Lawend es una ministra ordenada del Evangelio de Jesucristo y sirve fielmente junto a su esposo, el Apóstol Kingsley Lawend, en New Creation Life Church International. Tiene una profunda pasión por Dios, por las personas y por la obra del ministerio, mostrando el amor de Cristo a través de su vida y servicio. Con un fuerte compromiso hacia el crecimiento espiritual, el discipulado y el cuidado pastoral, ministra con gracia, sabiduría y humildad, impactando vidas mediante la enseñanza, la oración y el liderazgo compasivo.',
    expertise: [
      'Cuidado pastoral y discipulado',
      'Liderazgo en ministerios de mujeres',
      'Enseñanza y consejería'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastormarlienlawend@nclm.org'
    },
    quote: 'Una vida entregada a Dios se convierte en un vaso a través del cual Su amor, sanidad y propósito se manifiestan.',
    achievements: [
      'Ministra ordenada del Evangelio de Jesucristo',
      'Co-lídera en la dirección de New Creation Life Church International',
      'Activamente involucrada en enseñanza, discipulado y ministerio pastoral'
    ]
  },

  {
    id: 3,
    name: 'Pastor Charles Adakole',
    role: 'Pastor Residente, Iglesia de Abuja',
    image: assets.PastorCharles1,
    isLocalAsset: false,
    bio: 'El Pastor Charles Adakole sirve como Pastor Residente de la iglesia en Abuja, aportando una fuerte gracia pastoral con el mandato de edificar una comunidad eclesial centrada en la Palabra y guiada por el Espíritu. Está comprometido con la enseñanza bíblica sólida, el discipulado y la vida cristiana práctica, ayudando a los creyentes a crecer en fe, propósito y madurez espiritual.',
    expertise: [
      'Enseñanza bíblica y discipulado',
      'Liderazgo pastoral',
      'Crecimiento de iglesia y construcción comunitaria'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastorcharles@nclm.org'
    },
    quote: 'Una iglesia saludable se edifica sobre la Palabra, se sostiene por amor y se empodera por el Espíritu.',
    achievements: [
      'Supervisa y lidera la congregación de la iglesia en Abuja',
      'Comprometido con el discipulado y el crecimiento espiritual de los miembros',
      'Desempeña un papel clave en el fortalecimiento de la estructura e impacto comunitario de la iglesia'
    ]
  },

  {
    id: 4,
    name: 'Ministra Shenn Damon',
    role: 'Ministra, Iglesia en Países Bajos',
    image: assets.Apostle3,
    isLocalAsset: false,
    bio: 'La Ministra Shenn Damon sirve en el liderazgo de la iglesia en los Países Bajos, apoyando fielmente la visión de New Creation Life Church International. Ministeria con dedicación, humildad y un fuerte compromiso con la Palabra de Dios, contribuyendo al crecimiento espiritual, al discipulado y al fortalecimiento de la comunidad eclesial.',
    expertise: [
      'Enseñanza y discipulado',
      'Administración eclesial y ministerios de apoyo',
      'Oración e intercesión'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'ministersheandamon@nclm.org'
    },
    quote: 'El servicio fiel en la casa de Dios produce fruto duradero en las vidas de Su pueblo.',
    achievements: [
      'Sirve en el liderazgo de la iglesia en los Países Bajos',
      'Activamente involucrada en discipulado y crecimiento de la iglesia',
      'Apoya la visión y misión de New Creation Life Church International'
    ]
  },

  {
    id: 5,
    name: 'Ministro Victor Gonzalez',
    role: 'Pastor, Iglesia en Venezuela',
    image: assets.Apostle3,
    isLocalAsset: false,
    bio: 'El Ministro Victor Gonzalez sirve como pastor de la iglesia en Venezuela, promoviendo la visión de New Creation Life Church International en su región. Es un servidor dedicado con pasión por el liderazgo pastoral, el discipulado y la construcción de una comunidad eclesial sólida centrada en Cristo. A través de la enseñanza y el liderazgo pastoral, se compromete a ver vidas transformadas y creyentes arraigados en la Palabra y empoderados por el Espíritu Santo.',
    expertise: [
      'Liderazgo pastoral',
      'Enseñanza y discipulado',
      'Crecimiento e impacto comunitario de la iglesia'
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'ministervictor@nclm.org'
    },
    quote: 'Cuando la Palabra de Dios se vive y se enseña con fe, las vidas cambian y las comunidades se transforman.',
    achievements: [
      'Lidera y supervisa la congregación de la iglesia en Venezuela',
      'Comprometido con el discipulado y la madurez espiritual de los creyentes',
      'Desempeña un papel clave en la expansión del impacto de la iglesia en la región'
    ]
  },
];

const departments = [
  {
    name: 'Adoración y Artes Creativas',
    icon: 'https://img.icons8.com/plasticine/100/apple-music.png',
    description: 'Creando experiencias de adoración poderosas que transforman vidas',
    team: 45
  },
  {
    name: 'Ministerio de Niños y Familia',
    icon: 'https://img.icons8.com/bubbles/100/family.png',
    description: 'Formando bases espirituales sólidas para la próxima generación',
    team: 32
  },
  {
    name: 'Alcance Comunitario',
    icon: 'https://img.icons8.com/plasticine/100/conference-call.png',
    description: 'Sirviendo a nuestra comunidad con el amor de Cristo',
    team: 28
  },
  {
    name: 'Discipulado y Crecimiento',
    icon: 'https://img.icons8.com/clouds/100/training.png',
    description: 'Equipando a los creyentes para crecer en fe y madurez',
    team: 24
  },
  {
    name: 'Medios y Comunicaciones',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-media-new-media-flaticons-lineal-color-flat-icons-3.png',
    description: 'Difundiendo el Evangelio a través de plataformas digitales',
    team: 18
  },
  {
    name: 'Oración e Intercesión',
    icon: 'https://img.icons8.com/doodle/100/pray.png',
    description: 'Construyendo una casa de oración para todas las naciones',
    team: 36
  }
];

const LeadershipSection = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* SECCIÓN HERO */}
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
              Conoce a nuestro equipo de liderazgo
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Formando líderes que
              <span className="block">Transforman naciones</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Nuestro equipo de liderazgo está comprometido a formar, equipar y enviar líderes piadosos que tendrán un impacto duradero para el Reino de Dios en toda la tierra.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">25+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Años de ministerio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">50+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Iglesias plantadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">30+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Naciones alcanzadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">1000+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Líderes formados</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID DEL EQUIPO DE LIDERAZGO */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Nuestro liderazgo pastoral
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Líderes experimentados, ungidos y apasionados dedicados al cuidado del pueblo de Dios y al avance de Su reino.
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
                {/* Imagen */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Usar next/image con 'fill' para optimizar la imagen y hacerla responsiva */}
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Superposición al pasar el cursor */}
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

                {/* Contenido */}
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
                    Ver perfil completo
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

      {/* DEPARTAMENTOS MINISTERIALES */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Departamentos Ministeriales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestros equipos dedicados trabajan juntos para cumplir la Gran Comisión y servir a nuestra comunidad con excelencia.
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
                  <span className="font-semibold">{dept.team} miembros del equipo</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN */}
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
              Únete a nosotros hoy
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              ¿Tienes pasión por servir a Dios y a Su pueblo? Siempre estamos buscando personas con dones, llamadas y compromiso para unirse a nuestro ministerio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Visita una de nuestras sucursales hoy
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                Hazte voluntario
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MODAL DE DETALLE DEL LÍDER - DESPLAZABLE Y POSICIONADO DEBAJO DE LA BARRA DE NAVEGACIÓN */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedLeader(null)}
          >
            {/* Contenedor desplazable */}
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
                  {/* Encabezado */}
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
                          {/* Avatar del modal usando next/image fill */}
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

                  {/* Contenido */}
                  <div className="p-8">
                    {/* Cita */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl mb-8 border-l-4 border-red-600">
                      <svg className="w-8 h-8 text-red-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-xl text-gray-700 italic font-medium">{selectedLeader.quote}</p>
                    </div>

                    {/* Sobre */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedLeader.bio}</p>
                    </div>

                    {/* Áreas de experiencia */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Áreas de experiencia</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedLeader.expertise.map((skill, i) => (
                          <span key={i} className="px-5 py-2 bg-red-50 text-red-600 font-semibold rounded-full border border-red-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logros */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Logros clave</h3>
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

                    {/* Contacto */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                      <a href={selectedLeader.social.twitter} className="flex-1 min-w-[150px] bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition text-center">
                        Seguir en Twitter
                      </a>
                      <a href={selectedLeader.social.linkedin} className="flex-1 min-w-[150px] bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition text-center">
                        Conectar en LinkedIn
                      </a>
                      <a href={`mailto:${selectedLeader.social.email}`} className="flex-1 min-w-[150px] bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition text-center">
                        Enviar correo
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

export default dynamic(() => Promise.resolve(LeadershipSection), { ssr: false })