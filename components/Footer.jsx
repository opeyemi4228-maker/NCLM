'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { FiArrowUp, FiInstagram, FiFacebook, FiArrowLeft, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const COUNTRY_LANGUAGE_MAP = {
  NG: { lang: 'en', give: '/en/give-nigeria', flag: '🇳🇬', name: 'Nigeria' },
  NL: { lang: 'nl', give: '/nl/give-netherlands', flag: '🇳🇱', name: 'Netherlands' },
  GB: { lang: 'en', give: '/en/give-uk', flag: '🇬🇧', name: 'United Kingdom' },
  VE: { lang: 'es', give: '/es/give-south-america', flag: '🇻🇪', name: 'Venezuela' },
  CO: { lang: 'es', give: '/es/give-south-america', flag: '🇨🇴', name: 'Colombia' },
  AR: { lang: 'es', give: '/es/give-south-america', flag: '🇦🇷', name: 'Argentina' },
  MX: { lang: 'es', give: '/es/give-south-america', flag: '🇲🇽', name: 'Mexico' },
  PE: { lang: 'es', give: '/es/give-south-america', flag: '🇵🇪', name: 'Peru' },
  US: { lang: 'en', give: '/en/give-usa', flag: '🇺🇸', name: 'United States' },
  CA: { lang: 'en', give: '/en/give-canada', flag: '🇨🇦', name: 'Canada' },
};

const FALLBACK = { lang: 'en', give: '/en/give-usa', flag: '🇺🇸', name: 'United States' };

const addresses = {
  NG: {
    phone: '+234 701 234 5678',
    email: 'info@newcreationlifechurch.com',
    address: 'Danglo Plaza, 6th Avenue, Gwarinpa',
    city: 'Abuja, Nigeria',
  },
  US: {
    phone: '+1 (312) 714-0794',
    email: 'info@newcreationlifechurch.com',
    address: '3201 Davie Boulevard',
    city: 'Fort Lauderdale, FL 33312, The United States of America',
  },
  NL: {
    phone: '+31 (0)6 304 770 48',
    email: 'info@newcreationlifeministries.nl',
    address: 'Energieweg 14',
    city: '2382 NJ Zoeterwoude, The Netherlands',
  },
  VE: {
    phone: '+58 424 123 4567',
    email: 'info@newcreationlifeministries.es',
    address: 'Avenida de Gracia 18',
    city: 'Caracas, Venezuela',
  },
  FR: {
    phone: '+33 6 12 34 56 78',
    email: 'info@newcreationlifeministries.fr',
    address: '18 Avenue de Grâce',
    city: 'Paris, France',
  },
  // Add more as needed
};

const Footer = () => {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState('en');
  const [currentCountry, setCurrentCountry] = useState('us');
  const [mounted, setMounted] = useState(false);

  // Language content
  const content = {
    en: {
      title: 'New Creation Life Ministries',
      tagline: 'Bringing Hope. Changing Lives. Revealing Jesus.',
      contactTitle: 'Contact',
      locationTitle: 'Worship With Us',
      church: 'New Creation Life Ministries',
      directions: 'Get Directions →',
      newsTitle: 'Stay Connected in Faith',
      newsDesc: 'Subscribe to receive ministry updates, upcoming events, and inspiring messages that will strengthen your faith and walk with Christ.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      navHome: 'Home',
      navAbout: 'About Us',
      navContact: 'Contact',
      navSermons: 'Sermons',
      copyright: '©2026 New Creation Life Ministries — All Rights Reserved | "For in Him we live and move and have our being." — Acts 17:28',
      backButton: 'Back to Landing Page',
    },
    nl: {
      title: 'New Creation Life Ministries',
      tagline: 'Hoop Brengen. Levens Veranderen. Jezus Onthullen.',
      contactTitle: 'Contact',
      locationTitle: 'Aanbid Met Ons',
      church: 'New Creation Life Ministries',
      directions: 'Routekaart →',
      newsTitle: 'Blijf Verbonden in Geloof',
      newsDesc: 'Abonneer u om ministerieupdates, komende evenementen en inspirerende berichten te ontvangen die uw geloof en relatie met Christus versterken.',
      emailPlaceholder: 'Voer uw e-mailadres in',
      subscribe: 'Abonneren',
      navHome: 'Thuis',
      navAbout: 'Over Ons',
      navContact: 'Contact',
      navSermons: 'Preken',
      copyright: '©2026 New Creation Life Ministries — Alle Rechten Voorbehouden | "Want in Hem leven we en bewegen we en bestaan we." — Handelingen 17:28',
      backButton: 'Terug naar Startpagina',
    },
    es: {
      title: 'New Creation Life Ministries',
      tagline: 'Trayendo Esperanza. Cambiando Vidas. Revelando a Jesús.',
      contactTitle: 'Contacto',
      locationTitle: 'Adóranos Con Nosotros',
      church: 'New Creation Life Ministries',
      directions: 'Obtener Direcciones →',
      newsTitle: 'Manténgase Conectado en Fe',
      newsDesc: 'Suscríbete para recibir actualizaciones ministeriales, próximos eventos y mensajes inspiradores que fortalezcan tu fe y caminata con Cristo.',
      emailPlaceholder: 'Ingrese su correo electrónico',
      subscribe: 'Suscribirse',
      navHome: 'Inicio',
      navAbout: 'Nosotros',
      navContact: 'Contacto',
      navSermons: 'Predicaciones',
      copyright: '©2026 New Creation Life Ministries — Todos los Derechos Reservados | "Porque en él vivimos, nos movemos y existimos." — Hechos 17:28',
      backButton: 'Volver a la Página de Inicio',
    },
    fr: {
      title: 'New Creation Life Ministries',
      tagline: 'Apportant de l\'Espoir. Changeant des Vies. Révélant Jésus.',
      contactTitle: 'Contact',
      locationTitle: 'Adorez Avec Nous',
      church: 'New Creation Life Ministries',
      directions: 'Obtenir des Directions →',
      newsTitle: 'Restez Connecté dans la Foi',
      newsDesc: 'Abonnez-vous pour recevoir des mises à jour ministérielles, des événements à venir et des messages inspirants qui renforceront votre foi et votre marche avec Christ.',
      emailPlaceholder: 'Entrez votre email',
      subscribe: 'S\'abonner',
      navHome: 'Accueil',
      navAbout: 'À Propos',
      navContact: 'Contact',
      navSermons: 'Sermons',
      copyright: '©2026 New Creation Life Ministries — Tous Droits Réservés | "Car en lui nous avons la vie, le mouvement et l\'être." — Actes 17:28',
      backButton: 'Retour à la Page d\'Accueil',
    },
  };

  // Extract language and country from pathname
  useEffect(() => {
    setMounted(true);
    const pathParts = pathname.split('/').filter(Boolean);
    const countryFromPath = pathParts[0]?.toLowerCase() || 'us';
    const langFromPath = pathParts[1];

    setCurrentCountry(countryFromPath);

    if (['en', 'nl', 'es', 'fr'].includes(langFromPath)) {
      setCurrentLang(langFromPath);
      Cookies.set('site_lang', langFromPath, { expires: 30 });
    } else {
      const cookieLang = Cookies.get('site_lang') || 'en';
      setCurrentLang(cookieLang);
    }
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLocalizedHref = (href) => {
    return `/${currentLang}${href}`;
  };

  const t = content[currentLang];
  const addr = addresses[currentCountry.toUpperCase()] || addresses.US;

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Branding & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
            <p className="text-[#F5C842] italic mb-8">{t.tagline}</p>

            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FiPhone className="w-5 h-5" />
              {t.contactTitle}
            </h3>
            <div className="text-gray-400 space-y-3">
              <p className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-[#F5C842]" />
                {addr.phone}
              </p>
              <p className="flex items-center gap-2">
                <FiMail className="w-4 h-4 text-[#F5C842]" />
                {addr.email}
              </p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#F5C842] hover:scale-110 transition-all duration-300"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#F5C842] hover:scale-110 transition-all duration-300"
              >
                <FiInstagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FiMapPin className="w-5 h-5 text-[#F5C842]" />
              {t.locationTitle}
            </h3>
            <div className="text-gray-400 space-y-3">
              <p className="font-semibold text-white">{t.church}</p>
              <p>{addr.address}</p>
              <p>{addr.city}</p>
            </div>
            <a
              href="#"
              className="inline-block mt-4 text-[#F5C842] hover:text-white hover:underline transition-all duration-300 font-semibold"
            >
              {t.directions}
            </a>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-xl mb-3">{t.newsTitle}</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-[320px]">{t.newsDesc}</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full max-w-[340px] h-12 px-6 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F5C842] transition-all duration-200"
              />
              <button
                type="submit"
                className="px-10 py-3.5 bg-[#F5C842] text-black font-semibold rounded-full hover:bg-[#E8B339] hover:scale-105 transition-all duration-250 hover:shadow-lg hover:shadow-[#F5C842]/30"
              >
                {t.subscribe}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Navigation & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#1F1F1F]"
        >
          <nav className="flex flex-wrap justify-center md:justify-start gap-8 text-gray-400">
            <Link
              href={getLocalizedHref('/home')}
              className="hover:text-[#F5C842] hover:scale-105 transition-all duration-200"
            >
              {t.navHome}
            </Link>
            <Link
              href={getLocalizedHref('/about')}
              className="hover:text-[#F5C842] hover:scale-105 transition-all duration-200"
            >
              {t.navAbout}
            </Link>
            <Link
              href={getLocalizedHref('/contact')}
              className="hover:text-[#F5C842] hover:scale-105 transition-all duration-200"
            >
              {t.navContact}
            </Link>
            <Link
              href={getLocalizedHref('/sermons')}
              className="hover:text-[#F5C842] hover:scale-105 transition-all duration-200"
            >
              {t.navSermons}
            </Link>
          </nav>
          <p className="text-gray-600 text-sm mt-6 text-center md:text-left">{t.copyright}</p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#F5C842] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#F5C842]/40 transition-all duration-300 z-40"
        >
          <FiArrowUp className="text-black text-2xl" />
        </motion.button>
      </div>

      {/* Back to Landing Page Button */}
      <motion.button
        whileHover={{ backgroundColor: '#DB2777' }}
        className="w-full bg-[#EC4899] hover:bg-[#DB2777] text-white py-5 flex items-center justify-center gap-2 transition-all duration-250"
      >
        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
        {t.backButton}
      </motion.button>
    </footer>
  );
};

export default Footer;
