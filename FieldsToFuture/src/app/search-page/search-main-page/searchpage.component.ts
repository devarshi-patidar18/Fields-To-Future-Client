import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchCardComponent } from "../search-card/search-card.component";

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchCardComponent],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent {
  searchInput:string = '';
  searchedData:any = [];

  searchKeyPress(event:any) {
    this.searchInput = event.target.value;
    setTimeout(() => {
      this.searchedData = [
        {header:"Group",name:"Patidar Samaj",village:"Karondiya"},
        {header:"Group",name:"Patidar Samaj",village:"Karondiya"},
        {header:"Group",name:"Patidar Samaj",village:"Karondiya"},
        {header:"Transaction",name:"EMI",village:"Karondiya"},
        {header:"Group",name:"Patidar Samaj",village:"Karondiya"},
        {header:"Loan",name:"asdfas",village:"Karondiya"},
        {header:"Group",name:"Patidar Samaj",village:"Karondiya"}
      ]
    }, 2000);
    }

}
