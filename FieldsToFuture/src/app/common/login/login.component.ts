import {Component} from '@angular/core';

import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [DatePipe]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private datastore:DataStoreService,private router:Router,public datePipe:DatePipe) {}

  ngOnInit(){
    // this.datastore.isUserLoggedIn = true;
  }

  onLogin() {
    // Simulating a simple login function. You can replace this with an actual authentication service.
    if (this.username === 'dp123' && this.password === 'password') {
      // alert('Login Successful!');
      this.datastore.isUserLoggedIn = true;
      localStorage.setItem("loggedInUser", this.username);
      // const logInTime = new Date().getTime();
      localStorage.setItem("logInTime", new Date().getTime().toString());
      
      this.router.navigate(['/userdetails']);
    } else {
      alert('Invalid Username or Password');
    }
  }
}

