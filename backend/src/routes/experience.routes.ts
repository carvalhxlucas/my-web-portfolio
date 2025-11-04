import { Router } from 'express';
import { ExperienceController } from '../controllers/experience.controller';

const router = Router();
const experienceController = new ExperienceController();

router.get('/', experienceController.getExperience);

export default router;
