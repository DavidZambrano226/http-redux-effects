import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';
import { UserModel } from '../../models/user.model';

export interface UsersState {
    users: UserModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

const _usersReducer = createReducer(usersInitialState,

    on(loadUsers, state => ({ ...state, loading: true})),

    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [ ...users ]
    })),

    on(loadUsersError, (state, { payload }) => ({
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

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}