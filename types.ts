
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  fact: string;
}

export interface Landmark {
  id: string;
  name: string;
  description: string;
  image: string;
  quiz?: QuizQuestion[]; // Added quiz prop
  googleMapsUrl?: string;
  gallery?: { url: string; caption: string }[];
  tags: string[];
}

export interface Region {
  id: string;
  name: string;
  title: string;
  description: string;
  color: 'blue' | 'emerald' | 'cyan' | 'orange' | 'purple';
  accentColor: string;
  backgroundImage: string;
  landmarks: Landmark[];
}

export type RegionID = 'north' | 'central' | 'east' | 'south' | 'islands';
