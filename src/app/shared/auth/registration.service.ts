import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import { Registration } from 'src/app/shared/auth/registration.model';
import { LoaderService } from '../components/loader/loader.service';

import * as fromApp from '../../store/app.reducer';
import * as RegistrationActions from '../../auth/registration/store/registration.actions';

import { environment } from 'src/environments/environment';
const Url = environment.firebaseConfig.databaseURL;


@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements OnInit {
  userProfiles: Registration[] = [];
  userProfile: Registration = null;
  curUserId: string;

  ngOnInit(): void {
  }

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private store: Store<fromApp.AppState>
  ) { }

  getUsersProfiles(): Observable<Registration[]> {
    return this.http
    .get<Registration[]>(
      `${Url}/profiles.json`
    ).pipe(this.loaderService.useLoader);
  };

  addUserProfile(users: Registration[]): Observable<Registration[]> {
    return this.http
    .put<Registration[]>(
      `${Url}/profiles.json`, users
    ).pipe(this.loaderService.useLoader);
  };

  getProfiles(): void {
    this.store.dispatch(new RegistrationActions.FetchUsers());
    this.store.select('auth')
    .subscribe(userData => {
      this.curUserId = userData.user?.id;
    }, error => throwError(error));

    this.store.select('registration')
    .subscribe(userState => {
      this.userProfiles = userState.users;
    }, error => throwError(error));

    this.userProfile = this.userProfiles.find(profile => profile.userId === this.curUserId);
    this.store.dispatch(new RegistrationActions.CurRegistration(this.userProfile));
  };
}
