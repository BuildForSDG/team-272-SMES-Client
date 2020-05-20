import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmesDashboardComponent } from './smes-dashboard.component';

describe('SmesDashboardComponent', () => {
  let component: SmesDashboardComponent;
  let fixture: ComponentFixture<SmesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
