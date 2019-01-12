import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bindings-zadanie',
  templateUrl: './bindings-zadanie.component.html',
  styleUrls: ['./bindings-zadanie.component.css']
})
export class BindingsZadanieComponent implements OnInit {

  input = 'max';
  dodadkowyText =  this.input;
  maxLen = 7;
  src = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F5845e3207733c3558233c0f1.png';
  constructor() { }

  ngOnInit() {
  }

  refresh(event) {
    this.maxLen = 10;
    this.src = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F5845e1997733c3558233c0f0.png';
    this.dodadkowyText = this.input;

  }

}
