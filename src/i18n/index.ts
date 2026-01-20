/**
 * i18n module - centralized exports
 * Import from '@i18n' in components
 */

// Translations
export { es } from './es';
export { en } from './en';
export { ru } from './ru';
export type { TranslationKeys } from './es';

// Routes
export {
  type Lang,
  defaultLang,
  languages,
  routes,
  treatmentAnchors,
  getRoute,
  getAlternateRoutes,
  getPageKeyFromPath,
  getEquivalentUrl,
} from './routes';

// Utilities
export {
  getLangFromUrl,
  getPathWithoutLang,
  t,
  getTranslations,
  useTranslations,
  formatTranslation,
  getHreflang,
  getOgLocale,
} from './utils';
