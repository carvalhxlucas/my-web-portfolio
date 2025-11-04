import { Router, Request, Response } from 'express';
import profileRoutes from './profile.routes';
import projectsRoutes from './projects.routes';
import experienceRoutes from './experience.routes';
import skillsRoutes from './skills.routes';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

router.use('/profile', profileRoutes);
router.use('/projects', projectsRoutes);
router.use('/experience', experienceRoutes);
router.use('/skills', skillsRoutes);

export default router;
