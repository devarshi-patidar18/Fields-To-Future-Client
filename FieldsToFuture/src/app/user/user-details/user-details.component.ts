import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';
import { CreateGroupComponent } from "../../group/create-group/create-group.component";
import { QuoteComponent } from "../../common/quote/quote.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CreateGroupComponent, QuoteComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  constructor(public dataStore:DataStoreService){}

  todayDate:Date = new Date();
  
  
}
