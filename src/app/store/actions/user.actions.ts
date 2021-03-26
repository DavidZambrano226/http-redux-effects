import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';


export const loadUser = createAction(
    '[User Component] Load User',
    props<{ id: string  }>()
);

export const loadUserSuccess = createAction(
    '[User Component] Load User Success',
    props<{ user: UserModel }>()
);
export const loadUserError = createAction(
    '[User Component] Load User Error',
    props<{ payload: any }>()
);
