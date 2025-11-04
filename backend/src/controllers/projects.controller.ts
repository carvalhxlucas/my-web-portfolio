import { Request, Response } from 'express';
import { ProjectsService } from '../services/projects.service';

export class ProjectsController {
  private projectsService: ProjectsService;

  constructor() {
    this.projectsService = new ProjectsService();
  }

  getProjects = (req: Request, res: Response): void => {
    try {
      const projects = this.projectsService.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  };
}
