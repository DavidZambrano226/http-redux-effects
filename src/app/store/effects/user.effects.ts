import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { loadUser, loadUserError, loadUserSuccess } from '../actions/user.actions';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) {}

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( loadUser ), // This is the action to listen
            // tap( data => console.log( 'effect tap ', data ) ),
            // The tap allow execute an action, this show the flow of data in this point.
            mergeMap(
                ( action ) => this.userService.getUserById(action.id) // Observable to dispatch
                    .pipe(
                        map( user => {
                            loadUserError({ payload: null });
                            return loadUserSuccess( {user} );
                        }),
                        catchError( err => of(loadUserError( { payload: err } ))),
                    )
            ) // Merge an Observable with other
        )
    );
}