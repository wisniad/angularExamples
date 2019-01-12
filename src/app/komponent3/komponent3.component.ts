import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent3',
  templateUrl: './komponent3.component.html',
  styleUrls: ['./komponent3.component.css']
})

export class Komponent3Component implements OnInit {


  movies = new Array<Movie>();
  public show: boolean;

  constructor() {
    this.movies.push(
      new Movie('Terminator 2', 1991),
      new Movie('Rogue one', 2018),
      new Movie('Lord of the rings', 2004),
      new Movie('Matrix', 1999));

      this.show = true;
  }

  ngOnInit() {
  }
  hide() {
    this.show ? this.show = false : this.show = true;
  }
}

class Movie {
  constructor(
    public title: string,
    public year: number) {  }
}
