import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dipankar-maurya-567a23172/', icon: 'in' },
    { name: 'GitHub', url: 'https://github.com/dipankarmaurya', icon: 'gh' },
    { name: 'Email', url: 'mailto:dipankarmaurya5855@gmail.com', icon: 'em' }
  ];
}
