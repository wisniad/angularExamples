import { LogiService } from './../logi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies2',
  templateUrl: './movies2.component.html',
  styleUrls: ['./movies2.component.css']
})
export class Movies2Component implements OnInit {

  constructor(private logiService: LogiService) { }

  ngOnInit() {
  }
  addClick() {
    this.logiService.klikiButton('z movies 2');
  }
}
