import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    this.isDisabled = true;
    console.log('All disabled!');
  }

  onBlur() {
    this.isDisabled = false;
    console.log('Enable all');
  }

  onMouseMove(event) {
    const msg = 'X : ' + event.clientX + ' | Y : ' + event.clientY;
    console.log(msg);
  }

  onPaste() {
    console.log('Zakaz wklejania!');
  }

}
