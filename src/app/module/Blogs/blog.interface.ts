export interface TBlog {
  title: string;
  author: string;
  content: string;
  tags: string[];
  publishedDate: Date;
  isPublished: boolean;
  summary: string;
  imageUrl?: string;
}
