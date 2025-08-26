export interface Author {
  id: string;
  username: string;
  name: string;
  avatar: string | null;
}

export interface Comment {
  id: string;
  content: string;
  author: Author;
  createdAt: Date;
}

export interface Pagination {
  currentPage: number;
  totalPosts: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  bannerImage: null | string;
  isMarkdown: boolean;
  author: Author;
  published: boolean;
  views: number;
  likes: string[];
  tags: string[];
  readTime: number;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
  slug: string;
}

export interface Posts {
  id: string;
  posts: Post[];
  pagination: Pagination;
}
