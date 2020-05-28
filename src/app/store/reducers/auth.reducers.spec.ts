
import * as fromReducers from './auth.reducers';
import * as fromActions from './../actions/auth.actions';
import { User } from './../../components/user/user.model';

describe('Reducer: Auth Reducer', () => {
  describe('Default State', () => {
    it('Should return the default state', () => {
      const { initialUserState } = fromReducers;
      const action = {};
      const state = fromReducers.reducer(undefined, action);
      expect(state).toBe(initialUserState);
    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('Should login user successfully', () => {
      const { initialUserState } = fromReducers;
      const payload = {
        token: '1234567',
        email: 'test@test.com',
      };
      const action = new fromActions.LogInSuccess(payload);
      const state = fromReducers.reducer(initialUserState, action);

      expect(state.isAuthenticated).toEqual(true);
      expect(state.user.email).toEqual('test@test.com');
      expect(state.user.token).toEqual('1234567');
      expect(state.errorMessage).toBe(null);
    });
  });

  describe('LOGIN_FAILURE', () => {
    it('Should fail to login user', () => {
      const { initialUserState } = fromReducers;
      const payload = {
        token: '1234567',
        email: '',
      };
      const action = new fromActions.LogInFailure(payload);
      const state = fromReducers.reducer(initialUserState, action);

      expect(state.isAuthenticated).toEqual(false);
      expect(state.errorMessage).toBe('Incorrect email and/or password.');
    });
  });

  describe('LOGOUT', () => {
    it('Should logout a user', () => {
      const { initialUserState } = fromReducers;
      const action = new fromActions.Logout();
      const state = fromReducers.reducer(initialUserState, action);

      expect(state.isAuthenticated).toEqual(false);
      expect(state).toEqual(initialUserState);
    });
  });
});

