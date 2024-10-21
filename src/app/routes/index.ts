import { Router } from 'express';
import { AdminRoutes } from '../module/Admin/admin.routes';
import { ProjectRoutes } from '../module/Projects/projects.routes';
import { SkillRoutes } from '../module/Skills/skills.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: AdminRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
];

// This will automatically loop your routes that you will add in the moduleRoutes array
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
