import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';


import { AuthService } from '../auth.service';

import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {

  authSignup = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SIGNUP_START),
      switchMap((signupAction: AuthActions.SignupStart) => {
        return this.authService.authSignup(signupAction);
      }),
    )
  );


  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.authService.authLogin(authData);
      }),
    )
  );


  autoLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AUTO_LOGIN),
      map(() => {
        return this.authService.autoLogin();
      }),
    )
  );


  authLogout = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGOUT),
      tap(() => {
        this.authService.clearLogoutTimer();
        localStorage.removeItem('userData');
        this.router.navigate(['/auth']);
      })
    ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ) { }
}
