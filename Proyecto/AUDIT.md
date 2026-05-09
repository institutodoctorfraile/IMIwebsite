# Auditoría web — IGA / Instituto Ginecológico Alicante

Fecha: 2026-05-09
Estado: Web desplegada en Vercel y funcionando. Ningún issue es bloqueante.

---

## 🔴 Prioridad ALTA — hacer antes de promocionar la web

### 1. Imagen Open Graph por defecto — ✅ HECHO
- Subida a [public/og-default.jpg](public/og-default.jpg) (198 KB).
- Limpiado el `// TODO` de [BaseLayout.astro:51](src/layouts/BaseLayout.astro#L51).

### 3. Comprimir imágenes de `src/assets/images/` — ✅ HECHO
- Ejecutado [scripts/compress-images.mjs](scripts/compress-images.mjs) (sharp + mozjpeg, max 2400px, calidad 80).
- **Resultado: 64 MB → 2.5 MB (-61 MB).** Las 8 imágenes >6 MB pasaron a <0.3 MB cada una (PNG con transparencia bio2.png a 1 MB).
- El script queda en el repo para re-ejecutar si se añaden imágenes nuevas pesadas.

---

## 🟡 Prioridad MEDIA — mejora la calidad/SEO sin urgencia

### 4. Apple touch icon — ✅ HECHO
- Generado [public/apple-touch-icon.png](public/apple-touch-icon.png) (180×180, 9 KB) a partir de `public/LOGO Biege IRF-1.svg` con sharp, fondo beige de marca.

### 5. Web manifest (PWA básica) — ✅ HECHO
- Creado [public/site.webmanifest](public/site.webmanifest) y referenciado desde BaseLayout.
- Cuando exista `apple-touch-icon.png` (punto 4), el manifest ya lo enlaza.

### 6. Centralizar datos de contacto — ✅ HECHO
- Creado [src/config/site.ts](src/config/site.ts) como única fuente de verdad: nombre, URL, teléfono, email, WhatsApp, dirección, horarios, redes sociales.
- Refactorizados ~30 archivos (BaseLayout, Hero, Footer, WhatsAppButton, CtaWideCard, todas las páginas de tratamientos en es/en/ru, atencion-al-paciente, privacidad, terminos).
- Build verificado con `astro check`: 0 errores, 0 warnings.

### 6b. Accesibilidad — quick fixes aplicados — ✅ HECHO
- Añadido `aria-hidden="true"` a SVGs decorativos en [Footer.astro](src/components/Footer.astro) (4 iconos), [DoctorSection.astro](src/components/sections/DoctorSection.astro) y [TreatmentsGrid.astro](src/components/sections/TreatmentsGrid.astro).
- Skip-link, aria-labels en botones, `<html lang>`, focus-visible y formularios con `<label>` ya estaban bien.

---

## 🟢 Prioridad BAJA — pulido / nice-to-have

### 8. Crear `.env.example`
- Si en el futuro se mueven email/teléfono/horarios a variables de entorno, dejar un `.env.example` documentado.

### 9. Revisión a11y final con herramienta automática — PENDIENTE
- Pasar **Lighthouse** y/o **axe DevTools** sobre la URL de Vercel para confirmar puntuación. Mira especialmente:
  - Posible foco no atrapado en el panel de preferencias del banner de cookies (al abrirlo el tab puede salirse del modal).
  - Checkboxes de "Analytics" y "Marketing" en CookieBanner — el `<label>` envolvente los hace accesibles, pero un `aria-label` explícito ayuda a algunos lectores.
  - Jerarquía de h1/h2/h3 en páginas de tratamiento con muchas tarjetas.

---

## ✅ Lo que ya está correcto

- Sitemap (`@astrojs/sitemap`) con i18n es/en/ru → `sitemap-index.xml`.
- `robots.txt` referencia el sitemap correctamente.
- `hreflang` para es/en/ru con `x-default`.
- Página 404 con `noindex, follow`.
- Imágenes con `loading="lazy"` y formato WebP. Sharp como image service.
- Compresión HTML activada en build.
- Sin `console.log` ni URLs `localhost` en producción.
- `aria-label` en botones interactivos, skip-link, focus-visible global.
- Warning de Astro `<script>` JSON-LD resuelto con `is:inline`.
- Datos de contacto centralizados en [src/config/site.ts](src/config/site.ts).
- Web manifest creado y enlazado.

---

## Próximos pasos recomendados

1. Hacer commit + push para desplegar los cambios en Vercel.
2. Pasar **Lighthouse** sobre la URL de producción y validar la previsualización OG con https://developers.facebook.com/tools/debug/.
