import { Action } from "@ngrx/store";
import { Contact } from "../../../shared/modules/contact/contact.model";

export const SEND_CONTACT = '[Contact] Send Contact';
export const FETCH_CONTACTS = '[Contact] Fetch Contacts';
export const CONTACT_START = '[Contact] Contact Start';
export const STORE_CONTACTS = '[Contact] Store Contacts';


export class ContactStart implements Action {
  readonly type = CONTACT_START;

  constructor(public payload: Contact[]) {}
}

export class FetchContacts implements Action {
  readonly type = FETCH_CONTACTS;
}

export class SendContact implements Action {
  readonly type = SEND_CONTACT;

  constructor(public payload: Contact) {}
}

export class StoreContacts implements Action {
  readonly type = STORE_CONTACTS;
}

export type ContactAction = SendContact | FetchContacts | ContactStart | StoreContacts;
