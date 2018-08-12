import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcomplaintComponent } from './addnewcomplaint.component';

describe('AddnewcomplaintComponent', () => {
  let component: AddnewcomplaintComponent;
  let fixture: ComponentFixture<AddnewcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
