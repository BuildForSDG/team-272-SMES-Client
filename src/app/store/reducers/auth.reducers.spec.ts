import { SignInComponent } from './../../components/sign-in/sign-in.component';
import { AuthService } from './../../services/auth.service';
import { AuthActionTypes, LogInSuccess, All } from './../actions/auth.actions';
import { reducer } from './auth.reducers';
import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';



describe('Reducer: AuthReducer', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: null },
        {
          provide: AuthService,
          useValue: {
            getAttendees: () => {}
          }
        }
      ],
      declarations: [SignInComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should have initial state', () => {
    const expected = {
      isAuthenticated: false,
      user: null,
      errorMessage: null
    };
    const action = { type: 'foo' } as any;
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should have successfully login a user', () => {
    const state = {
      isAuthenticated: false,
      user: null,
      errorMessage: null
    };
    const action = { type: AuthActionTypes.LOGIN_SUCCESS};
    const expected = {
      ...state,
        isAuthenticated: true,
        user: {
          token: '1234567',
          email: 'test@gmail.com'
        },
        errorMessage: null
     };
    expect(reducer(state, action)).toEqual(expected);
  });
});
