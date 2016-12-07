// export const API_KEY = 'In6kTzWrJutb1uAHAMnjz4cqeQ9j2jltdzzucXY10mviwS1wWTxsUHza1I7F42iOws07YVvGU9rwODKt7xDRfQBSNG1UWKBgYkMBjrcHCnmcK2IZFTmvEs1vdNHEUccASM7AkhcyGtS41JCnLaQ8x1nBr6hoGpoE5feCMwdZoOt3kI3xTZnYcpVe0LRe17uljcRsR3pRCnIeM9ivQZdV8TbSqJnXE4gNbiLfoBkrLhAdMv7GPlyZDqYy9EBOGh6j'
// export const BASE_URL = 'http://localhost:8888/cart_local/';
export const IMAGE_BASE_URL = 'https://www.red-house.com.tw/image/catalog/product/';
export const BASE_URL = 'http://www.red-house.com.tw/';
export const API_KEY = 'i1mgS3gQ1gcJPpWjZp7m8XlQJwz8IZYrRnLMgIX83ng6IwANErpA1MtYEGxTVGRXsgQ5AponDNpmJaE0v2s1HnXlMzgi5YPkXMjfmHOlAX0iehZjZPj1y176HgBj6q6nbDZkvFKccPaUKTEbL75aDmCpnXhWODV8AzoeZlVbMKujD61wDWOXmh2PXihrPMGrXoPzxybZi1Su0d34rPwmeraOVImaafVViZIQF3gOxq84Fq4tQLOsadzRUmG5dRQz';

export const ENDPOINT = BASE_URL + 'index.php?route=';

export const SERVICE_ENDPOINT = ENDPOINT + '%sPATH%s&token=%sTOKEN%s';
export const LOGIN_PATH = 'api/login';
export const PRODUCT_GET_PATH = 'api/product/get';
export const CATEGORY_PATH = 'api/category';
export const PRODUCT_ALL_PATH = 'api/product/all';
export const ADD_TO_CART_PATH = 'api/cart/add';
export const REMOVE_CART_PATH = 'api/cart/remove';
export const CART_PRODUCTS_PATH = 'api/cart/products';
export const CURRENCY_PATH = 'api/currency';
export const COUPON_PATH = 'api/coupon';
export const VOUCHER_PATH = 'api/voucher';
export const CHECK_EXISTING_CUSTOMER_PATH = 'api/customerlogin/existing';
export const CUSTOMER_LOGIN_PATH = 'api/customerlogin';
export const SHIPPING_METHODS_PATH = 'api/shippingpayment/methods';
export const SHIPPING_METHOD_PATH = 'api/shippingpayment/method';
export const ZONE_PATH = 'api/country/zone&code=%sCODE%s';
export const COUNTRY_PATH = 'api/country&country_id=%sCOUNTRY_ID%s';
export const COUNTRY_ALL_PATH = 'api/country/all';
export const SHIPPING_GET_CVS_PATH = 'api/draft/get&draft_id=%sDRAFT_ID%s';
export const SHIPPING_CHOOSE_CVS_PATH = 'api/draft';
export const ADD_ORDER_PATH = 'api/order/add';
export const SHIPPING_ADDRESS_PATH = 'api/shipping/address';
export const GET_ORDER_STATUS_PATH = 'api/order/status&order_id=%sORDER_ID%s';
export const ALLPAY_PAYMENT_URL = 'https://payment.ecpay.com.tw/Mobile/CreateClientOrder/V2';
export const CATEGORY_PRODUCTS_PATH = 'api/category/get&category_id=%sCATEGORY_ID&sort=%sSORT%s&order=%sORDER%s';
//https://payment.ecpay.com.tw/Mobile/CreateClientOrder/V2