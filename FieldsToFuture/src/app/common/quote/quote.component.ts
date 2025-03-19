import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  @Input() todaysQuote:any = '';
  @Input() date:Date = new Date();

  constructor(private datePipe:DatePipe) {}

  todayDate:string = this.date.getDate().toString() + '-' +  this.datePipe.transform((this.date.getMonth() + 1).toString(),"MMMM") + '-' + this.date.getFullYear().toString(); 
  // + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear().toString().substr(2,2);
}
