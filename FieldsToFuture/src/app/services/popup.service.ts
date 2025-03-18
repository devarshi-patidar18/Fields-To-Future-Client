import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  //Subjects are like EventEmitters
  private popupSubject = new Subject<boolean>();

  // Observable to allow components to listen for changes
  popupStaus$ = this.popupSubject.asObservable();

  // Method to open the popup
  openPopup() {
    console.log('popup service open');
    this.popupSubject.next(true);
  }

  // Method to close the popup
  closePopup() {
    this.popupSubject.next(false);
  }

  constructor() { }
}
