/**
 * Route configuration for i18n
 * Maps route slugs across languages for hreflang and language switching
 */

export type Lang = 'es' | 'en' | 'ru';

export const defaultLang: Lang = 'es';

export const languages: Record<Lang, { name: string; nativeName: string; flag: string }> = {
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  en: { name: 'English', nativeName: 'English', flag: '🇬🇧' },
  ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
};

/**
 * Route mapping: pageKey -> { lang: slug }
 * Used for generating alternate language URLs
 */
export const routes: Record<string, Record<Lang, string>> = {
  home: {
    es: '/',
    en: '/en/',
    ru: '/ru/',
  },
  regenerative: {
    es: '/ginecologia-regenerativa',
    en: '/en/regenerative-gynecology',
    ru: '/ru/regenerative-gynecology',
  },
  diagnostics: {
    es: '/diagnosticos',
    en: '/en/diagnostics',
    ru: '/ru/diagnostics',
  },
  appointment: {
    es: '/cita',
    en: '/en/appointment',
    ru: '/ru/appointment',
  },
};

/**
 * Treatment anchors - consistent across all languages
 */
export const treatmentAnchors = {
  rf: '#rf',
  laserCo2: '#laser-co2',
  emsella: '#emsella',
  photobiomodulation: '#fotobiomodulacion',
  magnetotherapy: '#magnetoterapia',
  bioidenticalHt: '#th-bioidentica',
} as const;

/**
 * Get the route for a specific page in a specific language
 */
export function getRoute(pageKey: string, lang: Lang): string {
  const pageRoutes = routes[pageKey];
  if (!pageRoutes) {
    console.warn(`Route not found for page: ${pageKey}`);
    return '/';
  }
  return pageRoutes[lang] || pageRoutes[defaultLang];
}

/**
 * Get all alternate routes for a page (for hreflang)
 */
export function getAlternateRoutes(pageKey: string): Array<{ lang: Lang; url: string }> {
  const pageRoutes = routes[pageKey];
  if (!pageRoutes) return [];
  
  return Object.entries(pageRoutes).map(([lang, url]) => ({
    lang: lang as Lang,
    url,
  }));
}

/**
 * Get the page key from a URL path
 */
export function getPageKeyFromPath(path: string): string | null {
  // Normalize path
  const normalizedPath = path.endsWith('/') && path !== '/' 
    ? path.slice(0, -1) 
    : path;
  
  for (const [pageKey, langRoutes] of Object.entries(routes)) {
    for (const route of Object.values(langRoutes)) {
      const normalizedRoute = route.endsWith('/') && route !== '/' 
        ? route.slice(0, -1) 
        : route;
      if (normalizedPath === normalizedRoute) {
        return pageKey;
      }
    }
  }
  return null;
}

/**
 * Get the current language equivalent URL for language switching
 */
export function getEquivalentUrl(currentPath: string, targetLang: Lang): string {
  const pageKey = getPageKeyFromPath(currentPath);
  if (!pageKey) {
    // Default to home in target language
    return getRoute('home', targetLang);
  }
  return getRoute(pageKey, targetLang);
}
