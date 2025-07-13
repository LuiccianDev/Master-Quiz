# Quiz Master - Plataforma de Aprendizaje Interactivo

![Quiz Master Logo](public/logo.svg)

Quiz Master es una plataforma de aprendizaje interactivo construida con Astro, diseñada para ofrecer una experiencia de aprendizaje atractiva a través de cuestionarios y cursos interactivos.

## 🚀 Características Principales

- **Sistema de Cuestionarios Interactivos**: Crea y responde cuestionarios sobre diversos temas.
- **Cursos Estructurados**: Accede a cursos organizados por categorías y niveles.
- **Seguimiento de Progreso**: Visualiza tu avance en los cursos y cuestionarios.
- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles y de escritorio.
- **Autenticación de Usuarios**: Sistema de registro e inicio de sesión para guardar tu progreso.

## 🏗️ Estructura del Proyecto

```
/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/            # Recursos estáticos
│   ├── components/        # Componentes reutilizables
│   │   ├── Button.astro   # Botones personalizados
│   │   ├── Card.astro     # Tarjetas de contenido
│   │   ├── Modal.astro    # Ventanas modales
│   │   └── ProgressBar.astro # Barras de progreso
│   ├── content/           # Contenido de la aplicación
│   │   ├── courses/       # Cursos
│   │   └── quizzes/       # Cuestionarios
│   ├── layouts/           # Plantillas de diseño
│   │   ├── BaseLayout.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Layout.astro
│   └── pages/             # Rutas de la aplicación
│       ├── courses/       # Páginas de cursos
│       ├── quiz/          # Páginas de cuestionarios
│       ├── dashboard.astro # Panel de control
│       ├── profile.astro  # Perfil de usuario
│       └── ...
└── package.json           # Dependencias y scripts
```

## 🛠️ Comandos Útiles

| Comando            | Descripción                                   |
|-------------------|-----------------------------------------------|
| `pnpm install`    | Instalar dependencias                         |
| `pnpm dev`        | Iniciar servidor de desarrollo local          |
| `pnpm build`      | Construir versión de producción               |
| `pnpm preview`    | Previsualizar compilación localmente          |
| `pnpm astro ...`  | Comandos de la CLI de Astro                   |

## 🚀 Cómo Empezar

1. Clona el repositorio
2. Instala las dependencias: `pnpm install`
3. Inicia el servidor de desarrollo: `pnpm dev`
4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## 📚 Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web todo en uno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Lucide Icons](https://lucide.dev/) - Iconos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
