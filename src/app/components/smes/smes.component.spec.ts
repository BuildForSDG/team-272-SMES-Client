import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmesComponent } from './smes.component';

describe('SmesComponent', () => {
  let component: SmesComponent;
  let fixture: ComponentFixture<SmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
