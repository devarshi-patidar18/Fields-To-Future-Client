import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from "../quote/quote.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('bottom', { static: false }) bottomElement!: ElementRef;

  // todaysQuote:any = {};

  constructor(private router:Router,public dataStore:DataStoreService){}

  ngOnInit() {
    // this.todaysQuote = this.dataStore.getTodaysQuote();
  }

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
      this.router.navigate(['/join-group']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  goToDashBoard() {
    this.router.navigate(['/userdetails']);
    }

}
