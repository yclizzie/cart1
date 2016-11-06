
import type { Action } from './types';
import { replaceRoute } from './route';
import * as constants from "../constants/Constants";

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const ERROR_USER = 'ERROR_USER';
export const EXISTING_USER = 'EXISTING_USER';
export const NEW_USER = 'NEW_USER';
export const SET_USER_NANE = 'SET_USER_NANE';
export const SET_USER_TELEPHONE = 'SET_USER_TELEPHONE';

export function setUser(user:object):Action {
  return {
    type: SET_USER,
    user: user,
  };
}

export function unsetUser():Action {
  return {
    type: UNSET_USER,
  };
}

export function setExistingUser(email:string):Action {
  return {
    type: EXISTING_USER,
    email: email,
  };
}

export function setNewUser(email:string):Action {
  return {
    type: NEW_USER,
    email: email,
  };
}

export function errorUser(error:object):Action {
  return {
    type: ERROR_USER,
    error: error,
  };
}

export function logoutUser():Action {
	return dispatch => {
		dispatch(unsetUser())
	}
}

export function setUserName(name:String):Action {
  return {
    type: SET_USER_NANE,
    name: name,
  };
}

export function setUserTelephone(telephone:String):Action {
  return {
    type: SET_USER_TELEPHONE,
    telephone: telephone,
  };
}

export function onFillUserForm(key:string, value: string):Action {

  return (dispatch, getState) => {
    switch(key) {
      case 'name':
        dispatch(setUserName(value))
        break;
      default:
      case 'telephone':
        dispatch(setUserTelephone(value))
        break;
    }
  };
}


export function onEmailEntered(email:string):Action {
  return (dispatch, getState) => {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.CHECK_EXISTING_CUSTOMER_PATH).replace("%sTOKEN%s", getState().main.token) , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
        body: "email=" + email
    }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.success) {
            dispatch(setExistingUser(email))
          } else {
             dispatch(setNewUser(email))
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
}

export function loginUser(email:string, password:string):Action {
  return (dispatch, getState) => {
		fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.CUSTOMER_LOGIN_PATH).replace("%sTOKEN%s", getState().main.token) , {
    		method: 'POST',
  			headers: {
        		'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      		},
  			body: "email=" + email + "&password=" + password
		}).then((response) => response.json())
      	.then((responseJson) => {
      		if (responseJson.success) {
      			dispatch(setUser(responseJson.customer))
      			//dispatch(replaceRoute('home'))
      		} else {
      			dispatch(errorUser(responseJson.error))
      		}
      	})
      	.catch((error) => {
        	console.error(error);
      	});
    };
}

