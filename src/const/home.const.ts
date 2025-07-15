import type { FeatureCard, LinkItem } from '../types/ui.types';

export const features: FeatureCard[] = [
  {
    icon: '🎓',
    title: 'Aprende a tu ritmo',
    description: 'Accede a nuestros cursos en cualquier momento y desde cualquier dispositivo.'
  },
  {
    icon: '🏆',
    title: 'Desafía tus conocimientos',
    description: 'Pon a prueba lo que has aprendido con nuestros cuestionarios interactivos.'
  },
  {
    icon: '📊',
    title: 'Sigue tu progreso',
    description: 'Mide tu mejora con estadísticas detalladas de tu rendimiento.'
  }
];

export const links: LinkItem[] = [
  {
    href: '/courses',
    label: 'Explorar Cursos',
    description: 'Descubre nuestra amplia variedad de cursos interactivos',
    icon: '📚',
    gradient: 'from-Blue to-LightBlue'
  },
  {
    href: '/quiz',
    label: 'Tomar Quiz',
    description: 'Pon a prueba tus conocimientos ahora',
    icon: '🧠',
    gradient: 'from-Orange to-Accent'
  }
];
