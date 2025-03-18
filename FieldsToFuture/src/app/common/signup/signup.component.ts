import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  confirmpassword: string = '';

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
