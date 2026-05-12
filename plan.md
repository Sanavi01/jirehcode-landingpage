# Jireh Code — Landing Page

## Plan de Implementacion

### Stack Tecnologico

| Capa | Tecnologia |
|------|-----------|
| Framework | Astro 5 (SSG) |
| UI Interactiva | React 18 + Framer Motion |
| Estilos | Tailwind CSS 4 (integracion nativa) |
| Iconos | Lucide React |
| Tipografia | Inter (Google Fonts, local) |

### Estructura del Proyecto

```
jireh-landing-page/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # sticky, glass effect, mobile hamburger animado
│   │   ├── Hero.tsx                 # titulo animado, formas geometricas flotantes
│   │   ├── Process.tsx              # 4 pasos con entrada staggered
│   │   ├── Services.tsx             # grid de 5 servicios + CTA card, hover effects
│   │   ├── Sectors.tsx              # 4 sectores con iconos y fade-up
│   │   ├── About.tsx                # quienes somos, valores, imagen con efecto
│   │   ├── Contact.tsx              # formulario + canales (WhatsApp, email)
│   │   ├── FinalCTA.tsx             # banner final con accion
│   │   ├── Footer.astro             # pie de pagina estatico
│   │   └── ui/
│   │       ├── Button.tsx           # boton reutilizable con variantes
│   │       ├── Badge.tsx            # chip/tag (ej: "Consultoria & Desarrollo")
│   │       └── SectionHeading.tsx   # encabezado de seccion reutilizable
│   ├── layouts/
│   │   └── Layout.astro             # head, SEO, fuentes, estructura base
│   ├── pages/
│   │   └── index.astro              # pagina unica que compone todas las secciones
│   └── styles/
│       └── global.css               # tailwind directives + estilos base
├── public/
│   └── favicon.svg
```

### Paleta de Colores (Refinada)

Basada en los colores del boceto, simplificada a ~10 tokens:

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#3537d6` | Botones principales, enlaces activos, acentos |
| `primary-hover` | `#5054ef` | Hover de botones, fondos suaves |
| `primary-light` | `#e1e0ff` | Fondos de badges, chips, iconos |
| `surface` | `#f9f9f9` | Fondo general |
| `surface-alt` | `#f3f3f3` | Fondos alternos de seccion |
| `surface-card` | `#ffffff` | Fondos de cards |
| `text-primary` | `#1b1b1b` | Texto principal |
| `text-secondary` | `#454555` | Texto secundario |
| `border` | `#e2e2e2` | Bordes |
| `border-hover` | `#c6c4d8` | Bordes en hover |

### Estrategia de Animaciones (Framer Motion)

| Componente | Animacion | Trigger |
|-----------|----------|---------|
| **Navbar** | Fade del fondo + backdrop-blur | `useScroll` |
| **Hero** | Titular con stagger, formas geometricas flotantes | `client:load` |
| **Process** | Cards entran en secuencia staggered | `useInView` |
| **Services** | Hover: scale + glow border. Entrada: fade-up staggered | `useInView` + `whileHover` |
| **Sectors** | Fade-in-up simple | `useInView` |
| **About** | Imagen con parallax sutil + hover grayscale→color | `useInView` + `whileHover` |
| **Contact** | Campos del form con stagger al scroll | `useInView` |
| **FinalCTA** | Scale + fade al entrar en viewport | `useInView` |
| **Botones** | `whileTap={{ scale: 0.97 }}` + `whileHover` | Interaccion directa |
| **Scroll Progress** | Barra superior que muestra avance de lectura | `useScroll` |

### Estrategia de Hidratacion (Rendimiento)

| Componente | Directiva Astro | Razon |
|-----------|----------------|-------|
| Navbar | `client:load` | Interactivo inmediato, siempre visible |
| Hero | `client:load` | Above the fold |
| Process | `client:visible` | Lazy, bajo el fold |
| Services | `client:visible` | Lazy |
| Sectors | `client:visible` | Lazy |
| About | `client:visible` | Lazy |
| Contact | `client:visible` | Lazy |
| FinalCTA | `client:visible` | Lazy |
| Footer | `.astro` (sin hidratacion) | Estatico |

### Mejoras sobre el Boceto

1. **Hero visual abstracto** — formas geometricas flotantes animadas con Framer Motion en lugar de imagen estatica
2. **Glass morphism sutil** — `backdrop-blur` y fondos semi-transparentes en cards clave y navbar
3. **Indicador de progreso de scroll** — barra superior que muestra el avance de lectura
4. **Hamburger menu animado** — mobile menu con transiciones suaves de entrada/salida
5. **Glow border en hover** — borde con gradiente animado en cards de servicio al hacer hover
6. **Micro-interacciones** — botones con feedback tactil, links con underline animado
7. **Staggered scroll reveals** — todas las secciones se revelan con animaciones secuenciales al hacer scroll

### Fases de Implementacion

#### Fase 1 — Inicializacion
1. Crear proyecto Astro con `create astro`
2. Instalar dependencias: `@astrojs/react`, `@astrojs/tailwindcss`, `react`, `react-dom`, `framer-motion`, `lucide-react`
3. Configurar `tailwind.config.mjs` con paleta refinada
4. Cargar fuente Inter localmente

#### Fase 2 — Layout & Componentes Base
5. `Layout.astro` — HTML base, SEO, favicon
6. `global.css` — Tailwind directives, estilos base
7. `Button.tsx` — variantes (primary, outline, ghost) con `whileTap`/`whileHover`
8. `Badge.tsx` — chip reutilizable
9. `SectionHeading.tsx` — titulo + subtitulo de seccion con animacion

#### Fase 3 — Navbar
10. `Navbar.tsx` — sticky, glass morphism al scroll, mobile hamburger animado, smooth scroll a secciones

#### Fase 4 — Secciones (con Framer Motion)
11. `Hero.tsx` — formas geometricas abstractas animadas + texto staggered
12. `Process.tsx` — 4 cards con entrada secuencial al scroll
13. `Services.tsx` — grid 3x2 con glow border en hover, CTA card
14. `Sectors.tsx` — 4 cards con iconos y fade-up
15. `About.tsx` — texto + placeholder abstracto + valores con iconos
16. `Contact.tsx` — formulario + canales WhatsApp/email
17. `FinalCTA.tsx` — banner con CTA
18. `Footer.astro` — estatico

#### Fase 5 — Integracion
19. `index.astro` — componer todas las secciones con directivas `client:load`/`client:visible`
20. `astro build` para verificar que compila sin errores

### Secciones de la Landing Page

| # | Seccion | ID | Contenido |
|---|---------|-----|-----------|
| 1 | Navbar | — | Marca, links, CTA "Solicitar diagnostico" |
| 2 | Hero | `#hero` | Titular, subtitulo, 2 CTAs, visual abstracto |
| 3 | Como Trabajamos | `#process` | 4 pasos: Analizar → Optimizar → Implementar → Acompanar |
| 4 | Servicios | `#services` | 5 servicios + CTA "No sabes por donde empezar?" |
| 5 | Sectores | `#sectors` | 4 sectores: Empresas locales, Sector publico, Turismo, Educacion |
| 6 | Quienes Somos | `#about` | Texto corporativo, 4 diferenciadores, imagen |
| 7 | Contacto | `#contact` | Formulario (3 campos) + WhatsApp + Email |
| 8 | CTA Final | `#cta` | Banner con 2 acciones |
| 9 | Footer | — | Marca, links legales, copyright |

### Contenido por Seccion

#### Hero
- **Badge**: "Consultoria & Desarrollo"
- **Titular**: "Optimizamos tu operacion. Construimos la solucion."
- **Subtitulo**: "En Jireh Code analizamos como trabaja tu empresa, identificamos lo que frena tu crecimiento y desarrollamos herramientas digitales que generan resultados reales."
- **CTA Principal**: "Solicitar diagnostico gratuito"
- **CTA Secundario**: "Ver como trabajamos"

#### Como Trabajamos
- **Titular**: "Un proceso claro, de principio a fin"
- **Subtitulo**: "No llegamos a vender un producto. Llegamos a entender tu negocio."
- **Paso 1**: Analizamos tu operacion
- **Paso 2**: Optimizamos tus procesos
- **Paso 3**: Implementamos la solucion
- **Paso 4**: Acompanamos la adopcion

#### Servicios
- **Titular**: "¿Que podemos hacer por tu empresa?"
- **Subtitulo**: "Nuestros servicios estan disenados para trabajar juntos. Puedes empezar por uno y escalar segun tus necesidades."
- **Servicio 1**: Optimizacion y Transformacion Digital
- **Servicio 2**: Desarrollo de Plataformas y Soluciones
- **Servicio 3**: Automatizacion y Eficiencia Operativa
- **Servicio 4**: Presencia Digital y Plataformas Web
- **Servicio 5**: Capacitacion y Formacion Empresarial
- **CTA Card**: "¿No sabes por donde empezar?"

#### Sectores
- **Titular**: "Sectores en los que trabajamos"
- **Subtitulo**: "Nuestras soluciones se adaptan al contexto de cada organizacion."
- Empresas locales, Sector publico, Turismo, Educacion

#### Quienes Somos
- **Titular**: "Jireh Code"
- **Texto corporativo**
- **Diferenciadores**: 4 bullets con iconos
- **Imagen abstracta**

#### Contacto
- **Titular**: "Hablemos sobre tu operacion"
- **Subtitulo**: "La mayoria de empresas tienen oportunidades de mejora claras que no han identificado aun. Nosotros las encontramos contigo."
- **Canales**: Formulario, WhatsApp, Email
- **Campos**: Nombre, Empresa, Mayor reto operativo

#### CTA Final
- **Titular**: "¿Tu operacion podria funcionar mejor?"
- **Subtitulo**: "Te ayudamos a identificar el problema y construir la solucion correcta."
- **Acciones**: Solicitar diagnostico gratuito, Escribirnos por WhatsApp

#### Footer
- **Marca**: Jireh Code
- **Tagline**: Consultoria y Desarrollo Tecnologico
- **Links**: Politica de Privacidad, Terminos de Uso, LinkedIn
- **Copyright**: © 2025 Jireh Code. Todos los derechos reservados.
