import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-input',
  templateUrl: './property-input.component.html',
  styleUrls: ['./property-input.component.css']
})
export class PropertyInputComponent implements OnInit {

  @Input()
  moviesLista = new Array<string>();

  constructor() { }

  ngOnInit() {
  }

}


class Movie {
  constructor(
    public title: string,
    public year: number) {  }
}
