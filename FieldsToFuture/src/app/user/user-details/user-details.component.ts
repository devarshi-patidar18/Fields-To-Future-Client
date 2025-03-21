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
adminoptions: any = [
  {id: 1, name: 'Create Group'},
  {id: 2, name: 'Add Memeber'},
  {id: 3, name: 'Add Loan'},
  {id: 4, name: 'Add Transaction'},
  {id: 5, name: 'Add EMI'}

];
changeGroup($event: Event) {
    console.log('Group Changed');
}

  isMyGroupsAccordionOpen:boolean = false;
  isMyLoansAccordionOpen:boolean = false;
  isTransactionsAccordionOpen:boolean = false;
  isMyEmisAccordionOpen:boolean = false;
  userDetails:any = {
    username: 'dp123',
    firstname: 'Devarshi',
    lastname: 'Patidar',
    email: '',
    password: 'password',
    phone: '9753684208',
    role:'admin',
    // profilePicName:'',
    profilePicName:'user_img.jpg'       
  }

  constructor(public dataStore:DataStoreService){}

  ngOnInit(){
    // if(localStorage.getItem('loggedInUser')==='dp123'){
    // console.log(this.userDetails)
    // console.log(this.dataStore.userDetails);
    //   this.userDetails = this.dataStore.userDetails;
    // }
  }

  todayDate:Date = new Date();

  openMyGroups() {
    this.isMyGroupsAccordionOpen = !this.isMyGroupsAccordionOpen;
    }

  openMyLoans() {
    this.isMyLoansAccordionOpen = !this.isMyLoansAccordionOpen;
  }

  openTransactions() {
    this.isTransactionsAccordionOpen = !this.isTransactionsAccordionOpen;
  }

  openMyEmis() {
    this.isMyEmisAccordionOpen = !this.isMyEmisAccordionOpen;
  }

  
}
