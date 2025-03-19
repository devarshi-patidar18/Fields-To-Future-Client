import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('bottom', { static: false }) bottomElement!: ElementRef;

  constructor(private router:Router,public dataStore:DataStoreService){}

  gettingStarted() {
    document.getElementById('bottom')?.scrollIntoView({ behavior: 'smooth' });
  }

  goToCreateGroup(){
    if(this.dataStore.isUserLoggedIn){
      this.router.navigate(['/create-group']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  goToJoinRequestFundGroup(){
    if(this.dataStore.isUserLoggedIn){
      this.router.navigate(['/searchpage']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
