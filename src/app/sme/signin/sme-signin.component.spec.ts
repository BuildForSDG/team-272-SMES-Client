import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSmeComponent } from './sme-signin.component';

describe('SigninSmeComponent', () => {
  let component: SigninSmeComponent;
  let fixture: ComponentFixture<SigninSmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninSmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
