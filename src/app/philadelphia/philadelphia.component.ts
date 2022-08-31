import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philadelphia',
  templateUrl: './philadelphia.component.html',
  styleUrls: ['./philadelphia.component.css']
})
export class PhiladelphiaComponent implements OnInit {

  constructor() { }

  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  ngOnInit(): void {
  }

}
