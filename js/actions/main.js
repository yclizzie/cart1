import * as constants from "../constants/Constants";
import shop from '../api/shop';
import type { Action } from './types';
import { _loadCartProductsData } from './cart';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const SET_TOKEN = 'SET_TOKEN';
export const ERROR_TOKEN = 'ERROR_TOKEN';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ERROR_CATEGORIES = 'ERROR_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const ERROR_PRODUCTS = 'ERROR_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ERROR_PRODUCT = 'ERROR_PRODUCT';
export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_APPLY_COUPON = 'SET_APPLY_COUPON';
export const ERROR_APPLY_COUPON = 'ERROR_APPLY_COUPON';
export const SET_APPLY_VOUCHER = 'SET_APPLY_VOUCHER';
export const ERROR_APPLY_VOUCHER = 'ERROR_APPLY_VOUCHER';
export const EMPTY_ALERT = 'EMPTY_ALERT';
export const SET_SHIPPING_METHODS = 'SET_SHIPPING_METHODS';
export const ERROR_SHIPPING_METHODS = 'ERROR_SHIPPING_METHODS';
export const SET_PAYMENT_METHODS = 'SET_PAYMENT_METHODS';
export const SET_SHIPPING_METHOD = 'SET_SHIPPING_METHOD';
export const ERROR_SHIPPING_METHOD = 'ERROR_SHIPPING_METHOD';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const ERROR_COUNTRIES = 'ERROR_COUNTRIES';
export const ERROR_ZONES = 'ERROR_ZONES';
export const SET_ZONES = 'SET_ZONES';
export const ERROR_ADDRESS = 'ERROR_ADDRESS';
export const SET_ADDRESS = 'SET_ADDRESS';
export const ERROR_DRAFTID = 'ERROR_DRAFTID';
export const SET_DRAFTID = 'SET_DRAFTID';
export const SET_ALERT = 'SET_ALERT';
export const SET_ADDRESS_ZONE = 'SET_ADDRESS_ZONE';
export const SET_ADDRESS_ZONE_NAME = 'SET_ADDRESS_ZONE_NAME';
export const SET_ADDRESS_LINE = 'SET_ADDRESS_LINE';
export const SET_ADDRESS_CITY = 'SET_ADDRESS_CITY';
export const SET_ADDRESS_ZIPCODE = 'SET_ADDRESS_ZIPCODE';
export const SET_ADDRESS_COUNTRY = 'SET_ADDRESS_COUNTRY';
export const SET_ORDERID = 'SET_ORDERID';
export const SET_ORDERSTATUS = 'SET_ORDERSTATUS';

// export const ADD_TO_CART = 'ADD_TO_CART';
// export const ERROR_ADD_TO_CART = 'ERROR_ADD_TO_CART';
// export const QUANTITY_CHANGE = 'QUANTITY_CHANGE';
// export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
// export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';
// export const ERROR_CART_PRODUCT = 'ERROR_CART_PRODUCT';

export function setAddressLine(text:String):Action {
  return {
    type: SET_ADDRESS_LINE,
    addressline: text
  };
}

export function setAddressZoneName(text:String):Action {
  return {
    type: SET_ADDRESS_ZONE_NAME,
    addresszonename: text
  };
}

export function setAddressZone(text:String):Action {
  return {
    type: SET_ADDRESS_ZONE,
    addresszone: text
  };
}

export function setAddressZipcode(text:String):Action {
  return {
    type: SET_ADDRESS_ZIPCODE,
    addresszipcode: text
  };
}

export function setAddressCountry(text:String):Action {
  return {
    type: SET_ADDRESS_COUNTRY,
    addresscountry: text
  };
}

export function setAddressCity(text:String):Action {
  return {
    type: SET_ADDRESS_CITY,
    addresscity: text
  };
}

export function setToken(token:string):Action {
  return {
    type: SET_TOKEN,
    token: token,
  };
}

export function errorToken(error:String):Action {
  return {
    type: ERROR_TOKEN,
  };
}

export function setCategories(categories:array):Action {
  return {
    type: SET_CATEGORIES,
    categories: categories,
  };
}

export function errorCategories(error:String):Action {
  return {
    type: ERROR_CATEGORIES,
  };
}

export function setProducts(products:array):Action {
  return {
    type: SET_PRODUCTS,
    products: products,
  };
}

export function errorProducts(error:String):Action {
  return {
    type: ERROR_PRODUCTS,
  };
}

export function setProduct(product:Object):Action {
  return {
    type: SET_PRODUCT,
    product: product,
  };
}

export function errorProduct(error:String):Action {
  return {
    type: ERROR_PRODUCT,
  };
}

export function setCategory(category:Object):Action {
  return {
    type: SET_CATEGORY,
    category: category,
  };
}

export function setApplyCoupon(coupon:String):Action {
  return {
    type: SET_APPLY_COUPON,
    coupon: coupon
  };
}

export function errorApplyCoupon(error:String):Action {
  return {
    type: ERROR_APPLY_COUPON,
    error: error
  };
}

export function setApplyVoucher(voucher:String):Action {
  return {
    type: SET_APPLY_VOUCHER,
    voucher: voucher
  };
}


export function errorApplyVoucher(error:String):Action {
  return {
    type: ERROR_APPLY_VOUCHER,
    error: error
  };
}



export function emptyAlert():Action {
  return {
    type: EMPTY_ALERT
  };
}


export function setAddress(address:object):Action {
  return {
    type: SET_ADDRESS,
    address:address,
  };
}

export function errorAddress(error:String):Action {
  return {
    type: ERROR_ADDRESS,
    error:error,
  };
}

export function setCountries(countries:array):Action {
  return {
    type: SET_COUNTRIES,
    countries:countries,
  };
}

export function errorCountries(error:String):Action {
  return {
    type: ERROR_COUNTRIES,
    error:error,
  };
}

export function setZones(zones:array):Action {
  return {
    type: SET_ZONES,
    zones:zones,
  };
}

export function errorZones(error:String):Action {
  return {
    type: ERROR_ZONES,
    error:error,
  };
}

export function setDraftId(draftId:String):Action {
  return {
    type: SET_DRAFTID,
    draftId:draftId,
  };
}

export function errorDraftId(error:String):Action {
  return {
    type: ERROR_DRAFTID,
    error:error,
  };
}

export function setShippingPaymentMethods(shippingmethods:array, paymentmethods:array):Action {
  return {
    type: SET_SHIPPING_METHODS,
    paymentmethods:paymentmethods,
    shippingmethods: shippingmethods,
  };
}

export function errorShippingPaymentMethods(error:String):Action {
  return {
    type: ERROR_SHIPPING_METHODS,
    error: error
  };
}

export function setShippingPaymentMethod(shippingmethod:String, paymentmethod:String):Action {
  return {
    type: SET_SHIPPING_METHOD,
    shippingmethod: shippingmethod,
    paymentmethod: paymentmethod
  };
}

export function errorShippingPaymentMethod(error:String):Action {
  return {
    type: ERROR_SHIPPING_METHOD,
    error: error
  };
}

export function setPaymentMethods(paymentmethods:array):Action {
  return {
    type: SET_PAYMENT_METHODS,
    paymentmethods: paymentmethods,
  };
}

export function setAlert(error:String):Action {
  return {
    type: SET_ALERT,
    error: error
  };
}

export function setOrderId(id:String):Action {
  return {
    type: SET_ORDERID,
    orderId: id
  };
}

export function setOrderStatus(status:String):Action {
  return {
    type: SET_ORDERSTATUS,
    orderStatus: status
  };
}



// export function addToCart(product_id:String, product_option_id: String, product_option_value_id: String, name:String):Action {
//   return {
//     type: ADD_TO_CART,
//     product_id: product_id,
//     product_option_id: product_option_id,
//     product_option_value_id: product_option_value_id,
//     name: name
//   };
// }

// export function errorAddToCart(error:String):Action {
//   return {
//     type: ERROR_ADD_TO_CART
//   };
// }

// export function removeProduct(product_id:String, product_option_value_id: String):Action {
//   return {
//     type: REMOVE_PRODUCT,
//     product_id: product_id,
//     product_option_value_id: product_option_value_id,
//   };
// }


// export function quantityChange(product_id:String, product_option_value_id: String, increment:Number):Action {
//   return {
//     type: QUANTITY_CHANGE,
//     product_id: product_id,
//     product_option_value_id: product_option_value_id,
//     increment: increment
//   };
// }

export function categoryClick(category:Object):Action {
    return dispatch => {
        dispatch(setCategory(category))
    }
}

export function onAlertClick():Action {
    return dispatch => {
        dispatch(emptyAlert())
    }
}


// export function addToCartClick(product_id:String, product_option_id:String, product_option_value_id: String, name: String):Action {
//     return (dispatch, getState) => {
//         fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.ADD_TO_CART_PATH).replace("%sTOKEN%s", getState().main.token) , {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
//             },
//             body: 'product_id=' + product_id + '&quantity=1&option[' + product_option_id + ']=' + product_option_value_id
//         }).then((response) => response.json())
//         .then((responseJson) => {
//             if (responseJson.success) {
//                 dispatch(addToCart(product_id, product_option_id, product_option_value_id, name))
//             } else {
//                 dispatch(errorAddToCart(responseJson.error))
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });

//     }
// }

// export function onQuantityChange(product_id:String, product_option_value_id: String, increment:Number):Action {
//     return dispatch => {
//         dispatch(quantityChange(product_id, product_option_value_id, increment))
//     }
// }

// export function onRemoveProductClick(product_id:String, product_option_value_id: String):Action {
//     return dispatch => {
//         dispatch(removeProduct(product_id, product_option_value_id))
//     }
// }



export function showAlert(error: String):Action {
    return (dispatch) => {
        dispatch(setAlert(error))
    };
}

export function onFillAddressForm(key:string, value: string):Action {
  return (dispatch, getState) => {
    switch(key) {
      case 'country':
        dispatch(setAddressCountry(value))
        break;
      case 'zone':
        dispatch(setAddressZone(value))
        break;
      case 'zipcode':
        dispatch(setAddressZipcode(value))
        break;
      case 'address':
      default:
        dispatch(setAddressLine(value))
        break;
    }
  };
}

export function chooseCVS(shipping_code: String):Action {
    return (dispatch, getState) => {
        if (!getState().main.draftId) {
            fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.SHIPPING_CHOOSE_CVS_PATH).replace("%sTOKEN%s", getState().main.token) , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
                body: 'shipping_code=' + shipping_code
            }).then((response) => response.json())
            .then((responseJson) => {
                if (!responseJson.error) {
                    dispatch(setDraftId(responseJson.draft_id))
                } else if (responseJson.error.code === '100'){

                } else {
                    dispatch(errorDraftId(responseJson.error))
                }
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };
}


export function getOrderStatus(order_id:String):Action {
    return (dispatch, getState) => {
      console.log(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.GET_ORDER_STATUS_PATH).replace("%sTOKEN%s", getState().main.token).replace("%sORDER_ID%s", order_id))
       fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.GET_ORDER_STATUS_PATH).replace("%sTOKEN%s", getState().main.token).replace("%sORDER_ID%s", order_id) , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: ''
        }).then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.error) {
                dispatch(setOrderStatus(responseJson.order_status))
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
}


export function getCVS():Action {
    return (dispatch, getState) => {
      _getCVS(dispatch, getState)
    };
}

export function loadCountries():Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.COUNTRY_ALL_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: ''
        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.countries) {
                dispatch(setCountries(responseJson.countries))
            } else {
                dispatch(errorCountries(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
}

export function loadZones(country_id:String):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.COUNTRY_PATH).replace("%sTOKEN%s", getState().main.token).replace("%sCOUNTRY_ID%s", country_id) , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: ''
        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.zones) {
                dispatch(setZones(responseJson.zones))
            } else {
                dispatch(errorZones(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
}

export function loadShippingMethods():Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.SHIPPING_METHODS_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: ''
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.shipping_methods) {
                dispatch(setShippingPaymentMethods(responseJson.shipping_methods, responseJson.payment_methods))
            } else {
                dispatch(errorShippingPaymentMethods(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
}

export function productClick(id:String):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.PRODUCT_GET_PATH).replace("%sTOKEN%s", getState().main.token) + "&product_id=" + id , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: ''
        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
                dispatch(setProduct(responseJson.product))
            } else {
                dispatch(errorProduct(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
}


export function loadInitialData() {
    return (dispatch, getState) => {
        fetch(constants.ENDPOINT + constants.LOGIN_PATH, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: "key=" + constants.API_KEY
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.success) {
                dispatch(setToken(responseJson.token))
                _fetchInitialData(dispatch, getState)
            } else {
                dispatch(errorToken(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
}

export function onZipcodeEntered(zipcode:String):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.ZONE_PATH).replace("%sTOKEN%s", getState().main.token).replace("%sCODE%s", zipcode) , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: ''
        }).then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.error) {
                dispatch(setAddressZipcode(zipcode))
                dispatch(setAddressZone(responseJson.zone_id))
                dispatch(setAddressZoneName(responseJson.name))
            } else {
                dispatch(setAlert(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }
}

export function onShippingMethodClick(shippingmethod:String, paymentmethod:String):Action {
    return (dispatch, getState) => {
        dispatch(setAddress({}))
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.SHIPPING_METHOD_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: 'shipping_method=' + shippingmethod + '&payment_method=' + paymentmethod
        }).then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.error) {
                dispatch(setShippingPaymentMethod(shippingmethod, paymentmethod))
            } else {
                dispatch(errorShippingPaymentMethod(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }
}

export function onApplyVoucher(voucher:String):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.VOUCHER_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: 'voucher=' + voucher
        }).then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.error) {
                dispatch(setApplyVoucher(voucher))
            } else {
                dispatch(errorApplyVoucher(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }
}

export function onApplyCoupon(coupon:String):Action {
    return (dispatch, getState) => {
        fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.COUPON_PATH).replace("%sTOKEN%s", getState().main.token) , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: 'coupon=' + coupon
        }).then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.error) {
                dispatch(setApplyCoupon(coupon))
            } else {
                dispatch(errorApplyCoupon(responseJson.error))
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }
}
// export function loadCartProductsData():Action {
//     return dispatch => {
//         fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.CART_PRODUCTS_PATH).replace("%sTOKEN%s", getState().main.token) , {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
//             },
//             body: ''
//         }).then((response) => response.json())
//         .then((responseJson) => {
//             if (responseJson.success) {
//                 dispatch(setCartProducts(responseJson.products))
//             } else {
//                 dispatch(errorCartProducts(responseJson.error))
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     };
// }

export function receiveProducts(products):Action {
  return {
    type: RECEIVE_PRODUCTS,
    products: products,
  };
}

export function checkout(order_status_id: string) {
    return (dispatch, getState) => {
      _checkout(dispatch, getState, order_status_id)
    };
}

function _getCVS (dispatch, getState):Action {
   fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.SHIPPING_GET_CVS_PATH).replace("%sTOKEN%s", getState().main.token).replace("%sDRAFT_ID%s", getState().main.draftId) , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: ''
    }).then((response) => response.json())
    .then((responseJson) => {
        if (!responseJson.error) {
            dispatch(setAddress(responseJson.draft))
        } else {
            //dispatch(errorAddress(responseJson.error))
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

function _checkout (dispatch, getState, order_status_id):Action {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.SHIPPING_ADDRESS_PATH).replace("%sTOKEN%s", getState().main.token) , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: 'firstname=' + getState().user.firstname + '&address_1=' + getState().main.address.address_1 + '&address_2=' + (getState().main.address.address_2 || '') + '&postcode=' + (getState().main.address.zipcode || '') + '&country_id=' + getState().main.address.country_id + '&zone_id=' + (getState().main.address.zone || '')
    }).then((response) => response.json())
    .then((responseJson) => {
        if (!responseJson.error) {
            _addOrder(dispatch, getState, order_status_id);
        } else {
            dispatch(setAlert(responseJson.error))
        }
    })
    .catch((error) => {
        console.error(error);
    });
}



function _addOrder(dispatch, getState, order_status_id):Action {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.ADD_ORDER_PATH).replace("%sTOKEN%s", getState().main.token) , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: 'shipping_method=' + getState().main.shippingmethod + "&payment_method=" +  getState().main.paymentmethod + "&order_status_id=" + order_status_id
    }).then((response) => response.json())
    .then((responseJson) => {
        if (!responseJson.error) {
            dispatch(setOrderId(responseJson.order_id))
        } else {
            dispatch(setAlert(responseJson.error))
        }
    })
    .catch((error) => {
        console.error(error);
    });
}


function _fetchInitialData (dispatch, getState) {
    //let promises = [];

    // promises.push(_fetchCategory(getState().main.token));

    // Promise.all(promises).then((responseArray) => {
    //     let categoryResponse = responseArray[0];

    //     _handleCategoryResponse(dispatch, categoryResponse);

    // }).catch((e) => {
    //     console.log(e);
    // });
    _setCurrency(dispatch, getState().main.token);
    _fetchCategory(dispatch, getState().main.token);
    _fetchProducts(dispatch, getState().main.token);
    _loadCartProductsData(dispatch,getState().main.token);
    // shop.getProducts(products => {
    //         dispatch(receiveProducts(products))
    // })
}

function _setCurrency(dispatch, token) {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.CURRENCY_PATH).replace("%sTOKEN%s", token) , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: 'currency=TWD'
    }).then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.success) {
            //dispatch(setCurrency(responseJson.products));
        } else {
            //dispatch(errorCurrency(responseJson.error));
        }
    })
    .catch((error) => {
        console.error(error);
    });
}


function _fetchProducts(dispatch, token) {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.PRODUCT_ALL_PATH).replace("%sTOKEN%s", token) , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: ''
    }).then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.success) {
            dispatch(setProducts(responseJson.products));
            _handleProductResponse(dispatch, responseJson);
        } else if (responseJson.error.code === '100'){

        } else {
            dispatch(errorProducts(responseJson.error));
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

function _fetchCategory(dispatch, token) {
    fetch(constants.SERVICE_ENDPOINT.replace("%sPATH%s", constants.CATEGORY_PATH).replace("%sTOKEN%s", token) , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: ""
    }).then((response) => response.json())
    .then((responseJson) => {
        if (!responseJson.error) {
            dispatch(setCategories(responseJson.categories));
            _handleCategoryResponse(dispatch, responseJson);
        } else if (responseJson.error.code === '100'){

        } else {
            dispatch(errorCategories(responseJson.error));
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

function _handleCategoryResponse(dispatch, categoryResponse) {
    console.log(categoryResponse);
}

function _handleProductResponse(dispatch, response) {
    console.log(response);
}