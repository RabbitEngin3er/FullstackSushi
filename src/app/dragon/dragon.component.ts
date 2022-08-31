import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.css']
})
export class DragonComponent implements OnInit{

  constructor() {

  }

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
