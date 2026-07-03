export interface Book {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  genre: string;
  publisher: string;
  description: string;
  coverImage: string;
  quote: string;
  pages: number;
  isbn: string;
  purchaseUrl: string;
  accolades: string[];
  isComingSoon?: boolean;
  price?: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Accolade {
  award: string;
  organization: string;
  year: string;
}
