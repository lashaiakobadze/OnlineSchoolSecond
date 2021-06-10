import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Registration } from "../registration.model";

import * as fromApp from '../../../store/app.reducer';
import * as RegistrationActions from './registration.actions';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Injectable()
export class registrationEffects {

  @Effect()
  getUsers = this.action$.pipe(
    ofType(RegistrationActions.FETCH_USERS),
    switchMap(() => {
      return this.http
      .get<Registration[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/profiles.json'
      )
    }),
    map(users => {
      return users.map(user => {
        return {
          ...user
        }
      })
    }),
    map(users => {
      return new RegistrationActions.RegistrationProcessStart(users);
    })
  )

  @Effect({dispatch: false})
  addUsers = this.action$.pipe(
    ofType(RegistrationActions.STORE_USERS),
    withLatestFrom(this.store.select('registration')),
    switchMap(([actionData, registrationState]) => {
      return this.http
      .put<Registration[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/profiles.json',
        registrationState.users
      );
    }),
    tap(() => {
      this.router.navigate(['/profile']);
    })
  )


  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private router: Router,
  ) {}
}
