import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadServiceService {

  /**
   * BehaviorSubject is a special type of RxJS Subject that: Stores the last emitted value.
   * Allows subscribers to receive the latest value immediately upon subscription.
   * Initially, it is set to false.
   */
  private reloadTrigger = new BehaviorSubject<boolean>(false);

  /**
   * asObservable() ensures that outside components cannot modify reloadTrigger directly. 
   * Components subscribe to reload$ to listen for changes.
   */
  reload$ = this.reloadTrigger.asObservable();

  constructor() { }

  /**
   * .next(true) emits a new value (true).
   * Any component subscribed to reload$ will detect the change and execute a function
   */
  triggerReload() {
    this.reloadTrigger.next(true);
  }
}
