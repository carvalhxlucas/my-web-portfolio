import { Profile } from '../types/portfolio.types';

export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Your Name',
      title: 'Full Stack Developer',
      email: 'your.email@example.com',
      location: 'Your Location',
      bio: 'Passionate developer with expertise in modern web technologies.',
      social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername'
      }
    };
  }
}
