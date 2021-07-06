import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";


import { ContactService } from "../../../shared/modules/contact/contact.service";
import { ErrorService } from "src/app/shared/services/error.service";

import * as fromApp from '../../../store/app.reducer';
import * as ContactActions from './contact.actions';


@Injectable()
export class ContactsEffects {
  getContacts = createEffect(() =>
    this.action$.pipe(
      ofType(ContactActions.FETCH_CONTACTS),
      switchMap(() => {
        return this.contactService.getContacts();
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
  );

  addContact = createEffect(() =>
    this.action$.pipe(
      ofType(ContactActions.STORE_CONTACTS),
      withLatestFrom(this.store.select('contact')),
      switchMap(([actionData, contactsData]) => {
        return this.contactService.storeContact(contactsData.messages);
      }),
      tap( () => {
        this.errorService.errorMessage = "Message sent successfuly";
      })
    ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private store: Store<fromApp.AppState>,
    private contactService: ContactService,
    private errorService: ErrorService
  ) {}
}
