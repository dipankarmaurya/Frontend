import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of your first project. Highlight key features and technologies used.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Another exciting project showcasing your skills and expertise in web development.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A portfolio project demonstrating responsive design and modern web standards.',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#',
      github: '#'
    }
  ];
}
