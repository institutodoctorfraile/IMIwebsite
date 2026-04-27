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
  obstetrics: {
    es: '/obstetricia',
    en: '/en/obstetrics',
    ru: '/ru/obstetrics',
  },
  gynecology: {
    es: '/ginecologia',
    en: '/en/gynecology',
    ru: '/ru/gynecology',
  },
  patientCare: {
    es: '/atencion-al-paciente',
    en: '/en/patient-care',
    ru: '/ru/patient-care',
  },
  team: {
    es: '/equipo',
    en: '/en/team',
    ru: '/ru/team',
  },
  treatmentLaserCo2: {
    es: '/ginecologia-regenerativa/laser-co2',
    en: '/en/regenerative-gynecology/laser-co2',
    ru: '/ru/regenerative-gynecology/laser-co2',
  },
  treatmentRf: {
    es: '/ginecologia-regenerativa/radiofrecuencia',
    en: '/en/regenerative-gynecology/radiofrequency',
    ru: '/ru/regenerative-gynecology/radiofrequency',
  },
  treatmentEmsella: {
    es: '/ginecologia-regenerativa/emsella',
    en: '/en/regenerative-gynecology/emsella',
    ru: '/ru/regenerative-gynecology/emsella',
  },
  treatmentPrp: {
    es: '/ginecologia-regenerativa/prp',
    en: '/en/regenerative-gynecology/prp',
    ru: '/ru/regenerative-gynecology/prp',
  },
  treatmentBioidenticalHt: {
    es: '/ginecologia-regenerativa/terapia-hormonal-bioidentica',
    en: '/en/regenerative-gynecology/bioidentical-hormone-therapy',
    ru: '/ru/regenerative-gynecology/bioidentical-hormone-therapy',
  },
  treatmentMagnetotherapy: {
    es: '/ginecologia-regenerativa/magnetoterapia',
    en: '/en/regenerative-gynecology/magnetotherapy',
    ru: '/ru/regenerative-gynecology/magnetotherapy',
  },
};

/**
 * Treatment route keys mapped to treatment i18n keys
 */
export const treatmentRouteKeys = {
  laserCo2: 'treatmentLaserCo2',
  rf: 'treatmentRf',
  emsella: 'treatmentEmsella',
  prp: 'treatmentPrp',
  bioidenticalHt: 'treatmentBioidenticalHt',
  magnetotherapy: 'treatmentMagnetotherapy',
} as const;

/**
 * Treatment anchors - kept for backwards compat, now points to subpages
 */
export const treatmentAnchors = {
  laserCo2: '#laser-co2',
  rf: '#rf',
  emsella: '#emsella',
  prp: '#prp',
  bioidenticalHt: '#th-bioidentica',
  magnetotherapy: '#magnetoterapia',
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
