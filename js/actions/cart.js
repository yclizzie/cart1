import * as constants from '../constants/Constants';
import type { Action } from './types';

export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_CART = 'SET_CART';
export const ERROR_CART = 'ERROR_CART';

export function addToCart():Action {
  return {
    type: ADD_TO_CART,
  };
}

export function setCart(cart:Object):Action {
  return {
    type: SET_CART,
    cart: cart
  };
}

export function errorCart(error:String):Action {
  return {
    type: ERROR_CART,
    error: error
  };
}


export function addToCartClick(product_id:String, product_option_id:String, product_option_value_id: String, quantity: Number):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.ADD_TO_CART_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: 'product_id=' + product_id + '&quantity=' + quantity + '&option[' + product_option_id + ']=' + product_option_value_id
        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
                _loadCartProductsData(dispatch, getState().main.token);
                //dispatch(addToCart())
            } else {
                dispatch(errorCart(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }
}


export function onRemoveProductClick(cart_id:String):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.REMOVE_CART_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: 'key=' + cart_id
        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
                _loadCartProductsData(dispatch, getState().main.token);
            } else {
                dispatch(errorCart(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }
}

export function _loadCartProductsData(dispatch, token) {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.CART_PRODUCTS_PATH).replace("%sTOKEN%s", token) , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: ''
    }).then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        if (!responseJson.error) {
            dispatch(setCart(responseJson))
        } else {
            dispatch(errorCart(responseJson.error))
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

export function loadCartProductsData():Action {
    return (dispatch, getState) => {
        _loadCartProductsData(dispatch, getState().main.token);
    };
}

