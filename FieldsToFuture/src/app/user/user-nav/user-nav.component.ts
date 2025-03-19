import { Component, Input } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {
  @Input() userName: string = 'User';
  @Input() totalInvestment: number = 0;
  logoutConfirmation:boolean = false;
  islogout:boolean = false;

  constructor(public dataStore:DataStoreService,private router: Router) {}

  logout() {
    // Perform logout logic (clear session, navigate to login)
    // this.logoutConfirmation = true;
    if(this.islogout){
      this.dataStore.isUserLoggedIn = false;
      localStorage.removeItem('token'); // Example: Remove token
      this.router.navigate(['/login']);
    }
  }

  goToDashboard() {
    this.router.navigate(['/userdetails']);
  }
}
