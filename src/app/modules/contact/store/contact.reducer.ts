import { Contact } from "../contact.model";
import * as ContactActions from './contact.actions';

export interface State {
  messages: Contact[];
};

const initialState: State = {
  messages: [],
};

export function contactReducer(state = initialState, action: ContactActions.ContactAction) {
  switch(action.type) {
    case ContactActions.CONTACT_START:
      return {
        ...state,
        messages: [...action.payload],
      };
    case ContactActions.SEND_CONTACT:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  };
};
