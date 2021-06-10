import { Action } from "@ngrx/store";
import { Registration } from "../registration.model";

export const REGISTRATION_PROCESS_START = '[Registration] Registration Process start';
export const FETCH_USERS = '[Registration] Fetch Users';
export const ADD_USER = '[Registration] Add User Profile';
export const STORE_USERS = '[Registration] Store Users Profiles';

export class RegistrationProcessStart implements Action {
  readonly type = REGISTRATION_PROCESS_START;

  constructor(public payload: Registration[]) {}
}

export class FetchUsers implements Action {
  readonly type = FETCH_USERS;
}

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: Registration) {}
}

export class StoreUsers implements Action {
  readonly type = STORE_USERS;
}

export type RegistrationActions = RegistrationProcessStart | AddUser | StoreUsers;
