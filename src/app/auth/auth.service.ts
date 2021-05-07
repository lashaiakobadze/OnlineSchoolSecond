import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Registration } from './registration/registration.model';

export interface AuthResponseData {
  kind: string,
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoading: boolean = false;
  error: string = null;
  authObs: Observable<AuthResponseData>;
  private tokenExpirationTime: unknown;
  user = new BehaviorSubject<User>(null);  // Use BehaviorSubject because we always have access to the last value.


  constructor(
    private http: HttpClient , private router: Router) { }


  // Add users on base API and catch errors
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
    }));
  }


  // Login users and catch errors
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
    }));
  }


  // Auto login for refresh bugs
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if(!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }


  // Auto logout
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTime = setTimeout( () => {
      this.logout();
    }, expirationDuration) // We can control auto logout time here in millisecond
  }


  // User logout and clear auto logout method
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
  }


  // Storing the user data
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }


  // Error catch Method
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown occurred!';

    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS': errorMessage = 'The email address is already in use by another account.';
      break;
      case 'OPERATION_NOT_ALLOWED': errorMessage = 'Password sign-in is disabled for this project.';
      break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
      case 'EMAIL_NOT_FOUND': errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
      break;
      case 'INVALID_PASSWORD': errorMessage = 'The password is invalid or the user does not have a password.';
      break;
      case 'USER_DISABLED': errorMessage = 'The user account has been disabled by an administrator.';
      break;
    }
    // console.log(errorRes);
    return throwError(errorMessage);
  }


  // Profiles registration methods
  profiles: Registration[] = [];


  fetchProfiles() {
    return this.http
    .get<Registration[]>(
      'https://onlineschool-bee89-default-rtdb.firebaseio.com/profiles.json'
    )
    .pipe(
      tap(
        (profilesObj: Registration[]) => {
          this.profiles = profilesObj;
          this.profiles = this.getProfiles();
      })
    )
  }


  getProfiles() {
    return this.profiles.slice();
  }


  addProfile(profiles: Registration[]) {
    this.http.put<Registration[]>('https://onlineschool-bee89-default-rtdb.firebaseio.com/profiles.json', profiles)
      .subscribe(resData => {
        console.log(resData);
      })
  }

}
