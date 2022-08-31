import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.css']
})
export class RainbowComponent implements OnInit {

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
