import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs/operators';

import { Actions, ofType } from '@ngrx/effects';
import { Registration } from '../auth/registration.model';

import * as fromApp from '../../store/app.reducer';
import * as RegistrationActions from '../../auth/registration/store/registration.actions';


@Injectable({
  providedIn: 'root'
})
export class RegistrationResolverService implements Resolve<Registration> {

  constructor(
    private store: Store<fromApp.AppState>,
    private action$: Actions
  ) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const users: Registration[] = [] ;

    return this.store.select('registration').pipe(
      take(1),
      map(usersState => {
      return usersState.users;
    }),
    switchMap(users => {
      if (users.length === 0) {
        this.store.dispatch(new RegistrationActions.FetchUsers());
        return this.action$.pipe(
          ofType(RegistrationActions.REGISTRATION_PROCESS_START), take(1)
        )
      } else {
        return(users);
      }
    })
  )};
};

