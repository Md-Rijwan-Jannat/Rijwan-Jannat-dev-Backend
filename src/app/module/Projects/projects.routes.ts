import express from 'express';
import { ProjectController } from './projects.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectsValidation } from './projects.validation';

const router = express.Router();
// Create a new project
router.post(
  '/',
  validateRequest(ProjectsValidation.createProjectSchema),
  ProjectController.createProject
);

// Get all projects
router.get('/', ProjectController.getAllProjects);

// Get a single project by ID
router.get('/:id', ProjectController.getProjectById);

// Update a project by ID
router.patch(
  '/:id',
  validateRequest(ProjectsValidation.updateProjectSchema),
  ProjectController.updateProjectById
);

// Delete a project by ID
router.delete('/:id', ProjectController.deleteProjectById);

export const ProjectRoutes = router;
