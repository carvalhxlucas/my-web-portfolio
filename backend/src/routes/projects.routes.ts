import { Router } from 'express';
import { ProjectsController } from '../controllers/projects.controller';

const router = Router();
const projectsController = new ProjectsController();

router.get('/', projectsController.getProjects);

export default router;
