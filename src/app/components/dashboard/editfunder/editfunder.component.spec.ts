import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfunderComponent } from './editfunder.component';

describe('EditfunderComponent', () => {
  let component: EditfunderComponent;
  let fixture: ComponentFixture<EditfunderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfunderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
