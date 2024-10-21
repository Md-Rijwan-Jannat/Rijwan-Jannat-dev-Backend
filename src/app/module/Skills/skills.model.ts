import { Schema, model } from 'mongoose';
import { TSkill } from './skills.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { timestamps: true }
);

export const Skill = model<TSkill>('Skill', skillSchema);
