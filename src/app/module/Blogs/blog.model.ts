import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String, required: true }],
    publishedDate: { type: Date, required: true },
    isPublished: { type: Boolean, default: false },
    summary: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const Blog = model<TBlog>('Blog', blogSchema);
