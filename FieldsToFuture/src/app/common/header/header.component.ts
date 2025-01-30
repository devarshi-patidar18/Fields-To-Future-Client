import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobile: boolean = false;
  menuVisible: boolean = false;
  isScrolled: boolean = false;
  searchPage: boolean = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  searchGlobal(event: any): void {
    this.searchPage = true;
    console.log(event.target.value);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    if (typeof window !== 'undefined') {
      if (event && event.target) {
        const target = event.target as Window;
        this.isMobile = target.innerWidth <= 768;
      }
    }
    
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

}
