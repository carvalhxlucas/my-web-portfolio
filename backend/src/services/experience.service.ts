import { Experience } from '../types/portfolio.types';

export class ExperienceService {
  getExperience(): Experience[] {
    return [
      {
        id: 1,
        company: 'Company Name',
        position: 'Software Developer',
        period: '2020 - Present',
        description: 'Worked on various web applications using modern technologies.',
        technologies: ['Angular', 'Node.js', 'TypeScript']
      }
    ];
  }
}
