import {Component} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
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

  constructor(private datastore:DataStoreService) {}

  ngOnInit(){
    this.datastore.isUserLoggedIn = true;
  }

  onLogin() {
    // Simulating a simple login function. You can replace this with an actual authentication service.
    if (this.username === 'user' && this.password === 'password') {
      alert('Login Successful!');
    } else {
      alert('Invalid Username or Password');
    }
  }
}

