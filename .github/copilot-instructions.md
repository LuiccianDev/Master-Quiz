
# Instrucciones Copilot para quiz-master (Astro + Tailwind)

## Descripción del Proyecto
- Este es un proyecto Astro que utiliza Tailwind CSS para los estilos.
- La estructura sigue las recomendaciones de Astro: `src/` contiene `assets/`, `components/`, `layouts/`, `pages/` y `styles/`.
- El punto de entrada principal es `src/pages/index.astro`, que usa `Layout.astro` y `Welcome.astro`.

## Flujos de Trabajo Clave
- **Instalar dependencias:** `pnpm install`
- **Iniciar servidor de desarrollo:** `pnpm dev` (sirve en `localhost:4321`)
- **Construir para producción:** `pnpm build` (salida en `./dist/`)
- **Previsualizar build:** `pnpm preview`
- **CLI de Astro:** `pnpm astro ...` (ejemplo: `pnpm astro add`, `pnpm astro check`)

## Estilos y Formato
- Tailwind CSS está configurado en `src/styles/global.css` y referenciado en `.prettierrc` para el formateo.
- Usa el plugin `prettier-plugin-tailwindcss` para ordenar las clases de forma consistente.
- Todos los estilos deben ir en `global.css` salvo que sean específicos de un componente.

## Convenciones y Patrones
- **Componentes:** UI reutilizable en `src/components/`. Usa archivos `.astro` para componentes Astro.
- **Layouts:** Estructura compartida de página en `src/layouts/`.
- **Pages:** Rutas en `src/pages/` (ejemplo: `index.astro`).
- **Assets:** Archivos estáticos (SVG, imágenes) en `src/assets/`.
- **Public:** Archivos en `public/` se sirven tal cual.
- **TypeScript:** El proyecto usa `tsconfig.json` para tipado.
- **Prettier:** El formateo se aplica vía `.prettierrc` y la configuración en `package.json`.

## Puntos de Integración
- **Astro:** Framework principal para renderizado y rutas.
- **Tailwind CSS:** Framework de utilidades CSS, integrado vía `tailwindcss` y `@tailwindcss/vite`.
- **Prettier:** Formateo de código, con plugin para ordenar clases Tailwind.
- **pnpm:** Gestor de paquetes (ver `packageManager` en `package.json`).

## Ejemplo: Añadir una Nueva Página
1. Crea un archivo `.astro` en `src/pages/` (ejemplo: `about.astro`).
2. Usa `<Layout>` para mantener la estructura.
3. Importa y utiliza componentes de `src/components/` según sea necesario.

## Depuración
- Usa el servidor de desarrollo (`pnpm dev`) para recarga en vivo y reporte de errores.
- Para depuración avanzada, revisa `.vscode/launch.json` (ejecuta `astro dev` en terminal node).

## Referencias
- [Documentación Astro](https://docs.astro.build)
- [Documentación Tailwind](https://tailwindcss.com/docs)

---
**Para agentes AI:**
- Sigue siempre la estructura y convenciones anteriores.
- Usa pnpm para todas las tareas de gestión de paquetes.
- Formatea el código con Prettier y respeta el orden de clases Tailwind.
- Consulta `README.md` para comandos y estructura.
- Ante la duda, prefiere los patrones de Astro y consulta la documentación oficial.
