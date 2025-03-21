import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
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
  previewUrl: string | ArrayBuffer | null = null;
  profilePicAvailable: boolean = false;
  userDummyInformation:any = {};
  constructor(public datastore: DataStoreService, public router: Router) { }

  ngOnInit() {
    if (this.datastore.isUserLoggedIn) {
      this.user = this.datastore.userDetails;
      this.userDummyInformation = this.datastore.userDetails;
      this.previewUrl = this.datastore.userDetails.profilePicName!=''?"../../../assets/" + this.datastore.userDetails.profilePicName:
      "../../../assets/default_user_img.avif";
    }
    else {
      this.previewUrl = "../../../assets/default_user_img.avif"
    }

  }

  rigesterUser() {
    console.log(this.user.profilepic);
    if (this.datastore.isUserLoggedIn) {
      alert('User Updated Successfully!');
      this.router.navigate(['/userdetails']);
    }
    else {
      alert('User Registered Successfully!');
      this.router.navigate(['/login']);
    }
  }



  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
      this.profilePicAvailable = true;
    }
  }

  deleteProfilePic() {
    this.profilePicAvailable = false;
    this.previewUrl = this.userDummyInformation.profilePicName!=''?"../../../assets/"+ this.userDummyInformation.profilePicName:
    "../../../assets/default_user_img.avif";
  }
}
