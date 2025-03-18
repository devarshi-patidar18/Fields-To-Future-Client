import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  isUserLoggedIn: boolean = false;

  constructor() { }
}
