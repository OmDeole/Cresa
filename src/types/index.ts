export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export interface Professor {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  email?: string;
  specialization?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

export interface Alumni {
  id: string;
  name: string;
  graduationYear: string;
  achievement: string;
  company?: string;
  image: string;
  linkedin?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
  category: string;
}