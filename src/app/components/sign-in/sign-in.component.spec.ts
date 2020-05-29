import { SignInComponent } from './sign-in.component';
import { authReducers } from './../../store/state/user.state';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { UserState } from '../../store/state/user.state';
import * as fromActions from '../../store/actions/auth.actions';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  // let store: Store<UserState>;

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
    // store = TestBed.inject(Store);
  });

  it('should create SignInComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('should dispatch the onlogin functions', () => {
  //   const user = {
  //     email: 'test@test.com',
  //     password: '123456'
  //   };
  //   const store = TestBed.inject(Store);
  //   const action = new fromActions.LogIn(user);
  //   const spy = jest.spyOn(store, 'dispatch');

  //   fixture.detectChanges();

  //   component.onLogin();
  //   expect(spy).toHaveBeenCalledWith(action);
  // });
});
