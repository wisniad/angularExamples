import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent2',
  templateUrl: './komponent2.component.html',
  styleUrls: ['./komponent2.component.css']
})
export class Komponent2Component implements OnInit {

//  movies = ['Rogue one', 'Terminator 2', 'Matrix'];

  movies = new Array<Movie>();


  constructor() { }

  ngOnInit() {
    this.movies.push(
      new Movie('Terminator 2', 1991),
      new Movie('Rogue one', 2018),
      new Movie('Lord of the rings', 2004),
      new Movie('Matrix', 1999));
  }

  wyswietlNumer(index: number) {
    alert(index);
  }
}

class Movie {
  constructor(
    public title: string,
    public year: number) {  }
}
