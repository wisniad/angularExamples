import { LogiService } from './../logi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private logiService: LogiService) {

  }
  ngOnInit() { }

  addClick() {
    this.logiService.klikiButton('z movies 1');
  }

}
