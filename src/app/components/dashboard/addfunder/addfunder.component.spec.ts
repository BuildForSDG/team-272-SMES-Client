import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfunderComponent } from './addfunder.component';

describe('AddfunderComponent', () => {
  let component: AddfunderComponent;
  let fixture: ComponentFixture<AddfunderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfunderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
