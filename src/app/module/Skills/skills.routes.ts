import express from 'express';
import { SkillController } from './skills.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SkillsValidation } from './skills.validation';

const router = express.Router();

// Create a skill
router.post(
  '/',
  validateRequest(SkillsValidation.createSkillSchema),
  SkillController.createSkill
);

// Get all skills
router.get(
  '/',
  validateRequest(SkillsValidation.updateSkillSchema),
  SkillController.getAllSkills
);

// Get a single skill by ID
router.get('/:id', SkillController.getSkill);

// Update a skill by ID
router.patch('/:id', SkillController.updateSkill);

// Delete a skill by ID
router.delete('/:id', SkillController.deleteSkill);

export const SkillRoutes = router;
