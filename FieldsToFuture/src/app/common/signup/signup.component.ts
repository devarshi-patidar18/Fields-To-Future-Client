import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
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
  user: any = {};

  constructor(public datastore:DataStoreService,public router:Router) {}
  
    ngOnInit(){
      if(this.datastore.isUserLoggedIn){
        this.user = this.datastore.userDetails;
      }
    }

  rigesterUser() {
    console.log(this.user.profilepic);
    if(this.datastore.isUserLoggedIn){
      alert('User Updated Successfully!');
      this.router.navigate(['/userdetails']);
    }
    else{
      alert('User Registered Successfully!');
      this.router.navigate(['/login']);
    }
  }
}
