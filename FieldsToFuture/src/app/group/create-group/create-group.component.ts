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
  firstname:string = '';
  lastname:string = '';
  phone:string = '';
  password:string = '';
  confirmpassword:string = '';

  onLogin() {    
  }

}
