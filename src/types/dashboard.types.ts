// User related types
export interface User {
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  joinedDate?: string; // For backward compatibility
  level?: number;
  xp?: number;
  nextLevelXp?: number;
  xpPercentage?: number;
  quizzesCompleted?: number;
  averageScore?: number;
}

// Statistic item type
export interface StatItem {
  name: string;
  value: string | number;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
}

// Activity item type
export interface ActivityItem {
  id: number;
  type: 'quiz' | 'badge' | 'course' | 'challenge';
  title: string;
  date: string;
  icon: string;
  description?: string;
  score?: string;
  category?: string;
  progress?: number;
  result?: string;
}

// Quiz type
export interface Quiz {
  id: number;
  title: string;
  category: string;
  date: string;
  questions: number;
  time: string;
  difficulty: 'Baja' | 'Media' | 'Alta';
}

// Badge type
export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}
