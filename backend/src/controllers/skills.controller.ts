import { Request, Response } from 'express';
import { SkillsService } from '../services/skills.service';

export class SkillsController {
  private skillsService: SkillsService;

  constructor() {
    this.skillsService = new SkillsService();
  }

  getSkills = (req: Request, res: Response): void => {
    try {
      const skills = this.skillsService.getSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch skills' });
    }
  };
}
