import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogiService {


  private kliki = 0;


  constructor() { }

  klikiButton(source: String) {
    this.kliki++;
    console.log('Kliki: ' + this.kliki + ' z miejsca: ' + source);
  }

}
