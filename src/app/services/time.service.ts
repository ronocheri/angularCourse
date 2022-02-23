import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
getTimer():string{
  return new Date().toLocaleTimeString();
}
  constructor() {
    console.log("TimeService init...")
   }
}
