'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { translations } from '@/lib/translations';
import { useRegional } from '@/context/RegionalContext';

/* ---------------------------------------------
   Branch + Country Metadata
---------------------------------------------- */

const FLAGS = {
  ng: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#3b8655"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#3b8655"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>',
  us: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>',
  nl: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#a1292a"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#264387"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>',
  ve: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#091e79" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#f7cf46"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#bf2c30"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M10.207 17.715L10.022 17.068 9.792 17.701 9.119 17.677 9.649 18.092 9.419 18.724 9.977 18.348 10.508 18.762 10.322 18.115 10.88 17.739 10.207 17.715z"></path><path fill="#fff" d="M11.463 16.039L11.557 15.373 11.089 15.857 10.484 15.561 10.8 16.156 10.331 16.639 10.994 16.523 11.31 17.118 11.404 16.451 12.068 16.335 11.463 16.039z"></path><path fill="#fff" d="M13.195 14.795L13.469 14.18 12.886 14.517 12.386 14.066 12.526 14.725 11.943 15.061 12.612 15.132 12.752 15.79 13.026 15.175 13.696 15.245 13.195 14.795z"></path><path fill="#fff" d="M15.034 13.832L14.718 13.238 14.624 13.904 13.961 14.021 14.566 14.316 14.472 14.983 14.94 14.499 15.545 14.794 15.229 14.199 15.697 13.715 15.034 13.832z"></path><path fill="#fff" d="M22.351 18.092L22.881 17.677 22.208 17.701 21.978 17.068 21.793 17.715 21.12 17.739 21.678 18.115 21.492 18.762 22.023 18.348 22.581 18.724 22.351 18.092z"></path><path fill="#fff" d="M21.006 16.523L21.669 16.639 21.2 16.156 21.516 15.561 20.911 15.857 20.443 15.373 20.537 16.039 19.932 16.335 20.596 16.451 20.69 17.118 21.006 16.523z"></path><path fill="#fff" d="M19.388 15.132L20.057 15.061 19.474 14.725 19.614 14.066 19.114 14.517 18.531 14.18 18.805 14.795 18.304 15.245 18.974 15.175 19.248 15.79 19.388 15.132z"></path><path fill="#fff" d="M17.376 13.904L17.282 13.238 16.966 13.832 16.303 13.715 16.771 14.199 16.455 14.794 17.06 14.499 17.528 14.983 17.434 14.316 18.039 14.021 17.376 13.904z"></path></svg>',
  gb: '🇬🇧',
  ca: '🇨🇦',
  fr: '🇫🇷',
};

/* ---------------------------------------------
   Navbar Component
---------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const {
    country,
    lang,
    switchLanguage,
    switchCountry,
    mounted,
  } = useRegional();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [clientMounted, setClientMounted] = useState(false);

  /* ---------------------------------------------
     Scroll detection (transparent → solid)
  ---------------------------------------------- */
  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------------------------------------------
     Set client mounted
  ---------------------------------------------- */
  useEffect(() => {
    setClientMounted(true);
  }, []);

  /* ---------------------------------------------
     Flag component
  ---------------------------------------------- */
  const flagComponent = (code) => {
    if (!clientMounted) return <span>🌍</span>;
    const flag = FLAGS[code] || '🌍';
    if (flag.startsWith('<svg')) {
      return <span dangerouslySetInnerHTML={{__html: flag}} />;
    } else {
      return <span>{flag}</span>;
    }
  };

  /* ---------------------------------------------
     Translations & Base Path
  ---------------------------------------------- */
  const t = useMemo(
    () => translations[lang] || translations.en,
    [lang]
  );

  /* ---------------------------------------------
     Guards
  ---------------------------------------------- */
  if (!mounted) {
    return <div className="h-20 w-full bg-black" />;
  }

  const base = `/${country}/${lang}`;

  /* ---------------------------------------------
     Navigation Links (STRICT STRUCTURE)
  ---------------------------------------------- */
  const navLinks = [
    { label: t.home, href: `${base}` },
    { label: t.about, href: `${base}/about` },
    { label: t.programs, href: `${base}/programs` },
    { label: t.give, href: `${base}/give` },
    { label: t.leadership, href: `${base}/Leadership` },
    { label: t.stream, href: `${base}/stream` },
    { label: t.contact, href: `${base}/contact` },

  ];

  /* ---------------------------------------------
     Styling
  ---------------------------------------------- */
  const navbarBg = isTop
    ? 'bg-black/40 backdrop-blur'
    : 'bg-black shadow-lg';

  /* ---------------------------------------------
     Render
  ---------------------------------------------- */
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white ">

        {/* Logo */}
        <Link href={base} className="font-medium tracking-tight">
          <div className="text-[14px] uppercase">New Creation Life Ministries</div>
          <div className="text-[13px] text-[#f39c51] font-semibold">Living the Life, Manifesting God's Power</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 uppercase">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors
                  ${active ? 'text-[#f39c51]' : 'hover:text-[#f39c51]'}`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#f39c51]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Language */}
          <div className="flex items-center gap-2">
            <FiGlobe />
            <select
              value={lang}
              onChange={e => switchLanguage(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-sm"
            >
              {Object.keys(translations).map(l => (
                <option key={l} value={l} className="text-black">
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Give with flag */}
          <div className="flex items-center gap-2">
            {flagComponent(country)}
            <Link
              href={`${base}/live`}
              className="px-6 py-2 rounded-lg bg-white text-black font-medium hover:font-bold transition"
            >
              {t.joinuslive}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6 text-white">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium hover:text-[#bc6c25]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={`${base}/give`}
                className="mt-4 text-center py-3 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2"
              >
                {flagComponent(country)}
                {t.give}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
