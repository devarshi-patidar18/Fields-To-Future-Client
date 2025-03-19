import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './common/login/login.component';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from './services/data-store.service';
import { UserNavComponent } from './user/user-nav/user-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule,RouterLink,FormsModule,UserNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public datastore:DataStoreService) {}

  ngOnInit(){
    this.datastore.isUserLoggedIn = true;
  }

}
