import { SignInComponent } from './sign-in.component';
import { authReducers } from './../../store/state/user.state';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(authReducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create SignInComponent', () => {
    expect(component).toBeTruthy();
  });
});
