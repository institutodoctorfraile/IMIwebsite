# Instituto Dr. Rafael Fraile Perez-Cuadrado - Web Project Agent

## Proyecto
Web profesional del Instituto Dr. Rafael Fraile Perez-Cuadrado, especializado en ginecologia, obstetricia y ginecologia regenerativa. Ubicado en HLA Vistahermosa, Alicante.

## Stack Tecnologico
- **Framework**: Astro 5.16 (SSG)
- **Estilos**: Tailwind CSS 3.4 con sistema de diseno personalizado
- **Tipografia**: Inter (Google Fonts)
- **Lenguaje**: TypeScript 5.7
- **i18n**: Sistema propio (ES/EN/RU)
- **SEO**: Sitemap automatico, JSON-LD, Open Graph, hreflang
- **Optimizacion de imagenes**: Sharp

## Color Primario y Diseno
- **Color primario**: Teal #3D949B (10 tonos: 50-900)
- **Tipografia**: Inter, jerarquia de 6 niveles
- **Espaciado secciones**: 5rem / 7rem (section / section-lg)
- **Contenedor max**: 1280px
- **Border radius**: 1rem (cards), 0.5rem (buttons)
- **Transiciones**: 150ms (fast), 250ms (normal), 350ms (slow)

## Estructura de Carpetas
```
src/
  components/
    ui/          -> Button, Card, Container, SectionHeading, Badge
    sections/    -> Hero, WhatIsRegenerative, DoctorSection, TreatmentsGrid, TeamSection, CtaWideCard
    Header.astro
    Footer.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro (ES)
    ginecologia-regenerativa.astro
    diagnosticos.astro
    cita.astro
    en/  -> English versions
    ru/  -> Russian versions
  i18n/
    es.ts, en.ts, ru.ts, routes.ts, utils.ts, index.ts
  styles/
    global.css
public/
  favicon.svg, robots.txt, images/
```

## Datos de Contacto
- **Telefono principal**: +34 965 248 558
- **WhatsApp/Movil**: +34 652 582 768
- **Email**: info@institutomaternoinfantil.es (pendiente actualizacion)
- **Ubicacion**: HLA Vistahermosa - Avda. Denia, 103 - 03015 Alicante
- **Web**: institutoginecologicoalicante.com

## Paginas del Proyecto (segun contenido)
### Existentes
1. **Home** (/) - Hero, Bloques de servicios, Proceso, Confianza, Testimonios, FAQs, CTA
2. **Ginecologia Regenerativa Hub** (/ginecologia-regenerativa/) - Hub con subpaginas
3. **Diagnosticos** (/diagnosticos/) - Servicios diagnosticos
4. **Cita** (/cita/) - Formulario de contacto

### Nuevas paginas requeridas (segun contenido Word)
5. **Laser CO2** (/ginecologia-regenerativa/laser-co2/)
6. **Radiofrecuencia** (/ginecologia-regenerativa/radiofrecuencia/)
7. **Emsella** (/ginecologia-regenerativa/emsella/)
8. **PRP intimo** (/ginecologia-regenerativa/prp/)
9. **Terapia Hormonal Bioidentica** (/ginecologia-regenerativa/terapia-hormonal-bioidentica/)
10. **Magnetoterapia** (/ginecologia-regenerativa/magnetoterapia/)
11. **Obstetricia** (/obstetricia/)
12. **Ginecologia** (/ginecologia/)
13. **Atencion al Paciente** (/atencion-al-paciente/)

## Reglas del Agente
1. **Mantener estilo visual existente** - No cambiar el sistema de diseno, colores ni tipografia
2. **Imagenes**: Dejar huecos/placeholders para posterior subida de imagenes reales
3. **Contenido**: Respetar el contenido del documento Word como fuente principal
4. **i18n**: Cualquier contenido nuevo debe integrarse en el sistema de traducciones (es.ts, en.ts, ru.ts)
5. **SEO**: Cada pagina debe tener meta title, description, structured data y hreflang
6. **Accesibilidad**: Mantener estandares WCAG: semantic HTML, aria labels, focus states
7. **Componentes**: Reutilizar los componentes UI existentes (Button, Card, Container, SectionHeading, Badge)
8. **Rutas**: Actualizar routes.ts al crear nuevas paginas
9. **No sobrecargar**: Mantener Astro ligero, sin dependencias innecesarias
10. **Mobile-first**: Todo el diseno debe ser responsive

## Servicios del Instituto
### Ginecologia Regenerativa y Funcional
- Laser CO2 fraccionado
- Radiofrecuencia vaginal y vulvar
- Emsella (HIFEM)
- PRP intimo
- Terapia Hormonal Bioidentica
- Magnetoterapia

### Obstetricia
- Control del embarazo
- Diagnostico prenatal y medicina fetal
- Ecografia 4D/5D
- Asistencia al parto

### Ginecologia Integral
- Revisiones ginecologicas
- Anticoncepcion
- Menopausia
- Patologia cervical
- Patologia mamaria

## Tono de Comunicacion
- Profesional pero cercano
- Enfocado en la paciente y su bienestar
- Transparente: "te explicamos con claridad"
- Sin promesas exageradas: "expectativas realistas"
- Siempre con valoracion medica previa
- CTAs claros: Solicita tu cita, WhatsApp, Llamar

## Comandos Utiles
```bash
npm run dev      # Desarrollo local
npm run build    # Build de produccion
npm run preview  # Preview del build
npm run astro    # CLI de Astro
```
