'use client';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

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
  FR: { lang: 'fr', give: '/fr/give-france', flag: '🇫🇷', name: 'France' },
};

const RegionalContext = createContext(null);

const DEFAULT_COUNTRY = 'us';
const DEFAULT_LANG = 'en';

export function RegionalProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [lang, setLang] = useState(DEFAULT_LANG);

  const detectCountry = async () => {
    try {
      const pathParts = pathname?.split('/').filter(Boolean) || [];
      const currentCountry = pathParts[0]?.toLowerCase() || DEFAULT_COUNTRY;
      const currentLang = pathParts[1] || DEFAULT_LANG;

      let detectedCountry;
      let detectedLang;

      const cookieCountry = Cookies.get('site_country');
      if (cookieCountry) {
        detectedCountry = cookieCountry.toLowerCase();
        detectedLang = COUNTRY_LANGUAGE_MAP[detectedCountry.toUpperCase()]?.lang || DEFAULT_LANG;
        setCountry(detectedCountry);
        // Lang is already set
      } else {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        detectedCountry = (data.country_code || DEFAULT_COUNTRY).toLowerCase();
        detectedLang = COUNTRY_LANGUAGE_MAP[detectedCountry.toUpperCase()]?.lang || DEFAULT_LANG;
        setCountry(detectedCountry);
        setLang(detectedLang);
        Cookies.set('site_country', detectedCountry, { expires: 30 });
        Cookies.set('site_lang', detectedLang, { expires: 30 });
      }

      // Always redirect on root or if country mismatch
      if (pathname === '/' || currentCountry !== detectedCountry) {
        const langToUse = currentLang || detectedLang;
        router.replace(`/${detectedCountry}/${langToUse}`);
      }
    } catch (err) {
      console.error('Country detection failed, using default.', err);
      setCountry(DEFAULT_COUNTRY);
      setLang(DEFAULT_LANG);
      if (pathname === '/') {
        router.replace(`/${DEFAULT_COUNTRY}/${DEFAULT_LANG}`);
      }
    }
  };

  useEffect(() => {
    const pathParts = pathname?.split('/').filter(Boolean) || [];
    const pathCountry = pathParts[0]?.toLowerCase() || DEFAULT_COUNTRY;
    const pathLang = pathParts[1] || DEFAULT_LANG;

    const savedCountry = Cookies.get('site_country')?.toLowerCase() || pathCountry;
    const savedLang = Cookies.get('site_lang') || pathLang;

    setCountry(savedCountry);
    setLang(savedLang);
    setMounted(true);

    if (!Cookies.get('site_country')) Cookies.set('site_country', savedCountry, { expires: 30 });
    if (!Cookies.get('site_lang')) Cookies.set('site_lang', savedLang, { expires: 30 });

    detectCountry();
  }, [pathname]);

  const switchLanguage = (newLang) => {
    if (newLang === lang) return;
    const pathParts = pathname?.split('/').filter(Boolean) || [];
    const rest = pathParts.slice(2).join('/');
    router.push(`/${country}/${newLang}${rest ? `/${rest}` : ''}`);
    setLang(newLang);
    Cookies.set('site_lang', newLang, { expires: 30 });
  };

  const switchCountry = (newCountry) => {
    newCountry = newCountry.toLowerCase();
    if (newCountry === country) return;
    const pathParts = pathname?.split('/').filter(Boolean) || [];
    const rest = pathParts.slice(2).join('/');
    router.push(`/${newCountry}/${lang}${rest ? `/${rest}` : ''}`);
    setCountry(newCountry);
    Cookies.set('site_country', newCountry, { expires: 30 });
  };

  const value = useMemo(() => ({ mounted, country, lang, switchLanguage, switchCountry, detectCountry }), [mounted, country, lang]);

  return <RegionalContext.Provider value={value}>{children}</RegionalContext.Provider>;
}

export const useRegional = () => {
  const ctx = useContext(RegionalContext);
  if (!ctx) throw new Error('useRegional must be used inside RegionalProvider');
  return ctx;
};
