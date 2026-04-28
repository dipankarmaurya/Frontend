import { Component, OnInit, OnDestroy, NgZone, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  activeSection = '';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // Initial check
    this.updateActiveSection();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = ['landing', 'about', 'projects', 'contact'];
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    let currentSection = '';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;
        
        // Check if section is in viewport (with some buffer)
        if (elementTop < scrollY + windowHeight - 100 && elementBottom > scrollY + 100) {
          currentSection = section;
          break; // Take the first one (topmost)
        }
      }
    }
    
    if (currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(section: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = section;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
