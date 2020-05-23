import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSMEComponent } from './add-sme.component';

describe('AddSMEComponent', () => {
  let component: AddSMEComponent;
  let fixture: ComponentFixture<AddSMEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSMEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
