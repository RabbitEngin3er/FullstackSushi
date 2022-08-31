import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

  constructor() {
    console.log("costruttore");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  hidden = false;
  clicked = false;
  matBadge = "7";
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    
  }

  btn_val = "Change Text";
  changeButtonText() {
    if (this.clicked == false) {
      this.btn_val = "show";
      this.clicked = true;
    } else if (this.clicked == true) {
      this.btn_val = "Change_text";
      this.clicked = false;
    }
  }
}
