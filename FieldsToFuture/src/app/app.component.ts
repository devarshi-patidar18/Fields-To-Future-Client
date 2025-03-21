import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './common/login/login.component';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from './services/data-store.service';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, RouterLink, FormsModule, UserNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object,public datastore: DataStoreService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // const loginTime = localStorage.getItem("logInTime");
      // const curTime = new Date().getTime();
      // if(loginTime){
      //   console.log(loginTime)
      //   console.log(curTime -  parseInt(loginTime,10));
      // }
    }
    this.datastore.isUserLoggedIn = true;

    // If user is already logged in
    if (this.datastore.isUserLoggedIn) {
      // this.
    }
    else{
      this.datastore.userDetails = {};
    }
  }

}
