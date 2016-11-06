import type { Action } from '../actions/types';
import * as cartactions from '../actions/cart';

export type State = {
  totalCount: string,
  products: array,
  vouchers: array,
  totals: array
}

const initialState = {
  totalCount: 0,
  products: [],
  vouchers: [],
  totals: []
};

export default function (state:State = initialState, action:Action): State {
  if (typeof action === 'undefined' || typeof action.type === 'undefined') {
        return state;
  }

  switch (action.type) {
    case cartactions.ADD_TO_CART:
         return _addToCart(state, action);
    case cartactions.SET_CART:
         return _setCart(state, action);
    default:
      return state;
  }

  return state;
}

function _addToCart (state, action) {
    // var cart_product_quanitiy = state.cart.productQuantiy[action.product_id + action.product_option_value_id],
    //     product = {product_id: action.product_id, product_option_id: action.product_option_id, product_option_value_id: action.product_option_value_id, product_option_value_name: action.name};

    // if (cart_product_quanitiy) {
    //   state.cart.productQuantiy[action.product_id + action.product_option_value_id] = cart_product_quanitiy + 1;
    // } else {
    //   state.cart.products.push(product);
    //   state.cart.productQuantiy[action.product_id + action.product_option_value_id] = 1;
    // }

    return Object.assign({}, state, {totalCount: state.totalCount + 1});
}


function _setCart (state, action) {
    let totalCount = 0;
    action.cart.products.map(function(product) {totalCount = totalCount + parseInt(product.quantity)});
    return Object.assign({}, state, action.cart, {totalCount: totalCount});
}
