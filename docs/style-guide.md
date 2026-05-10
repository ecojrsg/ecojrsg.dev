# Ecojrsg.dev Style Guide

Guia base para crear nuevos componentes en `ecojrsg.dev` sin romper la identidad visual del sitio.

## Identidad Visual

La pagina usa una estetica dark, tecnica y personal. La direccion visual combina glassmorphism, acentos morados, textura sutil, terminal UI y microinteracciones suaves.

Principios:

- Priorizar interfaces oscuras con profundidad, no superficies planas.
- Usar morados `Eco` como acento, no como relleno excesivo.
- Mantener el contenido claro, compacto y legible.
- Preferir movimientos sutiles: glow, desplazamientos pequenos y transiciones cortas.
- Evitar componentes genericos que no usen `Glass`, la paleta `Eco` o la tipografia del proyecto.

## Paleta

Los colores base viven en `tailwind.config.mjs`.

Fondos:

- `bg-100`: `#0f1115`, fondo principal del sitio.
- `Eco-10`: `#050107`, negro morado profundo.
- `Eco-20`: `#1F0F2D`, fondo oscuro con tono violeta.

Acentos:

- `Eco-50`: `#542187`, acento fuerte para fondos y bordes activos.
- `Eco-80`: `#7B50A1`, borde/hover intermedio.
- `Eco-100`: `#946FB3`, acento principal.
- `Eco-120`: `#AD8FC5`, highlight suave.
- `Eco-160`: `#DED2E8`, texto claro con tinte morado.

Reglas de uso:

- Usa `text-Eco-100` para links o palabras destacadas.
- Usa `text-Eco-160` para texto claro sobre botones o estados activos.
- Usa `rgba(148, 111, 179, ...)` para glows, bordes y overlays.
- Evita blancos puros en textos secundarios; usa opacidades (`opacity-50`, `rgba(255,255,255,0.72)`).

## Tipografia

Fuentes disponibles:

- `font-satoshi`: texto general, UI, cards, nav y parrafos.
- `font-satoshi-italic`: notas, textos secundarios y detalles editoriales.
- `font-cabinet`: titulos grandes o paginas especiales.
- Monospace nativo: solo para terminales, comandos o codigo.

Escalas habituales:

- Cards: `text-xl` para titulos, `text-sm` para cuerpo, `text-xs` para CTA secundario.
- Secciones: `text-5xl` para headers principales.
- Terminal: `0.875rem` para codigo, titulos grandes entre `2.75rem` y `3.5rem` en desktop.

## Componentes Base

Antes de crear un componente nuevo, revisa si puede componerse con estos bloques:

- `Glass.astro`: base para cards, paneles y superficies interactivas.
- `Button.astro`: acciones y botones de iconos.
- `Link.astro`: enlaces internos y externos.
- `Logo.astro`: marca visual; preferir uso integrado o sutil.
- `Slider.astro`: marquee/carrusel de tecnologias.

## Glassmorphism

`Glass.astro` define el lenguaje principal de superficies.

Base visual:

```css
background: linear-gradient(
  135deg,
  rgba(97, 49, 144, 0.15) 0%,
  rgba(15, 17, 21, 0.4) 50%,
  rgba(84, 33, 135, 0.1) 100%
);
backdrop-filter: blur(12px) saturate(1.4);
border: 1px solid rgba(148, 111, 179, 0.2);
border-radius: 1rem;
```

Uso recomendado:

```astro
<Glass hover={true} pixelEffect={true} class="p-6 min-h-full group">
  <h3 class="font-satoshi font-bold text-xl">Titulo</h3>
  <p class="font-satoshi text-sm opacity-80">Contenido</p>
</Glass>
```

Reglas:

- Usa `Glass` para cards y paneles antes de crear un contenedor propio.
- Usa `hover={true}` en elementos clicables.
- Usa `pixelEffect={true}` en cards del grid principal o elementos destacados.
- Si un hover se corta, agrega espacio interno al contenedor, no aumentes el transform agresivamente.

## Cards

Las cards deben sentirse densas, claras y tactiles.

Patron recomendado:

```astro
<Glass
  hover={true}
  pixelEffect={true}
  class="min-h-full p-6 flex flex-col justify-between gap-4 group"
>
  <h3 class="font-satoshi font-bold text-xl">Titulo</h3>
  <p class="font-satoshi text-sm opacity-80">Descripcion breve.</p>
  <div class="flex justify-end items-center">
    <span class="font-satoshi text-xs pr-2 opacity-80">Ver mas</span>
  </div>
</Glass>
```

Reglas:

- Padding normal: `p-6`.
- Padding compacto: `p-3`.
- Usar `group` para animar iconos internos.
- CTA secundario normalmente va al final, alineado a la derecha.
- Evitar sombras pesadas fuera del sistema `Glass`/`Button`.

## Botones

`Button.astro` usa `Glass` internamente y una sombra dura que da caracter al sistema.

Variantes:

- `default`: botones generales.
- `primary`: CTA principal.
- `icon`: boton cuadrado para iconos.

Patron recomendado:

```astro
<Button variant="primary">
  <span>Accion</span>
</Button>
```

Reglas:

- Mantener transiciones de `0.25s` a `0.3s`.
- Mantener active state con desplazamiento pequeno.
- No usar escalados grandes en botones.
- Para iconos, usar `variant="icon"` y asegurar dimensiones consistentes.

## Layout Y Responsive

La pagina usa secciones centradas y ancho maximo controlado.

Reglas:

- Secciones principales: `w-full max-w-[1200px]`.
- Evitar `min-w-*` en secciones grandes, puede crear overflow horizontal.
- Padding principal recomendado: `px-5 sm:px-8 lg:px-12 xl:px-64`.
- En mobile, priorizar una columna y reducir gaps.
- Validar siempre que `document.documentElement.scrollWidth` no supere el viewport.

Ejemplo:

```astro
<section class="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
  <div class="flex flex-col gap-8 lg:gap-12">
    <slot />
  </div>
</section>
```

## Animacion Y Movimiento

El sitio usa Motion para entradas de secciones y CSS para microinteracciones.

Clases existentes:

- `.inAnimateL`: entrada desde izquierda.
- `.inAnimateR`: entrada desde derecha.
- `.inAnimateB`: entrada desde abajo.

Tiempos recomendados:

- Entradas: `0.3s` a `0.4s`.
- Hover: `0.25s` a `0.3s`.
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` o spring existente.

Reglas:

- Evitar animaciones infinitas salvo que sean ambientales, como sliders o cursores.
- No animar layout pesado si basta con `transform` y `opacity`.
- No usar hover como unica forma de comunicar informacion importante.

## Slider Y Marquees

`Slider.astro` es un marquee CSS continuo para tecnologias.

Variantes:

- `compact`: para cards pequenas.
- `section`: para la seccion `Technology`, con contenedores y labels.

Uso:

```astro
<Slider variant="compact" />
<Slider variant="section" pauseOnHover={true} />
```

Reglas:

- No agregar JS para movimiento si el marquee CSS resuelve el caso.
- Mantener secuencias duplicadas para evitar reinicios visibles.
- Ajustar velocidad con `--marquee-duration` por breakpoint.
- Si hay hover dentro del slider, asegurar espacio vertical para que no se corte.

## Terminal UI

La UI tipo terminal se usa para comunicar identidad tecnica, especialmente en `About.astro`.

Elementos:

- Header con dots rojo/amarillo/verde.
- Monospace para codigo.
- Comentarios y tokens en tonos `Eco`.
- Texto principal con `Satoshi`.
- Logo como watermark sutil, no como elemento aislado.

Reglas:

- Usar terminal UI solo cuando el contenido justifique el lenguaje de codigo.
- Mantener legibilidad por encima del efecto visual.
- Los decorativos deben ir detras del contenido con baja opacidad.

## Fondos Y Texturas

El sitio usa textura global `.frame` con `/img/dev/textura.png`.

Reglas:

- Opacidad baja: alrededor de `0.06`.
- Usar radial gradients suaves para profundidad.
- Evitar superponer demasiadas texturas en el mismo componente.
- El fondo principal siempre debe permanecer oscuro.

## Iconos Y Logos

Reglas:

- Logos informativos: `alt="Nombre"`.
- Logos decorativos: `alt=""`.
- Iconos dentro de botones deben tener tamano consistente.
- El logo de Eco debe integrarse en el contexto: marca pequena, watermark o parte del layout.
- Evitar colocar el logo como bloque flotante sin funcion visual.

## Accesibilidad E i18n

Reglas:

- Todo texto visible nuevo debe pasar por i18n si pertenece a contenido publico.
- Enlaces externos deben usar texto claro o `aria-label`.
- Botones icon-only deben tener texto accesible o contexto suficiente.
- Mantener contraste alto en texto principal.
- No esconder contenido importante solo en tooltips.

## Convenciones De Codigo

Reglas actuales del proyecto:

- Usar imports internos con `@/`.
- Preferir componentes existentes antes de crear patrones nuevos.
- Mantener componentes pequenos y concretos.
- Evitar estilos globales salvo que sean realmente globales.
- Usar clases locales en componentes (`tech-slider__item`, `terminal-body`, etc.) para patrones especificos.
- Mantener comentarios bilingues si el archivo ya los usa.

## Checklist Para Nuevos Componentes

Antes de terminar un componente nuevo, valida:

- Usa `Glass` si es card, panel o superficie interactiva.
- Usa `font-satoshi` como tipografia base.
- Usa la escala `Eco` para acentos, bordes y glows.
- Tiene responsive mobile/tablet/desktop.
- No genera overflow horizontal.
- Tiene estados hover/focus razonables si es interactivo.
- Los textos visibles usan i18n cuando aplica.
- Los iconos/logos tienen `alt` o tratamiento decorativo correcto.
- Las animaciones usan `transform`/`opacity` y no son excesivas.
- `npm run build` pasa sin errores ni warnings.
