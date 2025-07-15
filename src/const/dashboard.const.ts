import type { User, StatItem, ActivityItem, Quiz, Badge } from '../types/dashboard.types';

export const user: User = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  joinDate: 'Enero 2023',
  level: 12,
  xp: 1250,
  nextLevelXp: 1500,
  xpPercentage: Math.round((1250 / 1500) * 100)
};

export const stats: StatItem[] = [
  { name: 'Cuestionarios Completados', value: 24, change: '+12%', changeType: 'increase' },
  { name: 'Puntuación Media', value: '8.7/10', change: '+0.3', changeType: 'increase' },
  { name: 'Tiempo Promedio', value: '2:45 min', change: '-0:15', changeType: 'decrease' },
  { name: 'Posición en Ranking', value: '#42', change: '+5', changeType: 'increase' }
];

export const recentActivity: ActivityItem[] = [
  { id: 1, type: 'quiz', title: 'Historia del Arte', score: '9/10', date: 'Hace 2 horas', category: 'Arte', icon: '🎨' },
  { id: 2, type: 'badge', title: 'Sabio del Conocimiento', description: 'Completa 20 cuestionarios', date: 'Ayer', icon: '🏆' },
  { id: 3, type: 'course', title: 'Introducción a la Programación', progress: 65, date: '2 días atrás', category: 'Tecnología', icon: '💻' },
  { id: 4, type: 'challenge', title: 'Desafío Semanal', result: 'Completado', date: '3 días atrás', icon: '⚡' }
];

export const upcomingQuizzes: Quiz[] = [
  { id: 1, title: 'Geografía Mundial', category: 'Geografía', date: 'Mañana', questions: 15, time: '20 min', difficulty: 'Media' },
  { id: 2, title: 'Matemáticas Avanzadas', category: 'Matemáticas', date: 'En 3 días', questions: 10, time: '15 min', difficulty: 'Alta' },
  { id: 3, title: 'Literatura Clásica', category: 'Literatura', date: 'Próxima semana', questions: 12, time: '18 min', difficulty: 'Baja' }
];

export const badges: Badge[] = [
  { id: 1, name: 'Rayo Veloz', description: 'Completa un cuestionario en menos de 5 minutos', icon: '⚡', earned: true },
  { id: 2, name: 'Perfeccionista', description: 'Obtén 10/10 en un cuestionario', icon: '🎯', earned: true },
  { id: 3, name: 'Maratón', description: 'Completa 5 cuestionarios en un día', icon: '🏃', earned: false },
  { id: 4, name: 'Sabio', description: 'Responde 100 preguntas correctamente', icon: '📚', earned: false }
];
