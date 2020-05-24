import * as auth from '../reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';

export interface UserState {
  authState: auth.UserState;
}

export const authReducers = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<UserState>('auth');
