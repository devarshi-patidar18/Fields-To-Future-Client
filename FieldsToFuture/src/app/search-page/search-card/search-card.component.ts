import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {
  @Input() searchedData:any = [];
  @Input() enteredText:string = '';

}
