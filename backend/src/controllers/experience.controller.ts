import { Request, Response } from 'express';
import { ExperienceService } from '../services/experience.service';

export class ExperienceController {
  private experienceService: ExperienceService;

  constructor() {
    this.experienceService = new ExperienceService();
  }

  getExperience = (req: Request, res: Response): void => {
    try {
      const experience = this.experienceService.getExperience();
      res.json(experience);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch experience' });
    }
  };
}
