
import type { Action } from '../actions/types';
import * as useractions from '../actions/user';

export type State = {
	customer_id: string,
    firstname: string,
    telephone: string,
    email:string,
    error: string
}

const initialState = {
  customer_id: "",
  firstname: "",
  telephone: "",
  email: "",
  error: ""
};

export default function (state:State = initialState, action:Action): State {
  if (typeof action === 'undefined' || typeof action.type === 'undefined') {
        return state;
  }

  switch (action.type) {
    case useractions.SET_USER:
         return _setUser(state, action);
    case useractions.ERROR_USER:
         return _errorUser(state, action);
     default:
    	return state;
  }

  return state;
}

function _errorUser (state, action) {
    return Object.assign({}, state, Object.assign({}, initialState, {error: action.error.warning}));
}

function _setUser (state, action) {
    return Object.assign({}, state, Object.assign({}, action.user));
}