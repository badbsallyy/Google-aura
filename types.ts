
export interface Author {
  name: string;
  initials: string;
}

export interface Template {
  id: string;
  title: string;
  author: Author;
  remixes: string;
  likes: string;
  thumbnail: string;
  price?: string;
  isPro?: boolean;
}

export interface Component {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
}
