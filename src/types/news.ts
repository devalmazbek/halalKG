export interface NewsType {
  _id: string;
  title: string;
  content: string;
  author: string;
  image: string[];
  source: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}