export interface FitnessClass {
  id: string;
  name: string;
  category: 'hiit' | 'strength' | 'mobility' | 'conditioning' | 'combat';
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  time: string;
  durationMinutes: number;
  trainerId: string;
  trainerName: string;
  trainerTitle: string;
  intensityLevel: number; // 1-5
  capacity: number;
  spotsLeft: number;
  studioRoom: string;
  description: string;
  calorieBurnEstimate: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  experienceYears: number;
  specialties: string[];
  bio: string;
  quote: string;
  accentColor: string;
  initials: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number; // discounted rate when billed annually
  popular?: boolean;
  features: string[];
  highlightBadge?: string;
  accessHours: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  membershipPlan: string;
  duration: string;
  result: string;
  rating: number;
  content: string;
  avatarInitials: string;
  avatarBg: string;
}
