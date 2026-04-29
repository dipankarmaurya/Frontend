import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'RxJS',
    'SCSS',
    'REST APIs',
    'Git',
    'Angular CLI',
    'Unit Testing',
    'Performance Optimization',
    'Responsive Design',
  ];

  certifications = ['AWS Cloud Practitioner'];

  workExperience: WorkExperience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Indegene',
      duration: '2025 — Present',
      responsibilities: [
        'Contributed to frontend development of enterprise Angular applications for pharmaceutical clients, focusing on scalable and maintainable solutions',
        'Built POCs that supported onboarding of enterprise clients and contributed to business growth',
        'Improved PDF rendering performance by ~30% using lazy loading, code splitting, and caching strategies (8s → 5.5s)',
        'Mentored junior developers and contributed to reusable component design and best practices',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Indegene',
      duration: '2022 — 2025',
      responsibilities: [
        'Contributed to migration of legacy applications to Angular 17+, improving bundle size (~25%) and runtime performance (~40%)',
        'Developed 15+ reusable Angular components using strict TypeScript, reducing code duplication and improving development efficiency',
        'Improved unit test coverage from ~40% to ~85%, helping reduce production issues and improve application stability',
        'Resolved 100+ bugs and delivered 50+ features across large-scale applications serving 500K+ users',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'Geekster',
      duration: '8/2022 to 10/2022',
      responsibilities: [
        'Mentored 30+ students on JavaScript fundamentals, improving their understanding of core concepts and problem-solving skills',
        'Conducted live coding sessions with strong student engagement and consistently positive feedback',
      ],
    },
  ];
}
