import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenExpirationTime: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService
  ) { }

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTime = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }


  clearLogoutTimer() {
    if(this.tokenExpirationTime) {
      clearTimeout(this.tokenExpirationTime);
      this.tokenExpirationTime = null;
    }
  }


  handleError = (errorRes: any) => {
    let errorMessage = 'An unknown occurred!';

    if(!errorRes.error || !errorRes.error.error) {
      return of(new AuthActions.AuthenticateFail(errorMessage));
    }

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
  }

}
