# Instituto Ginecológico Alicante - Website

Website corporativo para el Instituto Ginecológico Alicante, especializado en ginecología regenerativa. Desarrollado con **Astro** + **Tailwind CSS** con soporte multiidioma (ES/EN/RU) y optimizado para SEO.

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v4.x
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v3.x
- **Tipografía**: Inter (Google Fonts)
- **i18n**: Sistema propio sin dependencias externas
- **SEO**: Sitemap automático, datos estructurados, hreflang

## Inicio Rápido

### Requisitos

- Node.js 18.x o superior
- npm 9.x o superior

### Instalación

```bash
# Clonar el repositorio
git clone [repo-url]
cd instituto-ginecologico-alicante

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run astro` | Ejecuta comandos CLI de Astro |

---

## Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes UI reutilizables
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Container.astro
│   │   │   ├── SectionHeading.astro
│   │   │   └── Badge.astro
│   │   │
│   │   ├── sections/              # Secciones de página
│   │   │   ├── Hero.astro
│   │   │   ├── WhatIsRegenerative.astro
│   │   │   ├── DoctorSection.astro
│   │   │   ├── TreatmentsGrid.astro
│   │   │   ├── TeamSection.astro
│   │   │   └── CtaWideCard.astro
│   │   │
│   │   ├── Header.astro           # Navegación principal
│   │   └── Footer.astro           # Pie de página
│   │
│   ├── i18n/                      # Sistema de internacionalización
│   │   ├── es.ts                  # Traducciones español (base)
│   │   ├── en.ts                  # Traducciones inglés
│   │   ├── ru.ts                  # Traducciones ruso
│   │   ├── routes.ts              # Mapeo de rutas por idioma
│   │   ├── utils.ts               # Helpers (t(), getLangFromUrl, etc.)
│   │   └── index.ts               # Re-exports
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout principal con SEO
│   │
│   ├── pages/
│   │   ├── index.astro            # Home ES (/)
│   │   ├── ginecologia-regenerativa.astro
│   │   ├── diagnosticos.astro
│   │   ├── cita.astro
│   │   ├── en/                    # Páginas en inglés (/en/*)
│   │   │   ├── index.astro
│   │   │   ├── regenerative-gynecology.astro
│   │   │   ├── diagnostics.astro
│   │   │   └── appointment.astro
│   │   └── ru/                    # Páginas en ruso (/ru/*)
│   │       ├── index.astro
│   │       ├── regenerative-gynecology.astro
│   │       ├── diagnostics.astro
│   │       └── appointment.astro
│   │
│   └── styles/
│       └── global.css             # Estilos globales + variables CSS
│
├── astro.config.mjs               # Configuración de Astro
├── tailwind.config.mjs            # Configuración de Tailwind
├── tsconfig.json                  # Configuración TypeScript
└── package.json
```

---

## Sistema de Internacionalización (i18n)

### Idiomas Soportados

| Idioma | Código | Prefijo URL | Ejemplo |
|--------|--------|-------------|---------|
| Español | `es` | _(ninguno)_ | `/`, `/ginecologia-regenerativa` |
| Inglés | `en` | `/en/` | `/en/`, `/en/regenerative-gynecology` |
| Ruso | `ru` | `/ru/` | `/ru/`, `/ru/regenerative-gynecology` |

### Cómo Añadir/Modificar Traducciones

1. **Editar diccionarios**: Los archivos de traducción están en `src/i18n/`:
   - `es.ts` - Español (idioma base, define la estructura)
   - `en.ts` - Inglés
   - `ru.ts` - Ruso

2. **Estructura de traducciones**:
```typescript
// src/i18n/es.ts
export const es = {
  meta: {
    siteName: 'Instituto Ginecológico Alicante',
    // ...
  },
  nav: {
    home: 'Inicio',
    // ...
  },
  home: {
    hero: {
      title: 'Ginecología regenerativa de vanguardia',
      // ...
    },
  },
  // ...
} as const;
```

3. **Usar traducciones en componentes**:
```astro
---
import { getTranslations } from '../i18n';

const lang = 'es'; // o obtenerlo de la URL
const t = getTranslations(lang);
---

<h1>{t.home.hero.title}</h1>
```

4. **Usar el helper t() con dot notation**:
```astro
---
import { t } from '../i18n';
---

<p>{t('home.hero.subtitle', 'es')}</p>
```

### Añadir Nueva Página Multiidioma

1. **Crear la página en español** en `src/pages/`:
```astro
---
// src/pages/nueva-pagina.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import { getTranslations } from '../i18n';

const lang = 'es';
const t = getTranslations(lang);
---

<BaseLayout
  title="Nueva Página"
  description="Descripción SEO"
  lang={lang}
  pageKey="newPage"
>
  <h1>Contenido</h1>
</BaseLayout>
```

2. **Crear versiones en otros idiomas** en `src/pages/en/` y `src/pages/ru/`

3. **Registrar las rutas** en `src/i18n/routes.ts`:
```typescript
export const routes = {
  // ... rutas existentes
  newPage: {
    es: '/nueva-pagina',
    en: '/en/new-page',
    ru: '/ru/new-page',
  },
};
```

4. **Añadir traducciones** a los archivos de idioma

---

## Componentes UI

### Button

```astro
import Button from '@components/ui/Button.astro';

<!-- Variantes -->
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>

<!-- Tamaños -->
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

<!-- Como enlace -->
<Button href="/cita">Pedir cita</Button>
<Button href="https://example.com" external>Enlace externo</Button>

<!-- Ancho completo -->
<Button fullWidth>Ancho completo</Button>
```

### Container

```astro
import Container from '@components/ui/Container.astro';

<Container>Contenido centrado con max-width</Container>
<Container size="narrow">Contenido estrecho (720px)</Container>
<Container size="wide">Contenido ancho</Container>
<Container as="section" id="mi-seccion">Como section</Container>
```

### Card

```astro
import Card from '@components/ui/Card.astro';

<Card>Contenido de la card</Card>
<Card variant="elevated">Card elevada</Card>
<Card variant="bordered">Card con borde</Card>
<Card href="/enlace">Card clickeable</Card>
<Card padding="lg">Padding grande</Card>
```

### SectionHeading

```astro
import SectionHeading from '@components/ui/SectionHeading.astro';

<SectionHeading
  eyebrow="Subtítulo superior"
  title="Título Principal"
  description="Descripción opcional del contenido de la sección."
  level={2}
  align="center"
/>
```

---

## Tokens de Diseño

### Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#3D949B` | Color principal de marca |
| `--color-text` | `#000000` | Texto principal |
| `--color-bg` | `#FFFFFF` | Fondo general |

**Uso en Tailwind**: `bg-primary`, `text-primary`, `border-primary`, etc.

### Tipografía

- **Font family**: Inter
- **Escala de tamaños**: 
  - `text-display-lg` / `text-display` / `text-display-sm` - Títulos grandes
  - `text-heading` - H3
  - `text-subheading` - H4
  - `text-body-lg` / `text-body` / `text-body-sm` - Cuerpo
  - `text-caption` - Textos pequeños

### Espaciado

- `py-section` - Padding vertical de secciones (5rem)
- `py-section-lg` - Padding vertical grande (7rem)

---

## SEO

### Configuración por Página

Cada página debe definir en el `BaseLayout`:

```astro
<BaseLayout
  title="Título de la página"           <!-- Requerido -->
  description="Meta description SEO"     <!-- Requerido -->
  lang={lang}                            <!-- Requerido -->
  pageKey="home"                         <!-- Para hreflang automático -->
  canonical="/ruta-canonica"             <!-- Opcional, auto-generado -->
  ogImage="/imagen-og.jpg"               <!-- Opcional -->
  ogType="website"                       <!-- Opcional -->
  robots="index, follow"                 <!-- Opcional -->
  structuredData={jsonLdObject}          <!-- Opcional -->
>
```

### Checklist SEO Pre-Deploy

- [ ] **Títulos únicos** por página (máx. 60 caracteres)
- [ ] **Meta descriptions** únicas (máx. 160 caracteres)
- [ ] **Un solo H1** por página
- [ ] **Jerarquía de headings** correcta (H1 > H2 > H3...)
- [ ] **Alt text** en todas las imágenes
- [ ] **hreflang** configurado para todas las versiones de idioma
- [ ] **canonical** apuntando a la URL correcta
- [ ] **Datos estructurados** validados en Schema.org Validator
- [ ] **robots.txt** accesible
- [ ] **sitemap.xml** generado y accesible
- [ ] **Imágenes optimizadas** (WebP, tamaños adecuados)
- [ ] **Core Web Vitals** optimizados
- [ ] **Contraste de colores** cumple WCAG AA
- [ ] **Focus states** visibles para accesibilidad

### Datos Estructurados

El sitio incluye automáticamente:
- `MedicalBusiness` - Información del negocio
- `BreadcrumbList` - En páginas internas
- `WebPage` - Información de cada página

Para añadir más datos estructurados, usa la prop `structuredData`:

```astro
---
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Tratamiento Láser CO2',
  // ...
};
---

<BaseLayout structuredData={productSchema}>
```

---

## Desarrollo

### Convenciones de Código

1. **Componentes Astro**:
   - PascalCase para nombres: `MyComponent.astro`
   - Props tipadas con TypeScript
   - Comentario JSDoc describiendo el componente

2. **Archivos i18n**:
   - Claves en camelCase: `heroTitle`, `ctaButton`
   - Estructura anidada por sección: `home.hero.title`

3. **CSS**:
   - Preferir clases de Tailwind
   - Variables CSS para tokens de diseño
   - Estilos scoped en componentes cuando sea necesario

4. **Imágenes**:
   - Colocar en `public/images/`
   - Formatos: WebP preferido, con fallback JPG/PNG
   - Nombres descriptivos: `tratamiento-laser-co2.webp`

### Añadir Nuevas Dependencias

```bash
# Añadir dependencia de producción
npm install nombre-paquete

# Añadir dependencia de desarrollo
npm install -D nombre-paquete
```

---

## Build y Deploy

### Build de Producción

```bash
npm run build
```

Genera archivos estáticos en `./dist/`. El sitio puede desplegarse en cualquier hosting estático.

### Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `SITE_URL` | URL de producción | No (definida en astro.config.mjs) |

### Plataformas Recomendadas

- **Vercel**: `vercel deploy`
- **Netlify**: Conectar repositorio
- **Cloudflare Pages**: Conectar repositorio

---

## Mantenimiento

### Actualizar Contenido

1. **Textos**: Editar archivos en `src/i18n/`
2. **Imágenes**: Reemplazar en `public/images/`
3. **Información de contacto**: Actualizar en diccionarios i18n

### TODOs Pendientes

El proyecto incluye placeholders marcados con `TODO:` o `[Placeholder]`:

- [ ] Añadir imágenes reales del equipo y clínica
- [ ] Configurar número de WhatsApp real
- [ ] Completar datos de contacto (dirección, teléfono)
- [ ] Añadir coordenadas GPS reales
- [ ] Integrar Google Maps embed
- [ ] Configurar formulario de contacto (backend)
- [ ] Añadir imagen OG por defecto
- [ ] Crear páginas legales (privacidad, cookies, aviso legal)

---

## Licencia

Proyecto privado - Instituto Ginecológico Alicante © 2024
