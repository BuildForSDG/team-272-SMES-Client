
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
});

