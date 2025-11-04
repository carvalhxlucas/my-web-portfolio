import { Request, Response } from 'express';
import { ProfileService } from '../services/profile.service';

export class ProfileController {
  private profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  getProfile = (req: Request, res: Response): void => {
    try {
      const profile = this.profileService.getProfile();
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  };
}
