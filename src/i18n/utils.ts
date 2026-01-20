/**
 * i18n utility functions
 * Helper functions for translations and language detection
 */

import { es } from './es';
import { en } from './en';
import { ru } from './ru';
import { defaultLang, type Lang } from './routes';

// All translations indexed by language
const translations = {
  es,
  en,
  ru,
} as const;

/**
 * Get the language from a URL
 * Returns 'es' for paths without prefix, 'en' for /en/*, 'ru' for /ru/*
 */
export function getLangFromUrl(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments[0] === 'en') return 'en';
  if (segments[0] === 'ru') return 'ru';
  return 'es';
}

/**
 * Get the path without language prefix
 */
export function getPathWithoutLang(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments[0] === 'en' || segments[0] === 'ru') {
    return '/' + segments.slice(1).join('/');
  }
  return pathname;
}

/**
 * Type-safe translation function
 * Supports nested keys with dot notation: t('home.hero.title', 'es')
 */
export function t(key: string, lang: Lang = defaultLang): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Fallback to default language
      value = translations[defaultLang];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = (value as Record<string, unknown>)[fallbackKey];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      break;
    }
  }
  
  if (typeof value === 'string') {
    return value;
  }
  
  console.warn(`Translation key returned non-string: ${key}`);
  return key;
}

/**
 * Get all translations for a specific language
 */
export function getTranslations(lang: Lang) {
  return translations[lang];
}

/**
 * Create a translation function bound to a specific language
 * Useful in components: const t = useTranslations('es');
 */
export function useTranslations(lang: Lang) {
  return (key: string) => t(key, lang);
}

/**
 * Format a translation with placeholders
 * Example: formatTranslation('Hello {name}!', { name: 'World' })
 */
export function formatTranslation(
  template: string, 
  values: Record<string, string | number>
): string {
  return template.replace(
    /\{(\w+)\}/g, 
    (_, key) => String(values[key] ?? `{${key}}`)
  );
}

/**
 * Get hreflang value for a language
 */
export function getHreflang(lang: Lang): string {
  const hreflangMap: Record<Lang, string> = {
    es: 'es-ES',
    en: 'en-US',
    ru: 'ru-RU',
  };
  return hreflangMap[lang];
}

/**
 * Get locale for Open Graph
 */
export function getOgLocale(lang: Lang): string {
  const localeMap: Record<Lang, string> = {
    es: 'es_ES',
    en: 'en_US',
    ru: 'ru_RU',
  };
  return localeMap[lang];
}
