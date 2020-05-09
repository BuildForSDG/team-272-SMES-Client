import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFunderComponent } from './funder-signin.component';

describe('SigninFunderComponent', () => {
  let component: SigninFunderComponent;
  let fixture: ComponentFixture<SigninFunderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninFunderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
