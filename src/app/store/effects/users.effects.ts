import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/users.actions';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) {}

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( loadUsers ), // This is the action to listen
            // tap( data => console.log( 'effect tap ', data ) ),
            // The tap allow execute an action, this show the flow of data in this point.
            mergeMap(
                () => this.userService.getUsers() // Observable to dispatch
                    .pipe(
                        map( users => loadUsersSuccess( {users} ) ),
                        catchError( err => of(loadUsersError( { payload: err } )))
                    )
            ) // Merge an Observable with other
        )
    );
}