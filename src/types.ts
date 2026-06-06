export interface Project {
  id: string;
  title: string;
  category: 'education' | 'healthcare' | 'empowerment' | 'environment';
  description: string;
  impact: string;
  status: 'ongoing' | 'completed';
  date: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}
