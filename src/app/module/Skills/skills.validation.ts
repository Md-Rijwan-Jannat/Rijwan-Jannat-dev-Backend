import { z } from 'zod';

const createSkillSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    level: z.string().nonempty(),
    category: z.string().nonempty(),
    icon: z.string().url(),
  }),
});

const updateSkillSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    level: z.string().optional(),
    category: z.string().optional(),
    icon: z.string().url().optional(),
  }),
});

export const SkillsValidation = {
  createSkillSchema,
  updateSkillSchema,
};
