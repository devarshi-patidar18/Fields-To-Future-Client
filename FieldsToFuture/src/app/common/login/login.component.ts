import {Component} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private datastore:DataStoreService,private router:Router) {}

  ngOnInit(){
    // this.datastore.isUserLoggedIn = true;
  }

  onLogin() {
    // Simulating a simple login function. You can replace this with an actual authentication service.
    if (this.username === 'user' && this.password === 'password') {
      // alert('Login Successful!');
      this.datastore.isUserLoggedIn = true;
      this.router.navigate(['/userdetails']);
    } else {
      alert('Invalid Username or Password');
    }
  }
}

