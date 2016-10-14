import shop from '../api/shop'
import type { Action } from './types';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export function loadInitialData() {
    return dispatch => {
        shop.getProducts(products => {
            dispatch(receiveProducts(products))
        })
    };
}

export function loadProductData():Action {
    return dispatch => {
        shop.getProducts(products => {
            dispatch(receiveProducts(products))
        })
    };
}

export function receiveProducts(products):Action {
  return {
    type: RECEIVE_PRODUCTS,
    products: products,
  };
}