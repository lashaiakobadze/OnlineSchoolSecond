import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { environment } from 'src/environments/environment';

import { User } from './user.model';
import { LoaderService } from '../shared/components/loader/loader.service';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

const Url = 'https://identitytoolkit.googleapis.com/v1/accounts';

export interface AuthResponseData {
  kind: string,
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
};


const handleAuthentication = (
  expiresIn: number,
  email: string,
  userId: string,
  token: string
) => {
  const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.AuthenticateSuccess({
    email: email,
    userId: userId,
    token: token,
    expirationDate: expirationDate,
    redirect: true
  });
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenExpirationTime: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService,
    private http: HttpClient,
    private router: Router,
    private loaderService: LoaderService
  ) { }


  authSignup(signupAction: AuthActions.SignupStart) {
    return this.http.post<AuthResponseData>(
      `${Url}:signUp?key=${environment.firebaseConfig.apiKey}`,
      {
        email: signupAction.payload.email,
        password: signupAction.payload.password,
        returnSecureToken: true
      }
    )
    .pipe(
      this.loaderService.useLoader,
      tap(resData => {
        this.setLogoutTimer(+resData.expiresIn * 1000);
        this.router.navigate(['/auth/registration']);
      }),
      map(resData => {
        return handleAuthentication(
          +resData.expiresIn,
          resData.email,
          resData.localId,
          resData.idToken
        );
      }),
      catchError(errorRes => {
        return this.handleError(errorRes);
      }),
    );
  };


  authLogin(authData: AuthActions.LoginStart) {
    return this.http
    .post<AuthResponseData>(
      `${Url}:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
      {
        email: authData.payload.email,
        password: authData.payload.password,
        returnSecureToken: true
      }
    )
    .pipe(
      this.loaderService.useLoader,
      tap(resData => {
        this.setLogoutTimer(+resData.expiresIn * 1000);
        this.router.navigate(['/home']);
      }),
      map(resData => {
        return handleAuthentication(
          +resData.expiresIn,
          resData.email,
          resData.localId,
          resData.idToken
        );
      }),
      catchError(errorRes => {
        return this.handleError(errorRes);
      }),
    );
  };


  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return {type: 'DUMMY'};
    };

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.setLogoutTimer(expirationDuration);
      return new AuthActions.AuthenticateSuccess({
          email: loadedUser.email,
          userId: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpirationDate),
          redirect: false
      });
    };
    return { type: 'DUMMY' };
  };


  setLogoutTimer(expirationDuration: number): void {
    this.tokenExpirationTime = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  };


  clearLogoutTimer(): void {
    if(this.tokenExpirationTime) {
      clearTimeout(this.tokenExpirationTime);
      this.tokenExpirationTime = null;
    };
  };


  handleError = (errorRes: any) => {
    let errorMessage = 'An unknown occurred!';

    if(!errorRes.error || !errorRes.error.error) {
      return of(new AuthActions.AuthenticateFail(errorMessage));
    };

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        this.translateService.get('auth.emailExists').subscribe(msg => errorMessage = msg);
      break;
      case 'OPERATION_NOT_ALLOWED':
        this.translateService.get('auth.operationNotAllowed').subscribe(msg => errorMessage = msg);
      break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        this.translateService.get('auth.tooManyAttemptsTryLater').subscribe(msg => errorMessage = msg);
      case 'EMAIL_NOT_FOUND':
        this.translateService.get('auth.emailNotFound').subscribe(msg => errorMessage = msg);
      break;
      case 'INVALID_PASSWORD':
        this.translateService.get('auth.invalidPassword').subscribe(msg => errorMessage = msg);
      break;
      case 'USER_DISABLED':
        this.translateService.get('auth.userDisabled').subscribe(msg => errorMessage = msg);
      break;
    }
    return of(new AuthActions.AuthenticateFail(errorMessage));
  };

}
