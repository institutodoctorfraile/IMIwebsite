/**
 * Single source of truth for site-wide contact data, business info and external URLs.
 * If a value lives here, it should NOT be hardcoded anywhere else in src/.
 *
 * Translation strings (e.g. t.appointment.contact.phone) are display-only and live
 * in src/i18n/*.ts — keep those in sync with the values below if they ever change.
 */

export const SITE = {
  name: 'Instituto Dr. Rafael Fraile Pérez-Cuadrado',
  shortName: 'IGA',
  url: 'https://www.institutorafaelfraile.com',

  contact: {
    phone: '+34965248558',
    phoneDisplay: '+34 965 248 558',
    email: 'info@institutomaternoinfantil.es',
    whatsapp: '34652582768',
    whatsappDisplay: '+34 652 582 768',
  },

  address: {
    streetAddress: 'Avda. Denia, 103',
    addressLocality: 'Alicante',
    addressRegion: 'Comunidad Valenciana',
    postalCode: '03015',
    addressCountry: 'ES',
  },

  geo: {
    latitude: '38.3565',
    longitude: '-0.4602',
  },

  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '09:00',
    closes: '20:00',
  },

  social: {
    instagram: 'https://www.instagram.com/institutodrrafaelfraile/',
    facebook: 'https://www.facebook.com/institutomaternoinfantilalicante',
  },
} as const;

export const SITE_LINKS = {
  tel: `tel:${SITE.contact.phone}`,
  mailto: `mailto:${SITE.contact.email}`,
  whatsapp: `https://wa.me/${SITE.contact.whatsapp}`,
};
