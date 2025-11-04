import { Project } from '../types/portfolio.types';

export class ProjectsService {
  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description of project 1',
        technologies: ['Angular', 'Node.js', 'TypeScript'],
        imageUrl: 'https://via.placeholder.com/400x300',
        githubUrl: 'https://github.com/yourusername/project1',
        liveUrl: 'https://project1.com'
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Description of project 2',
        technologies: ['React', 'Express', 'MongoDB'],
        imageUrl: 'https://via.placeholder.com/400x300',
        githubUrl: 'https://github.com/yourusername/project2',
        liveUrl: 'https://project2.com'
      }
    ];
  }
}
