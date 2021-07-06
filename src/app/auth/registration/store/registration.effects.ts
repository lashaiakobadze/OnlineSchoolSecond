import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";


import { RegistrationService } from "src/app/shared/auth/registration.service";

import * as fromApp from '../../../store/app.reducer';
import * as RegistrationActions from './registration.actions';


@Injectable()
export class registrationEffects {

  getUsersProfile = createEffect(() =>
    this.action$.pipe(
      ofType(RegistrationActions.FETCH_USERS),
      switchMap(() => {
        return this.registrationService.getUsersProfiles();
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
    ),
  );

  addUserProfile = createEffect(() =>
    this.action$.pipe(
      ofType(RegistrationActions.STORE_USERS),
      withLatestFrom(this.store.select('registration')),
      switchMap(([actionData, registrationState]) => {
        return this.registrationService.addUserProfile(registrationState.users);
      }),
      tap(() => {
        this.router.navigate(['/profile']);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private store: Store<fromApp.AppState>,
    private router: Router,
    private registrationService: RegistrationService,
  ) {}
}
