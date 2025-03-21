import { Component, Input } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReloadServiceService } from '../../reload-service.service';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {

  @Input() userName: string = 'User';
  @Input() totalInvestment: number = 0;
  // @Input() profilePicName:string = '';
  profilePicName:string ='';
  // profilePicPath:string = '../../../assets/'+this.profilePicName!=''?this.profilePicName:'default_user_img.avif';
  logoutConfirmation: boolean = false;
  islogout: boolean = false;
  isUserEdit: boolean = false;
  userDetails:any = {}

  constructor(public dataStore: DataStoreService, private router: Router,private reloadService:ReloadServiceService) { }

  ngOnInit(){
    this.reloadService.reload$.subscribe(()=>{
      this.dataStore.isUserLoggedIn = true;
      this.userDetails = this.dataStore.userDetails;
      console.log("reloaded by service")
    })
    this.profilePicName = "../../../assets/"+this.dataStore.userDetails.profilePicName;
  }

  editUserDetails() {
    this.isUserEdit = true;
    this.router.navigate(['/signup']);
  }

  logout() {
    // Perform logout logic (clear session, navigate to login)
    // this.logoutConfirmation = true;
    if (this.islogout) {
      this.dataStore.isUserLoggedIn = false;
      this.dataStore.userDetails =  {};
      this.logoutConfirmation = false;
      localStorage.removeItem('token'); // Example: Remove token
      this.router.navigate(['/login']);
    }
  }

  goToDashboard() {
    this.router.navigate(['/userdetails']);
  }
}
