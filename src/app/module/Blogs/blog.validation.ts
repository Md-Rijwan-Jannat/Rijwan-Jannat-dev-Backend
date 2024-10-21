import { z } from 'zod';

const createBlogSchema = z.object({
  body: z.object({
    title: z.string().nonempty(),
    author: z.string().nonempty(),
    content: z.string().nonempty(),
    tags: z.array(z.string()).nonempty(),
    publishedDate: z.string().nonempty(),
    isPublished: z.boolean(),
    summary: z.string().nonempty(),
    imageUrl: z.string().optional(),
  }),
});

const updateBlogSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    content: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishedDate: z.string().optional(),
    isPublished: z.boolean().optional(),
    summary: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

export const BlogsValidation = {
  createBlogSchema,
  updateBlogSchema,
};
