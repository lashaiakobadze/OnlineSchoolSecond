import { User } from "../user.model";

import * as Authentications from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(state = initialState, action: Authentications.AuthActions) {
  switch (action.type) {
    case Authentications.AUTHENTICATE_SUCCESS:
        const CurUser = new User(
          action.payload.email,
          action.payload.userId,
          action.payload.token,
          action.payload.expirationDate
        );
        return {
          ...state,
          user: CurUser,
          authError: null,
          loading: false
        }
    case Authentications.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case Authentications.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case Authentications.SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case Authentications.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      }
    case Authentications.CLEAR_ERROR:
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
}


