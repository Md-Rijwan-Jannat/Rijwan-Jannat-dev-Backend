import { TSkill } from './skills.interface';
import { Skill } from './skills.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};

const getSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

const updateSkillInDB = async (id: string, payload: TSkill) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSkillFromDB,
  updateSkillInDB,
  deleteSkillFromDB,
};
