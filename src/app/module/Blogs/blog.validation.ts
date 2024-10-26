import { z } from 'zod';

const createBlogSchema = z.object({
  body: z.object({
    content: z.string().nonempty(),
    imageUrl: z.string().optional(),
  }),
});

const updateBlogSchema = z.object({
  body: z.object({
    content: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

export const BlogsValidation = {
  createBlogSchema,
  updateBlogSchema,
};
