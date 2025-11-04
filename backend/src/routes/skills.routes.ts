import { Router } from 'express';
import { SkillsController } from '../controllers/skills.controller';

const router = Router();
const skillsController = new SkillsController();

router.get('/', skillsController.getSkills);

export default router;
