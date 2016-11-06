
import type { Action } from '../actions/types';
import * as useractions from '../actions/user';

export type State = {
	  customer_id: string,
    firstname: string,
    telephone: string,
    email:string,
    error: string,
    existinguser: boolean
}

const initialState = {
  customer_id: "",
  firstname: "",
  telephone: "",
  email: "",
  error: "",
  existinguser: false
};

export default function (state:State = initialState, action:Action): State {
  if (typeof action === 'undefined' || typeof action.type === 'undefined') {
        return state;
  }

  switch (action.type) {
    case useractions.SET_USER:
         return _setUser(state, action);
    case useractions.UNSET_USER:
         return _unsetUser(state, action);
    case useractions.ERROR_USER:
         return _errorUser(state, action);
    case useractions.EXISTING_USER:
         return _setExistingUser(state, action);
    case useractions.NEW_USER:
         return _setNewUser(state, action);
    case useractions.SET_USER_NANE:
         return _setUserName(state, action);
    case useractions.SET_USER_TELEPHONE:
         return _setUserTelephone(state, action);

     default:
    	return state;
  }

  return state;
}

function _errorUser (state, action) {
    return Object.assign({}, state, initialState, {error: action.error.warning});
}

function _setUser (state, action) {
    return Object.assign({}, state, action.user, {existinguser: true});
}

function _unsetUser (state, action) {
    return Object.assign({}, state, Object.assign({}, initialState));
}

function _setExistingUser (state, action) {
    return Object.assign({}, state, {email: action.email, existinguser: true});
}

function _setNewUser (state, action) {
    return Object.assign({}, state, {email: action.email, existinguser: false});
}

function _setUserName (state, action) {
    return Object.assign({}, state, {firstname: action.name});
}

function _setUserTelephone (state, action) {
    return Object.assign({}, state, {telephone: action.telephone});
}
