import type { User } from '../types/dashboard.types';

export const isAuthenticated = true; // This would come from your auth state in a real app

export const user: User = {
  name: 'David',
  email: 'david@email.com',
  avatar: 'https://ui-avatars.com/api/?name=David&background=3b82f6&color=fff',
  joinedDate: '15 de Enero, 2023',
  joinDate: '15 de Enero, 2023', // For backward compatibility
  quizzesCompleted: 24,
  averageScore: 87
};
