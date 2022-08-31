import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamite',
  templateUrl: './dynamite.component.html',
  styleUrls: ['./dynamite.component.css']
})
export class DynamiteComponent implements OnInit {

  constructor() { }

  counter = 0;

  increment () {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0)
    {
      this.counter--;
    }
  }
  ngOnInit(): void {
  }

}
