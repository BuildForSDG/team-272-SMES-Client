import { User } from 'src/app/components/user/user.model';
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface UserState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialUserState: UserState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialUserState, action: All): UserState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialUserState;
    }
    default: {
      return state;
    }
  }
}
