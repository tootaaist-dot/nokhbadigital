
export interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  platforms: number;
  posts: number;
  images: number;
  description: string;
  features: string[];
  tier: 'basic' | 'medium' | 'advanced';
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  icon: string;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  deadline: Date;
  image: string;
  isGolden?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  package?: string;
  status?: string;
  storeUrl?: string;
  balance?: number;
}

export interface CampaignStat {
  date: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}
