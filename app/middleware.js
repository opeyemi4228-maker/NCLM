import { NextResponse } from 'next/server';
import geoip from 'geoip-lite';

const SUPPORTED_LANGS = ['en', 'nl', 'es', 'fr'];
const DEFAULT_LANG = 'en';
const DEFAULT_COUNTRY = 'us';

function getCountryFromRequest(req) {
  return (
    req.geo?.country ||
    req.headers.get('x-vercel-ip-country') ||
    geoip.lookup(req.ip || '8.8.8.8')?.country ||
    DEFAULT_COUNTRY
  ).toLowerCase();
}

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);

  const detectedCountry = getCountryFromRequest(req);
  const cookieCountry = req.cookies.get('site_country')?.value?.toLowerCase();
  const cookieLang = req.cookies.get('site_lang')?.value?.toLowerCase();

  const country = cookieCountry || detectedCountry || DEFAULT_COUNTRY;
  const lang = cookieLang || DEFAULT_LANG;

  if (segments.length < 2) {
    const url = req.nextUrl.clone();
    url.pathname = `/${country}/${lang}${pathname !== '/' ? pathname : ''}`;
    return NextResponse.redirect(url);
  }

  const [pathCountry, pathLang, ...rest] = segments;
  const validatedLang = SUPPORTED_LANGS.includes(pathLang) ? pathLang : lang;
  const validatedCountry = pathCountry || country;

  if (pathCountry !== validatedCountry || pathLang !== validatedLang) {
    const url = req.nextUrl.clone();
    url.pathname = `/${validatedCountry}/${validatedLang}${rest.length ? '/' + rest.join('/') : ''}`;
    return NextResponse.redirect(url);
  }

  const res = NextResponse.next();
  res.cookies.set('site_country', validatedCountry, { path: '/', maxAge: 60 * 60 * 24 * 30 });
  res.cookies.set('site_lang', validatedLang, { path: '/', maxAge: 60 * 60 * 24 * 30 });

  return res;
}

export const config = {
  matcher: '/((?!_next|api|.*\\..*).*)',
};
