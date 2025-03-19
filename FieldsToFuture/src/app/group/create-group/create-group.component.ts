import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.css'
})
export class CreateGroupComponent {

  groupname:string = '';
  village:string = '';
  city:string = '';
  district:string = '';
  state:string = '';
  country:string = 'India';

  onLogin() {    
  }

}
