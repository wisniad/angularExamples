import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent1',
  templateUrl: './komponent1.component.html',
  styleUrls: ['./komponent1.component.css']
})
export class Komponent1Component implements OnInit {

  czasTeraz = new Date();

  samochod = new Car('Porshe', '911', 25.12312);

  constructor() { }

  marka = this.samochod.marka;
  model = this.samochod.model;
  spalanie = this.samochod.spalanie;

  ngOnInit() {
  }

}
class Car {
  constructor(
    public marka: string,
    public model: string,
    public spalanie: number ) { }
}
