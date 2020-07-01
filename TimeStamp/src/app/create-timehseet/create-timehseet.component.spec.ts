import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimehseetComponent } from './create-timehseet.component';

describe('CreateTimehseetComponent', () => {
  let component: CreateTimehseetComponent;
  let fixture: ComponentFixture<CreateTimehseetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimehseetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimehseetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
