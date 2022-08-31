import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiteComponent } from './dynamite.component';

describe('DynamiteComponent', () => {
  let component: DynamiteComponent;
  let fixture: ComponentFixture<DynamiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
