import { Skill } from '../types/portfolio.types';

export class SkillsService {
  getSkills(): Skill[] {
    return [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 }
    ];
  }
}
