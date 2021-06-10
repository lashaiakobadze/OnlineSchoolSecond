import { Registration } from '../registration.model';
import * as Registrations from './registration.actions';

export interface State {
  users: Registration[];
  registrationError: string;
  loading: boolean
};

const initialState: State = {
  users: [],
  registrationError: null,
  loading: true
};


export function registrationReducer(state = initialState, action: Registrations.RegistrationActions) {
  switch(action.type) {
    case Registrations.REGISTRATION_PROCESS_START:
      return {
        ...state,
        users: [...action.payload],
        loading: false
      }
    case Registrations.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state;
  }
}



