import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  oneWayBinding = 'aaa';
  twoWayBinding = 'bbb';

  ngOnInit() {
  }

  refresh(event) {
    console.log(event);
    alert(this.oneWayBinding + ' | ' + this.twoWayBinding);
  }
}
