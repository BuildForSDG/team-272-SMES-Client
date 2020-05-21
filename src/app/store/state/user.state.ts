import * as auth from '../reducers/auth.reducers';

export interface UserState {
  authState: auth.UserState;
}

export const authReducers = {
  auth: auth.reducer
};
