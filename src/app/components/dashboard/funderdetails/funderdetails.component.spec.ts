import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunderdetailsComponent } from './funderdetails.component';

describe('FunderdetailsComponent', () => {
  let component: FunderdetailsComponent;
  let fixture: ComponentFixture<FunderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
