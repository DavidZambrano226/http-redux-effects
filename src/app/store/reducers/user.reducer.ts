import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';
import { UserModel } from '../../models/user.model';

export interface UserState {
    id: string;
    user: UserModel;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const userInitialState: UserState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,
};

const _userReducer = createReducer(userInitialState,

    on(loadUser, (state, { id }) => ({
        ...state,
        loading: true,
        id,
    })),

    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...user }
    })),

    on(loadUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            statusCode: payload.status,
            message: payload.message,
            url: payload.url,
            name: payload.name
        }
    })),

);

export function userReducer(state, action) {
    return _userReducer(state, action);
}