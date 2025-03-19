import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';
import { CreateGroupComponent } from "../../group/create-group/create-group.component";
import { QuoteComponent } from "../../common/quote/quote.component";
import { GroupCardComponent } from "../../group/group-card/group-card.component";
import { TransactionComponent } from "../transaction/transaction.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CreateGroupComponent, QuoteComponent, GroupCardComponent, TransactionComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {

  isMyGroupsOpen:boolean = false;

  constructor(public dataStore:DataStoreService){}

  todayDate:Date = new Date();

  openMyGroups() {
    this.isMyGroupsOpen = !this.isMyGroupsOpen;
    }

  
}
