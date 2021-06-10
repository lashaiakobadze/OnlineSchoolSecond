import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Contact } from "../contact.model";

import * as fromApp from '../../../store/app.reducer';
import * as ContactActions from './contact.actions';

@Injectable()
export class ContactsEffects {

  @Effect()
  getUsers = this.action$.pipe(
    ofType(ContactActions.FETCH_CONTACTS),
    switchMap(() => {
      return this.http
      .get<Contact[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/contacts.json'
      )
    }),
    map(contacts => {
      return contacts.map(contact => {
        return {
          ...contact
        }
      })
    }),
    map(contacts => {
      return new ContactActions.ContactStart(contacts);
    })
  )


  @Effect({dispatch: false})
  addUsers = this.action$.pipe(
    ofType(ContactActions.STORE_CONTACTS),
    withLatestFrom(this.store.select('contact')),
    switchMap(([actionData, contactsData]) => {
      return this.http
      .put<Contact[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/contacts.json',
        contactsData.messages
      );
    }),
  )

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
  ) {}
}
