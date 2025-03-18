import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('bottom', { static: false }) bottomElement!: ElementRef;

  gettingStarted() {
    this.bottomElement?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
