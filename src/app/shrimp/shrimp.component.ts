import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shrimp',
  templateUrl: './shrimp.component.html',
  styleUrls: ['./shrimp.component.css']
})
export class ShrimpComponent implements OnInit {

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
