import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRegistration from '../auth/registration/store/registration.reducer';
import * as fromHome from '../modules/home/store/home.reducer';
import * as fromHomework from '../modules/works/store-homework/homework.reducer';
import * as fromTest from '../modules/works/store-test/test.reducer';
import * as fromContact from '../modules/contact/store/contact.reducer';
import * as fromAdmin from '../modules/admin/store/admin.reducer';

export interface AppState {
  auth: fromAuth.State;
  registration: fromRegistration.State,
  home: fromHome.State,
  homeWork: fromHomework.State,
  OnlineTest: fromTest.State,
  contact: fromContact.State,
  admin: fromAdmin.State
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  registration: fromRegistration.registrationReducer,
  home: fromHome.homeReducer,
  homeWork: fromHomework.homeworkReducer,
  OnlineTest: fromTest.homeworkReducer,
  contact: fromContact.contactReducer,
  admin: fromAdmin.reducer  
};
