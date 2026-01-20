/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors mapped from CSS variables
        primary: {
          DEFAULT: '#3D949B',
          light: '#47A7AF',
          dark: '#31767C',
          50: '#E8F4F5',
          100: '#D1E9EB',
          200: '#A3D3D7',
          300: '#75BDC3',
          400: '#47A7AF',
          500: '#3D949B',
          600: '#31767C',
          700: '#25595D',
          800: '#193B3E',
          900: '#0C1E1F',
        },
        // Text colors
        text: {
          DEFAULT: '#000000',
          secondary: '#4B5563',
          muted: '#6B7280',
        },
        // Background colors
        bg: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
        },
        // Border color
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Custom scale for better hierarchy
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['1.875rem', { lineHeight: '1.3' }],
        'subheading': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        // Section spacing
        'section': '5rem',
        'section-lg': '7rem',
      },
      maxWidth: {
        'container': '1280px',
        'content': '720px',
      },
      borderRadius: {
        'card': '1rem',
        'button': '0.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'button': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
    },
  },
  plugins: [],
};
