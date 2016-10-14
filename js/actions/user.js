
import type { Action } from './types';
import { replaceRoute } from './route';

export const SET_USER = 'SET_USER';
export const ERROR_USER = 'ERROR_USER';

export function setUser(user:object):Action {
  return {
    type: SET_USER,
    user: user,
  };
}

export function errorUser(error:object):Action {
  return {
    type: ERROR_USER,
    error: error,
  };
}

export function loginUser(email:string, password:string):Action {
	return dispatch => {
		fetch('http://localhost:8888/cart_local/index.php?route=api/customerlogin&token=ucWi6nF5Y5P10DZsUwe1hXFiM3mTZHUe', {
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
      			dispatch(replaceRoute('home'))
      		} else {
      			dispatch(errorUser(responseJson.error))
      		}
      	})
      	.catch((error) => {
        	console.error(error);
      	});
    };
}

