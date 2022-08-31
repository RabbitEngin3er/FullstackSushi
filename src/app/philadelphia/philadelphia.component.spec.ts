import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiladelphiaComponent } from './philadelphia.component';

describe('PhiladelphiaComponent', () => {
  let component: PhiladelphiaComponent;
  let fixture: ComponentFixture<PhiladelphiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhiladelphiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhiladelphiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
