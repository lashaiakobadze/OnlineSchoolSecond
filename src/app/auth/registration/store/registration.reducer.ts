import { Registration } from '../../../shared/auth/registration.model';
import * as Registrations from './registration.actions';

export interface State {
  users: Registration[];
  curUserRegistration: Registration;
};

const initialState: State = {
  users: [],
  curUserRegistration: null,
};


export function registrationReducer(state = initialState, action: Registrations.RegistrationActions) {
  switch(action.type) {
    case Registrations.REGISTRATION_PROCESS_START:
      return {
        ...state,
        users: [...action.payload],
      }
    case Registrations.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case Registrations.CURRENT_REGISTRATION:
      return {
        ...state,
        curUserRegistration: {...action.payload},
      }
    case Registrations.EDIT_REGISTRATION_START:
      let profiles = [...state.users];
      let curRegister = state.curUserRegistration;
      let updatedProfiles = profiles.filter(profile => profile.email !== curRegister.email);
      return {
        ...state,
        users: updatedProfiles,
      }
    default:
      return state;
  }
}



