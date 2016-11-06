import type { Action } from '../actions/types';
import * as mainactions from '../actions/main';
import I18n from 'react-native-i18n';
import * as cartactions from '../actions/cart';

export type State = {
  token: string,
  categories: array,
  category: object,
  coupon: string,
  address: object,
  shippingmethods: object
}

const initialState = {
  token: '',
  categories: [],
  category: {},
  coupon: '',
  address: {},
  shippingmethods: {}
};

export default function (state:State = initialState, action:Action): State {
  if (typeof action === 'undefined' || typeof action.type === 'undefined') {
        return state;
  }

  switch (action.type) {
    case mainactions.SET_TOKEN:
         return _setToken(state, action);
    case mainactions.ERROR_TOKEN:
         return _errorToken(state, action);
    case mainactions.SET_CATEGORIES:
         return _setCategories(state, action);
    case mainactions.ERROR_CATEGORIES:
         return _errorCategories(state, action);
    case mainactions.SET_CATEGORY:
         return _setCategory(state, action);
    case mainactions.SET_PRODUCT:
        return _setProduct(state, action);
    case mainactions.ERROR_PRODUCT:
        return _errorProduct(state, action);
    case mainactions.ERROR_PRODUCTS:
         return _errorProducts(state, action);
    case mainactions.SET_APPLY_COUPON:
         return _setCoupon(state, action);
    case mainactions.SET_APPLY_VOUCHER:
         return _setVoucher(state, action);
    case mainactions.EMPTY_ALERT:
         return _emptyAlert(state, action);
    case mainactions.SET_SHIPPING_METHODS:
         return _setShippingMethods(state, action);
    case mainactions.ERROR_SHIPPING_METHODS:
         return _errorhippingMethods(state, action);
    case mainactions.SET_SHIPPING_METHOD:
         return _setShippingMethod(state, action);
    case mainactions.ERROR_SHIPPING_METHOD:
         return _errorShippingMethod(state, action);
    case mainactions.SET_COUNTRIES:
         return _setCountries(state, action);
    case mainactions.SET_ZONES:
         return _setZones(state, action);
    case mainactions.SET_ADDRESS:
         return _setAddress(state, action);
    case mainactions.SET_ADDRESS_LINE:
         return _setAddressLine(state, action);
    case mainactions.SET_ADDRESS_ZIPCODE:
         return _setAddressZipcode(state, action);
    case mainactions.SET_ADDRESS_ZONE:
         return _setAddressZone(state, action);
    case mainactions.SET_ADDRESS_ZONE_NAME:
         return _setAddressZoneName(state, action);
    case mainactions.SET_ADDRESS_CITY:
         return _setAddressCity(state, action);
    case mainactions.SET_ADDRESS_COUNTRY:
         return _setAddressCountry(state, action);
    case mainactions.SET_DRAFTID:
         return _setDraftId(state, action);
    case mainactions.SET_ORDERSTATUS:
         return _setOrderStatus(state, action);
    case mainactions.SET_ORDERID:
         return _setOrderId(state, action);
    case mainactions.ERROR_APPLY_VOUCHER:
    case mainactions.ERROR_APPLY_COUPON:
    case mainactions.ERROR_DRAFTID:
    case cartactions.ERROR_CART:
    case mainactions.ERROR_ZONE:
    case mainactions.SET_ALERT:
          return _setAlertError(state, action);
    default:
      return state;
  }

  return state;
}

function _setAddressZone (state, action) {
    let address = Object.assign({}, state.address, {zone: action.addresszone});
    return Object.assign({}, state, {address: address});
}

function _setAddressZoneName (state, action) {
    let address = Object.assign({}, state.address, {zonename: action.addresszonename});
    return Object.assign({}, state, {address: address});
}

function _setAddressLine (state, action) {
    let address = Object.assign({}, state.address, {address_1: action.addressline});
    return Object.assign({}, state,  {address: address});
}

function _setAddressZipcode (state, action) {
    let address = Object.assign({}, state.address, {zipcode: action.addresszipcode});
    return Object.assign({}, state, {address: address});
}

function _setAddressCity (state, action) {
    let address = Object.assign({}, state.address, {city: action.addresscity});
    return Object.assign({}, state,  {address: address});
}

function _setAddressCountry (state, action) {
    let address = Object.assign({}, state.address, {country_id: action.addresscountry});
    return Object.assign({}, state,  {address: address});
}

function _errorToken (state, action) {
    return Object.assign({}, state, Object.assign({}, initialState, {error: action.error.warning}));
}

function _setToken (state, action) {
    return Object.assign({}, state, {token: action.token});
}

function _errorCategories (state, action) {
    return Object.assign({}, state, {categories: [], error: action.error.warning});
}

function _setCategories (state, action) {
    // let categoriesById = action.categories.reduce((obj, category) => {
    //       obj[category.category_id] = category
    //       return obj
    //     }, {});
    return Object.assign({}, state, {categories: action.categories});
}

function _setCategory (state, action) {
    return Object.assign({}, state, {category: {id: action.category.category_id, name: action.category.name, products: action.category.products}});
}

function _setProduct (state, action) {
    return Object.assign({}, state, {product: action.product});
}

function _errorProduct (state, action) {
    return Object.assign({}, state, {product: null});
}

function _errorProducts (state, action) {
    return Object.assign({}, state, {products: [], error: action.error.warning});
}

function _addToCart (state, action) {
    var cart_product_quanitiy = state.cart.productQuantiy[action.product_id + action.product_option_value_id],
        product = {product_id: action.product_id, product_option_id: action.product_option_id, product_option_value_id: action.product_option_value_id, product_option_value_name: action.name};

    if (cart_product_quanitiy) {
      state.cart.productQuantiy[action.product_id + action.product_option_value_id] = cart_product_quanitiy + 1;
    } else {
      state.cart.products.push(product);
      state.cart.productQuantiy[action.product_id + action.product_option_value_id] = 1;
    }

    return Object.assign({}, state, {cart: {products: state.cart.products, productQuantiy: state.cart.productQuantiy, totalCount: state.cart.totalCount + 1}});
}

function _errorAddToCart (state, action) {
    return Object.assign({}, state, {});
}

function _setDraftId (state, action) {
    return Object.assign({}, state, {draftId: action.draftId});
}

function _setOrderId (state, action) {
    return Object.assign({}, state, {orderId: action.orderId});
}

function _setOrderStatus (state, action) {
    return Object.assign({}, state, {orderStatus: action.orderStatus});
}

function _setCoupon (state, action) {
    return Object.assign({}, state, {alert: action.coupon + ' ' + I18n.t('applied')});
}

function _setAlertError (state, action) {
    return Object.assign({}, state, {alert: action.error});
}

function _setVoucher (state, action) {
    return Object.assign({}, state, {alert: action.voucher + ' ' + I18n.t('applied')});
}

function _emptyAlert (state, action) {
    return Object.assign({}, state, {alert: null});
}

function _setShippingMethods (state, action) {
    return Object.assign({}, state, {shippingmethods: action.shippingmethods, paymentmethods: action.paymentmethods});
}

function _setCountries (state, action) {
    return Object.assign({}, state, {countries: action.countries});
}

function _setZones (state, action) {
    return Object.assign({}, state, {zones: action.zones});
}

function _setAddress (state, action) {
    return Object.assign({}, state, {address: action.address});
}

function _setShippingMethod (state, action) {
    return Object.assign({}, state, {shippingmethod: action.shippingmethod, shippingmethodError: null, paymentmethod: action.paymentmethod});
}

function _errorShippingMethod (state, action) {
    return Object.assign({}, state, {alert: action.error});
}


function _changeQuantity (state, action) {
   var cart_product_quanitiy = state.cart.productQuantiy[action.product_id + action.product_option_value_id];

   if (cart_product_quanitiy == 1 && action.increment == -1) {
      action.increment = 0;
   }

   state.cart.productQuantiy[action.product_id + action.product_option_value_id] = cart_product_quanitiy + action.increment;
   state.cart.totalCount = state.cart.totalCount + action.increment;
   return Object.assign({}, state);
}

function _removeProduct (state, action) {
   var current_quanitiy = state.cart.productQuantiy[action.product_id + action.product_option_value_id],
       current_totalCount = state.cart.totalCount;

   state.cart.totalCount = current_totalCount - current_quanitiy;
   state.cart.productQuantiy[action.product_id + action.product_option_value_id] = 0;

   return Object.assign({}, state);
}
